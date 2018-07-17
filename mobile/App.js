import React from 'react';
import {  Alert, TextInput, View, StyleSheet,Image,Dimensions, Text,TouchableOpacity } from 'react-native';
import {Button} from 'native-base';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',

    };
   


  }
 
  
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }
  
  render() {
    return (

      <View style={{flex:1, alignItems:'center',justifyContent:'center' }}>
      
      <View style={{justifyContent:'center', flex:3}} >
        <Image source={require('./assets/plogo.png')} style={{ width:Dimensions.get('window').width*0.6,
         height:Dimensions.get('window').width*0.6, marginTop:Dimensions.get('window').height*0.09,
         marginBottom:Dimensions.get('window').height*0.09}}  />
       </View>
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
      <TouchableOpacity onPress={this.onLogin.bind(this)} style={{marginTop:Dimensions.get('window').height*0.1,backgroundColor:'lightblue',
      alignItems:'center',justifyContent:'center', shadowOffset:{height:0,width:0},shadowOpacity:0.6,shadowColor:'gray'
       ,width:Dimensions.get('window').width*0.5,height:44,borderRadius:10 }} >
      <Text>Login</Text> 
      </TouchableOpacity>
    </View>
        </View>
        </View>
    
    );
  }
}

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
