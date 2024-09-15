import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  ScrollView,
  Dimensions,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProfileModal = (str:any) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={toggleModal}>
        {str?<Image
         source={require('../../assets/Images/profile_image.png')} 
          style={styles.profileImage}
        />:<Image
         source={{uri:str}} 
          style={styles.profileImage}
        />
        }
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
        animationType="slide"
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { width: screenWidth * 0.8 }]}>
            <ScrollView>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Sonia</Text>
                <View style={styles.starsContainer}>
                  <FontAwesome name="star" size={18} color="#FFD700" />
                  <FontAwesome name="star" size={18} color="#FFD700" />
                  <FontAwesome name="star" size={18} color="#FFD700" />
                </View>
              </View>

              {/* Modal Options */}
              <TouchableOpacity style={styles.option}>
                <Text style={styles.optionText}>Activity</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option}>
                <Text style={styles.optionText}>About Us</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option}>
                <Text style={styles.optionText}>Contact Us</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option}>
                <Text style={styles.optionText}>Cancellation Policy</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option}>
                <Text style={styles.optionText}>Terms & Conditions</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{navigation.navigate("ProfileScreen" as never )}} style={styles.option}>
                <Text style={styles.optionText}>Settings</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option}>
                <Text style={styles.optionText}>FAQ</Text>
              </TouchableOpacity>
            </ScrollView>


            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>DONE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingTop: 50, 
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)', 
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
  },
  modalHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  starsContainer: {
    flexDirection: 'row',
  },
  option: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    width: '100%',
  },
  optionText: {
    fontSize: 16,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#8CC63F',     
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginTop: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProfileModal;