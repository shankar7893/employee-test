import React from 'react';
import {  Alert, TextInput, View, StyleSheet,Image,Dimensions, Text,TouchableOpacity,TouchableWithoutFeedback,Keyboard,
   KeyboardAvoidingView, BackHandler,Platform,ToastAndroid,AsyncStorage,  Animated,ScrollView, } from 'react-native';
import { createBottomTabNavigator,createStackNavigator } from 'react-navigation';
import { Container, Header, Content, Accordion, Thumbnail, Body, Title,Button, Right,Label,Icon } from "native-base";
import { Ionicons,FontAwesome,MaterialCommunityIcons,Entypo,
  Feather } from '@expo/vector-icons';
import axios from 'react-native-axios';


class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          
            empData: [],
            phoneNo:false,
            username:false,
            password:false,
        }
      
    }
    async componentDidMount (){
        let username = await AsyncStorage.getItem('userToken');
       let password = await AsyncStorage.getItem('userPassword');
       
      
                             
     axios.post('http://192.168.0.168:5000/', {
       username: username,
       password: password
     }).then(res => {
     
        this.setState({ empData: res.data });
     })
   };

    render() {
        return(
            
            <Container>
            <Header style={{backgroundColor:'white' ,borderBottomWidth:0}} ><Body style={{alignItems:'center',justifyContent:'flex-end'}} >
            <View style={{alignItems:'center',justifyContent:'flex-end',marginBottom:-25}} >
            <Label style={{fontSize:18,  ...Platform.select({
      ios: {
        fontWeight: 'bold',
      },
     
    }) }} >Employee Profile</Label>
    <Image  style={{width:Dimensions.get('window').width*1}}  source={require('../assets/Icons/top-strip.png')} resizeMode="contain"  />
</View>
</Body>

</Header>
<KeyboardAvoidingView style={{flex:1}} >
<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={{alignItems:'center',justifyContent:'center',flex:4}} >
                    <Thumbnail source={require('../assets/Icons/profile.png')} style={{height:80,width:80,borderRadius:40 }} />
                    <Entypo name="camera" color="gray" size={25} style={{ position: 'absolute',paddingBottom: 45,paddingLeft: 65, }} />
                    <Text style={{fontSize:16}} >{this.state.empData.firstname} {this.state.empData.lastname}</Text>
                    </View></TouchableWithoutFeedback>
                    <View style={{flex:3,justifyContent:'space-between' , marginTop:15,marginLeft:25,marginRight:10 }} >

                    
                    <Text style={{color:'#cacaca'}} >{this.state.empData.employee_id}</Text>
                    {this.state.phoneNo ? <TextInput underlineColorAndroid='transparent' value={this.state.empData.mobileno.toString()} style={{borderBottomWidth:1,borderBottomColor:'gray'}} /> : 
                    <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomColor:'gray',borderBottomWidth:1}} >
                      <Text>{this.state.empData.mobileno}</Text>
                     <Entypo name='edit' size={20} color={'gray'} onPress = {  () => {
       this.setState({phoneNo:true})
       
     } } />
                    </View> }
                    {this.state.username ? <TextInput underlineColorAndroid='transparent' value={this.state.empData.username.toString()}  style={{borderBottomWidth:1,borderBottomColor:'gray'}} /> : 
                    <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomColor:'gray',borderBottomWidth:1}} >
                      <Text>{this.state.empData.username}</Text>
                     <Entypo name='edit' size={20} color={'gray'} onPress = {  () => {
       this.setState({username:true})
       
     } } />
                    </View> }
                    {this.state.password ? <TextInput underlineColorAndroid='transparent' value={this.state.empData.password.toString()}  style={{borderBottomWidth:1,borderBottomColor:'gray'}} /> : 
                    <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomColor:'gray',borderBottomWidth:1}} >
                      <Text>{this.state.empData.password}</Text>
                     <Entypo name='edit' size={20} color={'gray'} onPress = {  () => {
       this.setState({password:true})
       
     } } />
                    </View> }
                    
                    <Text style={{color:'#cacaca'}} >Hyderabad</Text>
                 
                    </View>
                    <View style={{flex:3,justifyContent:'center',alignItems:'center'}} >
                  <TouchableOpacity onPress={()=>{this.props.navigation.navigate('HomePage')}}
                  style={{marginTop:Dimensions.get('window').height*0.1,backgroundColor:'darkblue',
                  alignItems:'center',justifyContent:'center', shadowOffset:{height:0,width:0},shadowOpacity:0.6,shadowColor:'gray'
                   ,width:Dimensions.get('window').width*0.4,height:Dimensions.get('window').height*0.06,borderRadius:10,
                   borderBottomLeftRadius:30,borderBottomRightRadius:30,borderTopLeftRadius:30,borderTopRightRadius:30 }} >
                  <Text style={{color:'white'}} >Update</Text> 
                  </TouchableOpacity>
                  </View>
                  </KeyboardAvoidingView>
                
           </Container>
        );
    }
}

export default Edit;