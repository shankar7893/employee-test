import React from 'react';
import {  Alert, TextInput, View, StyleSheet,Image,Dimensions, Text,TouchableOpacity,
   KeyboardAvoidingView, BackHandler,Platform,ToastAndroid } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import axios from 'react-native-axios';  

  class SettingsPage extends React.Component {
      render() {
          return(
              <View>
              <Text>SETTINGS PAGE</Text>
              </View>
          );
      }
    }
    export default SettingsPage;