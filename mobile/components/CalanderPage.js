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
  ActivityIndicator,
  ToastAndroid,
  ScrollView
} from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import {
  Container,
  Header,
  Content,
  Accordion,
  Thumbnail,
  Button,
  Body,
  Label,
  Card,
  CardItem
} from "native-base";

import axios from "react-native-axios";

class CalenderPage extends React.Component {
  state = {
    events: null,
    clicked: 0
  };
  componentDidMount() {
    axios
      .post("http://pronteff.com/Prontee/api/eventsdetails", {
        company_id: "CMP-1"
      })
      .then(res => {
        // console.log(this.state.events.length);
        this.setState({ events: res.data });
      });
  }

  render() {
    if (this.state.events) {
      const list = this.state.events.map((event, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => {
            this.setState({ clicked: i });
          }}
        >
          <Card
            style={{
              paddingTop: 5,
              paddingBottom: 5,
              margin: 10,

              flexDirection: "row",
              justifyContent: "flex-start",

              width: Dimensions.get("window").width * 0.9,

              height: Dimensions.get("window").height * 0.07
            }}
          >
            <CardItem
              style={{
                borderRightWidth: 1,
                flex: 4,
                borderColor: "#cacaca",
                borderBottomRightRadius: 0,
                borderTopRightRadius: 0
              }}
            >
              <Text style={{ fontFamily: "calibri" }}>{event.title}</Text>
            </CardItem>
            <CardItem style={{ flex: 2 }}>
              <Text style={{ fontFamily: "calibri" }}>{event.date}</Text>
            </CardItem>
          </Card>
        </TouchableOpacity>
      ));
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
                        fontFamily: "calibri",
                        fontWeight: "bold"
                      },
                      android: {
                        fontFamily: "calibri",
                        fontWeight: "bold"
                      }
                    })
                  }}
                >
                  Monthly Events
                </Label>
                <Image
                  style={{ width: Dimensions.get("window").width * 1 }}
                  source={require("../assets/Icons/top-strip.png")}
                  resizeMode="contain"
                />
              </View>
            </Body>
          </Header>

          <Body>
            <View style={{ flex: 3, justifyContent: "center" }}>
              {this.state.events[this.state.clicked] ? (
                <Image
                  source={{
                    uri: `http://192.168.0.131/Prontee/public/logos/${
                      this.state.events[this.state.clicked].image
                    }`
                  }}
                  style={{
                    height: Dimensions.get("window").width * 0.7,
                    width: Dimensions.get("window").width * 0.9
                  }}
                />
              ) : null}

              {this.state.events[this.state.clicked] ? (
                <Text style={{ fontFamily: "calibri", fontSize: 18 }}>
                  {this.state.events[this.state.clicked].title}
                </Text>
              ) : null}
              {this.state.events[this.state.clicked] ? (
                <Text style={{ fontFamily: "calibri", color: "#cacaca" }}>
                  {this.state.events[this.state.clicked].description}
                </Text>
              ) : null}
            </View>
            <View style={{ flex: 2 }}>
              <ScrollView>{list}</ScrollView>
            </View>
          </Body>
        </Container>
      );
    } else {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator animating={true} />
          <Text style={{ fontFamily: "calibri" }}>Hold on for second</Text>
        </View>
      );
    }
  }
}

export default CalenderPage;
