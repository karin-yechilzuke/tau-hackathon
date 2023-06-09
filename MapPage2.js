import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MapPage2 = () => {
  const [source, setSource] = useState({ latitude: 32.11101733295508, longitude: 34.80647565185797, label: 'Origin' });
  const [destination, setDestination] = useState({ latitude: 32.06117882345265, longitude: 34.77331257980913, label: 'Levinsky Market' });
  const [footRoute, setFootRoute] = useState([]);
  const [distance, setDistance] = useState(0);

  const handleRoute = () => {
    // Calculate the foot route between source and destination
    const footRouteCoordinates = calculateFootRoute(source, destination);
    setFootRoute(footRouteCoordinates);

    // Calculate the distance between source and destination
    const routeDistance = calculateDistance(source, destination);
    setDistance(routeDistance);
  };

  const calculateFootRoute = (source, destination) => {
    // Perform your custom logic to calculate the walking route
    // Here's a sample implementation using dummy coordinates

    // Calculate the distance between source and destination
    const distance = calculateDistance(source, destination);

    // Generate intermediary coordinates along the route
    const numSteps = Math.ceil(distance / 100); // Adjust this value as needed
    const footRoute = [];

    for (let i = 0; i <= numSteps; i++) {
      const latitude = source.latitude + (destination.latitude - source.latitude) * (i / numSteps);
      const longitude = source.longitude + (destination.longitude - source.longitude) * (i / numSteps);
      footRoute.push({ latitude, longitude });
    }

    return footRoute;
  };

  const calculateDistance = (source, destination) => {
    // Calculate the distance between two coordinates using a suitable algorithm
    // Here's a sample implementation using the Haversine formula

    const radius = 6371; // Earth's radius in kilometers
    const lat1 = source.latitude;
    const lon1 = source.longitude;
    const lat2 = destination.latitude;
    const lon2 = destination.longitude;

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = radius * c;

    return distance.toFixed(2); // Rounded to 2 decimal places
  };

  const toRad = (value) => {
    return (value * Math.PI) / 180;
  };

  const potentialPoints = (10 * distance).toFixed(2); // Rounded to 2 decimal places

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Origin"
          value={source.label}
          onChangeText={(text) => setSource({ ...source, label: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Levinsky Market"
          value={destination.label}
          onChangeText={(text) => setDestination({ ...destination, label: text })}
        />
        <Button title="Get Route" onPress={handleRoute} />
      </View>
      <View style={styles.distanceContainer}>
        <Text style={styles.distanceText}>{`Distance: ${distance} km`}</Text>
        <Text style={styles.potentialPointsText}>{`Potential Points: ${potentialPoints}`}</Text>
      </View>
      <MapView style={styles.map} initialRegion={{ latitude: source.latitude, longitude: source.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}>
        {footRoute.length > 0 && <Polyline coordinates={footRoute} strokeColor="#FF0000" strokeWidth={2} />}
        <Marker coordinate={source} title={source.label} anchor={{ x: 0.5, y: 1 }}>
          <MaterialCommunityIcons name="lightbulb-on-outline" size={30} color="#FFD700" />
        </Marker>
        <Marker coordinate={destination} title={destination.label} anchor={{ x: 0.5, y: 1 }}>
          <MaterialCommunityIcons name="lightbulb-on-outline" size={30} color="#FFD700" />
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  input: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  distanceContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  distanceText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  potentialPointsText: {
    fontSize: 16,
  },
  map: {
    flex: 1,
  },
});

export default MapPage2;





// GOOD 
// import React, { useState } from 'react';
// import { View, StyleSheet, TextInput, Button, Text } from 'react-native';
// import MapView, { Marker, Polyline } from 'react-native-maps';

// const MapPage2 = () => {
//   const [source, setSource] = useState({ latitude: 32.11101733295508, longitude: 34.80647565185797, label: 'Origin' });
//   const [destination, setDestination] = useState({ latitude: 32.06117882345265, longitude: 34.77331257980913, label: 'Levinsky Market' });
//   const [footRoute, setFootRoute] = useState([]);
//   const [distance, setDistance] = useState(0);

//   const handleRoute = () => {
//     // Calculate the foot route between source and destination
//     const footRouteCoordinates = calculateFootRoute(source, destination);
//     setFootRoute(footRouteCoordinates);

//     // Calculate the distance between source and destination
//     const routeDistance = calculateDistance(source, destination);
//     setDistance(routeDistance);
//   };

//   const calculateFootRoute = (source, destination) => {
//     // Perform your custom logic to calculate the walking route
//     // Here's a sample implementation using dummy coordinates

//     // Calculate the distance between source and destination
//     const distance = calculateDistance(source, destination);

//     // Generate intermediary coordinates along the route
//     const numSteps = Math.ceil(distance / 100); // Adjust this value as needed
//     const footRoute = [];

//     for (let i = 0; i <= numSteps; i++) {
//       const latitude = source.latitude + (destination.latitude - source.latitude) * (i / numSteps);
//       const longitude = source.longitude + (destination.longitude - source.longitude) * (i / numSteps);
//       footRoute.push({ latitude, longitude });
//     }

//     return footRoute;
//   };

//   const calculateDistance = (source, destination) => {
//     // Calculate the distance between two coordinates using a suitable algorithm
//     // Here's a sample implementation using the Haversine formula

//     const radius = 6371; // Earth's radius in kilometers
//     const lat1 = source.latitude;
//     const lon1 = source.longitude;
//     const lat2 = destination.latitude;
//     const lon2 = destination.longitude;

//     const dLat = toRad(lat2 - lat1);
//     const dLon = toRad(lon2 - lon1);

//     const a =
//       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//       Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     const distance = radius * c;

//     return distance.toFixed(2); // Rounded to 2 decimal places
//   };

//   const toRad = (value) => {
//     return (value * Math.PI) / 180;
//   };

//   const potentialPoints = (10 * distance).toFixed(2); // Rounded to 2 decimal places

//   return (
//     <View style={styles.container}>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Origin"
//           value={source.label}
//           onChangeText={(text) => setSource({ ...source, label: text })}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Levinsky Market"
//           value={destination.label}
//           onChangeText={(text) => setDestination({ ...destination, label: text })}
//         />
//         <Button title="Get Route" onPress={handleRoute} />
//       </View>
//       <View style={styles.distanceContainer}>
//         <Text style={styles.distanceText}>{`Distance: ${distance} km`}</Text>
//         <Text style={styles.potentialPointsText}>{`Potential Points: ${potentialPoints}`}</Text>
//       </View>
//       <MapView style={styles.map} initialRegion={{ latitude: source.latitude, longitude: source.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}>
//         {footRoute.length > 0 && <Polyline coordinates={footRoute} strokeColor="#FF0000" strokeWidth={2} />}
//         <Marker coordinate={source}>
//           <Text style={styles.markerLabel}>{source.label}</Text>
//         </Marker>
//         <Marker coordinate={destination}>
//           <Text style={styles.markerLabel}>{destination.label}</Text>
//         </Marker>
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   inputContainer: {
//     padding: 10,
//     backgroundColor: '#FFFFFF',
//   },
//   input: {
//     height: 40,
//     borderColor: '#CCCCCC',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   distanceContainer: {
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   distanceText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   potentialPointsText: {
//     fontSize: 16,
//   },
//   map: {
//     flex: 1,
//   },
//   markerLabel: {
//     backgroundColor: '#FFFFFF',
//     padding: 5,
//     borderRadius: 5,
//     borderColor: '#000000',
//     borderWidth: 1,
//     fontWeight: 'bold',
//   },
// });

// export default MapPage2;




// import React, { useState } from 'react';
// import { View, StyleSheet, TextInput, Button, Text } from 'react-native';
// import MapView, { Marker, Polyline, Callout } from 'react-native-maps';

// const MapPage2 = () => {
//   const [source, setSource] = useState({ latitude: 32.11101733295508, longitude: 34.80647565185797, label: 'Origin' });
//   const [destination, setDestination] = useState({ latitude: 32.06117882345265, longitude: 34.77331257980913, label: 'Levinsky Market' });
//   const [footRoute, setFootRoute] = useState([]);
//   const [distance, setDistance] = useState(0);

//   const handleRoute = () => {
//     // Calculate the foot route between source and destination
//     const footRouteCoordinates = calculateFootRoute(source, destination);
//     setFootRoute(footRouteCoordinates);

//     // Calculate the distance between source and destination
//     const routeDistance = calculateDistance(source, destination);
//     setDistance(routeDistance);
//   };

//   const calculateFootRoute = (source, destination) => {
//     // Perform your custom logic to calculate the walking route
//     // Here's a sample implementation using dummy coordinates

//     // Calculate the distance between source and destination
//     const distance = calculateDistance(source, destination);

//     // Generate intermediary coordinates along the route
//     const numSteps = Math.ceil(distance / 100); // Adjust this value as needed
//     const footRoute = [];

//     for (let i = 0; i <= numSteps; i++) {
//       const latitude = source.latitude + (destination.latitude - source.latitude) * (i / numSteps);
//       const longitude = source.longitude + (destination.longitude - source.longitude) * (i / numSteps);
//       footRoute.push({ latitude, longitude });
//     }

//     return footRoute;
//   };

//   const calculateDistance = (source, destination) => {
//     // Calculate the distance between two coordinates using a suitable algorithm
//     // Here's a sample implementation using the Haversine formula

//     const radius = 6371; // Earth's radius in kilometers
//     const lat1 = source.latitude;
//     const lon1 = source.longitude;
//     const lat2 = destination.latitude;
//     const lon2 = destination.longitude;

//     const dLat = toRad(lat2 - lat1);
//     const dLon = toRad(lon2 - lon1);

//     const a =
//       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//       Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     const distance = radius * c;

//     return distance;
//   };

//   const toRad = (value) => {
//     return (value * Math.PI) / 180;
//   };

//   const potentialPoints = 10 * distance;

//   return (
//     <View style={styles.container}>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Origin"
//           value={source.label}
//           onChangeText={(text) => setSource({ ...source, label: text })}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Levinsky Market"
//           value={destination.label}
//           onChangeText={(text) => setDestination({ ...destination, label: text })}
//         />
//         <Button title="Get Route" onPress={handleRoute} />
//       </View>
//       <View style={styles.distanceContainer}>
//         <Text style={styles.distanceText}>{`Distance: ${distance.toFixed(2)} km`}</Text>
//         <Text style={styles.potentialPointsText}>{`Potential Points: ${potentialPoints}`}</Text>
//       </View>
//       <MapView style={styles.map} initialRegion={{ latitude: source.latitude, longitude: source.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}>
//         {footRoute.length > 0 && <Polyline coordinates={footRoute} strokeColor="#FF0000" strokeWidth={2} />}
//         <Marker coordinate={source}>
//           <Callout>
//             <Text>{source.label}</Text>
//           </Callout>
//         </Marker>
//         <Marker coordinate={destination}>
//           <Callout>
//             <Text>{destination.label}</Text>
//           </Callout>
//         </Marker>
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   inputContainer: {
//     padding: 10,
//     backgroundColor: '#FFFFFF',
//   },
//   input: {
//     height: 40,
//     borderColor: '#CCCCCC',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   distanceContainer: {
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   distanceText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   potentialPointsText: {
//     fontSize: 16,
//   },
//   map: {
//     flex: 1,
//   },
// });

// export default MapPage2;




// import React, { useState } from 'react';
// import { View, StyleSheet, TextInput, Button, Text } from 'react-native';
// import MapView, { Marker, Polyline, Callout } from 'react-native-maps';

// const MapPage2 = () => {
//   const [source, setSource] = useState({ latitude: 32.11101733295508, longitude: 34.80647565185797, label: 'Origin' });
//   const [destination, setDestination] = useState({ latitude: 32.06117882345265, longitude: 34.77331257980913, label: 'Levinsky Market' });
//   const [footRoute, setFootRoute] = useState([]);
//   const [distance, setDistance] = useState(0);

//   const handleRoute = () => {
//     // Calculate the foot route between source and destination
//     const footRouteCoordinates = calculateFootRoute(source, destination);
//     setFootRoute(footRouteCoordinates);

//     // Calculate the distance between source and destination
//     const routeDistance = calculateDistance(source, destination);
//     setDistance(routeDistance);
//   };

//   const calculateFootRoute = (source, destination) => {
//     // Perform your custom logic to calculate the walking route
//     // Here's a sample implementation using dummy coordinates

//     // Calculate the distance between source and destination
//     const distance = calculateDistance(source, destination);

//     // Generate intermediary coordinates along the route
//     const numSteps = Math.ceil(distance / 100); // Adjust this value as needed
//     const footRoute = [];

//     for (let i = 0; i <= numSteps; i++) {
//       const latitude = source.latitude + (destination.latitude - source.latitude) * (i / numSteps);
//       const longitude = source.longitude + (destination.longitude - source.longitude) * (i / numSteps);
//       footRoute.push({ latitude, longitude });
//     }

//     return footRoute;
//   };

//   const calculateDistance = (source, destination) => {
//     // Calculate the distance between two coordinates using a suitable algorithm
//     // Here's a sample implementation using the Haversine formula

//     const radius = 6371; // Earth's radius in kilometers
//     const lat1 = source.latitude;
//     const lon1 = source.longitude;
//     const lat2 = destination.latitude;
//     const lon2 = destination.longitude;

//     const dLat = toRad(lat2 - lat1);
//     const dLon = toRad(lon2 - lon1);

//     const a =
//       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//       Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     const distance = radius * c;

//     return distance;
//   };

//   const toRad = (value) => {
//     return (value * Math.PI) / 180;
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Origin"
//           value={source.label}
//           onChangeText={(text) => setSource({ ...source, label: text })}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Levinsky Market"
//           value={destination.label}
//           onChangeText={(text) => setDestination({ ...destination, label: text })}
//         />
//         <Button title="Get Route" onPress={handleRoute} />
//       </View>
//       <View style={styles.distanceContainer}>
//         <Text style={styles.distanceText}>{`Distance: ${distance.toFixed(2)} km`}</Text>
//       </View>
//       <MapView style={styles.map} initialRegion={{ latitude: source.latitude, longitude: source.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}>
//         {footRoute.length > 0 && <Polyline coordinates={footRoute} strokeColor="#FF0000" strokeWidth={2} />}
//         <Marker coordinate={source}>
//           <Callout>
//             <Text>{source.label}</Text>
//           </Callout>
//         </Marker>
//         <Marker coordinate={destination}>
//           <Callout>
//             <Text>{destination.label}</Text>
//           </Callout>
//         </Marker>
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   inputContainer: {
//     padding: 10,
//     backgroundColor: '#FFFFFF',
//   },
//   input: {
//     height: 40,
//     borderColor: '#CCCCCC',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   distanceContainer: {
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   distanceText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   map: {
//     flex: 1,
//   },
// });

// export default MapPage2;




// import React, { useState } from 'react';
// import { View, StyleSheet, TextInput, Button } from 'react-native';
// import MapView, { Marker, Polyline } from 'react-native-maps';

// const MapPage2 = () => {
//   const [source, setSource] = useState({ latitude: 32.11101733295508, longitude: 34.80647565185797, label: 'Origin' });
//   const [destination, setDestination] = useState({ latitude: 32.06117882345265, longitude: 34.77331257980913, label: 'Levinsky Market' });
//   const [footRoute, setFootRoute] = useState([]);

//   const handleRoute = () => {
//     // Calculate the foot route between source and destination
//     const footRouteCoordinates = calculateFootRoute(source, destination);
//     setFootRoute(footRouteCoordinates);
//   };

//   const calculateFootRoute = (source, destination) => {
//     // Perform your custom logic to calculate the walking route
//     // Here's a sample implementation using dummy coordinates

//     // Calculate the distance between source and destination
//     const distance = calculateDistance(source, destination);

//     // Generate intermediary coordinates along the route
//     const numSteps = Math.ceil(distance / 100); // Adjust this value as needed
//     const footRoute = [];

//     for (let i = 0; i <= numSteps; i++) {
//       const latitude = source.latitude + (destination.latitude - source.latitude) * (i / numSteps);
//       const longitude = source.longitude + (destination.longitude - source.longitude) * (i / numSteps);
//       footRoute.push({ latitude, longitude });
//     }

//     return footRoute;
//   };

//   const calculateDistance = (source, destination) => {
//     // Calculate the distance between two coordinates using a suitable algorithm
//     // Here's a sample implementation using the Haversine formula

//     const radius = 6371; // Earth's radius in kilometers
//     const lat1 = source.latitude;
//     const lon1 = source.longitude;
//     const lat2 = destination.latitude;
//     const lon2 = destination.longitude;

//     const dLat = toRad(lat2 - lat1);
//     const dLon = toRad(lon2 - lon1);

//     const a =
//       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//       Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     const distance = radius * c;

//     return distance;
//   };

//   const toRad = (value) => {
//     return (value * Math.PI) / 180;
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Origin"
//           value={source.label}
//           onChangeText={(text) => setSource({ ...source, label: text })}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Levinsky Market"
//           value={destination.label}
//           onChangeText={(text) => setDestination({ ...destination, label: text })}
//         />
//         <Button title="Get Route" onPress={handleRoute} />
//       </View>
//       <MapView style={styles.map} initialRegion={{ latitude: 32.11101733295508, longitude: 34.80647565185797, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}>
//         {footRoute.length > 0 && <Polyline coordinates={footRoute} strokeColor="#FF0000" strokeWidth={2} />}
//         <Marker coordinate={source} title={source.label} />
//         <Marker coordinate={destination} title={destination.label} />
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   inputContainer: {
//     padding: 10,
//     backgroundColor: '#FFFFFF',
//   },
//   input: {
//     height: 40,
//     borderColor: '#CCCCCC',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   map: {
//     flex: 1,
//   },
// });

// export default MapPage2;




// import React, { useState } from 'react';
// import { View, StyleSheet, TextInput, Button } from 'react-native';
// import MapView, { Marker, Polyline } from 'react-native-maps';

// const MapPage2 = () => {
//   const [source, setSource] = useState({ latitude: 32.11101733295508, longitude: 34.80647565185797 });
//   const [destination, setDestination] = useState({ latitude: 32.06117882345265, longitude: 34.77331257980913 });
//   const [footRoute, setFootRoute] = useState([]);

//   const handleRoute = () => {
//     // Perform the necessary logic to calculate the foot route between source and destination
//     // and update the footRoute state with the route coordinates

//     // Here's a sample implementation using dummy coordinates
//     const sourceCoordinates = { latitude: source.latitude, longitude: source.longitude };
//     const destinationCoordinates = { latitude: destination.latitude, longitude: destination.longitude };

//     // Calculate the distance and interpolate between the coordinates
//     const distance = 5000; // Replace with your desired distance
//     const footRouteCoordinates = [
//       sourceCoordinates,
//       { latitude: sourceCoordinates.latitude + 0.01, longitude: sourceCoordinates.longitude + 0.01 },
//       destinationCoordinates,
//     ];
//     setFootRoute(footRouteCoordinates);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Source"
//           value={source.latitude + ', ' + source.longitude}
//           onChangeText={(text) => {
//             const [latitude, longitude] = text.split(',').map((coord) => parseFloat(coord.trim()));
//             setSource({ latitude, longitude });
//           }}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Destination"
//           value={destination.latitude + ', ' + destination.longitude}
//           onChangeText={(text) => {
//             const [latitude, longitude] = text.split(',').map((coord) => parseFloat(coord.trim()));
//             setDestination({ latitude, longitude });
//           }}
//         />
//         <Button title="Get Route" onPress={handleRoute} />
//       </View>
//       <MapView style={styles.map} initialRegion={{ latitude: 32.11101733295508, longitude: 34.80647565185797, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}>
//         {footRoute.length > 0 && <Polyline coordinates={footRoute} strokeColor="#FF0000" strokeWidth={2} />}
//         {source && <Marker coordinate={source} title="Source" />}
//         {destination && <Marker coordinate={destination} title="Destination" />}
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   inputContainer: {
//     padding: 10,
//     backgroundColor: '#FFFFFF',
//   },
//   input: {
//     height: 40,
//     borderColor: '#CCCCCC',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   map: {
//     flex: 1,
//   },
// });

// export default MapPage2;




// import React, { useState } from 'react';
// import { View, StyleSheet, TextInput, Button, Text } from 'react-native';
// import MapView, { Marker, Polyline } from 'react-native-maps';

// const MapPage2 = () => {
//   const [source, setSource] = useState('');
//   const [destination, setDestination] = useState('');
//   const [footRoute, setFootRoute] = useState([]);
//   const [distance, setDistance] = useState('');

//   const handleRoute = () => {
//     const sourceCoordinates = { latitude: 32.11101733295508, longitude: 34.80647565185797 };
//     const destinationCoordinates = { latitude: 32.06117882345265, longitude: 34.77331257980913 };

//     const calculatedDistance = calculateDistance(sourceCoordinates, destinationCoordinates);
//     const footRouteCoordinates = generateFootRoute(sourceCoordinates, destinationCoordinates, Math.floor(calculatedDistance / 100));

//     setDistance(calculatedDistance.toFixed(2) + ' meters');
//     setFootRoute(footRouteCoordinates);
//   };

//   const calculateDistance = (startCoords, endCoords) => {
//     const lat1 = startCoords.latitude;
//     const lon1 = startCoords.longitude;
//     const lat2 = endCoords.latitude;
//     const lon2 = endCoords.longitude;

//     const R = 6371e3; // Earth's radius in meters
//     const φ1 = (lat1 * Math.PI) / 180; // Convert to radians
//     const φ2 = (lat2 * Math.PI) / 180;
//     const Δφ = ((lat2 - lat1) * Math.PI) / 180;
//     const Δλ = ((lon2 - lon1) * Math.PI) / 180;

//     const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     const distance = R * c;
//     return distance;
//   };

//   const generateFootRoute = (startCoords, endCoords, steps) => {
//     const lat1 = startCoords.latitude;
//     const lon1 = startCoords.longitude;
//     const lat2 = endCoords.latitude;
//     const lon2 = endCoords.longitude;

//     const deltaLat = (lat2 - lat1) / steps;
//     const deltaLon = (lon2 - lon1) / steps;

//     const footRoute = [];

//     for (let i = 0; i <= steps; i++) {
//       const latitude = lat1 + deltaLat * i;
//       const longitude = lon1 + deltaLon * i;
//       footRoute.push({ latitude, longitude });
//     }

//     return footRoute;
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Source"
//           value={source}
//           onChangeText={(text) => setSource(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Destination"
//           value={destination}
//           onChangeText={(text) => setDestination(text)}
//         />
//         <Button title="Get Route" onPress={handleRoute} />
//         <Text>Distance: {distance}</Text>
//       </View>
//       <MapView style={styles.map} initialRegion={{ latitude: 32.11101733295508, longitude: 34.80647565185797, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}>
//         {footRoute.length > 0 && <Polyline coordinates={footRoute} strokeColor="#FF0000" strokeWidth={2} />}
//         {source !== '' && <Marker coordinate={source} title="Source" />}
//         {destination !== '' && <Marker coordinate={destination} title="Destination" />}
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   inputContainer: {
//     padding: 10,
//     backgroundColor: '#FFFFFF',
//   },
//   input: {
//     height: 40,
//     borderColor: '#CCCCCC',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   map: {
//     flex: 1,
//   },
// });

// export default MapPage2;





// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, Text } from 'react-native';
// import MapView, { Marker, Polyline } from 'react-native-maps';

// const MapPage2 = () => {
//   const sourceCoordinates = { latitude: 32.11101733295508, longitude: 34.80647565185797 };
//   const destinationCoordinates = { latitude: 32.06117882345265, longitude: 34.77331257980913 };

//   const [footRoute, setFootRoute] = useState([]);
//   const [distance, setDistance] = useState(0);

//   useEffect(() => {
//     const calculatedDistance = calculateDistance(sourceCoordinates, destinationCoordinates);
//     setDistance(calculatedDistance);

//     const footRouteCoordinates = interpolateCoordinates(sourceCoordinates, destinationCoordinates, Math.floor(calculatedDistance));
//     setFootRoute(footRouteCoordinates);
//   }, []);

//   const calculateDistance = (source, destination) => {
//     const lat1 = source.latitude;
//     const lon1 = source.longitude;
//     const lat2 = destination.latitude;
//     const lon2 = destination.longitude;

//     const R = 6371; // Radius of the Earth in kilometers
//     const dLat = deg2rad(lat2 - lat1);
//     const dLon = deg2rad(lon2 - lon1);
//     const a =
//       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//       Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     const distance = R * c;

//     return distance;
//   };

//   const deg2rad = (deg) => {
//     return deg * (Math.PI / 180);
//   };

//   const interpolateCoordinates = (source, destination, steps) => {
//     const coordinates = [];
//     const latStep = (destination.latitude - source.latitude) / steps;
//     const lonStep = (destination.longitude - source.longitude) / steps;

//     for (let i = 0; i <= steps; i++) {
//       const interpolatedLat = source.latitude + latStep * i;
//       const interpolatedLon = source.longitude + lonStep * i;
//       coordinates.push({ latitude: interpolatedLat, longitude: interpolatedLon });
//     }

//     return coordinates;
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.infoContainer}>
//         <Text style={styles.distanceText}>Distance: {distance} km</Text>
//       </View>
//       <MapView
//         style={styles.map}
//         initialRegion={{ latitude: 32.11101733295508, longitude: 34.80647565185797, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
//       >
//         {footRoute.length > 0 && <Polyline coordinates={footRoute} strokeColor="#FF0000" strokeWidth={2} />}
//         <Marker coordinate={sourceCoordinates} title="Source" />
//         <Marker coordinate={destinationCoordinates} title="Destination" />
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//   },
//   infoContainer: {
//     backgroundColor: '#FFFFFF',
//     padding: 10,
//     alignItems: 'center',
//   },
//   distanceText: {
//     fontSize: 16,
//   },
// });

// export default MapPage2;



// import React, { useState } from 'react';
// import { View, StyleSheet, Button } from 'react-native';
// import MapView, { Marker, Polyline } from 'react-native-maps';
// import Geolib from 'geolib';

// const MapPage2 = () => {
//   const [footRoute, setFootRoute] = useState([]);

//   const handleRoute = () => {
//     const sourceCoordinates = {
//       latitude: 32.11101733295508,
//       longitude: 34.80647565185797,
//     };
//     const destinationCoordinates = {
//       latitude: 32.06117882345265,
//       longitude: 34.77331257980913,
//     };

//     const distance = Geolib.getDistance(sourceCoordinates, destinationCoordinates);
//     const footRouteCoordinates = Geolib.interpolateBetween(
//       sourceCoordinates,
//       destinationCoordinates,
//       Math.floor(distance / 1000)
//     );

//     setFootRoute(footRouteCoordinates);
//   };

//   return (
//     <View style={styles.container}>
//       <Button title="Get Route" onPress={handleRoute} />
//       <MapView style={styles.map} initialRegion={{ latitude: 32.11101733295508, longitude: 34.80647565185797, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}>
//         {footRoute.length > 0 && <Polyline coordinates={footRoute} strokeColor="#FF0000" strokeWidth={2} />}
//         <Marker coordinate={{ latitude: 32.11101733295508, longitude: 34.80647565185797 }} title="Source" />
//         <Marker coordinate={{ latitude: 32.06117882345265, longitude: 34.77331257980913 }} title="Destination" />
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//   },
// });

// export default MapPage2;



// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, Linking } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';

// const MapPage2 = () => {
//   const [origin, setOrigin] = useState('');
//   const [destination, setDestination] = useState('');

//   useEffect(() => {
//     if (origin && destination) {
//       const handleGetDirections = () => {
//         const url = `http://maps.apple.com/?saddr=${origin}&daddr=${destination}`;
//         Linking.openURL(url);
//       };

//       handleGetDirections();
//     }
//   }, [origin, destination]);

//   const handleMapPress = (event) => {
//     const { coordinate } = event.nativeEvent;

//     // Reverse geocode the selected coordinate to get the address
//     // You can use a geocoding service like the TomTom API, Google Maps API, or others
//     // Here, we'll simulate a reverse geocoding by using dummy coordinates
//     const reverseGeocode = async () => {
//       try {
//         // Simulate reverse geocoding by using dummy coordinates
//         const address = `Lat: ${coordinate.latitude}, Lng: ${coordinate.longitude}`;

//         if (!origin) {
//           setOrigin(address);
//         } else if (!destination) {
//           setDestination(address);
//         }
//       } catch (error) {
//         console.error('Error reverse geocoding coordinate:', error);
//       }
//     };

//     reverseGeocode();
//   };

//   return (
//     <View style={styles.container}>
//       <MapView style={styles.map} onPress={handleMapPress}>
//         {!!origin && (
//           <Marker coordinate={{ latitude: 34.80647565185797, longitude: 32.11101733295508 }} title={origin} />
//         )}
//         {!!destination && (
//           <Marker coordinate={{ latitude: 34.77331257980913, longitude: 32.06117882345265 }} title={destination} />
//         )}
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//   },
// });

// export default MapPage2;
