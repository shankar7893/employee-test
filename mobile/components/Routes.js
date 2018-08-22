<<<<<<< HEAD

import React from 'react';
import {  Alert, TextInput, View, StyleSheet,Image,Dimensions,ActivityIndicator,
    AsyncStorage,StatusBar, Text,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Container, Header, Content, Accordion, Thumbnail,Button, BackHandler } from "native-base";
import { Ionicons,FontAwesome,MaterialCommunityIcons,Entypo,
  Feather } from '@expo/vector-icons';
import Login from './Login';
import AttendenceScreen from './AttendenceScreen';
import AuthLoadingScreen from './AuthLoadingScreen';
import axios from 'react-native-axios';  
import HomePage from './HomePage';
import SettingsPage from './SettingsPage';
import Success from './Success';
import HolidayPage from './HolidayPage';
import CalenderPage from './CalanderPage';
import ChartPage from './ChartPage';
import Leave from './leave';


=======
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
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import {
  Container,
  Header,
  Content,
  Accordion,
  Thumbnail,
  Button,
  BackHandler
} from "native-base";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  Feather
} from "@expo/vector-icons";
import Login from "./Login";
import AttendenceScreen from "./AttendenceScreen";
import AuthLoadingScreen from "./AuthLoadingScreen";
import axios from "react-native-axios";
import HomePage from "./HomePage";
import SettingsPage from "./SettingsPage";
import Success from "./Success";
import HolidayPage from "./HolidayPage";
import CalenderPage from "./CalanderPage";
import ChartPage from "./ChartPage";
import Leave from "./leave";

>>>>>>> f894342cd0823ca56dd9dfabed6f09a4dbc186c2
class Routes extends React.Component {
  render() {
    return <AppNavigation />;
  }
}

const HomeTab = createBottomTabNavigator(
  {
    Attendence: {
      screen: Leave,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Feather name="user-check" size={30} color={tintColor} />
        )
      }
    },
    Calender: {
      screen: CalenderPage,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="calendar" size={30} color={tintColor} />
        )
      }
    },
    Home: {
      screen: HomePage,
      headerTitleStyle: { alignSelf: "center" },
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-home" size={30} color={tintColor} />
        )
      }
    },
    Chart: {
      screen: ChartPage,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name="chart-pie"
            size={30}
            color={tintColor}
          />
        )
      }
    },
    Holiday: {
      screen: HolidayPage,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="calendar-check-o" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    animationEnabled: true,
    swipeEnabled: true,

    tabBarOptions: {
      indicatorStyle: {
        shadowColor: "black",
        shadowOffset: { height: 1, width: 1 },
        opacity: 1,
        shadowRadius: 1
      },
      showLabel: false, // hide labels
<<<<<<< HEAD
      activeTintColor: "#0c1d40", // active icon color
      inactiveTintColor: "gray", // inactive icon color
      style: {
        backgroundColor: "white" // TabBar background
      }

=======
      activeTintColor: "#0000ff", // active icon color
      inactiveTintColor: "#0c1d40", // inactive icon color
      style: {
        backgroundColor: "white" // TabBar background
      }
>>>>>>> f894342cd0823ca56dd9dfabed6f09a4dbc186c2
    }
  }
);
const Attendence = createStackNavigator(
<<<<<<< HEAD
  {
    SettingsPage: SettingsPage,
    Success: Success,
    AttendenceScreen: AttendenceScreen
  },
  {
=======
  {
    SettingsPage: SettingsPage,
    Success: Success,
    AttendenceScreen: AttendenceScreen
  },
  {
>>>>>>> f894342cd0823ca56dd9dfabed6f09a4dbc186c2
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  }
);

const AtendenceStack = createStackNavigator(
  { Home: HomeTab },
  {
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  }
);
const AuthStack = createStackNavigator(
  { SignIn: Login },
  {
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  }
);

const AppNavigation = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: HomeTab,
    Auth: AuthStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);

export default Routes;
