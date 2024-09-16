import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/AntDesign';
const CancellationPolicyScreen = () => {
  const navigation = useNavigation();

  return (<ScrollView>
    <SafeAreaView className=' p-0'>
    <LinearGradient colors={['#b4ec51', '#429321']} style={styles.linearGradient}>
      <View style={styles.container}>
      <TouchableOpacity className=' bg-slate-300 w-8 rounded-full p-2' onPress={navigation.goBack} >
          <Icon size={20} name="arrowleft" className=" h-1/2 text-gray-500" />
        </TouchableOpacity>
        <Text style={styles.heading}>Cancellation Policy</Text>
        <View style={styles.crossContainer}>
          <Image source={require('../../assets/cross.png')} style={styles.crossImage} />
          <Text className='font-bold text-lg'>Important points related to cancellation policy:</Text>
          <Text style={styles.description}>
            {'\n'}{'\n'}• This Refund Process is a 100% automated process done through a Seamless & Secure Tech algorithms. The refund amount, as applicable, will be initiated by the system on a daily basis and is usually credited into the Customer's bank Account by the Payment Gateway within 5 - 7 Business working days. We would request our Customers to have patience until then.
            {'\n'}{'\n'}• The Refund Amount will reflect ONLY in the same Bank Account through which you had made the payment while making the Booking. Make sure you are checking the correct Bank Account for credit of this Refund Amount.
            {'\n'}{'\n'}• The Refund Amount will reflect on your account within 5 - 7 WORKING days from the time of Cancellation. This DOES NOT include holidays.
            {'\n'}{'\n'}• Please DO NOT DEPEND on SMS from your Bank for confirmation of Amount Refunded. Most of the times the Bank's SMS does not get delivered, hence we would request you to check your Online Bank Account Statement for any Refund Credits.
          </Text>
        </View>
        <View className='my-3' style={styles.detailBox}>
          <Text className='font-bold text-lg my-2'>Refund Policy</Text>
          <View style={styles.tableRow}>
            <Text className='font-bold my-2' style={styles.tableCell}>SI.No</Text>
            <Text className='font-bold my-2' style={styles.tableCell}>Category Description</Text>
            <Text className='font-bold my-2' style={styles.tableCell}>Cancellation Charges</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>1</Text>
            <Text style={styles.tableCell}>Cancellation charges for cancellation done 10 days before Travel</Text>
            <Text style={styles.tableCell}>SK Cancellation Charges</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>2</Text>
            <Text style={styles.tableCell}>Cancellation charges for {'\n'}cancellation done within 10 days but</Text>
            <Text style={styles.tableCell}>20% Cancellation Charges</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>3</Text>
            <Text style={styles.tableCell}>Cancellation charges for cancellation done within 7 days but</Text>
            <Text style={styles.tableCell}>50% Cancellation Charges</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>4</Text>
            <Text style={styles.tableCell}>Cancellations done within 4 days of time of travel</Text>
            <Text style={styles.tableCell}>100% Cancellation Charges - No Refund</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
    </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    height: 1300
  },
  container: {
    marginHorizontal: 20,
    marginTop: '10%',
  },
  backButton: {
    backgroundColor: '#3D881B',
        width: 110,
        height: 46,
        top: 40,
        borderRadius: 10,
  },
  backButtonText: {
    fontSize: 20,
    textAlign: 'center',
    padding: 9,
    color: '#000',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: '7%',
    textAlign: 'center',
  },
  crossContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    width: '100%',
    height: '62%', 
    borderRadius: 15,
    backgroundColor: '#EFEEEE94',
    padding: 20,
  },
  crossImage: {
    marginBottom: 20,
    width: 140,
    height: 124, 
        
  },
  description: {
    fontFamily: 'Roboto',
    // fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'left',
  },
  detailBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    padding: 1,
    borderRadius: 10,
    backgroundColor: '#EFEEEE94',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 1,
    // borderBottomWidth: 1,
    fontWeight: 'bold',
    backgroundColor: '#EFEEEE94',
  },
  tableCell: {
    flex: 1,
    fontSize: 13,
    textAlign: 'center',
    padding: 1,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default CancellationPolicyScreen;
