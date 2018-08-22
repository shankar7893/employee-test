import React from 'react';
import {  Alert, TextInput, View, StyleSheet,Image,Dimensions, Text,TouchableOpacity,
   KeyboardAvoidingView, BackHandler,Platform,ToastAndroid, Button,AsyncStorage,ActivityIndicator,StatusBar, } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import axios from 'react-native-axios';
import Success from './Success';
import AttendenceScreen from './AttendenceScreen';

  class SettingsPage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          latitude: null,
          longitude: null,
          error:null,
        };
      }
      
     async componentDidMount() {
        const unique_id =   await AsyncStorage.getItem('uniqueId'); 
        if(unique_id != null ) {
          this.props.navigation.navigate('Success');
        };
        if(unique_id == null){
        navigator.geolocation.getCurrentPosition(
           (position) => {
             if((position.coords.latitude < 17.450926) && (position.coords.latitude > 17.448955) ) {
              if((position.coords.longitude < 78.388429) && (position.coords.longitude > 78.385987 ) ) {
                 // Alert.alert('HI','Noted','OK');
                  this.props.navigation.navigate('Success');
              }
            }
           
            

             this.setState({
               latitude: position.coords.latitude,
               longitude: position.coords.longitude,
               error: null,
             });
           },
           (error) => {
            this.props.navigation.navigate('AttendenceScreen');
             this.setState({ error: error.message })},
           { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
          );
        }
        }
        render() {
          return (
            <View style={styles.container}>
              <ActivityIndicator />
              <StatusBar barStyle="default"  />
            </View>
          );
        }
      }
    //   attendenceAsync = async () => {
    //   if((this.state.latitude < 17.450926) && (this.state.latitude > 17.448955) ) {
    //     if((this.state.longitude < 78.388429) && (this.state.longitude > 78.385987 ) ) {
    //        // Alert.alert('HI','Noted','OK');
    //         this.props.navigation.navigate('Success');
    //     }
    //   }
    //   else {
    // //Alert.alert('HI','Sorry you Are Not in office try again in office','OK');
    // this.props.navigation.navigate('AttendenceScreen');

    //   }
    // }
      _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
      };
    
    export default SettingsPage;

      const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
      });