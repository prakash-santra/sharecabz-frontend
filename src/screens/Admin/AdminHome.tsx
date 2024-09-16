/*import React, { useState } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  Dimensions,
  Modal,
} from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import ProfileModal from "../../components/ProfileModal";
const { width, height } = Dimensions.get("window");

const HomeScreen: React.FC = () => {
  return (
    <TextInput
      className="border border-gray-300 rounded-full py-3 px-4 my-2 w-full text-black"
      placeholder="Search By booking ID..."
      placeholderTextColor="#7A7A7A"
    />
  );
};

export default HomeScreen;*/

// Parent Component
import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import BookingDetails from "../../components/BookingDetails";

const AdminHome = () => {
  // Sample bookings data
  const bookings = [
    { name: "Samuel Peterson", bookingId: "BOD132763" },
    { name: "Megan Watson", bookingId: "BOD132768" },
    // Add more bookings here
  ];

  // Function to handle view details press
  const handleViewDetails = (bookingId: string) => {
    // API call or navigation to details page can be handled here
    console.log("View details for booking ID:", bookingId);
  };

  return (
    <SafeAreaView className="flex-1 p-5 pt-5">
      <View className="flex-row"></View>
      <BookingDetails
        bookings={bookings}
        onPressViewDetails={handleViewDetails}
      />
    </SafeAreaView>
  );
};

export default AdminHome;
