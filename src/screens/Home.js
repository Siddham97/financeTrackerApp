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
  StatusBar,
} from "react-native";
import TotalExpenseChart from "../components/TotalExpenseChart";
import Icon from "react-native-vector-icons/Ionicons";
import Header from "../components/Header";
import Card from "../components/Card";

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
];

const { height } = Dimensions.get("window");

function Item({ data }) {
  return (
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
          <Text style={{ marginLeft: 25, fontSize: 18 }}>{data.subtitle}</Text>
        </View>
      </View>
      <Text style={{ fontSize: 20 }}>{data.price}</Text>
    </View>
  );
}

const Home = (props) => {
  return (
    <View>
      {/* <Header title="Home" /> */}
      <StatusBar backgroundColor="#1261A0" barStyle="light-content" />
      <ScrollView>
        <View>
          <TotalExpenseChart />
          <View style={styles.cardList}>
            <Card style={styles.card}>
              <Text style={styles.cardTitle}>Cash</Text>
              <SafeAreaView style={styles.container}>
                <FlatList
                  data={DATA}
                  renderItem={({ item }) => <Item data={item} />}
                  keyExtractor={(item) => item.id}
                />
              </SafeAreaView>
            </Card>
          </View>
          <View style={styles.cardList}>
            <Card style={styles.card}>
              <Text style={styles.cardTitle}>Investments</Text>
              <SafeAreaView style={styles.container}>
                <FlatList
                  data={DATA}
                  renderItem={({ item }) => <Item data={item} />}
                  keyExtractor={(item) => item.id}
                />
              </SafeAreaView>
            </Card>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
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
});

export default Home;
