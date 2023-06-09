import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MapPage from './MapPage';
import HomePage from './HomePage';
import PointStore from './PointStore';

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
        <Stack.Screen name="Map" component={MapPage} options={{title: 'Map Page'}}/>
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
