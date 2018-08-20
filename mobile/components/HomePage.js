import React from 'react';
import {  Alert, TextInput, View, StyleSheet,Image,Dimensions, Text,TouchableOpacity,
   KeyboardAvoidingView, BackHandler,Platform,ToastAndroid,AsyncStorage,  Animated,ScrollView } from 'react-native';
import { createBottomTabNavigator,createStackNavigator } from 'react-navigation';
import { Container, Header, Content, Accordion, Thumbnail, Body, Title,Button, Right,Label } from "native-base";
import { Ionicons,FontAwesome,MaterialCommunityIcons,Entypo,
  Feather } from '@expo/vector-icons';
import axios from 'react-native-axios';  
import SettingsPage from './SettingsPage';
import AttendenceScreen from './AttendenceScreen';
import Success from './Success';
import Edit from './Edit';



  class HomePage extends React.Component {

    constructor(props) {
      super(props)

      this.state = {
          
          empData: []
      }
  }

async componentDidMount (){
  const employeeId = await AsyncStorage.getItem('employeeId');
  const companyId = await AsyncStorage.getItem('companyId');
    
   
                          
  axios.post('http://192.168.0.130/pasta/api/getempdetails', {
    empid: employeeId,
    cmpid: companyId,
  }).then(async res => {
  
     this.setState({ empData: res.data });
     if(res.data.department_id) {
     await AsyncStorage.setItem('departmentId', res.data.department_id);
   } })
}

      render()
      
      {
      //  renderEmp () {
      //    return this.state.album
      //  }
      
     
     
          return(
            <Container>
                    <Header style={{backgroundColor:'white',borderBottomWidth:0}} ><Body  style={{flex:8,alignItems:'flex-end'}}>
                    <Label style={{fontSize:18,...Platform.select({
      ios: {
        fontWeight: 'bold',
      },
     
    }) }} >Pronteff IT Solutions</Label>
      
        </Body>
        <Right style={{flex:3}} >
        <MaterialCommunityIcons name='account-settings-variant' size={24} color={'gray'} onPress = {  () => {
       
        this.props.navigation.navigate('Edit');
      } }/>
        </Right>
        </Header>
                
                    <View style={{flex:1}} >
                   
                    <View style={{alignItems:'center',justifyContent:'space-between' ,flex:4}} >
                   <View>
                     <Image  style={{width:Dimensions.get('window').width*1, height:10,marginTop:-5}}  source={require('../assets/Icons/top-strip.png')} resizeMode="contain"  />
                   </View>
                    <View style={{alignItems:'center'}} >
                    <Thumbnail source={{uri: this.state.empData.imageurl }} style={{height:80,width:80,borderRadius:40 }} />
                   
                    
                      <Text style={{fontSize:16}} >{this.state.empData.firstname} {this.state.empData.lastname}</Text>
                      </View>
                     
                       <View>
                    <Image style={{width:Dimensions.get('window').width*1}} source={require('../assets/Icons/middle-strip.png')} resizeMode="contain" />
                    </View></View>
                    <View style={{flex:2,justifyContent:'space-between' , marginTop:15,marginLeft:25, }} >

                    <View style={{flexDirection:'row'}} > 
                   <FontAwesome name="bookmark"  size={18} color={'gray'} />
                    <Text style={{marginLeft:10}} >{this.state.empData.employee_id}</Text></View>
                    <View style={{flexDirection:'row'}} > 
                    <Feather name='phone-call' color={'gray'} size={18} />
                    <Text style={{marginLeft:10}}>{this.state.empData.mobileno}</Text></View>
                    <View style={{flexDirection:'row'}} > 
                    <MaterialCommunityIcons name='email' size={18} color={'gray'} />
                    <Text style={{marginLeft:10}}>{this.state.empData.email}</Text></View>
                    <View style={{flexDirection:'row'}} > 
                    <Entypo name='location-pin' size={18} color={'gray'} />
                    <Text style={{marginLeft:10}}>{this.state.empData.workinglocation}</Text></View>
                 
                    </View>
                    <View style={{flex:4,justifyContent:'flex-start' ,alignItems:'center'}} >
                  <TouchableOpacity onPress={()=>{this.props.navigation.navigate('SettingsPage')}}
                  style={{marginTop:Dimensions.get('window').height*0.1,backgroundColor:'darkblue',
                  alignItems:'center',justifyContent:'center', shadowOffset:{height:0,width:0},shadowOpacity:0.6,shadowColor:'gray'
                   ,width:Dimensions.get('window').width*0.4,height:Dimensions.get('window').height*0.06,borderRadius:10,
                   borderBottomLeftRadius:30,borderBottomRightRadius:30,borderTopLeftRadius:30,borderTopRightRadius:30 }} >
                  <Text style={{color:'white'}} >Attendence</Text>
                  </TouchableOpacity>
                  </View>
                  </View>
                
            </Container>
          );
      }
    }
   
    export default  createStackNavigator({HomePage:HomePage, SettingsPage: SettingsPage, Success: Success,
       AttendenceScreen:AttendenceScreen, Edit:Edit },
      {
        navigationOptions:{
          header:null,
          gesturesEnabled: false,
     } });

  