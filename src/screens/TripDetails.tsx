// Import required libraries and components
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/Store';
import ProfileModal from '../components/ProfileModal'; // Assuming you have the ProfileModal component
import { useNavigation } from '@react-navigation/native';

const TripDetailsScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  // Fetch data from jsonSlice
  const { source, destination, date, time, bookingId } = useSelector((state: RootState) => state.jsonData.data);
  const toggleProfileModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Top header with back button and profile modal */}
      <View style={styles.header}>
        {/* Back Icon */}
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        {/* Profile Icon */}
        <TouchableOpacity onPress={toggleProfileModal} style={styles.profileButton}>
          {/* ProfileModal Component */}
          <ProfileModal modalVisible={modalVisible} toggleModal={toggleProfileModal} />
        </TouchableOpacity>
      </View>

      {/* Trip Illustration */}
      <View style={styles.illustrationContainer}>
        <Image
          source={require('../../assets/Images/bookingconfirmed.png')} 
          style={styles.illustration}
        />
      </View>

      {/* Trip Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.tripDetailsText}>Trip Details</Text>
        <View style={styles.infoRow}>
          <View style={styles.infoColumn}>
            <Text style={styles.label}>Date</Text>
            <Text style={styles.value}>{date || 'N/A'}</Text>
          </View>
          <View style={styles.infoColumn}>
            <Text style={styles.label}>Time</Text>
            <Text style={styles.value}>{time || 'N/A'}</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoColumn}>
            <Ionicons name="location-sharp" size={24} color="green" />
            <Text style={styles.value}>{source || 'Source'}</Text>
          </View>
          <View style={styles.infoColumn}>
            <Ionicons name="location-sharp" size={24} color="red" />
            <Text style={styles.value}>{destination || 'Destination'}</Text>
          </View>
        </View>

        <Text style={styles.bookingId}>Booking ID: {bookingId || 'N/A'}</Text>

        {/* Cancel Ride Button */}
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancel Ride</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles for responsiveness
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    zIndex: 10,
  },
  backButton: {
    padding: 10,
  },
  profileButton: {
    padding: 10,
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  illustrationContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  },
  illustration: {
    width: Dimensions.get('window').width * 0.8,
    height: 150,
    resizeMode: 'contain',
  },
  detailsContainer: {
    flex: 2,
    backgroundColor: '#d8f3dc',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tripDetailsText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  infoColumn: {
    alignItems: 'center',
    width: '45%',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
    marginTop: 5,
  },
  bookingId: {
    marginTop: 20,
    fontSize: 16,
    color: 'grey',
  },
  cancelButton: {
    backgroundColor: '#e63946',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TripDetailsScreen;
