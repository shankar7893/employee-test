import React from 'react';
import {  Alert, TextInput, View, StyleSheet,Image,Dimensions, Text,TouchableOpacity,
   KeyboardAvoidingView, BackHandler,Platform,ToastAndroid } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import axios from 'react-native-axios';  

  class HomePage extends React.Component {

    state = { empData: [] };
componentDidMount(){
  axios.post('http://192.168.0.162:5000/', {
    username: this.props.username,
    password: this.props.password
  }).then(res => {
   console.log(res);
     this.setState({ empData: res.data });
  })
}

      render()
      
      {
      //  renderEmp () {
      //    return this.state.album
      //  }
     
          return(
              <View style={{alignItems:'center', justifyContent:'center',flex:1}}>
              <Text>HomePage</Text>
              <Text>helo {this.state.empData.username}</Text>
              <Text>{this.props.password}</Text>
              <Text>hi</Text>
              </View>
          );
      }
    }
    export default HomePage;