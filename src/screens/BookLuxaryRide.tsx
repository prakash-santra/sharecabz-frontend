import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, Alert } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

import CalendarPicker from "react-native-calendar-picker";
import Icon from '@expo/vector-icons/AntDesign';
import Dropdowncom from '../components/Dropdowncom';
import IIcon from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { updateField } from '../utils/JsonSlice';
const LuxuryRideBooking = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const jsonData = useSelector((state:any) => state.jsonData.data); 
  const dispatch = useDispatch();
  const handleUpdate = (f:any,v:any) => {
    dispatch(updateField({ field: f, value: v })); 
  };
  const handleDateChange = (date: Date) => {
    handleUpdate('date',date.toDateString());
  };
  const handleDone = () => {
    if(jsonData.source && jsonData.destination && jsonData.pickupPoint && jsonData.date) {
      console.log('Data:', jsonData);
      
    navigation.navigate("FinalScreen" as never)
    }
    else {
      Alert.alert('Please fill all the fields');
    }
  };
const navigation = useNavigation();
const {width,height}=Dimensions.get('window');
const source=[
  {label:'Ganktok',value:'gk'},
  {label:'Siliguri',value:'si'},
  {label:'Darjeeling',value:'dj'},
]
  const destination = [
    { label: 'Nathula', value: 'na' },
    { label: 'Lachung', value: 'la' },
  ];

  const pickupPoints = [
    { label: 'Kazi Road Power Office', value: 'krpo' },
    { label: 'Nam Nang Legislative Assembly', value: 'nnla' },
    { label: 'Zero Point', value: 'zp' },
    { label: 'White Hill', value: 'wh' },
    { label: 'Chanmari Forest Check Post', value: 'cfcp' },

  
  ];

  return (
    <SafeAreaView className="flex-1 bg-white px-3 pb-8">
      <View className="flex-row items-center justify-between mb-4 mt-4">
        
      <TouchableOpacity className=' bg-slate-300 rounded-full p-1' onPress={navigation.goBack} >
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
        data={source}
        onSelect={(item) => handleUpdate('source',item)}
        focusColor="#81D742"
      />
       <Dropdowncom
        label="Select destination location"
        iconname={"location-crosshairs"}
        color={"red"}
        data={destination}
        onSelect={(item) => handleUpdate('destination',item)}
        focusColor="#81D742"
      />
      <Dropdowncom
        label="Select pickup point"
        iconname={"truck-pickup"}
        color={"black"}
        data={pickupPoints}
        onSelect={(item) => handleUpdate('pickupPoint',item)}
        focusColor="#81D742"
      />
     
     <Text className="mt-6 mb-2">
  Select your departure date: {//selectedDate?.toLocaleDateString('en-GB')
  jsonData.date
  }
</Text>


      <CalendarPicker
        onDateChange={handleDateChange}
        width={width*0.96}
        height={height}
        selectedDayColor="#4CAF50"
        selectedDayTextColor="#FFFFFF"
        textStyle={{ color: '#000000' }}
        todayBackgroundColor="#E8E8E8"
        monthTitleStyle={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }}
        yearTitleStyle={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }}
        dayLabelsWrapper={{ backgroundColor: '#81D74270', borderRadius: 30, borderColor: '#81D74270'}}
        previousComponent={
          <IIcon name="angle-left" size={32} style={{ elevation:5}} color="green" />
        
      }
        nextComponent={<IIcon className=' bg-slate-400 rounded-e-2xl' name="angle-right" size={32} color="green"></IIcon>}
      />

      <TouchableOpacity onPress={handleDone}
       className=" self-end w-1/3 bg-green-500 p-3 rounded-2xl mt-4">
        <Text className="text-black text-center  font-bold">DONE</Text>
      </TouchableOpacity>
    
    </SafeAreaView>
   
  );
};

export default LuxuryRideBooking;