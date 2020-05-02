import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import Header from "../components/Header";

const Contacts = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Contact Us" />
      <ScrollView>
        <View style={styles.container2}>
          <Image
            source={require("D:/react_native_demo/Finance-Tracker/assets/Joker.jpg")}
            style={styles.profile}
          />
          <Text>Siddham Sharma</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Contacts;
