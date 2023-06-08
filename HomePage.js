import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import {NavigationContext} from '@react-navigation/native';

const styles = {
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
};

const HomePage = () => {
  const navigation = React.useContext(NavigationContext);
  return (
    <View>
      <Text>This is the home page</Text>
      <Text style={styles.header}>App Name</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.push('Map')}>
        <Text style={styles.buttonText}>Map</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.push('Points')}>
        <Text style={styles.buttonText}>Points Store</Text>
      </TouchableOpacity>
    </View>
  );
};
  
export default HomePage;
  