import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import {
  createMaterialTopTabNavigator,
  createAppContainer,
} from "react-navigation";
import CannabisScreen from "./Cannabis";
const BACKGROUND_COLOUR = "#fbb959";

const DrugInfo = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: BACKGROUND_COLOUR,
      }}
    >
      <Text>DrugInfo screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};
export default DrugInfo;
