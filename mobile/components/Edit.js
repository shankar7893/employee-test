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
  TouchableWithoutFeedback,
  Keyboard,
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
  createStackNavigator,
  NavigationActions
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
  Icon
} from "native-base";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  Entypo,
  Feather
} from "@expo/vector-icons";
import { Constants, ImagePicker, Permissions } from "expo";
import axios from "react-native-axios";

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee_Id: "",
      email: "",
      companyId: "",
      phoneNumber: "",
      workinglocation: "",
      firstname: "",
      lastname: "",
      imageurl: "y",
      phoneNo: false,
      username: false,
      passwordCheck: false,
      emailValid: true,
      message: "",
      color: false,
      image: null,
      uploading: false
    };
  }
  validateEmail(x) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(x.value) == false) {
      // this.setState({emailValid:false});
    }
  }

  async componentDidMount() {
    const employeeId = await AsyncStorage.getItem("employeeId");
    const companyId = await AsyncStorage.getItem("companyId");

    axios
      .post("https://pronteff.com/Prontee/api/getempdetails", {
        empid: employeeId,
        cmpid: companyId
      })
      .then(async res => {
        let c = res.data;

        this.setState({
          employeeId: c.employee_id,
          companyId: c.company_id,
          email: c.email,
          phoneNumber: c.mobileno,
          workinglocation: c.workinglocation,
          firstname: c.firstname,
          lastname: c.lastname,
          imageurl: c.imageurl,
          password: c.password,
          designation: c.designation
        });
      });
  }
  _pickImage = async () => {
    const { status: cameraRollPerm } = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    // only if user allows permission to camera roll
    if (cameraRollPerm === "granted") {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
        base64: true
      });

      this.setState({ image: pickerResult });
      this.setState({ imageurl: pickerResult.uri });
      // this._handleImagePicked(pickerResult);
    }
  };
  render() {
    return (
      <Container style={{ marginTop: 15 }}>
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
                Employee Profile
              </Label>
              <Image
                style={{ width: Dimensions.get("window").width * 1 }}
                source={require("../assets/Icons/top-strip.png")}
                resizeMode="contain"
              />
            </View>
          </Body>
        </Header>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 4
              }}
            >
              <Thumbnail
                source={{ uri: this.state.imageurl }}
                style={{ height: 80, width: 80, borderRadius: 40 }}
              />
              <Entypo
                name="camera"
                color="#cacaca"
                size={35}
                style={{
                  position: "absolute",
                  paddingBottom: 80,
                  paddingLeft: 70
                }}
                onPress={this._pickImage}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: "#0c1d40",
                  paddingBottom: 5,
                  paddingTop: 10,
                  ...Platform.select({
                    ios: {
                      fontWeight: "bold",
                      fontFamily: "calibri"
                    },
                    android: {
                      fontFamily: "calibri",
                      fontWeight: "bold"
                    }
                  })
                }}
              >
                {this.state.firstname} {this.state.lastname}
              </Text>
              <Text style={{ fontSize: 12, color: "gray" }}>
                {this.state.designation}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <View
            style={{
              flex: 3,
              justifyContent: "space-between",
              marginTop: 15,
              marginLeft: 25,
              marginRight: 10
            }}
          >
            <Text style={{ color: "#cacaca" }}>{this.state.employeeId}</Text>
            {this.state.phoneNo ? (
              <TextInput
                keyboardType="numeric"
                maxLength={10}
                underlineColorAndroid="transparent"
                value={this.state.phoneNumber}
                onChangeText={text => this.setState({ phoneNumber: text })}
                style={{ borderBottomWidth: 1, borderBottomColor: "gray" }}
              />
            ) : (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomColor: "#cacaca",
                  borderBottomWidth: 1
                }}
              >
                <Text>+91 {this.state.phoneNumber}</Text>
                <Entypo
                  name="edit"
                  size={20}
                  color={"#cacaca"}
                  onPress={() => {
                    this.setState({ phoneNo: true });
                  }}
                />
              </View>
            )}
            {this.state.username ? (
              <TextInput
                underlineColorAndroid="transparent"
                value={this.state.email}
                onChangeText={text => this.setState({ email: text })}
                onBlur={this.validateEmail(this.state.email)}
                style={{ borderBottomWidth: 1, borderBottomColor: "gray" }}
              />
            ) : (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomColor: "#cacaca",
                  borderBottomWidth: 1
                }}
              >
                <Text>{this.state.email}</Text>
                <Entypo
                  name="edit"
                  size={20}
                  color={"#cacaca"}
                  onPress={() => {
                    this.setState({ username: true });
                  }}
                />
              </View>
            )}
            {this.state.passwordCheck ? (
              <TextInput
                underlineColorAndroid="transparent"
                maxLength={8}
                secureTextEntry={true}
                value={this.state.password.toString()}
                onChangeText={text => {
                  this.setState({ password: text });
                  if (text.length == 8)
                    Alert.alert(
                      "",
                      "Maximum length is 8 characters only",
                      [{ text: "OK" }],
                      { cancelable: false }
                    );
                }}
                style={{ borderBottomWidth: 1, borderBottomColor: "gray" }}
              />
            ) : (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomColor: "#cacaca",
                  borderBottomWidth: 1
                }}
              >
                <Text style={{ fontFamily: "calibri" }}>Password</Text>
                <Entypo
                  name="edit"
                  size={20}
                  color={"#cacaca"}
                  onPress={() => {
                    this.setState({ passwordCheck: true });
                  }}
                />
              </View>
            )}

            <Text style={{ color: "#cacaca" }}>
              {this.state.workinglocation}
            </Text>
            {this.state.color ? (
              <View style={{ alignItems: "center" }}>
                <Text style={{ color: "green", fontSize: 11 }}>
                  {this.state.message}
                </Text>
              </View>
            ) : (
              <View style={{ alignItems: "center" }}>
                <Text style={{ color: "red", fontSize: 11 }}>
                  {this.state.message}
                </Text>
              </View>
            )}
          </View>
          <View
            style={{
              flex: 3,
              justifyContent: "flex-start",
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              onPress={async () => {
                if (this.state.phoneNumber.length > 9) {
                  if (this.state.email != "") {
                    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.(com)$/;
                    if (reg.test(this.state.email) == false) {
                      this.setState({ message: "Enter valid email" });
                    } else {
                      axios
                        .post(
                          "https://pronteff.com/Prontee/api/updateemployeeprofile",
                          {
                            company_id: this.state.companyId,
                            emp_id: this.state.employeeId,
                            email_id: this.state.email,
                            phone_no: this.state.phoneNumber,
                            password: this.state.password
                          }
                        )
                        .then(async res => {
                          console.log(res.data);
                          if (res.data.status == "true") {
                            this.setState({ message: res.data.message });
                            this.setState({ color: true });
                            axios
                              .post(
                                "https://pronteff.com/Prontee/api/getempdetails",
                                {
                                  empid: this.state.employeeId,
                                  cmpid: this.state.companyId
                                }
                              )
                              .then(async res => {
                                setTimeout(() => {
                                  this.props.navigation.navigate("HomePage", {
                                    empData: res.data
                                  });
                                }, 1000);
                              });
                          } else {
                            this.setState({ message: res.data.message });
                          }
                        });
                    }
                  } else {
                    this.setState({ message: "Please enter email" });
                  }
                } else {
                  this.setState({
                    message: "Phone number should be 10 digits"
                  });
                }
              }}
              style={{
                marginTop: Dimensions.get("window").height * 0.1,
                backgroundColor: "#0c1d40",
                elevation: 2,
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
                Update
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Edit;

//   import React, { Component } from "react";
// import {
//   ActivityIndicator,
//   Button,
//   Clipboard,
//   Image,
//   Share,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View
// } from "react-native";
// import { CheckBox, Body } from "native-base";
// import { Constants, ImagePicker, Permissions } from "expo";

// export default class App extends Component {
//   state = {
//     image: null,
//     uploading: false
//   };

//   render() {
//     let { image } = this.state;

//     return (
//       <View style={styles.container}>
//         <StatusBar barStyle="default" />

//         <Text style={styles.exampleText}>
//           Example: Upload ImagePicker result
//         </Text>

//         <Button
//           onPress={this._pickImage}
//           title="Pick an image from camera roll"
//         />

//         <Button onPress={this._takePhoto} title="Take a photo" />

//         {this._maybeRenderImage()}
//         {this._maybeRenderUploadingOverlay()}
//       </View>
//     );
//   }

//   _maybeRenderUploadingOverlay = () => {
//     if (this.state.uploading) {
//       return (
//         <View style={[StyleSheet.absoluteFill, styles.maybeRenderUploading]}>
//           <ActivityIndicator color="#fff" size="large" />
//         </View>
//       );
//     }
//   };

//   _maybeRenderImage = () => {
//     let { image } = this.state;

//     if (!image) {
//       return;
//     }

//     return (
//       <View style={styles.maybeRenderContainer}>
//         <View style={styles.maybeRenderImageContainer}>
//           <Image source={{ uri: image }} style={styles.maybeRenderImage} />
//         </View>

//         <Text
//           onPress={this._copyToClipboard}
//           onLongPress={this._share}
//           style={styles.maybeRenderImageText}
//         >
//           {image}
//         </Text>
//       </View>
//     );
//   };

//   _share = () => {
//     Share.share({
//       message: this.state.image,
//       title: "Check out this photo",
//       url: this.state.image
//     });
//   };

//   _copyToClipboard = () => {
//     Clipboard.setString(this.state.image);
//     alert("Copied image URL to clipboard");
//   };

//   _takePhoto = async () => {
//     const { status: cameraPerm } = await Permissions.askAsync(
//       Permissions.CAMERA
//     );

//     const { status: cameraRollPerm } = await Permissions.askAsync(
//       Permissions.CAMERA_ROLL
//     );

//     // only if user allows permission to camera AND camera roll
//     if (cameraPerm === "granted" && cameraRollPerm === "granted") {
//       let pickerResult = await ImagePicker.launchCameraAsync({
//         allowsEditing: true,
//         aspect: [4, 3]
//       });

//       this._handleImagePicked(pickerResult);
//     }
//   };

//   _pickImage = async () => {
//     const { status: cameraRollPerm } = await Permissions.askAsync(
//       Permissions.CAMERA_ROLL
//     );

//     // only if user allows permission to camera roll
//     if (cameraRollPerm === "granted") {
//       let pickerResult = await ImagePicker.launchImageLibraryAsync({
//         allowsEditing: true,
//         aspect: [4, 3],
//         base64: true
//       });

//       this._handleImagePicked(pickerResult);
//     }
//   };

//   _handleImagePicked = async pickerResult => {
//     let uploadResponse, uploadResult;

//     try {
//       this.setState({
//         uploading: true
//       });

//       if (!pickerResult.cancelled) {
//         uploadResponse = await uploadImageAsync(pickerResult.uri);
//         uploadResult = await uploadResponse.json();

//         this.setState({
//           image: uploadResult.location
//         });
//       }
//     } catch (e) {
//       console.log({ uploadResponse });
//       console.log({ uploadResult });
//       console.log({ e });
//       alert("Upload failed, sorry :(");
//     } finally {
//       this.setState({
//         uploading: false
//       });
//     }
//   };
// }

// async function uploadImageAsync(uri) {
//   let apiUrl = "https://file-upload-example-backend-dkhqoilqqn.now.sh/upload";

//   // Note:
//   // Uncomment this if you want to experiment with local server
//   //
//   // if (Constants.isDevice) {
//   //   apiUrl = `https://your-ngrok-subdomain.ngrok.io/upload`;
//   // } else {
//   //   apiUrl = `http://localhost:3000/upload`
//   // }

//   let uriParts = uri.split(".");
//   let fileType = uriParts[uriParts.length - 1];

//   let formData = new FormData();
//   formData.append("photo", {
//     uri,

//     name: `photo.${fileType}`,
//     type: `image/${fileType}`
//   });
//   console.log(formData);
//   let options = {
//     method: "POST",
//     body: formData,
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "multipart/form-data"
//     }
//   };

//   return fetch(apiUrl, options);
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: "center",
//     flex: 1,
//     justifyContent: "center"
//   },
//   exampleText: {
//     fontSize: 20,
//     marginBottom: 20,
//     marginHorizontal: 15,
//     textAlign: "center"
//   },
//   maybeRenderUploading: {
//     alignItems: "center",
//     backgroundColor: "rgba(0,0,0,0.4)",
//     justifyContent: "center"
//   },
//   maybeRenderContainer: {
//     borderRadius: 3,
//     elevation: 2,
//     marginTop: 30,
//     shadowColor: "rgba(0,0,0,1)",
//     shadowOpacity: 0.2,
//     shadowOffset: {
//       height: 4,
//       width: 4
//     },
//     shadowRadius: 5,
//     width: 250
//   },
//   maybeRenderImageContainer: {
//     borderTopLeftRadius: 3,
//     borderTopRightRadius: 3,
//     overflow: "hidden"
//   },
//   maybeRenderImage: {
//     height: 250,
//     width: 250
//   },
//   maybeRenderImageText: {
//     paddingHorizontal: 10,
//     paddingVertical: 10
//   }
// });
