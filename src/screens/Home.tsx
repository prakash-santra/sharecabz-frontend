import React from 'react';
import { View, ImageBackground, StyleSheet, Text, TouchableOpacity, Image, SafeAreaView, Dimensions, Modal } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../utils/Slice';
import { useNavigation } from '@react-navigation/native';
import ProfileModal from '../components/ProfileModal';
const { width, height } = Dimensions.get('window');

import Icon from '@expo/vector-icons/AntDesign';

const HomeScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleButtonPress = () => {
        dispatch(login());
        navigation.navigate('Book' as never);
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../assets/image.png')}
                style={styles.backgroundImage}
            >
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Image
                            source={require('../../assets/home_logo.png')}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                        <ProfileModal />
                    </View>
                        <Text style={styles.introText}>We are introducing ShareCabz.</Text>
                    <View style={styles.textContainer}>
                        <Text style={styles.luxuryText}>
                            Luxury{'\n'}Ride Sharing{'\n'}Service
                        </Text>
                        <Text style={styles.description}>
                            Sharecabz offers a user-friendly platform for booking rides with confidence. 
                            Enjoy seamless payments, comfortable vehicles, and top-tier service for a smooth travel experience.
                        </Text>
                        <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
                            <Text style={styles.buttonText}>Get Your Ride Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    content: {
        flex: 1,
        padding: width * 0.05,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: height * 0.02,
    },
    logo: {
        width: width * 0.4,
        height: height * 0.05,
    },
    profilePicture: {
        width: width * 0.13,
        height: width * 0.13,
        borderRadius: (width * 0.13) / 2,
    },
    textContainer: {
        width: width * 0.66, // 2/3 of screen width
        height: height * 0.66, // 2/3 of screen height
        justifyContent: 'flex-end', // Align content to the bottom of this container
        paddingBottom: height * 0.05, // Add some padding at the bottom
    },
    introText: {
        fontFamily: 'Roboto',
        fontSize: width * 0.05,
        color: '#449906',
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
    luxuryText: {
        fontFamily: 'Roboto',
        fontSize: width * 0.08,
        color: '#3B3B3B',
        fontWeight: 'bold',
        marginBottom: height * 0.02,
        letterSpacing: 1,
    },
    description: {
        fontFamily: 'Roboto',
        fontSize: width * 0.04,
        color: 'black',
        marginBottom: height * 0.03,
        lineHeight: width * 0.06,
    },
    button: {
        backgroundColor: '#2C2C2C',
        borderRadius: 10,
        padding: width * 0.04,
        alignSelf: 'flex-start',
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: width * 0.04,
    },
});

export default HomeScreen;