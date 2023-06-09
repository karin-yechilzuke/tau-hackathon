import { View, Text } from "react-native";
import MapView from 'react-native-maps';

export default function MapPage() {
    return (
        <View>
            <Text>This is a map</Text>
            <MapView style={{width: '100%', height: '100%'}}
            initialRegion={{
              latitude: 32.11101733295508,
              longitude: 34.80647565185797,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
    )
}