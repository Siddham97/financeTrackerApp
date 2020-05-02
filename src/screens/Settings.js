import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  ScrollView,
  Dimensions,
  Switch,
} from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";

const SETTINGSDATA = [
  {
    title: "Allow Push Notification",
    subtitle: "Siddham",
  },
  {
    title: "Notify on any transactions",
    subtitle: "Sharma",
  },
  {
    title: "Breaking News notifications",
    subtitle: "Siddham97",
  },
  {
    title: "Net worth milestones",
    subtitle: "Male",
  },
  {
    title: "Allow Location Access",
    subtitle: "g1@yahoo.com",
  },
  {
    title: "Stocks drops of 5%",
    subtitle: "g1@yahoo.com",
  },
  {
    title: "Stocks increases of 5%",
    subtitle: "g1@yahoo.com",
  },
  {
    title: "Crypto drops of 5%",
    subtitle: "g1@yahoo.com",
  },
  {
    title: "Crypto increases of 5%",
    subtitle: "g1@yahoo.com",
  },
];

function NewsItem({ data }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.item}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            marginLeft: 15,
            fontSize: 16,
            fontWeight: "bold",
            width: 250,
          }}
        >
          {data.title}
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#1779c8" }}
          thumbColor={isEnabled ? "#1261A0" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
}

const Settings = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Settings" />
      <ScrollView>
        <View style={styles.cardList}>
          <Card style={styles.card}>
            <Text style={styles.cardTitle}>General Settings</Text>
            <SafeAreaView style={styles.container}>
              <FlatList
                data={SETTINGSDATA.slice(0, 5)}
                renderItem={({ item }) => <NewsItem data={item} />}
                keyExtractor={(item) => item.id}
              />
            </SafeAreaView>
          </Card>
        </View>
        <View style={styles.cardList}>
          <Card style={styles.card}>
            <Text style={styles.cardTitle}>Stock Notifications</Text>
            <SafeAreaView style={styles.container}>
              <FlatList
                data={SETTINGSDATA.slice(5, 7)}
                renderItem={({ item }) => <NewsItem data={item} />}
                keyExtractor={(item) => item.id}
              />
            </SafeAreaView>
          </Card>
        </View>
        <View style={styles.cardList}>
          <Card style={styles.card}>
            <Text style={styles.cardTitle}>Crypto Notifications</Text>
            <SafeAreaView style={styles.container}>
              <FlatList
                data={SETTINGSDATA.slice(7, 9)}
                renderItem={({ item }) => <NewsItem data={item} />}
                keyExtractor={(item) => item.id}
              />
            </SafeAreaView>
          </Card>
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
  container: {
    flexDirection: "row",
  },
  item: {
    padding: 10,
    // marginHorizontal: 16,
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "#E8E8E8",
    justifyContent: "space-between",
  },
  card: {
    width: "95%",
    marginVertical: 10,
    paddingHorizontal: 0,
    paddingVertical: 15,
  },
  cardList: {
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginVertical: 5,
  },
});

export default Settings;
