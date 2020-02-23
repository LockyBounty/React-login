import React, { Component } from 'react';
import { 
  StyleSheet,
   Text,
    View,
     Button, 
     TextInput,
     StatusBar, 
     ScrollView,
     KeyboardAvoidingView,
     TouchableOpacity
    } from 'react-native';

import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import store from './config/store';
import Routes from './components/Routes';

//C'est ici qu'on va rediriger l'utilisateur 
// pour la sécurité

class Main extends Component{

  
    render(){
        return(
         <View style={styles.container}>

            <Routes />
          
         </View>
        )
    }
}




const styles = StyleSheet.create({
        container: {
          flex: 1,
        //   backgroundColor: 'whitesmoke',
        //   alignItems: 'center',
        //   justifyContent: 'center',
        },
        
      });

      
// C'est ainsi qu'on fait la connexion avec redux  :  
export default connect (null, null)(Main)