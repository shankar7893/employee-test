import React from 'react';
import {  Alert, TextInput, View, StyleSheet,Image,Dimensions, Text,TouchableOpacity,
   KeyboardAvoidingView, BackHandler,Platform,ToastAndroid } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Container, Header, Content, Accordion, Thumbnail, Button } from "native-base";

import axios from 'react-native-axios';  

  class HolidayPage extends React.Component {
      render() {
          return(
            <View style={{alignItems:'center', justifyContent:'center', flex:1}} >
            <Text>Holiday</Text>
            <Button danger full 
      // this.props.navigation.goBack();
   
   ><Text>Fail Retry</Text>
    </Button>
        </View>
          );
      }
      
    }
      
      
      export default HolidayPage;
      