
// the Best
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContext } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    position: 'absolute',
    top: 50,
  },
  header: {
    fontSize: 31,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  header2: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
  },
  header3: {
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.2)', // text shadow color
    textShadowOffset: { width: 0, height: 4 }, // text shadow offset
    textShadowRadius: 7, // text shadow radius
  },
  buttonContainer: {
    marginTop: 120,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    width: 200,
    borderRadius: 10,
    marginBottom: 13,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  
  footerText: {
    fontSize: 12,
    color: 'gray',
  },
});

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>♥ SMOOTH MOVE ♥</Text>
        <Text style={styles.header2}>  </Text>
        <Text style={styles.header2}>Number of current points:</Text>
        <Text style={styles.header3}>256</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Map')}>
          <Text style={styles.buttonText}>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Points')}>
          <Text style={styles.buttonText}>Points Store</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>&copy; All Rights Reserved to Team 5</Text>
      </View>
    </View>
  );
};

export default HomePage;



// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { NavigationContext } from '@react-navigation/native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#E6E6FA',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   headerContainer: {
//     position: 'absolute',
//     top: 50,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 20,
//   },
//   buttonContainer: {
//     marginTop: 120,
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     width: 200,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: 'white',
//     textAlign: 'center',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   footer: {
//     position: 'absolute',
//     bottom: 20,
//   },
//   footerText: {
//     fontSize: 12,
//     color: 'gray',
//   },
// });

// const HomePage = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.headerContainer}>
//         <Text style={styles.header}>♥ SMOOTH MOVE ♥</Text>
//         <Text style={styles.header}>Number of current points: 256</Text>
//       </View>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Map')}>
//           <Text style={styles.buttonText}>Map</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Points')}>
//           <Text style={styles.buttonText}>Points Store</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.footer}>
//         <Text style={styles.footerText}>All Rights Reserved &copy; Team 5</Text>
//       </View>
//     </View>
//   );
// };

// export default HomePage;



// Gooooooooood
// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { NavigationContext } from '@react-navigation/native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#E6E6FA',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   headerContainer: {
//     position: 'absolute',
//     top: 50,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 20,
//   },
//   buttonContainer: {
//     marginTop: 120,
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     width: 200,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: 'white',
//     textAlign: 'center',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// const HomePage = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.headerContainer}>
//         <Text style={styles.header}>♥ SMOOTH MOVE ♥</Text>
//         <Text style={styles.header}>Number of current points: 256</Text>
//       </View>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Map')}>
//           <Text style={styles.buttonText}>Map</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Points')}>
//           <Text style={styles.buttonText}>Points Store</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default HomePage;





// GOOD
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
// import React, { useState } from 'react';
// import { NavigationContext } from '@react-navigation/native';

// const styles = {
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 20,
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     marginVertical: 10,
//     borderRadius: 10,
//   },
//   buttonText: {
//     color: 'white',
//     textAlign: 'center',
//     fontSize: 16,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#E6E6FA',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// };

// const HomePage = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>♥ SMOOTH MOVE ♥</Text>
//       <Text style={styles.header}>Number of current points: 256</Text>
//       <TouchableOpacity style={[styles.button, { width: 200 }]} onPress={() => navigation.navigate('Map')}>
//         <Text style={styles.buttonText}>Map</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={[styles.button, { width: 200 }]} onPress={() => navigation.navigate('Points')}>
//         <Text style={styles.buttonText}>Points Store</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default HomePage;















// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TouchableOpacity, TextInput, } from 'react-native';
// import React, {useState} from 'react';
// import {NavigationContext} from '@react-navigation/native';

// const styles = {
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 20,
    
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     marginVertical: 10,
//     borderRadius: 10,
//   },
//   buttonText: {
//     color: 'white',
//     textAlign: 'center',
//     fontSize: 16,
//   },
//  container: {
//   flex: 1,
//   backgroundColor:  '#E6E6FA',
//   alignItems: 'center',
//   justifyContent: 'center',
// },
// };

// const HomePage = () => {
  
//   const navigation = React.useContext(NavigationContext);
//   const handleTextChange = (value) => {
//     setText(value);
//   };
//   const [textDest, setTextDest] = useState(''); 
//    return (
//     <View style={styles.container}>
//       <Text style={styles.header}>♥SMOOTH MOVE♥</Text>
//       <Text style={styles.header}>Number of current points : 256</Text>
//       <TouchableOpacity style={styles.button} onPress={() => navigation.push('Map')}>
//         <Text style={styles.buttonText}>Map</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={() => navigation.push('Points')}>
//         <Text style={styles.buttonText}>Points Store</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
  
// export default HomePage;
  