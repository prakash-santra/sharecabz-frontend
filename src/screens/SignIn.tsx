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
import { FontAwesome } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { login } from '../utils/Slice'; 
// Define the type for the navigation prop
type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  Home: undefined;
};

type SignInScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignIn'
>;

type Props = {
  navigation: SignInScreenNavigationProp;
};

const SignInScreen: React.FC<Props> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleSignIn = async() => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    await dispatch(login());
    Alert.alert('Sign In', `Welcome, ${email}`);
    navigation.navigate('Home' as never);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header} />

      <View style={styles.formContainer}>
        <Text style={styles.title}>SIGN IN</Text>

        <Image
          source={require('../../assets/Images/logo-removebg-preview.png')} 
          style={styles.logo}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#7A7A7A"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#7A7A7A"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity 
          style={styles.forgotPassword}
          onPress={() => navigation.navigate('ForgotPassword' as never)}
        >
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInButtonText}>SIGN IN</Text>
        </TouchableOpacity>

        <View style={styles.socialLoginContainer}>
          <Text style={styles.orText}>Or Sign in with</Text>
          <View style={styles.socialIcons}>
            <TouchableOpacity>
              <FontAwesome name="google" size={24} color="#4285F4" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="facebook" size={24} color="#3b5998" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('SignUp' as never)}>
          <Text style={styles.signUpText}>
            Don’t have an account? <Text style={styles.signUpLink}>SIGN UP</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles

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
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  logo: {
    width: 200, 
    height: 150,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    padding: 10,
    marginVertical: 10,
    paddingHorizontal: 15,
    color: '#000',
    width: '100%',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginVertical: 10,
  },
  forgotPasswordText: {
    color: '#7A7A7A',
  },
  signInButton: {
    backgroundColor: '#81D742',
    paddingVertical: 15,
    borderRadius: 25,
    marginVertical: 20,
    alignItems: 'center',
    width: '100%',
  },
  signInButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  socialLoginContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  orText: {
    color: '#7A7A7A',
    marginBottom: 15,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    width: 200, 
  },
  signUpText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#7A7A7A',
  },
  signUpLink: {
    color: '#81D742',
    fontWeight: 'bold',
  },
});

export default SignInScreen;