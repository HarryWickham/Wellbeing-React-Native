import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import WhenItGoesWrongCardAndOverlay from "../Common/CardAndOverlay";
import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const WhenItGoesWrong = () => {
  return (
    <View style={{ marginBottom: 20 }}>
      <View style={styles.fullViewStyle}>
        <View style={styles.titleViewStyle}>
          <Text style={styles.title}>Making Choices</Text>
          <Text style={styles.subTitle}>Tap to expand</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <WhenItGoesWrongCardAndOverlay
            title="Calling An Ambulance"
            smallDescription="If you call an ambulance and tell the crew everything you know about the drugs taken, it could save their life. If you have any drugs left, hand them over to the crew as it may help."
            largeDescription="If you call an ambulance and tell the crew everything you know about the drugs taken, it could save their life. If you have any drugs left, hand them over to the crew as it may help.
            THEY WON'T TELL THE POLICE.
            If the user is experiencing difficulty breathing following use seek medical attention. Call 101 for advice. If symptoms are severe call 999. The same steps should be taken if the user experiences chest pains or loses conciousness."
            image={<FontAwesome name="close" size={100} color="black" />}
          />
          <WhenItGoesWrongCardAndOverlay
            title="Make An Excuse"
            smallDescription="'I have a lot of work to do tomorrow', 'I reacted badly last time', 'I'm on medication' Saying no can be hard. You don't need to explain yourself - these will do ."
            largeDescription=""
            image={
              <MaterialCommunityIcons name="sleep" size={100} color="black" />
            }
          />
          <WhenItGoesWrongCardAndOverlay
            title="Walk Away"
            smallDescription="Say you have to go to the bathroom or that you need to go and find a friend. You could say you'll do it later and it's likely they'll run out or forget."
            largeDescription=""
            image={<FontAwesome5 name="walking" size={100} color="black" />}
          />
          <WhenItGoesWrongCardAndOverlay
            title="Be Assertive"
            smallDescription="3 steps to assertive communication state your answer >>> give your reason >>> show understanding. Showing understanding makes it difficult for people to exert pressure on you."
            largeDescription=""
            image={<FontAwesome name="close" size={100} color="black" />}
          />
          <WhenItGoesWrongCardAndOverlay
            title="Be A 'Broken Record'"
            smallDescription="Continually saying 'no' in the politest possible way without giving any indication you would consider changing your mind. People will recognise you don't want to partake and you can stand your ground."
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

export default WhenItGoesWrong;
