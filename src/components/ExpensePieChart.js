import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { PieChart } from "react-native-svg-charts";
import Card from "../components/Card";

const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

const randomColor = () =>
  ("#" + ((Math.random() * 0xffffff) << 0).toString(16) + "000000").slice(0, 7);

const pieData = data
  .filter((value) => value > 0)
  .map((value, index) => ({
    value,
    svg: {
      fill: randomColor(),
      onPress: () => console.log("press", index),
    },
    key: `pie-${index}`,
  }));

const ExpensePieChart = (props) => {
  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <PieChart style={{ height: 200 }} data={pieData} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "95%",
    marginVertical: 20,
  },
});

export default ExpensePieChart;
