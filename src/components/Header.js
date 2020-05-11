import React from "react";
import { View, Text, StyleSheet, Button, StatusBar } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <StatusBar backgroundColor="#1261A0" barStyle="light-content" />
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 55,
    paddingLeft: 10,
    backgroundColor: "#1261A0",
    justifyContent: "center",
  },
  headerTitle: {
    color: "#ffff",
    fontSize: 18,
    fontWeight: "bold",
    width: 200,
  },
});

export default Header;
