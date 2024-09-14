import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Icon from '@expo/vector-icons/FontAwesome6';
type DropdownItem = {
    label: any;
    value: any;
};

type DropdownProps = {
    label: string;
    iconname:any;
    color?: string;
    data: DropdownItem[];
    focusColor?: string;
    onSelect: (item: DropdownItem) => void;
};



const Dropdowncom = ({ label, iconname, color, data, focusColor = '#81D742',onSelect }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (item:any) => {
    setSelectedItem(item);
    setIsOpen(false);
    onSelect(item);
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          { borderColor: isOpen ? focusColor : 'gray' }
        ]}
        onPress={handleToggle}
      >
        <View style={styles.buttonContent}>
          <Icon
            name={iconname}
            size={20}
            color={color || 'black'}
            style={styles.icon}
          />
          <Text style={styles.buttonText}>
            {selectedItem ? selectedItem.label : label}
          </Text>
        </View>
        <AntDesign
          name={isOpen ? "up" : "down"}
          size={20}
          color={ 'black'}
        />
      </TouchableOpacity>
      {isOpen && (
        <FlatList
          data={data}
          style={styles.dropdownList}
          keyExtractor={(item) => item.value}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.dropdownItem,
                selectedItem && selectedItem.value === item.value
                  ? { backgroundColor: focusColor  }
                  : {}
              ]}
              onPress={() => handleSelect(item)}
            >
              <Text style={styles.dropdownItemText}>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 300,
    zIndex: 1000,
    marginBottom: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
  },
  dropdownList: {
    maxHeight: 200,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: 'white',
    marginTop: 5,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  dropdownItemText: {
    fontSize: 16,
  },
});

export default Dropdowncom;
