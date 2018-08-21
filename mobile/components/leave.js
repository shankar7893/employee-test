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
  this.state = {
    isFromDateTimePickerVisible: false,
    isToDateTimePickerVisible: false,
    fromDate: '' ,
    toDate: '',
    reason: false,
    minToDate : new Date() ,
    checkToDate : new Date() ,
    reason : '',
    leavesLeft : 20,
    employeeId : '',
  }
      
    }
    
  _showFromDateTimePicker = () => this.setState({ isFromDateTimePickerVisible: true });
  _showToDateTimePicker = () => this.setState({ isToDateTimePickerVisible: true });
  _hideFromDateTimePicker = () => this.setState({ isFromDateTimePickerVisible: false });
  _hideToDateTimePicker = () => this.setState({ isToDateTimePickerVisible: false });
 
   _handleDatePicked = async (date) => {
    this.setState({fromDate : `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`}	 );
    
  this.setState({minToDate: date});
  
if(this.state.minToDate < this.state.checkToDate ) {
  this._handleToDatePicked(date);
}
    
    
    
    this._hideFromDateTimePicker();
  };
  _handleToDatePicked = (date) => {
    this.setState({toDate : `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}` }	 );
    this.setState({checkToDate: date});
    this._hideToDateTimePicker();
  };
    async componentDidMount (){
        this.setState({leavesLeft : 20});
        const leavesLeft = await AsyncStorage.getItem('leavesLeft');
        if(leavesLeft != null){
        this.setState({leavesLeft: await AsyncStorage.getItem('leavesLeft') });}
        this.setState({employeeId :  await AsyncStorage.getItem('employeeId')  });
        
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
     
    }) }} >Leave Intimation</Label>
    <Image  style={{width:Dimensions.get('window').width*1}}  source={require('../assets/Icons/top-strip.png')} resizeMode="contain"  />
</View>
</Body>

</Header>
<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
           <View style={{flex:1, marginLeft:20,marginRight:20}} >
               <View style={{flex:2,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} >
           <Text>{this.state.employeeId}</Text>
           <View style={{flexDirection:'column',alignItems:'center' }} >
           <Text style={{marginTop:8}} >Leaves Left</Text>
           <Text style={{color:'#1eab07',fontWeight:'bold'}} >{this.state.leavesLeft}</Text></View>
           </View>
          
           <View style={{ flex:1 ,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} >
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
         
        
        />
               </CardItem>
           </Card>
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
        />
               </CardItem>
           </Card>
           </View>
           <View style={{flex:3, marginTop:20}} >
           <Card style={{flex:1}} >
         
             <TextInput underlineColorAndroid='transparent' placeholder='Reason..'   multiline={true}
    numberOfLines={4} value= {this.state.reason} style={{margin:10 }}  onChangeText={(text) => this.setState({  reason: text }) } />
           </Card>
           </View>
           <View style={{flex:4,alignItems:'center',justifyContent:'center'}}>
           <TouchableOpacity onPress={async ()=>{axios.post('http://192.168.0.130/pasta/api/leaverequest', {
             company_id :await AsyncStorage.getItem('companyId') ,
             emp_id :  await AsyncStorage.getItem('employeeId') ,
             dept_id: await AsyncStorage.getItem('departmentId'),
             from_date :this.state.fromDate ,
             to_date:this.state.toDate ,
             desc: this.state.reason ,
           }).then(async res => {
        
             let x = res.data.leaves_left;
             let y = x.toString();
             await AsyncStorage.setItem('leavesLeft', y);
            
             this.setState({leavesLeft : res.data.leaves_left });
             this.setState({fromDate:'' });
             this.setState({toDate:'' });
             this.setState({reason: ''});
             
           }).catch(error => {
             alert('Please Set Date And Try Again');
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