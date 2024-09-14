import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from '../screens/Home';
import BookLuxuryRideScreen from '../screens/BookLuxaryRide';

import SignIn from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';
import ForgotPassword from '../screens/ForgotPassword';


const Stack = createStackNavigator();

const RootNav = () => {
    const isAuthenticated = false; // Replace with your authentication logic

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {isAuthenticated ? (
                    <><Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Book" component={BookLuxuryRideScreen} />
                    </>
                ) : (
                    <><Stack.Screen name="SignIn" component={SignIn} />
                    <Stack.Screen name="SignUp" component={SignUpScreen} />
                    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                    <Stack.Screen name="Home" component={Home} />
                    
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNav;