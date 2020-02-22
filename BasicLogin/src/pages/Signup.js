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
import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

export default class Signup extends Component{
    //Actions (package flux) permet de relier les pages entre-elles 
    // on peut utiliser Actions.pop() pour retour en arriere
    goBack(){
        Actions.pop(); 
    }
    render(){
        return(
            <View style={styles.container}>
                <Logo />
                <Form type='Signup'/>{/* Ce qui va apparaitre sur le bouton* */}
                <View style={styles.signup}>
                    <Text style={styles.signupText}>Already have an account? </Text>
                     <TouchableOpacity onPress={()=> this.goBack()}>
                        <Text style={styles.signupText2}>Login</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        )
    }
}




const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: 'whitesmoke',
          alignItems: 'center',
          justifyContent: 'center',
        },
        signup:{
            flexGrow:1,
            flexDirection:'row',
            alignItems:"center",
            justifyContent:'center',
            
        },
        signupText:{
            color:'rgba(15,115,155,.7)',
            fontSize:16,
        },
        signupText2:{
            color:'rgba(255,5,255,.7)',
            fontSize:16,
            fontWeight:"500",
        }
      });
      
      