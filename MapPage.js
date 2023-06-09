import React, { useEffect, useRef, useState } from 'react';
import MapView, { PROVIDER_TOMTOM } from 'react-native-maps';
import tt from '@tomtom-international/web-sdk-maps';
import { Text, View } from 'react-native';

const TomTomMap = () => {
  <Text>Di</Text> 
  const mapRef = useRef(null);
  
  <Text>Karin</Text>  
  useEffect(() => {
    const apiKey = "Znhv0N2R497mAqawKwRvb9AuGUno33Xt";
    const mapContainer = mapRef.current;
    <Text>Hello</Text>

    if (mapContainer) {
      const map = tt.map({
        key: apiKey,
        container: mapContainer,
        style: 'vector', // Use 'raster' for raster tiles
        center: [52.360306, 4.876935],
        zoom: 13,
      });

      return () => {
        map.remove();
      };
    }
  }, []);

 
  return (
    <MapView
      provider={PROVIDER_TOMTOM}
      style={{ flex: 1 }}
      ref={mapRef}
      showsUserLocation={true}
      showsMyLocationButton={true}
    />
  );
};

export default function MapPage() {
  // const tom = TomTomMap();
  return (<> 
    <TomTomMap/>;
     </>);
}

    // <>
    {/* <Text>HelloHERI</Text> */}
    
    
    {/* <TomTomMap /> */}
    {/* <Text>amit</Text> */}
    // </>
  
{/* } */}

// export default TomTomMap;





// const TomTomMap = () => {
//   useEffect(() => {
//     const apiKey = "Znhv0N2R497mAqawKwRvb9AuGUno33Xt";
//     const map = tt.map({
//       key: apiKey,
//       container: "map",
//       style: 'vector', // Use 'raster' for raster tiles
//       center: [52.360306, 4.876935],
//       zoom: 13,
//     });

//     return () => {
//       map.remove();
//     };
//   }, []);

//   return (
//     <MapView
//       provider={PROVIDER_TOMTOM}
//       style={{ flex: 1 }}
//       showsUserLocation={true}
//       showsMyLocationButton={true}
//     />
//   );
// };

// export default function MapPage() {
  
  
//   return(<TomTomMap/>)
  
//     // return (
//     //     <View>
//     //         <Text>This is a map</Text>
//     //         <MapView style={{width: '100%', height: '100%'}}
//     //         initialRegion={{
//     //           latitude: 32.11101733295508,
//     //           longitude: 34.80647565185797,
//     //           latitudeDelta: 0.0922,
//     //           longitudeDelta: 0.0421,
//     //         }}
//     //         >

//     //         {/* <MapView.Marker
//     //           coordinate={{
//     //           latitude: 32.11101733295508,
//     //           longitude: 34.80647565185797,
//     //         }}
//     //         /> */}
//     //         {/* <Polyline
//     //             coordinates={[
//     //               {latitude: 32.11101733295508, longitude: 34.80647565185797},
//     //               {latitude: 32.06117882345265, longitude: 34.77331257980913},
//     //               // {latitude: 37.7665248, longitude: -122.4161628},
//     //               // {latitude: 37.7734153, longitude: -122.4577787},
//     //               // {latitude: 37.7948605, longitude: -122.4596065},
//     //               // {latitude: 37.8025259, longitude: -122.4351431},
//     //             ]}
//     //             strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
//     //             strokeColors={[
//     //               '#7F0000',
//     //               '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
//     //               '#B24112',
//     //               '#E5845C',
//     //               '#238C23',
//     //               '#7F0000',
//     //             ]}
//     //             strokeWidth={6}
//     //           /> */}
//     //          </MapView>;
//     //     </View>
//     // );
// }
