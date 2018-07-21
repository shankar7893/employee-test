import React from 'react';
import {  Alert, TextInput, View, StyleSheet,Image,Dimensions, Text,TouchableOpacity,
   KeyboardAvoidingView, BackHandler,Platform,ToastAndroid } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Container, Header, Content, Accordion, Thumbnail } from "native-base";

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
              <Container>
                <Header> <Text style={{fontWeight:'bold', fontSize:18}} >Pronteff IT Solutions</Text></Header>
                <View style={{flex:1, justifyContent:'space-around',alignItems:'center'}}>
                <View>
                <Thumbnail source={{uri: this.state.empData.profile_img}} style={{height:150,width:150, borderRadius:75}} />
                </View>
                <View>
                <Text style ={{marginBottom:20}} >   WELCOME</Text>
                <Text style ={{fontWeight:'700'}} > {this.state.empData.firstname} {this.state.empData.lastname}</Text>
                </View>
                </View>
              </Container>
          );
      }
    }
    export default HomePage;

  