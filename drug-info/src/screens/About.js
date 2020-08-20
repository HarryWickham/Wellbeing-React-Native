import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import HorizontalCard from "../components/Common/HorizontalCard";
import { FontAwesome } from "@expo/vector-icons";

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
      <HorizontalCard
        title="Choose Wisely"
        description="'Choose a time to talk in privacy when you know you won't be interrupted. It might be good to be on a walk, playing a sport, or doing an activity to make the situation less intense, but still with room to intentionally talk."
        image={<FontAwesome name="tree" size={100} color="black" />}
      />
      <Text>About screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

export default About;
