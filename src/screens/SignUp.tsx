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

      <View style={styles.formContainer}>
        <Text style={styles.title}>SIGN UP</Text>

        <Image
          source={require('../../assets/Images/logo.jpg')} 
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#81D742', 
    justifyContent: 'center',    
    alignItems: 'center',        
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: '#81D742',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    zIndex: -1,
  },
  formContainer: {
    width: '90%',
    maxWidth: 400, 
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 20,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
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
    backgroundColor: '#81D742',
    paddingVertical: 15,
    borderRadius: 25,
    marginVertical: 20,
    alignItems: 'center',
    width: '100%',
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
    color: '#81D742',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
