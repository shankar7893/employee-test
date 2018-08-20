import React from 'react';
import {  Alert, TextInput, View, StyleSheet,Image,Dimensions, Text,TouchableOpacity,AsyncStorage,
   KeyboardAvoidingView, BackHandler,Platform,ToastAndroid } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Container, Header, Content, Accordion, Thumbnail, Button } from "native-base";

import axios from 'react-native-axios';  

  class HolidayPage extends React.Component {
    _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    };
  
      render() {
          return(
            <View style={{alignItems:'center', justifyContent:'center', flex:1}} >
                 <Text> App Building is under process sorry....</Text>
                 <Button primary  onPress={this._signOutAsync} ><Text>Logout</Text></Button>
        </View>
          );
      }
      
    }
      
      
      export default HolidayPage;
      