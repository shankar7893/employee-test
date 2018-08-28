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
  AsyncStorage,
  TouchableWithoutFeedback,
  Keyboard,
  Platform
} from "react-native";
import { createStackNavigator } from "react-navigation";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label
} from "native-base";

import axios from "react-native-axios";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null,
      errorHandle: false,
      message: null,
    };
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white"
        }}
      >
        <KeyboardAvoidingView behavior="padding" style={{ flex: 5 }}>
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 3
              }}>
              <Image
                source={require("../assets/plogo.png")}
                style={{
                  width: Dimensions.get("window").width * 0.45,
                  height: Dimensions.get("window").width * 0.45,
                  marginTop: Dimensions.get("window").height * 0.09,
                  marginBottom: Dimensions.get("window").height * 0.09
                }}
              />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            <View style={{ flex: 2 }}>
            
              <Form style={{ flex: 1 }}>
                <Item floatingLabel style={styles.input}>
                  <Input
                    value={this.state.username}
                    placeholderTextColor="lightgray"
                    placeholder="Enter your employee id"
                    onChangeText={username => this.setState({ username })}
                    style={{ fontSize: 13 }}
                  />
                   
                </Item>
                {this.state.message=='Please enter EmployeeID' ?
                 <Text style={{ color: "red", fontSize: 11, marginLeft: 10 }}>{this.state.message}</Text> : null }
                <Item floatingLabel style={styles.input}>
               
               
                  <Input
                    placeholderTextColor="lightgray"
                    placeholder="Enter your password"
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    style={{ fontSize: 13 }}
                    secureTextEntry={true}
                  />
                </Item> 
                {this.state.message!=null ?
                 <Text style={{ color: "red", fontSize: 11, marginLeft: 10 }}>{this.state.message}</Text> : null }
               
              </Form> 
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

        <View
          style={{
            alignItems: "center",
            justifyContent: "flex-start",
            flex: 2
          }}
        >
          <TouchableOpacity
            onPress={async () =>
              
              axios
                .post("https://pronteff.com/Prontee/api/authenticateemployee", {
                  //http://192.168.0.168:5000
                  empid: this.state.username,
                  password: this.state.password
                })
                .then(async res => {
                  console.log(res.data);
                 
                  if(this.state.username==null && this.state.password==null){
                             this.setState({message: 'Please enter EmployeeId and Password'});
                         }
                         else{
                          this.setState({message: res.data.message});
                         }
                  
              //     if(this.state.username == null ){
                    
              //       if(this.state.username==null && this.state.password==null){
              //         this.setState({message: 'Please enter EmployeeId and Password'});
              //     }
              //     else {
              //       this.setState({message: 'Please enter EmployeeID'});
              //     }
              //   }
              //   else {
              //     if(this.state.password==null){
              //       this.setState({message: 'Please enter Password'});
              //     }
              //   }
              //   if(this.state.password==null){
                    
              //     if(this.state.username==null && this.state.password==null){
              //       this.setState({message: 'Please enter EmployeeId and Password'});
              //   }
              //   else {
              //     this.setState({message: 'Please enter Password'});
              //   }
              // }
              // else {
              //   if(this.state.username==null){
              //     this.setState({message: 'Please enter username'});
              //   }
              // }
              // if(res.data.message != null){
              //   this.setState({message: res.data.message});
              // if(this.state.username!=null && this.state.password!=null){
                
              //     this.setState({message: res.data.message });
                
              // }}
                  
                  if (res.data.status === "true") {
                    await AsyncStorage.setItem(
                      "employeeId",
                      res.data.employee_id
                    );
                    await AsyncStorage.setItem(
                      "companyId",
                      res.data.company_id
                    );
                  }

                  if (res.data.employee_id != null) {
                    //  await AsyncStorage.setItem('user', res.data.fristname);

                    navigate("App");
                  } else {
                   
                  }
                })
                .catch(error => {
                  console.log("Api call error");
                  this.setState({ errorHandle: true });
                  alert(error.message);
                })
                
            }
            style={{
              marginTop: Dimensions.get("window").height * 0.1,
              backgroundColor: "#0c1d40",
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
            <Text style={{ color: "white" }}>Login</Text>
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1"
  },
  input: {
    width: Dimensions.get("window").width * 0.9,
    height: 44,
    padding: 10,
    borderBottomWidth: 1,

    margin: 10,
    borderBottomColor: "lightgray"
  }
});
