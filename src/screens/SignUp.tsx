import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the type for the navigation prop
type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  Home: undefined;
};

type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

type Props = {
  navigation: SignUpScreenNavigationProp;
};

// Define form data type
type FormData = {
  username: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Correctly type the "name" parameter
  const handleChange = (name: keyof FormData, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { username, phoneNumber, email, password, confirmPassword } = formData;

    if (!username || !phoneNumber || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return false;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return false;
    }

    return true;
  };

  const handleSignUp = () => {
    if (validateForm()) {
      Alert.alert('Success', 'Account Created Successfully');
      navigation.navigate('SignIn'); // Navigate to SignIn screen
    }
  };

  const renderInputField = (
    placeholder: string,
    name: keyof FormData,
    secureTextEntry = false
  ) => (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#7A7A7A"
        secureTextEntry={secureTextEntry}
        onChangeText={(value) => handleChange(name, value)}
        value={formData[name]}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header} />

      <Text style={styles.title}>SIGN UP</Text>

      <Image
        source={require('../../assets/Images/logo.jpg')} // Replace with actual logo
        style={styles.logo}
      />

      {renderInputField('User Name', 'username')}
      {renderInputField('Phone Number', 'phoneNumber')}
      {renderInputField('E-mail', 'email')}
      {renderInputField('Password', 'password', true)}
      {renderInputField('Confirm Password', 'confirmPassword', true)}

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>SIGN UP</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.signInText}>
          Already have an account? <Text style={styles.signInLink}>SIGN IN</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    height: 200,
    backgroundColor: '#8CC63F', // Green color
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#000',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    padding: 10,
    paddingHorizontal: 15,
    color: '#000',
  },
  signUpButton: {
    backgroundColor: '#8CC63F',
    paddingVertical: 15,
    borderRadius: 25,
    marginVertical: 20,
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  signInText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#7A7A7A',
  },
  signInLink: {
    color: '#8CC63F',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
