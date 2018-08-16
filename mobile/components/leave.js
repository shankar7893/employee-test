import React from 'react';
import {  Alert, TextInput, View, StyleSheet,Image,Dimensions, Text,TouchableOpacity,
   KeyboardAvoidingView, BackHandler,Platform,ToastAndroid,AsyncStorage,  Animated,ScrollView } from 'react-native';
import { createBottomTabNavigator,createStackNavigator } from 'react-navigation';
import { Container, Header, Content, Accordion, Thumbnail, Body, Title,Button, Right,Label } from "native-base";
import { Ionicons,FontAwesome,MaterialCommunityIcons,Entypo,
  Feather } from '@expo/vector-icons';
import axios from 'react-native-axios';

class Leave extends React.Component {
    constructor(props) {
        super(props)
  
      
    }
    async componentDidMount (){
        let username = await AsyncStorage.getItem('userToken');
    };

    render() {
        return(
            <Container>
            <Header style={{backgroundColor:'white' ,borderBottomWidth:1}} ><Body>
            <Label style={{fontSize:18 }} >Leave Information</Label>

</Body>

</Header>
           <View style={{flex:1, marginLeft:20,marginRight:20}} >
               <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} >
           <Text>p10001</Text>
           
           <Text>Leaves Left:10</Text>
           </View>
           <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} >
           
           </View>
           <View>
           
           </View>
           <View>
           
           </View>
           </View>
           </Container>
        );
    }
}

export default Leave;