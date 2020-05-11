import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
} from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  createStackNavigator,
  NavigationActions,
} from "react-navigation-stack";
import { AuthContext } from "./context";

const image = { uri: "https://reactjs.org/logo-og.png" };

const navigateToScreen = (route) => () => {
  const navigateAction = NavigationActions.navigate({
    routeName: route,
  });
  this.props.navigation.dispatch(navigateAction);
};

const SideBar = (props) => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <ScrollView>
      {/* <ImageBackground
        source={image}
        style={{ width: undefined, padding: 16, paddingLeft: 48 }}
      > */}
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.container1}>
          <Image
            source={require("D:/react_native_demo/Finance-Tracker/assets/Joker.jpg")}
            style={styles.profile}
          />
          <Text style={styles.name}>Siddham Sharma</Text>
        </View>
      </TouchableOpacity>
      {/* </ImageBackground> */}

      <View style={styles.container2}>
        <DrawerNavigatorItems {...props} />
      </View>
      <TouchableOpacity
        // activeOpacity={0.5}
        style={styles.SubmitButtonStyle}
        onPress={() => {
          signOut();
          // ButtonClickCheckFunction;
        }}
      >
        <Text style={styles.TextStyle} onPress={() => {}}>
          Logout
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#1261A0",
  },
  container2: {
    flex: 1,
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#fff",
    marginTop: "20%",
    marginLeft: 16,
  },
  name: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "400",
    marginVertical: 8,
    marginLeft: 16,
  },
  SubmitButtonStyle: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#1261A0",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  TextStyle: {
    color: "#fff",
    textAlign: "center",
  },
});

export default SideBar;
