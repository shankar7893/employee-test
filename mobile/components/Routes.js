import React from 'react';
import {  Alert, TextInput, View, StyleSheet,Image,Dimensions,ActivityIndicator,
    AsyncStorage,StatusBar, Text,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Container, Header, Content, Accordion, Thumbnail,Button, BackHandler } from "native-base";
import Home from './Home';
import Login from './Login';
import AttendenceScreen from './AttendenceScreen';
import AuthLoadingScreen from './AuthLoadingScreen';
import axios from 'react-native-axios';  
import HomePage from './HomePage';
import SettingsPage from './SettingsPage';

  class Routes extends React.Component {
      render() {
          return(
            <AppNavigation />
    
    );
  }
}

const HomeTab = createBottomTabNavigator({
    Home: { screen: HomePage, 
   },
    Attendence: { screen: SettingsPage },
  }, {
    animationEnabled: true,
    swipeEnabled: true,    
    tabBarOptions: {

        showLabel: true, // hide labels
        activeTintColor: '#F8F8F8', // active icon color
        inactiveTintColor: '#586589',  // inactive icon color
        style: {
            backgroundColor: '#171F33' // TabBar background
        }
    }
}

);

const AppStack = createStackNavigator({ Home: HomeTab, Other: AttendenceScreen },
  {
    navigationOptions:{
      header:null,
      gesturesEnabled: false,
   } });
const AuthStack = createStackNavigator({ SignIn: Login },
  {
    navigationOptions:{
      header:null,
      gesturesEnabled: false,
   } });


const AppNavigation =  createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default Routes;
      