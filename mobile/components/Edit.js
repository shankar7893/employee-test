<<<<<<< HEAD
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
=======
import React from "react";
import {
  Alert,
  TextInput,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  BackHandler,
  Platform,
  ToastAndroid,
  AsyncStorage,
  Animated,
  ScrollView
} from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import {
  Container,
  Header,
  Content,
  Accordion,
  Thumbnail,
  Body,
  Title,
  Button,
  Right,
  Label,
  Icon
} from "native-base";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  Entypo,
  Feather
} from "@expo/vector-icons";
import axios from "react-native-axios";

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empData: [],
      phoneNo: false,
      username: false,
      password: false
    };
  }
  async componentDidMount() {
    let username = await AsyncStorage.getItem("userToken");
    let password = await AsyncStorage.getItem("userPassword");
>>>>>>> f894342cd0823ca56dd9dfabed6f09a4dbc186c2

    axios
      .post("http://192.168.0.168:5000/", {
        username: username,
        password: password
      })
      .then(res => {
        this.setState({ empData: res.data });
      });
  }

<<<<<<< HEAD
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
                    {this.state.phoneNo ? <TextInput  maxLength={10} underlineColorAndroid='transparent' value={this.state.phoneNumber} 
                     onChangeText={(text) => this.setState({  phoneNumber : text }) } style={{borderBottomWidth:1,borderBottomColor:'gray'}} /> : 
                    <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomColor:'#cacaca',borderBottomWidth:1}} >
                      <Text>+91 {this.state.phoneNumber}</Text>
                     <Entypo name='edit' size={20} color={'#cacaca'} onPress = {  () => {
       this.setState({phoneNo:true})
       
     } } />
                    </View> }
                    {this.state.username ? <TextInput underlineColorAndroid='transparent' value={this.state.email}  secureTextEntry={true} 
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
                      
                   }).then(async res => {
                    axios.post('http://192.168.0.130/pasta/api/getempdetails', {
                      empid: await AsyncStorage.getItem('employeeId'),
                      cmpid: await AsyncStorage.getItem('companyId'),
                    }).then(async result => {
                      
                     
                      this.props.navigation.navigate('HomePage',{
                         changed : result.data
                      });
                      
                    })
                     
                     
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
=======
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "white", borderBottomWidth: 0 }}>
          <Body style={{ alignItems: "center", justifyContent: "flex-end" }}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "flex-end",
                marginBottom: -25
              }}
            >
              <Label
                style={{
                  fontSize: 18,
                  ...Platform.select({
                    ios: {
                      fontWeight: "bold"
                    }
                  })
                }}
              >
                Employee Profile
              </Label>
              <Image
                style={{ width: Dimensions.get("window").width * 1 }}
                source={require("../assets/Icons/top-strip.png")}
                resizeMode="contain"
              />
            </View>
          </Body>
        </Header>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 4
              }}
            >
              <Thumbnail
                source={require("../assets/Icons/profile.png")}
                style={{ height: 80, width: 80, borderRadius: 40 }}
              />
              <Entypo
                name="camera"
                color="gray"
                size={25}
                style={{
                  position: "absolute",
                  paddingBottom: 45,
                  paddingLeft: 65
                }}
              />
              <Text style={{ fontSize: 16 }}>
                {this.state.empData.firstname} {this.state.empData.lastname}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <View
            style={{
              flex: 3,
              justifyContent: "space-between",
              marginTop: 15,
              marginLeft: 25,
              marginRight: 10
            }}
          >
            <Text style={{ color: "#cacaca" }}>
              {this.state.empData.employee_id}
            </Text>
            {this.state.phoneNo ? (
              <TextInput
                underlineColorAndroid="transparent"
                value={this.state.empData.mobileno.toString()}
                style={{ borderBottomWidth: 1, borderBottomColor: "gray" }}
              />
            ) : (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomColor: "gray",
                  borderBottomWidth: 1
                }}
              >
                <Text>{this.state.empData.mobileno}</Text>
                <Entypo
                  name="edit"
                  size={20}
                  color={"gray"}
                  onPress={() => {
                    this.setState({ phoneNo: true });
                  }}
                />
              </View>
            )}
            {this.state.username ? (
              <TextInput
                underlineColorAndroid="transparent"
                value={this.state.empData.username.toString()}
                style={{ borderBottomWidth: 1, borderBottomColor: "gray" }}
              />
            ) : (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomColor: "gray",
                  borderBottomWidth: 1
                }}
              >
                <Text>{this.state.empData.username}</Text>
                <Entypo
                  name="edit"
                  size={20}
                  color={"gray"}
                  onPress={() => {
                    this.setState({ username: true });
                  }}
                />
              </View>
            )}
            {this.state.password ? (
              <TextInput
                underlineColorAndroid="transparent"
                value={this.state.empData.password.toString()}
                style={{ borderBottomWidth: 1, borderBottomColor: "gray" }}
              />
            ) : (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomColor: "gray",
                  borderBottomWidth: 1
                }}
              >
                <Text>{this.state.empData.password}</Text>
                <Entypo
                  name="edit"
                  size={20}
                  color={"gray"}
                  onPress={() => {
                    this.setState({ password: true });
                  }}
                />
              </View>
            )}

            <Text style={{ color: "#cacaca" }}>Hyderabad</Text>
          </View>
          <View
            style={{ flex: 3, justifyContent: "center", alignItems: "center" }}
          >
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("HomePage");
              }}
              style={{
                marginTop: Dimensions.get("window").height * 0.1,
                backgroundColor: "darkblue",
                alignItems: "center",
                justifyContent: "center",
                shadowOffset: { height: 0, width: 0 },
                shadowOpacity: 0.6,
                shadowColor: "gray",
                width: Dimensions.get("window").width * 0.4,
                height: Dimensions.get("window").height * 0.06,
                borderRadius: 10,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30
              }}
            >
              <Text style={{ color: "white" }}>Update</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Container>
    );
  }
>>>>>>> f894342cd0823ca56dd9dfabed6f09a4dbc186c2
}

export default Edit;
