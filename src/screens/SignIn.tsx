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

//Change in usestate

const SignInScreen: React.FC<Props> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    Alert.alert('Sign In', `Welcome, ${email}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header} />

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
        onPress={() => navigation.navigate('ForgotPassword')}>
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

{/* Design Changes */}

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signUpText}>
          Don’t have an account? <Text style={styles.signUpLink}>SIGN UP</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles object must include all the used styles like `container`, `header`, etc.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: '#8CC63F', 
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    zIndex: -1,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    // marginBottom: 40,
    marginTop: 70,

    color: '#000',
  },
  logo: {
    width: 200, 
    height: 250,
    alignSelf: 'center',
    marginTop: 50,
    borderRadius: 2,
    // marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    padding: 10,
    marginVertical: 10,
    paddingHorizontal: 15,
    color: '#000',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginVertical: 10,
  },
  forgotPasswordText: {
    color: '#7A7A7A',
  },
  signInButton: {
    backgroundColor: '#8CC63F',
    paddingVertical: 15,
    borderRadius: 25,
    marginVertical: 20,
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  socialLoginContainer: {
    alignItems: 'center',
    marginVertical: 40,
  },
  orText: {
    color: '#7A7A7A',
    marginBottom: 30,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
  },
  signUpText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#7A7A7A',
  },
  signUpLink: {
    color: '#8CC63F',
    fontWeight: 'bold',
  },
});

export default SignInScreen;