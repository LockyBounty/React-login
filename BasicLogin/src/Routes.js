import React, {Component} from 'react';
import { render } from 'react-dom';

import {StyleSheet, View, Text, Button} from 'react-native';

import {Router, Stack, Scene} from 'react-native-router-flux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContext } from '@react-navigation/native';


import Login from './pages/Login';
import Signup from './pages/Signup';


//Exemple avec react-native-router-flux
export default class Routes extends Component {
    render(){
        return(
            <Router>
            
                <Stack key="root" hideNavBar={true}>
                    <Scene key="login" component={Login} title="Login" initial={true}/>
                    <Scene key="signup" component={Signup} title="Register" />

                </Stack>
            </Router>
        )
    }
}



//Exemple pour @react-navigation packages...
// function HomeScreen({navigation, route}){
//     return (
//         <View style={styles.container}>
//             <Text>
//                 Home screen
//             </Text>
//             <Button title="to login" onPress={()=>navigation.navigate('Login')}></Button>
//             <Button title="to signup" onPress={()=>navigation.navigate('Signup')}></Button>
//         </View>

//     )
// }


//On a besoin de creer les routes et de leur donner un nom
// const Stack = createStackNavigator();

// export default class Routes extends Component {
    
//     render(){
//         return(
//             <NavigationContainer>
//                 <Stack.Navigator
//                 initialRouteName="Login"
//                 headerMode="screen"
//                 screenOptions={{
                    
//                     // headerTintColor: 'white',
//                     // headerStyle: { backgroundColor: 'tomato' },
//                 }}>
//                     <Stack.Screen
//                         name="Home" 
//                         component={HomeScreen}
//                     />
//                     <Stack.Screen 
//                         name="Login" 
//                         component={Login}
//                     />
//                     <Stack.Screen 
//                         name="Signup" 
//                         component={Signup}
//                          />
                    
//                 </Stack.Navigator>
//             </NavigationContainer>
//         )
//     }
// }



const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        },
      
      });
      
      