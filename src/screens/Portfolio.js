import Header from "../components/Header";
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
} from "react-native";
import ExpensePieChart from "../components/ExpensePieChart";
import Card from "../components/Card";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import AllStocks from "../overlays/AllStocks";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    subtitle: "Content1",
    price: "$412.12",
    uri: "https://reactjs.org/logo-og.png",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    subtitle: "Content1",
    price: "$156.56",
    uri: "https://picsum.photos/id/237/200/300",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    subtitle: "Content1",
    price: "$768.09",
    uri: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    title: "Fourth Item",
    subtitle: "Content1",
    price: "$416.54",
    uri: "https://picsum.photos/200/300?grayscale",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d75",
    title: "Fifth Item",
    subtitle: "Content1",
    price: "$738.91",
    uri: "https://picsum.photos/200/300/?blur",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d12",
    title: "Third Item",
    subtitle: "Content1",
    price: "$768.09",
    uri: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d70",
    title: "Fourth Item",
    subtitle: "Content1",
    price: "$416.54",
    uri: "https://picsum.photos/200/300?grayscale",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d77",
    title: "Fifth Item",
    subtitle: "Content1",
    price: "$738.91",
    uri: "https://picsum.photos/200/300/?blur",
  },
  {
    id: "58694a0f-3da1-471f-bd96-14551e29d77",
    title: "Sixth Item",
    subtitle: "Content1",
    price: "$738.91",
    uri: "https://picsum.photos/200/300/?blur",
  },
];

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

const randomColor = () =>
  ("#" + ((Math.random() * 0xffffff) << 0).toString(16) + "000000").slice(0, 7);

function Item({ data, props }) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate("Stock"), { data: data };
      }}
    >
      <View style={styles.item}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.image}>
            {/* <Icon size={25} name={"ios-images"} /> */}
            <Image
              source={{ uri: data.uri }}
              style={{ width: 30, height: 30, borderRadius: 30 / 2 }}
            />
          </View>
          <View>
            <Text style={{ marginLeft: 25, color: "grey" }}>{data.title}</Text>
            <Text style={{ marginLeft: 25, fontSize: 18 }}>
              {data.subtitle}
            </Text>
          </View>
        </View>
        <View>
          <View
            style={[
              styles.sharesTextCotainer,
              { backgroundColor: randomColor() },
            ]}
          >
            <Text>
              {data.price.slice(1, 3)}
              {"%"}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

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

const Portfolio = (props) => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Header title="Portfolio" /> */}
      <ScrollView>
        <View>
          <ExpensePieChart />
          <View style={styles.cardList}>
            <Card style={styles.card}>
              <Text style={styles.cardTitle}>Stocks</Text>
              <SafeAreaView style={styles.container}>
                <FlatList
                  data={DATA.slice(0, 4)}
                  renderItem={({ item }) => <Item data={item} props={props} />}
                  keyExtractor={(item) => item.id}
                />
              </SafeAreaView>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("AllStocks", {
                    data: DATA,
                  });
                }}
              >
                <View style={styles.allCategories}>
                  <Text style={styles.allCategoriesText}>View All Stocks</Text>
                </View>
              </TouchableOpacity>
            </Card>
            <Card style={styles.card}>
              <Text style={styles.cardTitle}>Cryptocurrencies</Text>
              <SafeAreaView style={styles.container}>
                <FlatList
                  data={DATA.slice(0, 4)}
                  renderItem={({ item }) => <Item data={item} />}
                  keyExtractor={(item) => item.id}
                />
              </SafeAreaView>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("AllStocks", {
                    data: DATA,
                  });
                }}
              >
                <View style={styles.allCategories}>
                  <Text style={styles.allCategoriesText}>
                    View All Cryptocurrencies
                  </Text>
                </View>
              </TouchableOpacity>
            </Card>
            <Card style={styles.card}>
              <Text style={styles.cardTitle}>Top Stories</Text>
              <SafeAreaView style={styles.container}>
                <FlatList
                  data={NEWSDATA.slice(0, 4)}
                  renderItem={({ item }) => <NewsItem data={item} />}
                  keyExtractor={(item) => item.id}
                />
              </SafeAreaView>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("ShowAllCategories", {
                    data: DATA,
                  });
                }}
              >
                <View style={styles.allCategories}>
                  <Text style={styles.allCategoriesText}>View All Stories</Text>
                </View>
              </TouchableOpacity>
            </Card>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
  cardList: {
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    padding: 20,
    // marginHorizontal: 16,
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "#E8E8E8",
    justifyContent: "space-between",
  },
  image: {
    marginHorizontal: 10,
  },
  allCategories: {
    borderTopWidth: 1,
    borderColor: "#E8E8E8",
  },
  allCategoriesText: {
    fontSize: 15,
    fontWeight: "bold",
    // margin: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    color: "grey",
  },
  sharesTextCotainer: {
    height: 40,
    width: 80,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Portfolio;
