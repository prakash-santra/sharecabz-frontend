import React from 'react';
import { View, ImageBackground, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../utils/Slice'; 
import { useNavigation } from '@react-navigation/native';
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';


const CancellationPopUpScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleButtonPress = () => {
        dispatch(login());
        navigation.navigate('Home' as never); //Redirect To the Home Page .....
    }

return (
    <LinearGradient 
    style={styles.container}
    colors={['#CAF880', '#71CE7E']}>
        <Image
            source={require('../../assets/cancellation.png')}
            style={styles.image}
        />
        <View style={styles.messageBox}>
            <Text style={styles.title}>OOPS!! SEEMS YOU CANCELLED THE RIDE</Text>
            <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
                <Text style={styles.buttonText}>CLOSE</Text>
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
        width: 170, // Increased width
        height: 170, // Increased height
        position: 'absolute',
        top: '25%',
        marginBottom: 20,
    },
    messageBox: {
        position: 'absolute',
        bottom: 0.1,
        width: '100%',
        height: '40%',
        backgroundColor: 'white',
        top: '70%',
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
        top: 50,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 15,
    },
    buttonText: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
    },
});

export default CancellationPopUpScreen;