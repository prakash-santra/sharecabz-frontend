import React, { useState } from 'react';
import {
    View,
    Text,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ProfileModal from '../components/ProfileModal';
import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');

const AboutUs: React.FC = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    const checkmarkIcon = require('../../assets/Images/checkmark-icon.png');

    const handleBackPress = () => {
        console.log('Back button pressed');
        navigation.goBack();
    };

    const toggleProfileModal = () => {
        console.log('Toggling profile modal. Current state:', modalVisible);
        setModalVisible(!modalVisible);
    };

    return (
        <SafeAreaView className="flex-1">
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <ImageBackground
                    source={require('../../assets/Images/aboutUs.png')}
                    className="h-full w-full justify-center items-center"
                    resizeMode="cover"
                >
                    <View className="absolute top-2 left-0 right-0 flex-row justify-between px-2 z-10">
                        {/* Back Icon on the left */}
                        <TouchableOpacity onPress={handleBackPress} className="p-2 mt-14 ">
                            <Ionicons name="arrow-back" size={24} color="black" />
                        </TouchableOpacity>

                        {/* Profile Modal on the right */}
                        <TouchableOpacity onPress={toggleProfileModal} className="p-2 mt-6">
                            <ProfileModal modalVisible={modalVisible} toggleModal={toggleProfileModal} />
                        </TouchableOpacity>
                    </View>


                    <View className="flex-1 w-full justify-center items-center bg-black/10">
                        <Text className="text-4xl text-white font-bold my-5">About Us</Text>

                        <View className="bg-white/90 rounded-lg p-5 mx-5 w-11/12 shadow-lg">
                            {/* Our Mission Section */}
                            <View className="my-2">
                                <View className="items-center">
                                    <Image source={checkmarkIcon} className="h-10 w-10 mb-2" resizeMode="contain" />
                                    <Text className="text-xl font-bold">Our Mission</Text>
                                </View>
                                <Text className="text-base text-gray-700 mt-2 text-left">
                                    1. Safe, reliable, and affordable rides in Gangtok & Darjeeling.
                                </Text>
                                <Text className="text-base text-gray-700 mt-1 text-left">
                                    2. Easy booking, great prices, and excellent support.
                                </Text>
                                <Text className="text-base text-gray-700 mt-1 text-left">
                                    3. Connecting you to Sikkim’s best destinations.
                                </Text>
                                <Text className="text-base text-gray-700 mt-1 text-left">
                                    4. Convenient transportation for everyone.
                                </Text>
                            </View>

                            {/* Our Vision Section */}
                            <View className="my-5">
                                <View className="items-center">
                                    <Image source={checkmarkIcon} className="h-10 w-10 mb-2" resizeMode="contain" />
                                    <Text className="text-xl font-bold">Our Vision</Text>
                                </View>
                                <Text className="text-base text-gray-700 mt-2 text-left">
                                    1. Leading ride-sharing with safety and quality.
                                </Text>
                                <Text className="text-base text-gray-700 mt-1 text-left">
                                    2. Committed to customer satisfaction and community impact.
                                </Text>
                                <Text className="text-base text-gray-700 mt-1 text-left">
                                    3. Driving sustainable travel and connections.
                                </Text>
                                <Text className="text-base text-gray-700 mt-1 text-left">
                                    4. Innovating to set new industry standards.
                                </Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AboutUs;