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

const image = { uri: "https://reactjs.org/logo-og.png" };

const navigateToScreen = (route) => () => {
  const navigateAction = NavigationActions.navigate({
    routeName: route,
  });
  this.props.navigation.dispatch(navigateAction);
};

const SideBar = (props) => {
  return (
    <ScrollView>
      {/* <ImageBackground
        source={image}
        style={{ width: undefined, padding: 16, paddingLeft: 48 }}
      > */}
      <View style={styles.container1}>
        <Image
          source={require("D:/react_native_demo/Finance-Tracker/assets/Joker.jpg")}
          style={styles.profile}
        />
        <Text style={styles.name}>Siddham Sharma</Text>
      </View>
      {/* </ImageBackground> */}

      <View style={styles.container2}>
        <DrawerNavigatorItems {...props} />
      </View>
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
});

export default SideBar;
