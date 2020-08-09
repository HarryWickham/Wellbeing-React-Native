import React, { Component } from "react";
import { Text, View, Button, ScrollView, StyleSheet } from "react-native";
import CardDetails from "../components/CardDetails";

const BACKGROUND_COLOUR = "#fbb959";

const Home = ({ navigation }) => {
  return (
    <View style={styles.fullViewStyle}>
      <View style={styles.titleViewStyle}>
        <Text style={styles.title}>Drug Information</Text>
        <Text style={styles.subTitle}>Tap to expand</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <CardDetails
          title="Cannabis"
          description="The most common form of cannabis is weed which is the dried leaves and flowering parts of a cannabis plant. Skunk is normally twice as strong as the other varieties with a particularly strong smell."
          image={require("../../assets/icon.png")}
        />
        <CardDetails
          title="Cocaine"
          description="The most common form of cannabis is weed which is the dried leaves and flowering parts of a cannabis plant. Skunk is normally twice as strong as the other varieties with a particularly strong smell."
        />
        <CardDetails
          title="Ecstasy"
          description="A medication that is used to induce loss of consciousness, or anaesthesia. It can produce relaxation and relieve pain in humans and animals. It is a commonly used due to its hallucinogenic, tranquilizing and dissociative effects."
        />
        <CardDetails
          title="Ketamine"
          description="A medication that is used to induce loss of consciousness, or anaesthesia. It can produce relaxation and relieve pain in humans and animals. It is a commonly used due to its hallucinogenic, tranquilizing and dissociative effects."
        />
        <CardDetails
          title="NOS"
          description="Nitrous oxide is a colourless gas that is commonly used for sedation and pain relief, but is also used by people to feel intoxicated or high.. It is commonly used by dentists and medical professionals to sedate patients undergoing minor medical procedures."
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  fullViewStyle: {
    backgroundColor: "#FBD499",
    alignItems: "center",
  },
  titleViewStyle: {
    alignContent: "center",
  },
  title: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitle: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
  },
});

export default Home;
