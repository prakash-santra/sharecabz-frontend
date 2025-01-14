import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../utils/Slice';

import Home from '../screens/Home';
import BookLuxuryRideScreen from '../screens/BookLuxaryRide';
import SignIn from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';
import ForgotPassword from '../screens/ForgotPassword';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
  </Stack.Navigator>
);

const MainStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Book" component={BookLuxuryRideScreen} />
  </Stack.Navigator>
);

const RootNav = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNav;