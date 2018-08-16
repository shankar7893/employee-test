import React from 'react';
import {  Alert, TextInput, View, StyleSheet,Image,Dimensions,ActivityIndicator,
  AsyncStorage,
 
  StatusBar, Text,TouchableOpacity,
   KeyboardAvoidingView } from 'react-native';
import {Button, BackHandler } from 'native-base';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import Routes from './components/Routes';
import Login from './components/Login';
import AttendenceScreen from './components/AttendenceScreen';
import AuthLoadingScreen from './components/AuthLoadingScreen';

export default class App extends React.Component {


  render() {
    return (
    
      <Routes />
    
    );
  }
}

// const AppStack = createStackNavigator({ Home: Home, Other: AttendenceScreen },
//   {
//     navigationOptions:{
//       header:null,
//       gesturesEnabled: false,
//    } });
// const AuthStack = createStackNavigator({ SignIn: Login },
//   {
//     navigationOptions:{
//       header:null,
//       gesturesEnabled: false,
//    } });


// const AppNavigation =  createSwitchNavigator(
//   {
//     AuthLoading: AuthLoadingScreen,
//     App: AppStack,
//     Auth: AuthStack,
//   },
//   {
//     initialRouteName: 'AuthLoading',
//   }
// );

