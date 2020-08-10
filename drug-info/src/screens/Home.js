import React, { Component } from "react";
import { Text, View, Button, ScrollView, StyleSheet } from "react-native";
import CardDetails from "../components/CardDetails";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  FontAwesome,
  Entypo,
  FontAwesome5,
  Foundation,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const BACKGROUND_COLOUR = "#fbb959";

const Home = ({ navigation }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.fullScreenStyle}
    >
      <View style={{ marginBottom: 20 }}>
        <View style={styles.fullViewStyle}>
          <View style={styles.titleViewStyle}>
            <Text style={styles.title}>Drug Information</Text>
            <Text style={styles.subTitle}>Tap to expand</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              onPress={() => navigation.navigate("DrugInfo")}
              activeOpacity={0.8}
            >
              <CardDetails
                title="Cannabis"
                description="The most common form of cannabis is weed which is the dried leaves and flowering parts of a cannabis plant. Skunk is normally twice as strong as the other varieties with a particularly strong smell."
                image={
                  <FontAwesome5 name="cannabis" size={100} color="black" />
                }
              />
            </TouchableOpacity>
            <CardDetails
              title="Cocaine"
              description="Cocaine refers to a drug in a powder form or crystal form. The powder is usually mixed with substances such as corn starch, talcum powder and/or sugar or other drugs such as local anesthetics or amphetamines."
              image={
                <MaterialCommunityIcons
                  name="weather-tornado"
                  size={100}
                  color="black"
                />
              }
            />
            <CardDetails
              title="Ecstasy"
              description="As an amphetamine ecstasy is a central nervous system stimulant that increases the activity of the brain."
              image={<FontAwesome5 name="pills" size={100} color="black" />}
            />
            <CardDetails
              title="Ketamine"
              description="A medication that is used to induce loss of consciousness, or anaesthesia. It can produce relaxation and relieve pain in humans and animals. It is a commonly used due to its hallucinogenic, tranquilizing and dissociative effects."
              image={<FontAwesome5 name="capsules" size={100} color="black" />}
            />
            <CardDetails
              title="NOS"
              description="Nitrous oxide is a colourless gas that is commonly used for sedation and pain relief, but is also used by people to feel intoxicated or high.. It is commonly used by dentists and medical professionals to sedate patients undergoing minor medical procedures."
              image={
                <MaterialCommunityIcons
                  name="diving-scuba-tank"
                  size={100}
                  color="black"
                />
              }
            />
          </ScrollView>
        </View>
      </View>
      <View style={{ marginBottom: 20 }}>
        <View style={styles.fullViewStyle}>
          <View style={styles.titleViewStyle}>
            <Text style={styles.title}>Making Choices</Text>
            <Text style={styles.subTitle}>Tap to expand</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <CardDetails
              title="Cannabis"
              description="The most common form of cannabis is weed which is the dried leaves and flowering parts of a cannabis plant. Skunk is normally twice as strong as the other varieties with a particularly strong smell."
              //image=""
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  fullViewStyle: {
    backgroundColor: "#FBD499",
    alignItems: "center",
  },
  titleViewStyle: {
    alignContent: "center",
    paddingVertical: 10,
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
  fullScreenStyle: {
    backgroundColor: BACKGROUND_COLOUR,
  },
});

export default Home;
