import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StackedAreaChart } from "react-native-svg-charts";
import * as shape from "d3-shape";
import Card from "../components/Card";

const data = [
  {
    month: new Date(2015, 0, 1),
    apples: 3840,
    bananas: 1920,
    cherries: 960,
    dates: 400,
  },
  {
    month: new Date(2015, 1, 1),
    apples: 1600,
    bananas: 1440,
    cherries: 960,
    dates: 400,
  },
  {
    month: new Date(2015, 2, 1),
    apples: 640,
    bananas: 960,
    cherries: 3640,
    dates: 400,
  },
  {
    month: new Date(2015, 3, 1),
    apples: 3320,
    bananas: 480,
    cherries: 640,
    dates: 400,
  },
];

const colors = ["#8800cc", "#aa00ff", "#cc66ff", "#eeccff"];
const keys = ["apples", "bananas", "cherries", "dates"];
const svgs = [
  { onPress: () => console.log("apples") },
  { onPress: () => console.log("bananas") },
  { onPress: () => console.log("cherries") },
  { onPress: () => console.log("dates") },
];

const TotalExpenseChart = (props) => {
  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <StackedAreaChart
          style={{ height: 200, paddingVertical: 16 }}
          data={data}
          keys={keys}
          colors={colors}
          curve={shape.curveNatural}
          showGrid={false}
          svgs={svgs}
        />
        {props.children}
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

export default TotalExpenseChart;
