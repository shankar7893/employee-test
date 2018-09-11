import React from 'react';
import {  Alert, TextInput, View, StyleSheet,Image,Dimensions, Text,TouchableOpacity,
   KeyboardAvoidingView, BackHandler,Platform,ToastAndroid,AsyncStorage,  Animated,ScrollView,TouchableWithoutFeedback,Keyboard } from 'react-native';
import { createBottomTabNavigator,createStackNavigator } from 'react-navigation';
import { Container, Header, Content, Accordion, Thumbnail, Body, Title,Button, Right,Label, Card, CardItem } from "native-base";
import { Ionicons,FontAwesome,MaterialCommunityIcons,Entypo,EvilIcons,
  Feather } from '@expo/vector-icons';
import axios from 'react-native-axios';
import DateTimePicker from 'react-native-modal-datetime-picker';


class Leave extends React.Component {
    constructor(props) {
        super(props)
       
        var d = new Date();
var year = d.getFullYear();
var month = d.getMonth();
var day = d.getDate();
var c = new Date(year + 1, month, day);
var check = `$(d.getMonth()+1)$(d.getDate())`;
  this.state = {
    isFromDateTimePickerVisible: false,
    isToDateTimePickerVisible: false,
    fromDate: '' ,
    toDate: '',
    reason: false,
    minToDate : new Date() ,
    checkToDate : check ,
    reason : '',
    leavesLeft : '',
    employeeId : '',
    maxDate: c,
  }
      
    }
    
  _showFromDateTimePicker = () => this.setState({ isFromDateTimePickerVisible: true });
  _showToDateTimePicker = () => this.setState({ isToDateTimePickerVisible: true });
  _hideFromDateTimePicker = () => this.setState({ isFromDateTimePickerVisible: false });
  _hideToDateTimePicker = () => this.setState({ isToDateTimePickerVisible: false });
 
   _handleDatePicked = async (date) => {
    if(date.getMonth()+1 <10){
    this.setState({fromDate : `${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()}`}	 );}
else{
  this.setState({fromDate : `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`}	 );
}
    

  this.setState({minToDate: date});
  let checking = this.state.minToDate;
  let checkingday = `${checking.getMonth()+1}${checking.getDate()}`;
 
if(checkingday < this.state.checkToDate ) {
  console.log('hello');
  this._handleToDatePicked(date);
}
    
    
    
    this._hideFromDateTimePicker();
  };
  _handleToDatePicked = (date) => {
    if(date.getMonth()+1 <10){
      
    this.setState({toDate : `${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()}` }	 );}
    else{
      this.setState({toDate : `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}` }	 );
    }
    let set = `${date.getMonth()+1}${date.getDate()}`;
    this.setState({checkToDate: set});
    this._hideToDateTimePicker();
  };
    async componentDidMount (){
    
      const employeeId = await AsyncStorage.getItem('employeeId');
      const companyId = await AsyncStorage.getItem('companyId');                          
  axios.post('https://pronteff.com/Prontee/api/getempdetails', {
    empid: employeeId,
    cmpid: companyId,
  }).then(async res => {
  
     this.setState({leavesLeft : res.data.leaves_left });
     if(res.data.department_id) {
     await AsyncStorage.setItem('departmentId', res.data.department_id);
   } }).catch(error => {
     alert('Check Your Internet Connection');
   })
        
        const leavesLeft = await AsyncStorage.getItem('leavesLeft');
        if(leavesLeft != null){
        this.setState({leavesLeft: await AsyncStorage.getItem('leavesLeft') });}
        this.setState({employeeId :  await AsyncStorage.getItem('employeeId')  });
        
    };
  
  
    render() {
     
        return(
           <Container style={{marginTop:15}} >
            <Header style={{backgroundColor:'white' ,borderBottomWidth:0}} ><Body style={{alignItems:'center',justifyContent:'flex-end'}} >
            <View style={{alignItems:'center',justifyContent:'flex-end',marginBottom:-25 }} >
            <Label style={{fontSize:18,
                ...Platform.select({
                  ios: {
                    fontWeight: "bold"
                  },
                  android: {
                    fontFamily: 'normal',
                    fontWeight: 'bold',
                  }
                
                })
    
     
     }} >Leave Intimation</Label>
    <Image  style={{width:Dimensions.get('window').width*1}}  source={require('../assets/Icons/top-strip.png')} resizeMode="contain"  />
</View>
</Body>

</Header>
<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
           <View style={{flex:1, marginLeft:20,marginRight:20}} >
               <View style={{flex:2,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} >
           <Text style={{color:'#0c1d40'}} >{this.state.employeeId}</Text>
           <View style={{flexDirection:'column',alignItems:'center' }} >
           <Text style={{marginTop:8,color:'#0c1d40'}} >Leaves Left</Text>
           <Text style={{color:'#1eab07'}} >{this.state.leavesLeft}</Text></View>
           </View>
          
           <View style={{ flex:1 ,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} >
          <View style={{flexDirection:'column'}} >
           { this.state.fromDate!=''? <Text>From</Text>:null}
           <Card>
              
               <CardItem >
               <TouchableOpacity onPress={this._showFromDateTimePicker}>
         <View  style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}} >{ this.state.fromDate === '' ?
          <Text style={{color:'#cacaca'}} >From   </Text> : <Text>{this.state.fromDate}</Text> }
           <EvilIcons name="calendar"  size={30} />
           </View>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isFromDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideFromDateTimePicker}
          minimumDate =  { new Date() }
          maximumDate={this.state.maxDate}
        
        />
               </CardItem>
           </Card></View>
           <View style={{flexDirection:'column'}} >
           { this.state.toDate!=''? <Text>To</Text>:null}
           <Card>
              
               <CardItem >
               <TouchableOpacity onPress={this._showToDateTimePicker}>
         <View  style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}} >{ this.state.toDate === '' ? 
         <Text style={{color:'#cacaca'}}>To       </Text> : <Text>{this.state.toDate}</Text> }
           <EvilIcons name="calendar"  size={30} />
           </View>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isToDateTimePickerVisible}
          onConfirm={this._handleToDatePicked}
          onCancel={this._hideToDateTimePicker}
          minimumDate = {this.state.minToDate}
          maximumDate={this.state.maxDate}
        />
               </CardItem>
           </Card></View>
           </View>
           <View style={{flex:3, marginTop:20}} >
           <Card style={{flex:1}} >
             
             <TextInput  underlineColorAndroid='transparent' placeholder='Reason...'   multiline={true}  
    numberOfLines={5} value= {this.state.reason} style={{margin:10,flex:1}}  onChangeText={(text) => this.setState({  reason: text }) } />
           </Card>
           </View>
           <View style={{flex:4,alignItems:'center',justifyContent:'center'}}>
           <TouchableOpacity onPress={async ()=>{axios.post('https://pronteff.com/Prontee/api/leaverequest', {
             company_id :await AsyncStorage.getItem('companyId') ,
             emp_id :  await AsyncStorage.getItem('employeeId') ,
             dept_id: await AsyncStorage.getItem('departmentId'),
             from_date :this.state.fromDate ,
             to_date:this.state.toDate ,
             desc: this.state.reason ,
           }).then(async res => {
            
             console.log(res.data);
             let x = res.data.leaves_left;
             let y = x.toString();
             await AsyncStorage.setItem('leavesLeft', y);
            Alert.alert('',res.data.message,[{text:'ok'}],{cancelable:false});
             this.setState({leavesLeft : res.data.leaves_left });
             this.setState({fromDate:'' });
             this.setState({toDate:'' });
             this.setState({reason: ''});
            
             
           }).catch(error => {
            if(!(this.state.fromDate=='' && this.state.toDate=='' && this.state.reason=='' ) ){
              if(!(this.state.toDate=='' && this.state.reason=='')){
               if(!(this.state.reason=='' || this.state.toDate=='')){
                 if(this.state.fromDate==''){Alert.alert('','Please set from date and try again',[{text:'ok'}],{cancelable:false});}}}
                 else{Alert.alert('','Please set To date and reason ',[{text:'ok'}],{cancelable:false})}
              if(!(this.state.fromDate=='' && this.state.reason=='')){
                if(!(this.state.fromDate=='' || this.state.reason=='')){
                 if(this.state.toDate==''){Alert.alert('','Please set To date and try again',[
                
                   {text: 'OK', }
                 ],
                 {cancelable:false});}}}
                 else{alert('Please set From date and reason')}
               if(!(this.state.fromDate=='' && this.state.toDate=='')){
               if(!(this.state.fromDate=='' || this.state.toDate=='')){
                 if(this.state.reason==''){Alert.alert('','Please set reason and try again',[
                
                   {text: 'OK', }
                 ],
                 {cancelable:false});}}} 
                 else{Alert.alert('','Please set From date and To date',[
                
                   {text: 'OK', }
                 ],
                 {cancelable:false})}
               
               }
            else{
              Alert.alert(
                '',
                'Fill all details',
                [
               
                  {text: 'OK', }
                ],
                {cancelable:false}
              )
            }
           })

           
          }}
                  style={{marginTop:Dimensions.get('window').height*0.1,backgroundColor:'#0c1d40',elevation: 2,
                  alignItems:'center',justifyContent:'center', shadowOffset:{height:0,width:0},shadowOpacity:0.6,shadowColor:'gray'
                   ,width:Dimensions.get('window').width*0.4,height:Dimensions.get('window').height*0.06,borderRadius:10,
                   borderBottomLeftRadius:30,borderBottomRightRadius:30,borderTopLeftRadius:30,borderTopRightRadius:30 }} >
                  <Text style={{color:'white'}} >Send</Text> 
                  </TouchableOpacity>
           </View>
           </View>
           </TouchableWithoutFeedback>
           </Container>
        );
    }
  }

  export default Leave;


    