import React from 'react';
import {  Alert, TextInput, View, StyleSheet,Image,Dimensions, Text,TouchableOpacity,
   KeyboardAvoidingView, AsyncStorage, TouchableWithoutFeedback,Keyboard, Platform,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';


import axios from 'react-native-axios';

  class Login extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        username: '',
        password: '',
        errorHandle: false,
      }

    }
        // componentDidMount() {
        // //  this._loadInitialState().done();
        //  BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

        // }
        // handleBackPress = () => {
        //   this.goBack(); // works best when the goBack is async
        //   return true;
        // }} 
 

        // _loadInitialState = async () => {
       
        //  var value = await AsyncStorage.getItem('user');
        //  if (value != null){
           
          
        //    this.props.navigation.navigate('Home');
        //  }
        // }
    
    
    
    // onLogin() {
    //     axios.post('http://192.168.0.162:5000/', {
    //         username: 'prasad',
    //         password: '123456'
    //       })
    //       .then(res => {
    //         console.log(res);
    //         console.log(res.data);
    //         if(res.data != null){
    //           navigate('Home');
    //         }
    //       })
    // }
    
    render() {
      const { navigate } = this.props.navigation;
      

      return (
      <View style={{flex:1, alignItems:'center',justifyContent:'center', backgroundColor:'white' }}>
      
        <KeyboardAvoidingView behavior="padding" style={{flex:5}} >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{justifyContent:'center',alignItems:'center', flex:3}} >
          <Image source={require('../assets/plogo.png')} style={{ width:Dimensions.get('window').width*0.45,
           height:Dimensions.get('window').width*0.45, marginTop:Dimensions.get('window').height*0.09,
           marginBottom:Dimensions.get('window').height*0.09}}  />
         </View></TouchableWithoutFeedback>
         <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={{flex:2}} >
          {/* <TextInput
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
            placeholder={'Username'}
            style={styles.input}
          />
          <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder={'Password'}
            secureTextEntry={true}
            style={styles.input}
          />  */}

          <Form style={{flex:1}}>
            <Item floatingLabel style={styles.input} >
              
              <Input   value={this.state.username}  placeholderTextColor='lightgray' placeholder='Enter your employee id'
            onChangeText={(username) => this.setState({ username })
         
          } style={{fontSize:13}}
             />
            </Item>
           {this.state.errorHandle ? <Text style={{color:'red',fontSize:11,marginLeft:10 }} >Employee ID or Password entered is Invalid</Text> : null }
            <Item floatingLabel style={styles.input} >
              
              <Input placeholderTextColor='lightgray' placeholder='Enter your password' value={this.state.password}
            onChangeText={(password) => this.setState({ password }) } style={{fontSize:13}}
           
            secureTextEntry={true} />
            </Item>
          </Form>
        
          
          </View></TouchableWithoutFeedback>
          </KeyboardAvoidingView>
          
          <View style={{alignItems:'center',justifyContent:'flex-start' ,flex:2}} >
        <TouchableOpacity onPress={async () =>
       
        axios.post('http://192.168.0.130/pasta/api/authenticateemployee', {
            empid: this.state.username,
            password: this.state.password,
          })
          .then(async res => {
             if(res.data.status==='true'){
          await AsyncStorage.setItem('employeeId', res.data.employee_id);
          await AsyncStorage.setItem('companyId', res.data.company_id);
             };
         
            if(res.data.employee_id != null){
            //  await AsyncStorage.setItem('user', res.data.fristname);
            
              navigate('App');
              
            }
            else {
             this.setState({errorHandle : true });
            }
          }).catch((error)=>{
            console.log("Api call error");
            this.setState({errorHandle: true });
            alert(error.message);
         })
       
        } 
        
        style={{marginTop:Dimensions.get('window').height*0.1,backgroundColor:'darkblue',
        alignItems:'center',justifyContent:'center', shadowOffset:{height:0,width:0},shadowOpacity:0.6,shadowColor:'gray'
         ,width:Dimensions.get('window').width*0.4,height:Dimensions.get('window').height*0.06,borderRadius:10,borderBottomLeftRadius:30,borderBottomRightRadius:30,borderTopLeftRadius:30,borderTopRightRadius:30 }} >
        <Text style={{color:'white'}} >Login</Text> 
        </TouchableOpacity>
      </View>
          </View>
      );
    }
  }
  export default Login;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    input: {
      width: Dimensions.get('window').width*0.9,
      height: 44,
      padding: 10,
      borderBottomWidth: 1,
      
      margin: 10,
      borderBottomColor:'lightgray'
    },
  });
  