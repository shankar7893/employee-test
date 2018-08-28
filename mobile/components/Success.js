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
  AsyncStorage,
  NetInfo
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

import axios from "react-native-axios";


  class Success extends React.Component {
    constructor(props) {
        super(props)
 
        
        
        this.state = {
        unique_id:'' , 
         curTime : `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,
         timeStore : '',
         verifyDate :  new Date().getDate().toString(),
         message:null,
         attendenceSubmitted: false,
         leftOut:false,
        //`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()} ${new Date().getUTCHours()+5}:${new Date().getUTCMinutes()}:${new Date().getUTCSeconds()} ` ,
        }
    }
    async componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
      const employeeId = await AsyncStorage.getItem('employeeId');
  const companyId = await AsyncStorage.getItem('companyId');
  const  departmentId = await AsyncStorage.getItem('departmentId'); 
     
    const unique_id =   await AsyncStorage.getItem('uniqueId');  
    this.setState({timeStore: await AsyncStorage.getItem('timeStore') });
    const checkDate =   await AsyncStorage.getItem('checkDate'); 
    const attendenceSubmitted =  await AsyncStorage.getItem('attendenceSubmitted'); 
    if(attendenceSubmitted=='true'){
      this.setState({message:'Attendence already submitted at'});

    }
    else{
      this.setState({message:'You left out for the day at'});
    }


    
        if(unique_id == null &&(this.state.verifyDate != checkDate ||	checkDate == null ) ) {
          axios.post('https://pronteff.com/Prontee/api/markattendance', {
           empid: employeeId,
           company_id: companyId,
           dept_id: departmentId,
           att_date : this.state.curTime ,
           }).then( async res => {
             
             this.setState({message: res.data.message});
             await AsyncStorage.setItem('uniqueId', res.data.unique_att_id);
             await AsyncStorage.setItem('attendenceSubmitted', 'true');
             this.setState({timeStore: new Date().toLocaleString()});
             await AsyncStorage.setItem('timeStore',new Date().toLocaleString() );
           console.log(res.data.unique_att_id);
           }).catch((error)=>{
             console.log(error);
             alert(error.message);
          })
         }
      
    
    
       
        
      }
      componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }
    handleBackButton() {
     
      return true;
  }
      
   
      render() {
          return(
            <Container>
            <Header style={{backgroundColor:'white' ,borderBottomWidth:0}} ><Body style={{alignItems:'center',justifyContent:'flex-end'}} >
            <View style={{alignItems:'center',justifyContent:'flex-end',marginBottom:-25}} >
            <Label style={{fontSize:18,
                ...Platform.select({
                  ios: {
                    fontWeight: "bold"
                  },
                  android: {
                    fontFamily: 'normal',
                    fontWeight: 'bold',
                  }
                
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
            <Text>{this.state.message}</Text>
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
                     axios.post('https://pronteff.com/Prontee/api/employeeleaveout', {
          
                      att_unique_id : await AsyncStorage.getItem('uniqueId'),
                      leave_out_status : 'true' ,
                    } ).then(async res  => {
                      await AsyncStorage.setItem('attendenceSubmitted', 'false');
                      let x = new Date().getDate();
                      this.setState({timeStore: new Date().toLocaleString()});
                      await AsyncStorage.setItem('timeStore',new Date().toLocaleString() );
            await AsyncStorage.setItem('checkDate', x.toString());
                      this.setState({message: res.data.message});
                     
                    
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
          

          </View>
        </View>
      </Container>
    );
  }
}
export default Success;
