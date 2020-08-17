import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import MakingChoicesCardAndOverlay from "../Common/CardAndOverlay";
import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const ICON_SIZE = 100;

const MakingChoicesScrollView = () => {
  return (
    <View
      style={{
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 3,
      }}
    >
      <View style={styles.fullViewStyle}>
        <View style={styles.titleViewStyle}>
          <Text style={styles.title}>Making Choices</Text>
          <Text style={styles.subTitle}>Tap to expand</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <MakingChoicesCardAndOverlay
            title="Avoid Situations"
            smallDescription="If you don't think you'll be able to resist the pressure to take drugs it may be best to avoid that group of people altogether. Spend time with people who share similar interests. Get involved in a new activity, meet new people."
            image={<FontAwesome name="close" size={ICON_SIZE} color="black" />}
          />
          <MakingChoicesCardAndOverlay
            title="Make An Excuse"
            smallDescription="'I have a lot of work to do tomorrow', 'I reacted badly last time', 'I'm on medication' Saying no can be hard. You don't need to explain yourself - these will do ."
            image={
              <MaterialCommunityIcons
                name="sleep"
                size={ICON_SIZE}
                color="black"
              />
            }
          />
          <MakingChoicesCardAndOverlay
            title="Walk Away"
            smallDescription="Say you have to go to the bathroom or that you need to go and find a friend. You could say you'll do it later and it's likely they'll run out or forget."
            image={
              <FontAwesome5 name="walking" size={ICON_SIZE} color="black" />
            }
          />
          <MakingChoicesCardAndOverlay
            title="Be Assertive"
            smallDescription="3 steps to assertive communication state your answer >>> give your reason >>> show understanding. Showing understanding makes it difficult for people to exert pressure on you."
            image={<FontAwesome name="close" size={ICON_SIZE} color="black" />}
          />
          <MakingChoicesCardAndOverlay
            title="Be A 'Broken Record'"
            smallDescription="Continually saying 'no' in the politest possible way without giving any indication you would consider changing your mind. People will recognise you don't want to partake and you can stand your ground."
            image={<Ionicons name="ios-disc" size={ICON_SIZE} color="black" />}
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
