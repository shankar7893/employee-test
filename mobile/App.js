import React from 'react';
import {  Alert, TextInput, View, StyleSheet,Image,Dimensions,ActivityIndicator,
  AsyncStorage,
 
  StatusBar, Text,TouchableOpacity,
   KeyboardAvoidingView } from 'react-native';
import {Button, BackHandler } from 'native-base';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Routes from './components/Routes';

export default class App extends React.Component {


  render() {
    return (
    
      <Routes />
    
    );
  }
}


