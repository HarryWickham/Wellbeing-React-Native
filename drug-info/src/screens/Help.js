import React, { Component, useState, useEffect } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { Overlay } from "react-native-elements";
import {
  FontAwesome,
  Entypo,
  FontAwesome5,
  Foundation,
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const BACKGROUND_COLOUR = "#fbb959";

const Help = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: BACKGROUND_COLOUR,
      }}
    >
      <Text>Help screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlayStyle: {},
});

export default Help;
