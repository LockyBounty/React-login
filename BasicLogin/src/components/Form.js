import React, { Component } from 'react';
import { 
  StyleSheet,
   Text,
    View,
     Button, 
     TextInput,
     Image,
     ScrollView,
     KeyboardAvoidingView,
     TouchableOpacity,
    } from 'react-native';

export default class Form extends Component{

    render(){
        return(
            <View style={styles.container}>
            
            
            <TextInput 
                style={styles.inputBox}
                placeholder='Email'
                keyboardType="email-address"
                placeholderTextColor="grey"
                underlineColorAndroid='rgba(0,0,0,0)'
                selectionColor="#001"
                onSubmitEditing={()=>this.password.focus()}
                //va sauter sur la zone password une fois complété 
            />
            <TextInput 
                style={styles.inputBox}
                placeholder='Password'
                secureTextEntry={true}
                placeholderTextColor="grey"
                underlineColorAndroid='rgba(0,0,0,0)'
                ref={(input)=>this.password=input}
                //on met la ref pour la retrouver plus tard
            />
             <TouchableOpacity style={styles.button}>{/*Bouton transparent au toucher*/}
                <Text style= {styles.buttonText}>
                    {this.props.type} 
                    {/* va prendre la val de -type- des aut pg et pla ds bouton*/}

                </Text>
            </TouchableOpacity>
             
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
        inputBox:{
            width:300,
            fontSize:16,
            backgroundColor:'rgba(255,255,255,0.5)',
            borderRadius: 25,
            paddingHorizontal:26,
            paddingVertical:10,
            marginVertical:5,
        },
        button:{
            width:300,
            backgroundColor:'#FF6347',
            
            borderRadius:25,
            marginVertical:10,
            paddingVertical:15,
            marginHorizontal:12,
        },
        buttonText:{
            color: 'yellow',
            fontSize:16,
            fontWeight:'bold',
            textAlign:'center',
            textTransform:'uppercase',
        },
        
      });
      
      