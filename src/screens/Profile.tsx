import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
  Dimensions,
  Keyboard
} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import * as ImagePicker from 'expo-image-picker';

const { width } = Dimensions.get('window');

type RootStackParamList = {
  ProfileScreen: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ProfileScreen'
>;

interface Props {
  navigation: ProfileScreenNavigationProp;
}

const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  const [profileImage, setProfileImage] = useState(require('../../assets/Images/profile_image.png'));
  const [isChanged, setIsChanged] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Sonia',
    phoneNumber: '+91 XXXXXXXXXX',
    email: 'abc@gmail.com',
    password: '**********',
    feedback: '',
  });

  // Refs for each input field
  const inputRefs = {
    name: useRef<TextInput>(null),
    phoneNumber: useRef<TextInput>(null),
    email: useRef<TextInput>(null),
    password: useRef<TextInput>(null),
    feedback : useRef <TextInput>(null),
  };

  interface Errors {
    name: string;
    phoneNumber: string;
    email: string;
    password: string;
    feedback: string;
  }
  
  const [errors, setErrors] = useState<Errors>({
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
    feedback: ''
  });
  
  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSignOut = () => {
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Yes', onPress: () => console.log('User signed out') },
    ]);
  };

  const handleChangeProfileImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage({ uri: result.assets[0].uri });
      setIsChanged(true);
    }
  };

  const handleEdit = (field: keyof typeof userData, value: string) => {
    // Perform validation for phone number and email
    if (field === 'phoneNumber') {
      const phoneNumberValid = /^\d{10}$/.test(value); // Check if it's a 10-digit number
      if (!phoneNumberValid) {
        setErrors((prev) => ({ ...prev, phoneNumber: 'Phone number must be exactly 10 digits' }));
      } else {
        setErrors((prev) => ({ ...prev, phoneNumber: '' }));
      }
    }

    if (field === 'email') {
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); // Simple regex for email validation
      if (!emailValid) {
        setErrors((prev) => ({ ...prev, email: 'Please enter a valid email address' }));
      } else {
        setErrors((prev) => ({ ...prev, email: '' }));
      }
    }

    // Update the user data
    setUserData((prev) => ({ ...prev, [field]: value }));
    setIsChanged(true);
  };


  const handleConfirmChanges = () => {
    console.log('User data updated:', userData);
    setIsChanged(false);
    Alert.alert('Confirm Changes', 'Are you sure?', [
      
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => console.log('user details updated success')},
    ]);
  };

  const openKeyboard = (field: keyof typeof inputRefs) => {
    // Focus the corresponding TextInput
    inputRefs[field].current?.focus();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header with Back Button and Logo */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Image
          source={require('../../assets/Images/logo-removebg-preview.png')}
          style={styles.logo}
        />
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileImageContainer}>
          <TouchableOpacity onPress={handleChangeProfileImage} style={styles.profileImageWrapper}>
            <Image source={profileImage} style={styles.profileImage} />
            <TouchableOpacity onPress={handleChangeProfileImage} style={styles.editIcon}>
              <FontAwesome name="pencil" size={16} color="black" />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
        <Text style={styles.userName}>Sonia</Text>
        <Text style={styles.userPhone}>+91 XXXXXXXXXX</Text>
      </View>

      {/* Info Section */}
      <View style={styles.infoContainer}>
        {(['name', 'phone Number', 'email', 'password', 'feedback'] as Array<keyof typeof userData>).map((field, index) => (
          <View style={styles.infoItem} key={index}>
            <Text style={styles.infoLabel}>{field.charAt(0).toUpperCase() + field.slice(1)}</Text>
            <View style={styles.inputWithIcon}>
              <TextInput
                ref={inputRefs[field]}
                style={[styles.infoText, errors[field] ? { borderColor: 'red', borderWidth: 1 } : {}]}
                value={userData[field]}
                onChangeText={(text) => handleEdit(field, text)}
                placeholder={`Enter your ${field}`}
                secureTextEntry={field === 'password'}
              />
              <TouchableOpacity
                onPress={() => openKeyboard(field)}
                style={styles.pencilIcon}
              >
                <FontAwesome name="pencil" size={18} color="gray" />
              </TouchableOpacity>
            </View>
            {/* Display validation errors */}
            {errors[field] ? <Text style={styles.errorText}>{errors[field]}</Text> : null}
          </View>
        ))}
      </View>

      {/* Sign Out and Confirm Changes Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.confirmButton,
            { borderColor: isChanged ? 'green' : 'gray', backgroundColor: isChanged ? 'seagreen' : 'transparent' },
          ]}
          onPress={handleConfirmChanges}
          disabled={!isChanged}
        >
          <Text style={[styles.buttonText, { color: isChanged ? '#fff' : 'green' }]}>
            Done
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Ionicons name="log-out-outline" size={24} color="red" />
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    // paddingLeft: 10, // Add horizontal padding if needed
  },
  backButton: {
    padding: 10,
  },
  logo: {
    width: 180, // Increased size
    height: 120, // Increased size
    resizeMode: 'contain',
    marginLeft: 80, // Add margin to the right if needed
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImageWrapper: {
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 5,
    elevation: 2,
  },
  userName: {
    fontSize: 22, 
    fontWeight: 'bold',
    marginTop: 10,
  },
  userPhone: {
    fontSize: 16, 
    color: 'gray',
  },
  infoContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 30,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 8,
  },
  infoItem: {
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoText: {
    flex: 1,
    fontSize: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    paddingVertical: 5,
    marginBottom: 5,
    paddingLeft: 5,
  },

  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pencilIcon: {
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
    // marginHorizontal: 40,
  },
  confirmButton: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    marginRight: 90,
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderColor: 'red',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
  },
  signOutText: {
    marginLeft: 10,
    color: 'red',
    fontSize: 16,
  },
});

export default ProfileScreen;