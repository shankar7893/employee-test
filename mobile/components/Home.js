import React from 'react';
import {  Alert, TextInput, View, StyleSheet,Image,Dimensions, Text,TouchableOpacity,
   KeyboardAvoidingView, BackHandler,Platform,ToastAndroid } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import axios from 'react-native-axios';  
import HomePage from './HomePage';
import SettingsPage from './SettingsPage';


  class Home extends React.Component {

    
    
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton() {
        // ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
        return true;
    }
    render() {
     
        const { navigation } = this.props;
        const username = navigation.getParam('name', 'NO-name');
        const password = navigation.getParam('empid', 'some default value');
       

        return(
            <HomePage username={username} password={password} />
        );
      }
    }
    
    class settings extends React.Component {
      render() {
        const { navigation } = this.props;
        const username = navigation.getParam('name', 'NO-name');
        //const password = navigation.getParam('empid', 'some default value');
        console.log("user",username)

        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
          </View>
        );
      }
    }

    
    
    export default createBottomTabNavigator({
      Home: { screen: Home, 
     },
      Settings: { screen: settings },
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