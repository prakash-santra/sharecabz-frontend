import React from 'react';
import { View, ImageBackground, StyleSheet, Text,TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
    const navigation = useNavigation();
    const handleButtonPress = () => {
       // navigation.navigate('Book' as never); will be fixing soon
    }
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/image.png')}
                style={styles.backgroundImage}
            >
            <Text style={styles.font1} className=' justify-items-start mr-10 left-3 '>Luxary Ride Sggggggggg</Text>
            <TouchableOpacity onPress={handleButtonPress} className=' bg-slate-700 w-1/2 rounded-2xl ml-4 mt-5 p-2'>
                <Text className='text-white text-center'
                >Sign In</Text>
            </TouchableOpacity>
            </ImageBackground>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    font1:{
        fontFamily: 'RobotoSlab-Variable',
        fontSize: 30,
        
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
});

export default HomeScreen;