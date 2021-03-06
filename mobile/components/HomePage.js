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
  AsyncStorage,
  Animated,
  ScrollView,
  NetInfo,
  RefreshControl,
  StatusBar,
  ActivityIndicator
} from "react-native";

import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
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
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  Entypo,
  Feather
} from "@expo/vector-icons";
import axios from "react-native-axios";
import SettingsPage from "./SettingsPage";
import AttendenceScreen from "./AttendenceScreen";
import Success from "./Success";
import Edit from "./Edit";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      empData: null,
      refreshing: false,
      checkDate: new Date().getDate()
    };
    // this.updateInHome = this.updateInHome.bind(this);
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    fetchData().then(() => {
      this.setState({ refreshing: false });
    });
  };

  async componentDidMount() {
    const employeeId = await AsyncStorage.getItem("employeeId");
    const companyId = await AsyncStorage.getItem("companyId");

    axios
      .post("https://pronteff.com/Prontee/api/getempdetails", {
        empid: employeeId,
        cmpid: companyId
      })
      .then(async res => {
        this.setState({ empData: res.data });
        if (res.data.department_id) {
          await AsyncStorage.setItem("departmentId", res.data.department_id);
        }
      });
  }

  render() {
    if (this.state.empData) {
      //  renderEmp () {
      //    return this.state.album
      //  }
      const { navigation } = this.props;
      const empData1 = navigation.getParam("empData", "NO-ID");

      return (
        <Container style={{ marginTop: 15 }}>
          <Header style={{ backgroundColor: "white", borderBottomWidth: 0 }}>
            <Body style={{ flex: 8, alignItems: "flex-end" }}>
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
                Pronteff IT Solutions
              </Label>
            </Body>
            <Right style={{ flex: 3 }}>
              <MaterialCommunityIcons
                name="account-settings-variant"
                size={24}
                color={"gray"}
                // onPress={() => {
                //   this.props.navigation.navigate("Edit");
                // }}
              />
            </Right>
          </Header>

          <View style={{ flex: 1 }}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "space-between",
                flex: 4
              }}
            >
              <View>
                <Image
                  style={{
                    width: Dimensions.get("window").width * 1,
                    height: 10,
                    marginTop: -5
                  }}
                  source={require("../assets/Icons/top-strip.png")}
                  resizeMode="contain"
                />
              </View>
              <View style={{ alignItems: "center" }}>
                <Thumbnail
                  source={{ uri: this.state.empData.imageurl }}
                  style={{ height: 80, width: 80, borderRadius: 40 }}
                />

                <Text
                  style={{
                    fontSize: 15,
                    paddingBottom: 6,
                    paddingTop: 10,
                    color: "#0c1d40",
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
                  {this.state.empData.firstname} {this.state.empData.lastname}
                </Text>
                <Text
                  style={{ fontFamily: "calibri", fontSize: 12, color: "gray" }}
                >
                  {this.state.empData.designation}
                </Text>
              </View>

              <View>
                <Image
                  style={{ width: Dimensions.get("window").width * 1 }}
                  source={require("../assets/Icons/middle-strip.png")}
                  resizeMode="contain"
                />
              </View>
            </View>
            <View
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this._onRefresh}
                />
              }
              style={{
                flex: 2,
                justifyContent: "space-between",
                marginTop: 15,
                marginLeft: 25
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <FontAwesome name="bookmark" size={18} color={"gray"} />
                <Text style={{ marginLeft: 10, color: "#0c1d40" }}>
                  {" "}
                  {this.state.empData.employee_id}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Feather name="phone-call" color={"gray"} size={18} />
                <Text
                  style={{
                    fontFamily: "calibri",
                    marginLeft: 10,
                    color: "#0c1d40"
                  }}
                >
                  +91{" "}
                  {empData1 != "NO-ID"
                    ? empData1.mobileno
                    : this.state.empData.mobileno}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons name="email" size={18} color={"gray"} />
                <Text
                  style={{
                    fontFamily: "calibri",
                    marginLeft: 10,
                    color: "#0c1d40"
                  }}
                >
                  {empData1 != "NO-ID"
                    ? empData1.email
                    : this.state.empData.email}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Entypo name="location-pin" size={18} color={"gray"} />
                <Text
                  style={{
                    fontFamily: "calibri",
                    marginLeft: 10,
                    color: "#0c1d40"
                  }}
                >
                  {this.state.empData.workinglocation}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 4,
                justifyContent: "flex-start",
                alignItems: "center"
              }}
            >
              <TouchableOpacity
                onPress={async () => {
                  const check = await AsyncStorage.getItem("attDate");

                  if (check == this.state.checkDate) {
                    Alert.alert(
                      "",
                      "Sorry you already left out",
                      [{ text: "OK" }],
                      { cancelable: false }
                    );
                  } else {
                    this.props.navigation.navigate("SettingsPage");
                  }
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
                <Text style={{ fontFamily: "calibri", color: "white" }}>
                  Attendance
                </Text>
              </TouchableOpacity>
            </View>
          </View>
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

export default createStackNavigator(
  {
    HomePage: HomePage,
    SettingsPage: SettingsPage,
    Success: Success,
    AttendenceScreen: AttendenceScreen,
    Edit: Edit
  },
  {
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  }
);
