import React from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';

const HomeScreen = () => {
    
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/image.png')}
                style={styles.backgroundImage}
            >
            <Text style={styles.font1} className=' justify-items-start mr-10 left-3 '>Luxary Ride Sggggggggg</Text>
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