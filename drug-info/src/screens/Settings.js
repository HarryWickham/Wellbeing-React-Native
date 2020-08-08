import React, { Component } from "react";
import { Text, View, Button } from "react-native";

const BACKGROUND_COLOUR = "#fbb959";

const Settings = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: BACKGROUND_COLOUR,
      }}
    >
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

export default Settings;
