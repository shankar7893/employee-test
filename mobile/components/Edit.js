import React from 'react';
import {  Alert, TextInput, View, StyleSheet,Image,Dimensions, Text,TouchableOpacity,TouchableWithoutFeedback,Keyboard,
   KeyboardAvoidingView, BackHandler,Platform,ToastAndroid,AsyncStorage,  Animated,ScrollView} from 'react-native';
import { createBottomTabNavigator,createStackNavigator } from 'react-navigation';
import { Container, Header, Content, Accordion, Thumbnail, Body, Title,Button, Right,Label,Icon } from "native-base";
import { Ionicons,FontAwesome,MaterialCommunityIcons,Entypo,
  Feather } from '@expo/vector-icons';
import axios from 'react-native-axios';


class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          employee_Id: '' ,
          email : '' ,
          companyId : '',
          phoneNumber : '' ,
          workinglocation : '',
          firstname : '',
          lastname : '',
          imageurl : 'x' ,
            phoneNo:false,
            username:false,
            passwordCheck:false,
        }
      
    }
   
async componentDidMount (){
  const employeeId = await AsyncStorage.getItem('employeeId');
  const companyId = await AsyncStorage.getItem('companyId');
    
   
                          
  axios.post('http://192.168.0.130/pasta/api/getempdetails', {
    empid: employeeId,
    cmpid: companyId,
  }).then(async res => {
   let c  = res.data;
   
     this.setState({ 
       employeeId : c.employee_id,
       companyId: c.company_id,
       email : c.email,
       phoneNumber : c.mobileno,
       workinglocation : c.workinglocation,
       firstname : c.firstname,
       lastname : c.lastname,
       imageurl : c.imageurl,
       password: c.password,
       designation : c.designation,
      });
     
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
                    <Thumbnail source={{uri: this.state.imageurl }} style={{height:80,width:80,borderRadius:40 }} />
                    <Entypo name="camera" color="#cacaca" size={35} style={{ position: 'absolute',paddingBottom: 80,paddingLeft: 65, }} />
                    <Text style={{fontSize:16, color:'#0c1d40' ,paddingBottom:5, paddingTop:10}} >
                    {this.state.firstname} {this.state.lastname}</Text>
                      <Text style={{fontSize:12,color: '#cacaca' }}>{this.state.designation}</Text>
                    </View></TouchableWithoutFeedback>
                    <View style={{flex:3,justifyContent:'space-between' , marginTop:15,marginLeft:25,marginRight:10 }} >

                    
                    <Text style={{color:'#cacaca'}} >{this.state.employeeId}</Text>
                    {this.state.phoneNo ? <TextInput underlineColorAndroid='transparent' value={this.state.phoneNumber} 
                     onChangeText={(text) => this.setState({  phoneNumber : text }) } style={{borderBottomWidth:1,borderBottomColor:'gray'}} /> : 
                    <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomColor:'#cacaca',borderBottomWidth:1}} >
                      <Text>+91 {this.state.phoneNumber}</Text>
                     <Entypo name='edit' size={20} color={'#cacaca'} onPress = {  () => {
       this.setState({phoneNo:true})
       
     } } />
                    </View> }
                    {this.state.username ? <TextInput underlineColorAndroid='transparent' value={this.state.email} 
                     onChangeText={(text) => this.setState({  email : text }) } style={{borderBottomWidth:1,borderBottomColor:'gray'}} /> : 
                    <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomColor:'#cacaca',borderBottomWidth:1}} >
                      <Text>{this.state.email}</Text>
                     <Entypo name='edit' size={20} color={'#cacaca'} onPress = {  () => {
       this.setState({username:true})
       
     } } />
                    </View> }
                    {this.state.passwordCheck ? <TextInput underlineColorAndroid='transparent' value={this.state.password.toString()} 
                     onChangeText={(text) => this.setState({  password : text }) }    style={{borderBottomWidth:1,borderBottomColor:'gray',}} /> : 
                    <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomColor:'#cacaca',borderBottomWidth:1}} >
                      <Text >Password</Text>
                     <Entypo name='edit' size={20} color={'#cacaca'} onPress = {  () => {
       this.setState({passwordCheck:true})
       
     } } />
                    </View> }
                    
                    <Text style={{color:'#cacaca',  }} >{this.state.workinglocation}</Text>
                 
                    </View>
                    <View style={{flex:3,justifyContent:'flex-start' ,alignItems:'center'}} >
                  <TouchableOpacity onPress={async () => {
                  
                      axios.post('http://192.168.0.130/pasta/api/updateemployeeprofile', {
                       company_id : this.state.companyId ,
                       emp_id : this.state.employeeId ,
                       email_id: this.state.email ,
                       phone_no : this.state.phoneNumber ,
                       password :  this.state.password,
                      
                   }).then(res => {
                     
                     this.props.navigation.navigate('HomePage');
                   }).catch(error => {
                     console.log(error.message);
                   } )
                  }}
                  style={{marginTop:Dimensions.get('window').height*0.1,backgroundColor:'#0c1d40',elevation: 2,
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