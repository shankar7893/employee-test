import React from 'react';
import {  Alert, TextInput, View, StyleSheet,Image,Dimensions,ActivityIndicator,
    AsyncStorage,StatusBar, Text,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Container, Header, Content, Accordion, Thumbnail,Button, BackHandler } from "native-base";
import { Ionicons,FontAwesome,MaterialCommunityIcons,
  Feather } from '@expo/vector-icons';
import Login from './Login';
import AttendenceScreen from './AttendenceScreen';
import AuthLoadingScreen from './AuthLoadingScreen';
import axios from 'react-native-axios';  
import HomePage from './HomePage';
import SettingsPage from './SettingsPage';
import Success from './Success';
import HolidayPage from './HolidayPage';
import CalenderPage from './CalanderPage';
import ChartPage from './ChartPage';
import Leave from './leave';

  class Routes extends React.Component {
      render() {
          return(
            <AppNavigation />
    
    );
  }
}

const HomeTab = createBottomTabNavigator({
   
    Attendence : {screen: Leave, navigationOptions:{ tabBarIcon : ({tintColor}) =>(
      <Feather name="user-check" size={29} color={tintColor} />
     ) }},
     Calender : {screen: CalenderPage, navigationOptions:{ tabBarIcon : ({tintColor}) =>(
      <Ionicons name="md-calendar" size={32} color={tintColor} />
     ) }},Home: {screen: HomePage, headerTitleStyle:{alignSelf: 'center'} , navigationOptions:{
     
      tabBarIcon : ({tintColor}) =>(
       <Ionicons name="md-home" size={34} color={tintColor} />
      )
    } }, 
     Chart : {screen: ChartPage, navigationOptions:{  tabBarIcon : ({tintColor}) =>(
      <MaterialCommunityIcons name="chart-pie" size={32} color={tintColor} />
     ) }},
     Holiday : {screen: HolidayPage, navigationOptions:{ tabBarIcon : ({tintColor}) =>(
      <FontAwesome name="calendar-check-o" size={28} color={tintColor} />
     ) }},
     },
     {
      initialRouteName: 'Home',
    animationEnabled: true,
    swipeEnabled: true,    
    tabBarOptions: {
      
        showLabel: false, // hide labels
        activeTintColor: '#0000ff', // active icon color
        inactiveTintColor: '#0c1d40',  // inactive icon color
        style: {
            backgroundColor: 'white' // TabBar background
        }
    }
}

);
const Attendence = createStackNavigator({ SettingsPage: SettingsPage, Success: Success, AttendenceScreen:AttendenceScreen },
  {
    navigationOptions:{
      header:null,
      gesturesEnabled: false,
   } });

const AtendenceStack = createStackNavigator({ Home: HomeTab },
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
    App: HomeTab,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default Routes;
      