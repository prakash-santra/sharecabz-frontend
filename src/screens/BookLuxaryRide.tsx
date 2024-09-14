import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

import CalendarPicker from "react-native-calendar-picker";
import Icon from '@expo/vector-icons/AntDesign';
import Dropdowncom from '../components/Dropdowncom';
import Ionicons from '@expo/vector-icons/Ionicons';
import IIcon from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
const LuxuryRideBooking = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
const navigation = useNavigation();
const source=[
  {label:'Ganktok',value:'gk'},
  {label:'Siliguri',value:'si'},
  {label:'Darjeeling',value:'dj'},
]
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
      <View className="flex-row items-center justify-between mb-4 mt-4">
        
      <TouchableOpacity onPress={navigation.goBack} >
          <Icon size={20} name="arrowleft" className=" h-1/2 w-1/2  text-gray-500" />
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
        <Dropdowncom
        label="Select source Location"
        iconname={"location-dot"}
        color={"green"}
        data={pickupPoints}
        onSelect={(item) => console.log(item)}
        focusColor="#81D742"
      />
       <Dropdowncom
        label="Select destination location"
        iconname={"location-crosshairs"}
        color={"red"}
        data={locations}
        onSelect={(item) => console.log(item)}
        focusColor="#81D742"
      />
      <Dropdowncom
        label="Select pickup point"
        iconname={"truck-pickup"}
        color={"black"}
        data={locations}
        onSelect={(item) => console.log(item)}
        focusColor="#81D742"
      />
     
    <Text className="mt-6 mb-6">Select your departure time:</Text>
    {selectedDate && (
        <Text className="mt-4 text-lg">
          Departure Date: {selectedDate.toLocaleDateString()}
        </Text>
      )}

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
        previousComponent={<IIcon name="angle-left" size={32} color="green"></IIcon>}
        nextComponent={<IIcon name="angle-right" size={32} color="green"></IIcon>}
      />

      <TouchableOpacity className=" self-end w-1/3 bg-green-500 p-3 rounded-md mt-4">
        <Text className="text-white text-center font-bold">DONE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LuxuryRideBooking;