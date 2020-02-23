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


import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';

import Main from './src/Main';
import persist from './src/config/store';



const persisStore = persist();

//on wrap le contenu à l'interieur de Provider de Redux, et y ajouter 
// la prop store du fichier store
export default class App extends Component{
  render(){
    return(
      <Provider store={persisStore.store}>
        <PersistGate loading={null} persistor={persisStore.persistor}>
           <Main />
        </PersistGate>
      </Provider>
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

