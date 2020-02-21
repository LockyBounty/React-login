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


import { Actions } from 'react-native-router-flux';


export default class Login extends Component{

    signup(){
        Actions.signup()
    }
    render(){
        return(
            
            <View style={styles.container}>
                 {/* Cacher la StatusBar avec animation*/}
               <StatusBar hidden={true} showHideTransition='slide'/> 
                <Logo />
                <Form type="Login"/>
                <View style={styles.signup}>
                    <Text style={styles.signupText}>No account? </Text>
                    
                    <TouchableOpacity onPress={()=> this.signup()}>
                        <Text style={styles.signupText2}>Signup</Text>
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
      
      