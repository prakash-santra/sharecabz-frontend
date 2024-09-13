import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleResetPassword = () => {
        // Implement your password reset logic here
        if (email) {
            // Send password reset email to the provided email address
            Alert.alert('Password Reset', `Password reset email sent to ${email}`);
        } else {
            Alert.alert('Error', 'Please enter your email address');
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <Button title="Reset Password" onPress={handleResetPassword} />
        </View>
    );
};

export default ForgotPassword;