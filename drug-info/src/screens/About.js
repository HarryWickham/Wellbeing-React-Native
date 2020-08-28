import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import HorizontalCard from "../components/Common/HorizontalCard";
import { FontAwesome } from "@expo/vector-icons";
import { WebView } from "react-native-webview";

const BACKGROUND_COLOUR = "#fbb959";

const About = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: BACKGROUND_COLOUR,
      }}
    >
      <Text>About screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

export default About;
