import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';

const Stack = createStackNavigator();

const RootNav = () => {
    const isAuthenticated = false; // Replace with your authentication logic

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {isAuthenticated ? (
                    <Stack.Screen name="Home" component={Home} />
                ) : (
                    <><Stack.Screen name="SignIn" component={SignIn} />
                    <Stack.Screen name="SignUp" component={SignUpScreen} /></>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNav;