import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

var test = "lol";
var cpt = 1;



export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!FUCK</Text>
      
      <Button title={test} onPress={()=> {console.log(cpt++)}}/>
      <Text>{cpt}</Text>
    </View>
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
