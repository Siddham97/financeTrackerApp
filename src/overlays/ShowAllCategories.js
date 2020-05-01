import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
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
      <View style={{ marginVertical: 10 }}>
        <Icon size={25} name={"ios-arrow-forward"} />
      </View>
    </View>
  );
}

const ShowAllCategories = (props) => {
  return (
    <View>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={props.navigation.getParam("data")}
            renderItem={({ item }) => <Item data={item} />}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
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
});

export default ShowAllCategories;
