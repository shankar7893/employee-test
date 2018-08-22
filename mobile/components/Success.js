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
  KeyboardAvoidingView,
  BackHandler,
  Platform,
  ToastAndroid,
  AsyncStorage
} from "react-native";
import { createBottomTabNavigator } from "react-navigation";
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
  Label
} from "native-base";
<<<<<<< HEAD

import axios from "react-native-axios";


  class Success extends React.Component {
    constructor(props) {
        super(props)
 
        
        
        this.state = {
        unique_id:'' , 
         curTime : `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
         timeStore : '',
        //`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()} ${new Date().getUTCHours()+5}:${new Date().getUTCMinutes()}:${new Date().getUTCSeconds()} ` ,
        }
    }
    async componentDidMount() {
      const employeeId = await AsyncStorage.getItem('employeeId');
  const companyId = await AsyncStorage.getItem('companyId');
  const  departmentId = await AsyncStorage.getItem('departmentId'); 
     
    const unique_id =   await AsyncStorage.getItem('uniqueId');  
    this.setState({timeStore: await AsyncStorage.getItem('timeStore') });
        if(unique_id == null ) 
         axios.post('http://192.168.0.130/pasta/api/markattendance', {
          empid: employeeId,
          company_id: companyId,
          dept_id: departmentId,
          att_date : this.state.curTime ,
          }).then( async res => {
            
            
            await AsyncStorage.setItem('uniqueId', res.data.unique_att_id);
            this.setState({timeStore: new Date().toLocaleString()});
            await AsyncStorage.setItem('timeStore',new Date().toLocaleString() );
          console.log(res.data.unique_att_id);
          }).catch((error)=>{
            console.log(error);
            alert(error.message);
         })
         console.log(this.state.curTime);
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
              <Text style={{ ...Platform.select({
      ios: {
        fontWeight: 'bold',
      },
     
    }),margin:10}} >Success</Text>
            <Text>Attendance submitted at</Text>
            <Text>{this.state.timeStore}</Text>
          </View>
          <View style={{flex:1,justifyContent:'flex-start'}}>
          <TouchableOpacity onPress={ async () => {
          const unique_id =  await AsyncStorage.getItem('uniqueId') ;
           if(unique_id != null){
          
            navigator.geolocation.getCurrentPosition(
              async (position) => {
               
                 if((position.coords.latitude < 17.450926) && (position.coords.latitude > 17.448955) ) {
                  if((position.coords.longitude < 78.388429) && (position.coords.longitude > 78.385987 ) ) {
                     // Alert.alert('HI','Noted','OK');
                     axios.post('http://192.168.0.130/pasta/api/employeeleaveout', {
          
                      att_unique_id : await AsyncStorage.getItem('uniqueId'),
                      leave_out_status : 'true' ,
                    } ).then(res  => {
                      console.log(res.data);
                    
                    }).catch(error => {
                      console.log(error.message);
                    })
                     await AsyncStorage.removeItem('uniqueId');
            
                      console.log('removed');
                   
                  
                  }
                }
               
                  
                  },
                (error) => {
               
                  alert('Turn location on')} ,
                { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
               );
              
              }
              
            }

              
                }

              
                  style={{marginTop:Dimensions.get('window').height*0.1,backgroundColor:'#0c1d40',elevation: 2,
                  alignItems:'center',justifyContent:'center', shadowOffset:{height:0,width:0},shadowOpacity:0.6,shadowColor:'gray'
                   ,width:Dimensions.get('window').width*0.4,height:Dimensions.get('window').height*0.06,
                   borderRadius:10,borderBottomLeftRadius:30,borderBottomRightRadius:30,borderTopLeftRadius:30,borderTopRightRadius:30 }} >
                  <Text style={{color:'white'}} >Leaving out</Text> 
                  </TouchableOpacity>
          

=======

import axios from "react-native-axios";

class Success extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      curTime: new Date().toLocaleString() //`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()} ${new Date().getUTCHours()+5}:${new Date().getUTCMinutes()}:${new Date().getUTCSeconds()} `
    };
  }
  async componentDidMount() {
    const employeeId = await AsyncStorage.getItem("employeeId");
    const companyId = await AsyncStorage.getItem("companyId");
    const departmentId = await AsyncStorage.getItem("departmentId");

    console.log(this.state.curTime);
    axios
      .post("http://192.168.0.130/pasta/api/markattendance", {
        empid: employeeId,
        company_id: companyId,
        dept_id: departmentId,
        att_date: "2018-06-28 12:29:30"
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
        alert(error.message);
      });
  }
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
                Attendence
              </Label>
              <Image
                style={{ width: Dimensions.get("window").width * 1 }}
                source={require("../assets/Icons/top-strip.png")}
                resizeMode="contain"
              />
            </View>
          </Body>
        </Header>
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <View
            style={{ alignItems: "center", justifyContent: "center", flex: 2 }}
          >
            <Image
              source={require("../assets/Icons/success.png")}
              style={{
                height: Dimensions.get("window").width * 0.3,
                width: Dimensions.get("window").width * 0.3,
                borderRadius: Dimensions.get("window").width * 0.15
              }}
            />
            <Text
              style={{
                ...Platform.select({
                  ios: {
                    fontWeight: "bold"
                  }
                }),
                margin: 10
              }}
            >
              Success
            </Text>
            <Text>{this.state.curTime}</Text>
          </View>
          <View style={{ flex: 1, justifyContent: "flex-start" }}>
            <TouchableOpacity
              onPress={console.log("leaving out")}
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
              <Text style={{ color: "white" }}>Leaving out</Text>
            </TouchableOpacity>
>>>>>>> f894342cd0823ca56dd9dfabed6f09a4dbc186c2
          </View>
        </View>
      </Container>
    );
  }
}
export default Success;
