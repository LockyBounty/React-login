import React, { Component } from 'react';
import { 
  StyleSheet,
   Text,
    View,
     Button, 
     TextInput,
     Image,
     ScrollView,
     KeyboardAvoidingView
    } from 'react-native';



export default class Logo extends Component{

    render(){
        return(
            <View style={styles.container}>
            <Image 
                style={{width:120, height:170}}
                source={require("./img/logo.png")}
            />
            <Text style={styles.logoText}> Welcome {"\n"} To The Valkyries Lair! </Text>
            
            </View>
        )
    }
}





const styles = StyleSheet.create({
        container: {
            flexGrow: 1,
          
          alignItems: 'center',
          justifyContent: 'center',
        },
        logoText:{
            marginVertical:15,
            fontSize:18,
            textAlign: 'center',
            fontWeight:'bold',
            color:'gray',
        }
      });
      
      