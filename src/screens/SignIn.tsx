import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const SignInScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                />
            </View>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.socialContainer}>
                <TouchableOpacity style={styles.socialButton}>
                    <Text style={styles.socialButtonText}>Sign in with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <Text style={styles.socialButtonText}>Sign in with Facebook</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
    },
    buttonContainer: {
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    socialContainer: {
        marginTop: 20,
    },
    socialButton: {
        backgroundColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    socialButtonText: {
        textAlign: 'center',
    },
});

export default SignInScreen;