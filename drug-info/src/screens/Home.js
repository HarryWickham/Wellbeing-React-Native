import React, { Component, useState, useEffect } from "react";
import { Text, View, Button, ScrollView, StyleSheet } from "react-native";
import DrugInfoCard from "../components/DrugInfoCard";
import DrugInfoScrollView from "../components/DrugInfoScrollView";
import MakingChoicesCard from "../components/MakingChoicesCard";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Overlay } from "react-native-elements";
import MakingChoicesOverlay from "../components/MakingChoicesOverlay";
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

const drugInfo = [
  {
    Cannabis: {
      title: "Cannabis",
      description:
        "The most common form of cannabis is weed which is the dried leaves and flowering parts of a cannabis plant. Skunk is normally twice as strong as the other varieties with a particularly strong smell.",
      image: '{<FontAwesome5 name="cannabis" size={100} color="black" />}',
    },
    Cocaine: {
      title: "Cocaine",
      description:
        "Cocaine refers to a drug in a powder form or crystal form. The powder is usually mixed with substances such as corn starch, talcum powder and/or sugar or other drugs such as local anesthetics or amphetamines.",
      image:
        '{<MaterialCommunityIcons name="weather-tornado" size={100} color="black"/>}',
    },
    Ecstasy: {
      title: "Ecstasy",
      description:
        "As an amphetamine ecstasy is a central nervous system stimulant that increases the activity of the brain.",
      image: '{<FontAwesome5 name="pills" size={100} color="black" />}',
    },
    Ketamine: {
      title: "Ketamine",
      description:
        "A medication that is used to induce loss of consciousness, or anaesthesia. It can produce relaxation and relieve pain in humans and animals. It is a commonly used due to its hallucinogenic, tranquilizing and dissociative effects.",
      image: '{<FontAwesome5 name="capsules" size={100} color="black" />}',
    },
    Nos: {
      title: "NOS",
      description:
        "Nitrous oxide is a colourless gas that is commonly used for sedation and pain relief, but is also used by people to feel intoxicated or high.. It is commonly used by dentists and medical professionals to sedate patients undergoing minor medical procedures.",
      image:
        '{<MaterialCommunityIcons name="diving-scuba-tank" size={100} color="black"/>}',
    },
  },
];

const Home = ({ props }) => {
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.fullScreenStyle}
    >
      <DrugInfoScrollView drugInfo />

      <View style={{ marginBottom: 20 }}>
        <View style={styles.fullViewStyle}>
          <View style={styles.titleViewStyle}>
            <Text style={styles.title}>Making Choices</Text>
            <Text style={styles.subTitle}>Tap to expand</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={toggleOverlay} activeOpacity={0.8}>
              <MakingChoicesCard
                title="Avoid Situations"
                description="If you don't think you'll be able to resist the pressure to take drugs it may be best to avoid that group of people altogether. Spend time with people who share similar interests. Get involved in a new activity, meet new people."
                image={<FontAwesome name="close" size={100} color="black" />}
              />
            </TouchableOpacity>
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
              <View
                style={{
                  width: "85%",
                  height: "85%",
                }}
              >
                <MakingChoicesOverlay
                  title="Avoid Situations"
                  description="If you don't think you'll be able to resist the pressure to take drugs it may be best to avoid that group of people altogether. Spend time with people who share similar interests. Get involved in a new activity, meet new people."
                  image={<FontAwesome name="close" size={100} color="black" />}
                />
              </View>
            </Overlay>
            <MakingChoicesCard
              title="Make An Excuse"
              description="'I have a lot of work to do tomorrow', 'I reacted badly last time', 'I'm on medication' Saying no can be hard. You don't need to explain yourself - these will do ."
              image={
                <MaterialCommunityIcons name="sleep" size={100} color="black" />
              }
            />
            <MakingChoicesCard
              title="Walk Away"
              description="Say you have to go to the bathroom or that you need to go and find a friend. You could say you'll do it later and it's likely they'll run out or forget."
              image={<FontAwesome5 name="walking" size={100} color="black" />}
            />
            <MakingChoicesCard
              title="Be Assertive"
              description="3 steps to assertive communication state your answer >>> give your reason >>> show understanding. Showing understanding makes it difficult for people to exert pressure on you."
              image={<FontAwesome name="close" size={100} color="black" />}
            />
            <MakingChoicesCard
              title="Be A 'Broken Record'"
              description="Continually saying 'no' in the politest possible way without giving any indication you would consider changing your mind. People will recognise you don't want to partake and you can stand your ground."
              image={<Ionicons name="ios-disc" size={100} color="black" />}
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
