import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const ForgetPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState(['', '', '', '']);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();
  const handleEmailSubmit = () => {
    // Validate email here and send verification code
    if (!email) {
      Alert.alert('Please enter an email');
    } else {
      Alert.alert('Verification code sent to email');
    }
  };

  const handleCodeChange = (index: number, value: string) => {
    const updatedCode = [...code];
    updatedCode[index] = value;
    setCode(updatedCode);
  };

  const handleCodeSend = () => {
    Alert.alert('Verification code verified');
  }

  const handlePasswordReset = () => {
    if (newPassword !== confirmPassword) {
      Alert.alert("Passwords don't match");
      return;
    }
    // Add further validation if needed
    Alert.alert('Password reset successfully');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header} />

      <View style={styles.cardContainer}>
        <Text style={styles.title}>Update Your Password</Text>
        

        <TextInput
          style={styles.input}
          placeholder="Enter your e-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <TouchableOpacity style={styles.button} onPress={handleEmailSubmit}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>

        
        <Text style={styles.verificationText}>Enter Verification Code</Text>
        

        <View style={styles.codeContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.codeInput}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(value) => handleCodeChange(index, value)}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.resend}>
          <Text style={styles.receivedText}>If you didn't receive a code, <Text style={styles.resendText}>Resend </Text> </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleCodeSend}>
          <Text style={styles.buttonText}>VERIFY</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="New Password"
          secureTextEntry
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />

        <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
          <Text style={styles.buttonText}>DONE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signup} onPress={() => navigation.navigate('SignUp' as never)}>
          <Text style={styles.signupText}>
            Don't have an account? <Text style={styles.signupLink}>SIGN UP</Text>
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
  cardContainer:{
    width: '90%',
    maxWidth: 400, 
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
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
    textAlign: 'center',
    marginBottom: 18,
    marginTop: 10,
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
  button: {
    backgroundColor: '#81D742',
    paddingVertical: 10,
    borderRadius: 22,
    marginVertical: 20,
    alignItems: 'center',
    width: '30%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
  },
  verificationText: {
    fontWeight:"600",
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    gap: 10,
  },
  codeInput: {
    height: 40,
    width: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    
  },
  resend: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  receivedText:{
    color: 'grey',
  },
  resendText: {
    color: 'red',
  },
  signup: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  signupText: {
    color: 'black',
  },
  signupLink: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});

export default ForgetPasswordScreen;
