import React, { Component } from "react";
import { Text, View, Button } from "react-native";

const BACKGROUND_COLOUR = "#fbb959";

const Help = ({ navigation }) => {
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

export default Help;