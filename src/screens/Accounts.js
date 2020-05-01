import Header from "../components/Header";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
// import DATA from "../data/dataArrays";

export const DATA = [
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

const ButtonClickCheckFunction = () => {
  Alert.alert("Button Clicked");
};

const Accounts = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA.slice(0, 5)}
            renderItem={({ item }) => <Item data={item} />}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
        <View
          style={{ width: "80%", marginHorizontal: "10%" }}
          style={styles.MainContainer}
        >
          {/* <Button title="Link Another Institution" color="#1261A0" /> */}
          <TouchableOpacity
            // activeOpacity={0.5}
            style={styles.SubmitButtonStyle}
            onPress={() => {
              ButtonClickCheckFunction;
            }}
          >
            <Text
              style={styles.TextStyle}
              onPress={() => {
                props.navigation.navigate("NewAccount");
              }}
            >
              Link Another Institution
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
  },
  item: {
    padding: 20,
    // marginHorizontal: 16,
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "#E8E8E8",
    justifyContent: "space-between",
    backgroundColor: "#ffff",
  },
  image: {
    marginHorizontal: 10,
  },
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFFF",
  },
  SubmitButtonStyle: {
    marginVertical: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#1261A0",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  TextStyle: {
    color: "#fff",
    textAlign: "center",
  },
});

export default Accounts;
