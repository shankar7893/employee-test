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
  ScrollView
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
  Label,
  Card,
  CardItem
} from "native-base";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  Entypo,
  EvilIcons,
  Feather
} from "@expo/vector-icons";
import axios from "react-native-axios";
import DateTimePicker from "react-native-modal-datetime-picker";

class Leave extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFromDateTimePickerVisible: false,
      isToDateTimePickerVisible: false,
      fromDate: "",
      toDate: "",
      reason: false
    };
  }

  _showFromDateTimePicker = () =>
    this.setState({ isFromDateTimePickerVisible: true });
  _showToDateTimePicker = () =>
    this.setState({ isToDateTimePickerVisible: true });
  _hideFromDateTimePicker = () =>
    this.setState({ isFromDateTimePickerVisible: false });
  _hideToDateTimePicker = () =>
    this.setState({ isToDateTimePickerVisible: false });

  _handleDatePicked = date => {
    this.setState({
      fromDate: ` ${date.getDate()}-${date.getMonth()}-${date.getFullYear()} `
    });

    this._hideFromDateTimePicker();
  };
  _handleToDatePicked = date => {
    this.setState({
      toDate: ` ${date.getDate()}-${date.getMonth()}-${date.getFullYear()} `
    });

    this._hideToDateTimePicker();
  };
  async componentDidMount() {
    let username = await AsyncStorage.getItem("userToken");
  }

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
                Leave Intimation
              </Label>
              <Image
                style={{ width: Dimensions.get("window").width * 1 }}
                source={require("../assets/Icons/top-strip.png")}
                resizeMode="contain"
              />
            </View>
          </Body>
        </Header>
        <View style={{ flex: 1, marginLeft: 20, marginRight: 20 }}>
          <View
            style={{
              flex: 2,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Text>p10001</Text>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Text style={{ margin: 5 }}>Leaves Left</Text>
              <Text style={{ color: "#1eab07", fontWeight: "bold" }}>15</Text>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Card>
              <CardItem>
                <TouchableOpacity onPress={this._showFromDateTimePicker}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    {this.state.fromDate === "" ? (
                      <Text>From </Text>
                    ) : (
                      <Text>{this.state.fromDate}</Text>
                    )}
                    <EvilIcons name="calendar" size={30} />
                  </View>
                </TouchableOpacity>
                <DateTimePicker
                  isVisible={this.state.isFromDateTimePickerVisible}
                  onConfirm={this._handleDatePicked}
                  onCancel={this._hideFromDateTimePicker}
                />
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <TouchableOpacity onPress={this._showToDateTimePicker}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    {this.state.toDate === "" ? (
                      <Text>To </Text>
                    ) : (
                      <Text>{this.state.toDate}</Text>
                    )}
                    <EvilIcons name="calendar" size={30} />
                  </View>
                </TouchableOpacity>
                <DateTimePicker
                  isVisible={this.state.isToDateTimePickerVisible}
                  onConfirm={this._handleToDatePicked}
                  onCancel={this._hideToDateTimePicker}
                />
              </CardItem>
            </Card>
          </View>
          <View style={{ flex: 3, marginTop: 20 }}>
            <Card style={{ flex: 1 }}>
              <Text style={{ margin: 10 }}>Reason..</Text>
            </Card>
          </View>
          <View
            style={{ flex: 4, alignItems: "center", justifyContent: "center" }}
          >
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("SettingsPage");
              }}
              style={{
                marginTop: Dimensions.get("window").height * 0.1,
                backgroundColor: "darkblue",
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
              <Text style={{ color: "white" }}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    );
  }
}

export default Leave;
