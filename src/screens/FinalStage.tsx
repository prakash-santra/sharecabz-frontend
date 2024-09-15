import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Linking } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { updateField } from '../utils/JsonSlice';

type RootStackParamList = {
  RideBookingScreen: undefined;

};

type RideBookingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'RideBookingScreen'
>;

interface Props {
  navigation: RideBookingScreenNavigationProp;
}

const RideBookingScreen: React.FC<Props> = ({ navigation }) => {
  const [seatData, setSeatData] = useState({
    price: 0,
    availableSeats: 0,
    departureTime: '07:00',
  });
  const [passengerCount, setPassengerCount] = useState(1);
  
  const dispatch = useDispatch();
  const handleUpdate = (f:any,v:any) =>{
  dispatch(updateField({ field: f, value: v })); 
} 
  const jsonData = useSelector((state:any) => state.jsonData.data); 
   // Fetch data from backend on component mount
  // useEffect(() => {
  //   fetchSeatData();
  // }, []);

  // const fetchSeatData = async () => {
  //   try {
  //     const response = await axios.get('YOUR_BACKEND_ENDPOINT'); // Update with backend API
  //     setSeatData(response.data);
  //   } catch (error) {
  //     console.error('Error fetching seat data:', error);
  //   }
  // };

  const handleWhatsAppPress = () => {
    const message = 'Hello, I want to book a ride!';
    const url = `whatsapp://send?text=${encodeURIComponent(message)}`;
    Linking.openURL(url).catch(() => {
      alert('Make sure WhatsApp is installed on your device.');
    });
  };

  const incrementPassenger = () => {
    setPassengerCount((prev) => (prev < 8 ? prev + 1 : prev));
    handleUpdate('passengerno',passengerCount);
  };

  const decrementPassenger = () => {
    setPassengerCount((prev) => (prev > 1 ? prev - 1 : prev));
    handleUpdate('passengerno',passengerCount);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Top Card with Back Button and WhatsApp Card */}
      <View style={styles.topCardContainer}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
  <View style={styles.backButtonCircle}>
    <Ionicons name="arrow-back" size={24} color="black" />
  </View>
</TouchableOpacity>

        <View style={styles.topCard}>
          <Text style={styles.topCardText}>Want to book on your own time?</Text>
          <TouchableOpacity style={styles.whatsappButton} onPress={handleWhatsAppPress}>
            <FontAwesome name="whatsapp" size={30} color="#25D366" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Ride Information Card */}
      <View style={styles.infoCard}>
        <LinearGradient colors={['#84FAB0', '#8FD3F4']} style={styles.gradientBox}>
          <Text style={styles.routeText}>{jsonData.source.label}</Text>
          <FontAwesome name="bus" size={24} color="black" />
          <Text style={styles.routeText}>{jsonData.destination.label}</Text>
          <Text style={styles.timeText}>2 hrs</Text>
        </LinearGradient>

        {/* Seat Data */}
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Seats Starting from:</Text>
          <Text style={styles.dataValue}>Rs. {seatData.price}</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Available Seats:</Text>
          <Text style={styles.dataValue}>{seatData.availableSeats}</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Departure Time:</Text>
          <Text style={styles.dataValue}>{seatData.departureTime}</Text>
        </View>

        {/* Passenger Count */}
        <View style={styles.passengerRow}>
          <Text style={styles.dataLabel}>No. of Passengers:</Text>
          <View style={styles.passengerControl}>
            <TouchableOpacity onPress={decrementPassenger} style={styles.passengerButton}>
              <Ionicons name="remove" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.passengerCount}>{passengerCount}</Text>
            <TouchableOpacity onPress={incrementPassenger} style={styles.passengerButton}>
              <Ionicons name="add" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Car Image */}
        <View style={styles.carImageContainer}>
          <Image source={require('../../assets/Images/car1.png')} style={styles.carImage} />
          <Image source={require('../../assets/Images/car2.png')} style={styles.carImage} />
        </View>
        <Text style={styles.availabilityText}>
  Either a Xylo or Innova will be sent according to availability
</Text>

        {/* Features Section */}
        <View style={styles.featuresContainer}>
          <View style={styles.row}>
            <View style={styles.featureItem}>
              <FontAwesome name="snowflake-o" size={24} color="black" />
              <Text style={styles.featureText}>Air Conditioned</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="fast-food-outline" size={24} color="black" />
              <Text style={styles.featureText}>Travel Snacks</Text>
            </View>
          </View>

          {/* Luggage Feature */}
          <View style={styles.featureItemCenter}>
            <FontAwesome name="suitcase" size={24} color="black" />
            <Text style={styles.featureText}>1 Trolley & 1 Handbag per Seat</Text>
          </View>

          <Text style={styles.windowSeatNote}>
            *Window seat price may be different
          </Text>
        </View>

        {/* Done Button */}
        <TouchableOpacity style={styles.doneButton}>
          <Text style={styles.doneButtonText}>DONE</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    alignItems: 'center',
  },
  topCardContainer: {
    width: '100%',
    marginTop: 40,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 40,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  topCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topCardText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 25,
  },
  whatsappButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 35,
    left: 15,
  },
  backButtonCircle: {
    width: 40,
    height: 40,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',

  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    width: '100%',
    marginBottom: 20,
  },
  gradientBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  routeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  timeText: {
    fontSize: 12,
    fontWeight: '300',
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  dataLabel: {
    fontSize: 16,
  },
  dataValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  passengerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  passengerControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passengerButton: {
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 20,
  },
  passengerCount: {
    marginHorizontal: 10,
    fontSize: 18,
  },
  carImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  carImage: {
    width: 100,
    height: 70,
    resizeMode: 'contain',
  },
  availabilityText: {
    fontSize: 24, 
    color: '#333', 
    textAlign: 'center', 
    marginVertical: 10, 
  },
  featuresContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureItemCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  featureText: {
    marginLeft: 10,
    fontSize: 16,
  },
  windowSeatNote: {
    color: 'red',
    fontSize: 12,
    marginTop: 10,
  },
  doneButton: {
    backgroundColor: '#8CC63F',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RideBookingScreen;
