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
  ToastAndroid
} from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import {
  Container,
  Header,
  Content,
  Accordion,
  Thumbnail,
  Body,
  Title,
  Button,
  Right,
  Label
} from "native-base";

import axios from "react-native-axios";

class AttendenceScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "white", borderBottomWidth: 0 }}>
          <Body style={{ alignItems: "center", justifyContent: "flex-end" }}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "flex-end",
                marginBottom: -25
              }}
            >
              <Label
                style={{
                  fontSize: 18,
                  ...Platform.select({
                    ios: {
                      fontWeight: "bold"
                    }
                  })
                }}
              >
                Attendence
              </Label>
              <Image
                style={{ width: Dimensions.get("window").width * 1 }}
                source={require("../assets/Icons/top-strip.png")}
                resizeMode="contain"
              />
            </View>
          </Body>
        </Header>
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              source={require("../assets/Icons/failed.png")}
              style={{
                height: Dimensions.get("window").width * 0.3,
                width: Dimensions.get("window").width * 0.3,
                borderRadius: Dimensions.get("window").width * 0.15
              }}
            />
            <Text style={{ margin: 10 }}>Failed</Text>
            <Text>
              Try with internet connection or turn on location services
            </Text>
          </View>
        </View>
      </Container>
    );
  }
}
<<<<<<< HEAD

export default AttendenceScreen;

=======

export default AttendenceScreen;
>>>>>>> f894342cd0823ca56dd9dfabed6f09a4dbc186c2
