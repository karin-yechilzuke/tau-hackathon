import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
// import MapPage from './MapPage';
import MapPage2 from './MapPage2';
import HomePage from './HomePage';
import PointStore from './PointStore';
// import MapView, {Polyline} from 'react-native-maps';
// import { WebView } from 'react-native-webview';
// import mapTemplate from './map-template';
// import TomTomMap from './MapPage';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
       <Stack.Navigator
         initialRouteName='Home'
        id="nav"
       >
        <Stack.Screen
          name="Home"
          component={HomePage}
         options={{title: 'Welcome'}}
      />
        {/* <Stack.Screen name="Map" component={MapPage} options={{title: 'Map Page'}}/> */}
        <Stack.Screen name="Map" component={MapPage2} options={{title: 'Smooth Moving'}}/>
        {/* <Stack.Screen name="Map" component={TomTomMap} options={{title: 'Map Page'}}/> */}
       <Stack.Screen name="Points" component={PointStore} options={{title: 'Points Store'}} />
   </Stack.Navigator>
    <StatusBar style="auto" />
 </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     top: 30,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     position: 'absolute',
//     top: 70,
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
// });
