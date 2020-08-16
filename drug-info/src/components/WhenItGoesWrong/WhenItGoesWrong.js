import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import WhenItGoesWrongCardAndOverlay from "../Common/CardAndOverlay";
import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const ICON_SIZE = 100;

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
            image={<FontAwesome name="close" size={ICON_SIZE} color="black" />}
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
