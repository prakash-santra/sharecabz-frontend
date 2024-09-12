import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withRepeat, withSequence } from 'react-native-reanimated';

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];
const ExtraScreen: React.FC = () => {
    const [selectedValue, setSelectedValue] = React.useState('');
    const [value, setValue] = useState<string | null>(null);
    const [isFocus, setIsFocus] = useState(false);
    const translateY = useSharedValue(0); // Initial vertical position
    const translateX = useSharedValue(0); // Initial horizontal

    useEffect(() => {
        // Animate the rocket up and down in a loop
        translateY.value = withRepeat(
            withSequence(
                withTiming(-50, { duration: 1000 }),  // Move up
                withTiming(0, { duration: 1000 })     // Move down
            ),
            -1,  // Infinite loop
            true // Alternate direction
        );
        translateY.value = withRepeat(
            withSequence(
                withTiming(-50, { duration: 1000 }),  // Move up
                withTiming(0, { duration: 1000 })     // Move down
            ),
            -1,  // Infinite loop
            true // Alternate direction
        );
    }, []);

    // Define animated styles for the rocket
    const animatedStyle = useAnimatedStyle(() => {
        return {
           transform:[{translateX: translateX.value},{translateY: translateY.value}]
        };
    });
    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Dropdown label
          </Text>
        );
      }
      return null;
    };
    return (
        <LinearGradient colors={['#4c6', '#3b5998', '#192f6a']} style={styles.container}>
            <Text style={styles.title}>Extra Screen</Text>
            <View style={styles.iconContainer}>
            <Animated.View style={[styles.icotainer, animatedStyle]}>
            <Ionicons name="rocket" size={30} color="#fff" />
        </Animated.View>
            </View>
            
            {renderLabel()}
            <View className=' w-1/2'>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />
        </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icotainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },
    iconContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 50,
        padding: 10,
        marginBottom: 20,
    },
    picker: {
        width: 200,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
      },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
});

export default ExtraScreen;