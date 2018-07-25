import React from 'react';
import {  Alert, TextInput, View, StyleSheet,Image,Dimensions, Text,TouchableOpacity,
   KeyboardAvoidingView, BackHandler,Platform,ToastAndroid, Button,AsyncStorage } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import axios from 'react-native-axios';  

  class SettingsPage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          latitude: null,
          longitude: null,
          error:null,
        };
      }
      
      componentDidMount() {
        navigator.geolocation.getCurrentPosition(
           (position) => {
             console.log("wokeeey");
             console.log(position);
             this.setState({
               latitude: position.coords.latitude,
               longitude: position.coords.longitude,
               error: null,
             });
           },
           (error) => {
          
             this.setState({ error: error.message })},
           { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
          );
          
        }
      render() {
        if(this.state.error != null){
            Alert.alert('Location', 'Turn On location services','OK');
          }
          return(
              <View style={{justifyContent:'center',alignItems:'center',flex:1}} >
              <Text>Attendence PAGE</Text>
              <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
              <Text>{this.state.latitude}</Text>
              <Button title="Submit Attendence" onPress={this._attendenceAsync} />
              </View>
          );
      }
      _attendenceAsync = async () => {
      if((this.state.latitude < 17.450926) && (this.state.latitude > 17.448955) ) {
        if((this.state.longitude < 78.388429) && (this.state.longitude > 78.385987 ) ) {
            Alert.alert('HI','Noted','OK');
        }
      }
      else {
    Alert.alert('HI','Sorry you Are Not in office try again in office','OK');
      }
    }
      _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
      };
    }
    export default SettingsPage;

