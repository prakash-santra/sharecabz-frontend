import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import SignIn from '../screens/SignIn';

const Stack = createStackNavigator();

const RootNav = () => {
    const isAuthenticated = false; // Replace with your authentication logic

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {isAuthenticated ? (
                    <Stack.Screen name="Home" component={Home} />
                ) : (
                    <Stack.Screen name="SignIn" component={SignIn} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNav;