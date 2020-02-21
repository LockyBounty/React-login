import React, { Component } from 'react';
import { 
  StyleSheet,
   Text,
    View,
     Button, 
     TextInput,
     StatusBar, 
     ScrollView,
     
    } from 'react-native';

// import 'react-native-gesture-handler';
// import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from '@react-navigation/stack';

import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import Routes from './src/Routes';

export default class App extends Component{
  render(){
    return(
      
      <Routes />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lime',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

