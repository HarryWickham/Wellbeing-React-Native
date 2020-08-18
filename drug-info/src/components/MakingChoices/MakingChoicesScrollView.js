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

function cards(data) {
  return (
    <>
      {data.choices.map((element) => {
        return (
          <MakingChoicesCardAndOverlay
            key={element.title}
            title={element.title}
            smallDescription={element.smallDescription}
            image={<FontAwesome name="close" size={ICON_SIZE} color="black" />}
          />
        );
      })}
    </>
  );
}

const MakingChoicesScrollView = ({ data }) => {
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
          {cards(data)}
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
