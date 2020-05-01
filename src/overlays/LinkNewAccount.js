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
      <View style={styles.image}>
        {/* <Icon size={25} name={"ios-images"} /> */}
        <Image
          source={{ uri: data.uri }}
          style={{ width: 50, height: 50, borderRadius: 25 }}
        />
      </View>
      <Text style={{ marginLeft: 25, color: "grey" }}>{data.title}</Text>
    </View>
  );
}

const LinkNewAccount = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#ffff",
      }}
    >
      {DATA.map((item) => (
        <Item data={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
  },
  item: {
    padding: 20,
    backgroundColor: "#ffff",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginHorizontal: 10,
  },
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
  },
});

export default LinkNewAccount;
