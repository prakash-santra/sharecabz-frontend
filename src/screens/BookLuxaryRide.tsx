import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

import CalendarPicker from "react-native-calendar-picker";
import Icon from '@expo/vector-icons/AntDesign';

import Ionicons from '@expo/vector-icons/Ionicons';
const LuxuryRideBooking = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const locations = [
    { label: 'New York', value: 'ny' },
    { label: 'Los Angeles', value: 'la' },
    { label: 'Chicago', value: 'ch' },
  ];

  const pickupPoints = [
    { label: 'Airport', value: 'airport' },
    { label: 'Hotel', value: 'hotel' },
    { label: 'Home', value: 'home' },
  ];

  return (
    <View className="flex-1 bg-white p-4">
      <View className="flex-row items-center justify-between mb-4">
        <TouchableOpacity>
         <Ionicons name="checkmark-circle" className="h-6 w-6 text-gray-500" />
        </TouchableOpacity>
        <Image
          source={{ uri: 'https://example.com/profile-pic.jpg' }}
          className="w-10 h-10 rounded-full"
        />
      </View>

      <Text className="text-3xl font-bold mb-2">Book your luxury ride</Text>
      <Text className="text-gray-600 mb-6">
        Experience the comfort of our luxury cars, Innova and Xylo, for your next journey.
      </Text>

      {/* <Dropdown
        placeholder="Select source location"
        data={locations}
        className="bg-gray-100 p-3 rounded-md mb-4"
      />

      <Dropdown
        placeholder="Select destination location"
        data={locations}
        className="bg-gray-100 p-3 rounded-md mb-4"
      />

      <Dropdown
        placeholder="Select pickup point"
        data={pickupPoints}
        className="bg-gray-100 p-3 rounded-md mb-4"
      /> */}

      <Text className="mb-2">Select your departure time:</Text>

      <CalendarPicker
        onDateChange={setSelectedDate}
        width={300}
        height={350}
        selectedDayColor="#4CAF50"
        selectedDayTextColor="#FFFFFF"
        textStyle={{ color: '#000000' }}
        todayBackgroundColor="#E8E8E8"
        monthTitleStyle={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }}
        yearTitleStyle={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }}
        previousComponent={<Ionicons name="checkmark-circle" size={32} color="green"></Ionicons>}
        nextComponent={<Ionicons name="checkmark-circle" size={32} color="green"></Ionicons>}
      />

      <TouchableOpacity className="bg-green-500 p-3 rounded-md mt-4">
        <Text className="text-white text-center font-bold">DONE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LuxuryRideBooking;