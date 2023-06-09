import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-web';


// const TextPointStore = () => {
//   const [titleText, setTitleText] = useState("Point Store");
//   const bodyText = '545';

// //   };

//   return (
//     <Text style={styles.baseText}>
//       <Text style={styles.titleText} onPress={onPressTitle}>
//         {titleText}
//         {'\n'}
//         {'\n'}
//       </Text>
//       <Text numberOfLines={5}>{bodyText}</Text>
//     </Text>
//   );
// };

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
},
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  }
});

const handlePress = () => console.log('Pressed');

const PointStore = () => {
    const [titleText, setTitleText] = React.useState(0);
    const bodyText = '545';

    const onPressTitle = () => setTitleText(titleText + 1);

    return (
        <View>
            <Text style={styles.baseText}>
            <Text style={styles.titleText} onPress={onPressTitle}>
                {titleText}
                {'\n'}
                {'\n'}
            </Text>
            <Text numberOfLines={5}>{bodyText}</Text>
            </Text>
            
            <Button
                onPress = {handlePress}
                title = "My comapny 10% discount"
                color = "red"
                style={styles.buttonText}
                
            />
        </View>
    )
};
export default PointStore;


