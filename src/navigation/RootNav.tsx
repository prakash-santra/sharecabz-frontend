import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../screens/SignInScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const RootNav = () => {
    const isAuthenticated = false; // Replace with your authentication logic

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isAuthenticated ? (
                    <Stack.Screen name="Home" component={HomeScreen} />
                ) : (
                    <Stack.Screen name="SignIn" component={SignInScreen} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNav;