import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import Home from './src/screens/Home';
import Extra from './src/screens/Extra';
import LoadingScreen from './src/components/LoadingScreen';

// Define the stack navigator
const Stack = createStackNavigator();

// Function to fetch fonts
const fetchFonts = () => {
  return Font.loadAsync({
    'RobotoSlab-Variable': require('./assets/fonts/RobotoSlab-VariableFont_wght.ttf'),
  });
};

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Extra" component={Extra} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <LoadingScreen
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
