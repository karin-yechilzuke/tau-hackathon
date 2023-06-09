import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const PointStore = () => {
  const header = ['Business', 'Number Of Points ']
  const data = [
      ['Yossi Falafel', 234],
      ['Amit Dress Shop', 563],
      ['Suzanna Nails', 123]
  ]
  return(

    <View style={{ marginTop: 200 }}>
    <Text style={{ fontSize: 18 ,textAlign: 'center' }}>
    Welcome to Point Store!</Text>
    <Text style={{ fontSize: 18 ,textAlign: 'center' }}>
    Number of current points:235</Text>
    <Table borderStyle={{ borderWidth: 2, 
        borderColor: '#c8e1ff' }}>
        <Row data={header} />
        <Rows data={data} />
    </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headline: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});



export default PointStore;










