import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 85,
    paddingTop: 36,
    paddingLeft: 20,
    backgroundColor: "#1261A0",
    justifyContent: "center",
    // alignItems: "center",
  },
  headerTitle: {
    color: "#ffff",
    fontSize: 18,
    fontWeight: "bold",
    width: 200,
  },
});

export default Header;
