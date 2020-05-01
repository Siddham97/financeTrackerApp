import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppContainer from "./src/navigations/AppContainer";
import Header from "./src/components/Header";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <AppContainer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
