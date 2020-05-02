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
  Switch,
} from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";

const USERDATA = [
  {
    title: "First Name",
    subtitle: "Siddham",
  },
  {
    title: "Last Name",
    subtitle: "Sharma",
  },
  {
    title: "User Name",
    subtitle: "Siddham97",
  },
  {
    title: "Gender",
    subtitle: "Male",
  },
  {
    title: "Email Address",
    subtitle: "g1@yahoo.com",
  },
];

function NewsItem({ data }) {
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
            width: 200,
          }}
        >
          {data.title}
        </Text>
        <Text style={{ marginRight: 10, color: "grey" }}>{data.subtitle}</Text>
      </View>
    </View>
  );
}

const AccountDetails = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Account Details" />
      <ScrollView>
        <View style={styles.cardList}>
          <Card style={styles.card}>
            <Text style={styles.cardTitle}>Public Profile</Text>
            <SafeAreaView style={styles.container}>
              <FlatList
                data={USERDATA.slice(0, 4)}
                renderItem={({ item }) => <NewsItem data={item} />}
                keyExtractor={(item) => item.id}
              />
            </SafeAreaView>
          </Card>
        </View>
        <View style={styles.cardList}>
          <Card style={styles.card}>
            <Text style={styles.cardTitle}>Private Details</Text>
            <SafeAreaView style={styles.container}>
              <FlatList
                data={USERDATA.slice(4)}
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

export default AccountDetails;
