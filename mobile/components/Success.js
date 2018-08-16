import React from 'react';
import {  Alert, TextInput, View, StyleSheet,Image,Dimensions, Text,TouchableOpacity,
   KeyboardAvoidingView, BackHandler,Platform,ToastAndroid } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Container, Header, Content, Accordion, Thumbnail, Body, Title,Button, Right,Label } from "native-base"

import axios from 'react-native-axios';  

  class Success extends React.Component {
    constructor(props) {
        super(props)
  
        this.state = {
            
         curTime:'',
        }
    }
    componentDidMount() {
      
          this.setState({
            curTime : new Date().toLocaleString()
          })
       
      }
      render() {
          return(
            <Container>
            <Header style={{backgroundColor:'white' ,borderBottomWidth:0}} ><Body style={{alignItems:'center',justifyContent:'flex-end'}} >
            <View style={{alignItems:'center',justifyContent:'flex-end',marginBottom:-25}} >
            <Label style={{fontSize:18,  ...Platform.select({
      ios: {
        fontWeight: 'bold',
      },
     
    }) }} >Attendence</Label>
    <Image  style={{width:Dimensions.get('window').width*1}}  source={require('../assets/Icons/top-strip.png')} resizeMode="contain"  />
</View>
</Body>

</Header>
              <View style={{alignItems:'center', justifyContent:'center', flex:1}} >
              <View style={{alignItems:'center', justifyContent:'center', flex:2}}>
              <Image source={require('../assets/Icons/success.png')} style={{height:Dimensions.get('window').width*0.3,width:Dimensions.get('window').width*0.3,
              borderRadius:Dimensions.get('window').width*0.15}} />
              <Text style={{fontWeight:'bold',margin:10}} >Success</Text>
            <Text>{this.state.curTime}</Text>
          </View>
          <View style={{flex:1,justifyContent:'flex-start'}}>
          <TouchableOpacity onPress={console.log('leaving out')}
                  style={{marginTop:Dimensions.get('window').height*0.1,backgroundColor:'darkblue',
                  alignItems:'center',justifyContent:'center', shadowOffset:{height:0,width:0},shadowOpacity:0.6,shadowColor:'gray'
                   ,width:Dimensions.get('window').width*0.4,height:Dimensions.get('window').height*0.06,
                   borderRadius:10,borderBottomLeftRadius:30,borderBottomRightRadius:30,borderTopLeftRadius:30,borderTopRightRadius:30 }} >
                  <Text style={{color:'white'}} >Leaving out</Text> 
                  </TouchableOpacity>
          </View>
          </View>
          </Container>
          );
      }
      
    }
      export default Success;
      
