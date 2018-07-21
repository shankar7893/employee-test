import React from 'react';
import {  Alert, TextInput, View, StyleSheet,Image,Dimensions, Text,TouchableOpacity,
   KeyboardAvoidingView } from 'react-native';
import {Button, BackHandler } from 'native-base';
import { createStackNavigator } from 'react-navigation';
import Home from './components/Home';
import Login from './components/Login';

export default class App extends React.Component {


  render() {
    return (
    
      <AppNavigation />
    
    );
  }
}

const AppNavigation =  createStackNavigator(
  {
    Login: { screen: Login },
    Home: { screen: Home },
  },
  {
    navigationOptions:{
      header:null,
      gesturesEnabled: false,
    }
  }
);

