import React, { Component, useState, useEffect } from "react";
import { Text, View, Button, ScrollView, StyleSheet } from "react-native";
import MakingChoicesCard from "./MakingChoicesCard";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Overlay } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import MakingChoicesOverlay from "./MakingChoicesOverlay";
import MakingChoicesCardAndOverlay from "./MakingChoicesCardAndOverlay";
import {
  FontAwesome,
  Entypo,
  FontAwesome5,
  Foundation,
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const MakingChoicesScrollView = ({ drugInfo }) => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const [visible2, setVisible2] = useState(false);
  const toggleOverlay2 = () => {
    setVisible2(!visible2);
  };
  return (
    <View style={{ marginBottom: 20 }}>
      <View style={styles.fullViewStyle}>
        <View style={styles.titleViewStyle}>
          <Text style={styles.title}>Making Choices</Text>
          <Text style={styles.subTitle}>Tap to expand</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <MakingChoicesCardAndOverlay
            title="Avoid Situations"
            description="If you don't think you'll be able to resist the pressure to take drugs it may be best to avoid that group of people altogether. Spend time with people who share similar interests. Get involved in a new activity, meet new people."
            image={<FontAwesome name="close" size={100} color="black" />}
          />
          <MakingChoicesCardAndOverlay
            title="Make An Excuse"
            description="'I have a lot of work to do tomorrow', 'I reacted badly last time', 'I'm on medication' Saying no can be hard. You don't need to explain yourself - these will do ."
            image={
              <MaterialCommunityIcons name="sleep" size={100} color="black" />
            }
          />
          <MakingChoicesCardAndOverlay
            title="Walk Away"
            description="Say you have to go to the bathroom or that you need to go and find a friend. You could say you'll do it later and it's likely they'll run out or forget."
            image={<FontAwesome5 name="walking" size={100} color="black" />}
          />
          <MakingChoicesCardAndOverlay
            title="Be Assertive"
            description="3 steps to assertive communication state your answer >>> give your reason >>> show understanding. Showing understanding makes it difficult for people to exert pressure on you."
            image={<FontAwesome name="close" size={100} color="black" />}
          />
          <MakingChoicesCardAndOverlay
            title="Be A 'Broken Record'"
            description="Continually saying 'no' in the politest possible way without giving any indication you would consider changing your mind. People will recognise you don't want to partake and you can stand your ground."
            image={<Ionicons name="ios-disc" size={100} color="black" />}
          />
        </ScrollView>
      </View>
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
});

export default MakingChoicesScrollView;
