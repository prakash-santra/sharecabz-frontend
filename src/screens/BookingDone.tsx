import React from 'react';
import { View, ImageBackground, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../utils/Slice'; 
import { useNavigation } from '@react-navigation/native';
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';


const BookingDoneScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleButtonPress = () => {
        dispatch(login());
        navigation.navigate('Home' as never); //Redirect To the Home Page .....
    }

return (
    <LinearGradient 
    style={styles.container}
    colors={['#b4ec51', '#429321']}>
        <Image
            source={require('../../assets/Tick.png')}
            style={styles.image}
        />
        <View style={styles.messageBox}>
            <Text style={styles.title}>Thank You for Booking</Text>
            <Image
                   source={require('../../assets/map 1.png')}
                   style={styles.mapImg}
               />

            <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
                <Text style={styles.buttonText}>DONE</Text>
            </TouchableOpacity>
        </View>
     </LinearGradient>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#81D720', 
    },
    image: {
        width: 310, // Increased width
        height: 310, // Increased height
        position: 'absolute',
        top: '15%',
        marginBottom: 20,
    },
    mapImg: {
        width: 104, // Increased width
        height: 88, // Increased height
        position: 'absolute',
        top: '32%',
        // marginBottom: 55,
    },
    messageBox: {
        position: 'absolute',
        bottom: 0.1,
        width: '100%',
        height: '50%',
        backgroundColor: 'white',
        top: '60%',
        padding: 50,
        borderRadius: 50,
        alignItems: 'center',
    },
    title: {
        // fontFamily: 'Sniglet',     //Font family is not a system font .
        fontSize: 32,
        // fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#81D742',
        width: 332,
        height: 56,
        top: '45%',
        paddingVertical: 15,
        borderRadius: 15,
    },
    buttonText: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
    },
});

export default BookingDoneScreen;