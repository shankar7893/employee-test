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
  AsyncStorage,
  KeyboardAvoidingView,
  BackHandler,
  Platform,
  ToastAndroid
} from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import {
  Container,
  Header,
  Content,
  Accordion,
  Thumbnail,
  Button
} from "native-base";

import axios from "react-native-axios";

class ChartPage extends React.Component {
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  render() {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text style={{ fontFamily: "calibri" }}>
          {" "}
          App Building is under process sorry....
        </Text>

        <TouchableOpacity
          onPress={async () => {
            await AsyncStorage.clear();
            this.props.navigation.navigate("Auth");
          }}
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
          <Text style={{ fontFamily: "calibri", color: "white" }}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ChartPage;
