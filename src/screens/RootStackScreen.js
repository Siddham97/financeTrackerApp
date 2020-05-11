import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "./SplashScreen";
import Login from "./Login";
import Signup from "./Signup";

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="SignInScreen" component={Login} />
    <RootStack.Screen name="SignUpScreen" component={Signup} />
  </RootStack.Navigator>
);

export default RootStackScreen;
