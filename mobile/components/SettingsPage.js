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
  Button,
  AsyncStorage,
  ActivityIndicator,
  StatusBar
} from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import axios from "react-native-axios";
import Success from "./Success";
import AttendenceScreen from "./AttendenceScreen";
import { Constants, Location, Permissions } from "expo";

class SettingsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      verifyDate: new Date().getDate().toString()
    };
  }

  async componentDidMount() {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status == "granted") {
      let location = await Location.getCurrentPositionAsync({});

      console.log(location);
    }

    const checkDate = await AsyncStorage.getItem("checkDate");

    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
    if (this.state.verifyDate != checkDate || checkDate == null) {
      await AsyncStorage.removeItem("uniqueId");
    } else {
      let unique_id = await AsyncStorage.getItem("uniqueId");

      if (unique_id != null && this.state.verifyDate == checkDate) {
        this.props.navigation.navigate("Success");
      }
    }
    let unique_id = await AsyncStorage.getItem("uniqueId");
    if (unique_id == null) {
      navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position.coords.latitude);
          if (
            position.coords.latitude < 17.450926 &&
            position.coords.latitude > 17.448955
          ) {
            if (
              position.coords.longitude < 78.388429 &&
              position.coords.longitude > 78.385987
            ) {
              // Alert.alert('HI','Noted','OK');
              this.props.navigation.navigate("Success");
            } else {
              this.props.navigation.navigate("AttendenceScreen");
            }
          } else {
            this.props.navigation.navigate("AttendenceScreen");
          }

          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null
          });
        },
        error => {
          this.props.navigation.navigate("AttendenceScreen");
          this.setState({ error: error.message });
        },
        { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 }
      );
    }
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }
  handleBackButton() {
    return true;
  }
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
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
  this.props.navigation.navigate("Auth");
};

export default SettingsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
