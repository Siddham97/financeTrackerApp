import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  SafeAreaView,
  FlatList,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import TotalExpenseChart from "../components/TotalExpenseChart";
import Card from "../components/Card";

const NEWSDATA = [
  {
    title: "Why the worst may already be over for the global economy",
    subtitle: "Boomerberg - 9 hours ago",
  },
  {
    title: "Boeing ended the week worth $25 billion less than it started",
    subtitle: "Quartz - 1 day ago",
  },
  {
    title:
      "HRD formulating safety guidelines for schools, colleges when they reopen",
    subtitle: "Tez - 3 hours ago",
  },
  {
    title: "Over 32,000 Indians in UAE register to return home",
    subtitle: "QWE - 7 hours ago",
  },
  {
    title: "There are only 4 red zones in Bengal as against 10 shown to govt",
    subtitle: "Content1",
  },
  {
    title: "Third Item",
    subtitle: "Content1",
  },
  {
    title: "Fourth Item",
    subtitle: "Content1",
  },
  {
    title: "Fifth Item",
    subtitle: "Content1",
  },
  {
    title: "Sixth Item",
    subtitle: "Content1",
  },
];

function NewsItem({ data }) {
  return (
    <View style={styles.item}>
      <View style={{ flexDirection: "row" }}>
        <View>
          <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "bold" }}>
            {data.title}
          </Text>
          <Text style={{ marginLeft: 10, color: "grey" }}>{data.subtitle}</Text>
        </View>
      </View>
    </View>
  );
}

const Stock = (props) => {
  return (
    // <View>
    //   <Text>{props.navigation.getParam("data")}</Text>
    // </View>

    <ScrollView>
      <View>
        <TotalExpenseChart />
      </View>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Your Position</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginLeft: "7%" }}>
              <Text style={{ color: "grey" }}>SHARES</Text>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>5.0</Text>
            </View>
            <View style={{ marginLeft: "30%" }}>
              <Text style={{ color: "grey" }}>EQUITY</Text>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>$955.00</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ marginLeft: "7%", marginTop: 20 }}>
              <Text style={{ color: "grey" }}>AVG COST</Text>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>171.46</Text>
            </View>
            <View style={{ marginLeft: "27%", marginTop: 20 }}>
              <Text style={{ color: "grey" }}>PORTFOLIO DIVERSITY</Text>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>7.2%</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "grey",
              marginVertical: 20,
            }}
          >
            <Text style={{ color: "grey", marginLeft: "7%" }}>
              TODAY'S RETURN
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", marginLeft: "27%" }}
            >
              +$20.45(-2.10%)
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "grey",
              marginVertical: 5,
            }}
          >
            <Text style={{ color: "grey", marginLeft: "7%" }}>
              TOTAL RETURN
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", marginLeft: "27%" }}
            >
              +$920.45(-22.10%)
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              // activeOpacity={0.5}
              style={styles.SubmitButtonStyle}
              onPress={() => {}}
            >
              <Text style={styles.TextStyle} onPress={() => {}}>
                Buy
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              // activeOpacity={0.5}
              style={styles.SubmitButtonStyle}
              onPress={() => {}}
            >
              <Text style={styles.TextStyle} onPress={() => {}}>
                Sell
              </Text>
            </TouchableOpacity>
          </View>
        </Card>
        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Recent News</Text>
          <SafeAreaView style={styles.container}>
            <FlatList
              data={NEWSDATA}
              renderItem={({ item }) => <NewsItem data={item} />}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
          {/* <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("ShowAllCategories", {
                    data: DATA,
                  });
                }}
              >
                <View style={styles.allCategories}>
                  <Text style={styles.allCategoriesText}>View All Stories</Text>
                </View>
              </TouchableOpacity> */}
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginVertical: 5,
  },
  card: {
    width: "95%",
    marginVertical: 10,
    paddingHorizontal: 0,
    paddingVertical: 15,
  },
  SubmitButtonStyle: {
    width: "45%",
    marginVertical: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 10,
    marginRight: 5,
    backgroundColor: "#1261A0",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  TextStyle: {
    color: "#fff",
    textAlign: "center",
  },
  item: {
    padding: 20,
    // marginHorizontal: 16,
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "#E8E8E8",
    justifyContent: "space-between",
  },
});

export default Stock;
