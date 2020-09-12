import React, { Component } from "react";
import { Text, ScrollView, Button, View } from "react-native";
import HorizontalCard from "../components/Common/HorizontalCard";
import { FontAwesome } from "@expo/vector-icons";
import HorizontalCardAndOverlay from "../components/Common/HorizontalCardAndOverlay";

const BACKGROUND_COLOUR = "#fbb959";

const About = ({ route }) => {
  const data = route.params.data;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: BACKGROUND_COLOUR,
      }}
    >
      <ScrollView>
        <HorizontalCardAndOverlay
          title="Disclaimer: "
          smallDescription={data.disclaimer}
        />
      </ScrollView>
      
    </View>
  );
};

export default About;
