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
  ToastAndroid,
  FlatList,
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
  Card,
  CardItem,
  Body,
  Label,
  Footer
} from "native-base";

import axios from "react-native-axios";

class HolidayPage extends React.Component {
  state = {
    Holidays: [],
    holidays_left: 10
  };

  componentDidMount() {
    axios
      .post("http://pronteff.com/Prontee/api/holidaysdetails", {
        company_id: "CMP-1"
      })
      .then(res => {
        this.setState({ Holidays: res.data });
        console.log(res.data);
        if (res.data.length !== 0) {
          this.setState({ holidays_left: 10 - res.data.length });
        } else {
          this.setState({ holidays_left: 0 });
        }
      });
  }

  render() {
    const list = this.state.Holidays.map((holiday, i) => (
      <Card
        key={i}
        style={{
          paddingTop: 5,
          paddingBottom: 5,
          margin: 10,

          flexDirection: "row",
          justifyContent: "flex-start",

          width: Dimensions.get("window").width * 0.9,

          height: Dimensions.get("window").height * 0.09
        }}
      >
        <CardItem
          style={{
            borderRightWidth: 1,
            flex: 2,
            borderColor: "#cacaca",
            borderBottomRightRadius: 0,
            borderTopRightRadius: 0
          }}
        >
          <Text style={{ fontFamily: "calibri" }}>{holiday.title}</Text>
        </CardItem>
        <CardItem style={{ flex: 3 }}>
          <Text style={{ fontFamily: "calibri" }}>{holiday.hlday_date}</Text>
        </CardItem>
      </Card>
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
                Holiday Calendar
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
          <ScrollView>{list}</ScrollView>
        </Body>
        <Footer
          style={{
            backgroundColor: "white",
            height: Dimensions.get("window").width * 0.3,
            borderTopColor: "white"
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "center"
            }}
          >
            <View style={{ alignItems: "center", marginRight: 5 }}>
              <Text style={{ fontFamily: "calibri" }}>Holidays Left</Text>
              <Text
                style={{
                  fontFamily: "calibri",
                  color: "red",
                  alignItems: "center"
                }}
              >
                {this.state.holidays_left}
              </Text>
            </View>
          </View>
        </Footer>
      </Container>
    );
  }
}

export default HolidayPage;
