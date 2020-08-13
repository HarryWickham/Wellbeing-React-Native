import React, { Component, useState, useEffect } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { Overlay } from "react-native-elements";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  FontAwesome,
  Entypo,
  FontAwesome5,
  Foundation,
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import AddictionScreen from "./Addiction";
import GoesWrongScreen from "./GoesWrong";

const BACKGROUND_COLOUR = "#fbb959";

function Addiction() {
  return <AddictionScreen />;
}
function GoesWrong() {
  return <GoesWrongScreen />;
}

const Tab = createMaterialTopTabNavigator();

const HelpHome = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName={"When It Goes Wrong"}
      tabBarOptions={{
        labelStyle: 12,
        showLabel: true,
        activeTintColor: "dodgerblue",
        inactiveTintColor: "black",
      }}
    >
      <Tab.Screen name="When It Goes Wrong" component={GoesWrong} />
      <Tab.Screen name="Addiction" component={Addiction} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  overlayStyle: {},
});

export default HelpHome;
