import React from 'react';
import { View, ImageBackground, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../utils/Slice'; 
import { useNavigation } from '@react-navigation/native';

import Icon from '@expo/vector-icons/AntDesign';

const HomeScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleButtonPress = () => {
        dispatch(login());
        navigation.navigate('Book' as never); 
    }

    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/image.png")}
          style={styles.backgroundImage}
        >
          <View className="flex-row items-center justify-between mb-4 mt-4">
            <TouchableOpacity onPress={navigation.goBack}>
              <Icon
                size={20}
                name="arrowleft"
                className=" h-1/2 w-1/2  text-gray-500"
              />
            </TouchableOpacity>
            <Image
              source={require("../../assets/Images/logo-removebg-preview.png")}
              style={styles.logo}
            />
            <Image
              source={require("../../assets/Images/profile_image.png")}
              style={styles.profilePicture}
            />
          </View>

          <Text style={styles.introText}>We are introducing ShareCabz.</Text>
          <Text style={styles.luxuryText}>
            Luxury{"\n"}Ride Sharing{"\n"}Service
          </Text>
          <Text style={styles.description}>
            Sharecabz offers a user-friendly platform for booking rides with
            confidence. Enjoy seamless payments, comfortable vehicles, and
            top-tier service for a smooth travel experience.
          </Text>
          <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
            <Text style={styles.buttonText}>Get Your Ride Now</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        width: 160,
        height: 40,
        
    },
    profilePicture: {
        width: 55,
        height: 55,
        
        borderRadius: 25,
        
    },
    introText: {
        fontFamily: 'Roboto',
        fontSize: 25,
        color: '#449906',
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 20,
        letterSpacing:0.5 // Adjusted to move it higher
    },
    luxuryText: {
        fontFamily: 'Roboto',
        fontSize: 40,
        color: '#3B3B3B',
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 10,
        // letterSpacing:1
    },
    description: {
        fontFamily: 'Roboto',
        display: 'flex',
        fontSize: 14,
        color: 'black',
        marginLeft: 20,
        marginRight: 150,
        marginTop: 20,
        
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#2C2C2C',
        width: '40%',
        borderRadius: 10,
        marginLeft: 10,
        marginTop:10,
        padding: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold'
    },
});

export default HomeScreen;
