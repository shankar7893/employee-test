import React from 'react';
import {  Alert, TextInput, View, StyleSheet,Image,Dimensions, Text,TouchableOpacity,
   KeyboardAvoidingView, AsyncStorage, TouchableWithoutFeedback,Keyboard, Platform} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { BackHandler } from 'native-base';
import Home from './Home';
import axios from 'react-native-axios';

  class Login extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        username: '',
        password: '',
  
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
      
        <KeyboardAvoidingView behavior="padding" style={{flex:1, alignItems:'center',justifyContent:'center' }}>
    
        <View style={{justifyContent:'center', flex:3}} >
          <Image source={require('../assets/plogo.png')} style={{ width:Dimensions.get('window').width*0.6,
           height:Dimensions.get('window').width*0.6, marginTop:Dimensions.get('window').height*0.09,
           marginBottom:Dimensions.get('window').height*0.09}}  />
         </View>
         <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={{flex:3}} >
          <TextInput
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
          /> 
          <View style={{alignItems:'center',justifyContent:'center'}} >
        <TouchableOpacity onPress={async () =>
        axios.post('http://192.168.0.162:5000/', {
            username: this.state.username,
            password: this.state.password
          })
          .then(res => {
            
            AsyncStorage.setItem('userToken', res.data.username);
            AsyncStorage.setItem('userPassword', res.data.password);
            
           console.log(res.data.firstname);
            if(res.data.firstname === 'durga'){
            //  await AsyncStorage.setItem('user', res.data.fristname);
            
              navigate('App');
              
            }
          }) } 
        
        style={{marginTop:Dimensions.get('window').height*0.1,backgroundColor:'lightblue',
        alignItems:'center',justifyContent:'center', shadowOffset:{height:0,width:0},shadowOpacity:0.6,shadowColor:'gray'
         ,width:Dimensions.get('window').width*0.5,height:44,borderRadius:10 }} >
        <Text>Login</Text> 
        </TouchableOpacity>
      </View>
          </View></TouchableWithoutFeedback>
          </KeyboardAvoidingView>
      
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
      borderWidth: 1,
      borderColor: 'black',
      margin: 10,
    },
  });
  