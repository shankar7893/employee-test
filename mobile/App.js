import React from "react";
import {
  Alert,
  TextInput,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { Button, BackHandler } from "native-base";
import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import { Font } from "expo";
import Routes from "./components/Routes";
import Login from "./components/Login";
import AttendenceScreen from "./components/AttendenceScreen";
import AuthLoadingScreen from "./components/AuthLoadingScreen";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      calibri: require("./assets/fonts/calibri.ttf")
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    if (this.state.fontLoaded == true) {
      return <Routes />;
    } else {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator animating={true} />

          <Text> hold on for a second</Text>
        </View>
      );
    }
  }
}

// const AppStack = createStackNavigator({ Home: Home, Other: AttendenceScreen },
//   {
//     navigationOptions:{
//       header:null,
//       gesturesEnabled: false,
//    } });
// const AuthStack = createStackNavigator({ SignIn: Login },
//   {
//     navigationOptions:{
//       header:null,
//       gesturesEnabled: false,
//    } });

// const AppNavigation =  createSwitchNavigator(
//   {
//     AuthLoading: AuthLoadingScreen,
//     App: AppStack,
//     Auth: AuthStack,
//   },
//   {
//     initialRouteName: 'AuthLoading',
//   }
// );
