import React, { Component } from "react";
import { Text, View, Button, StyleSheet, ScrollView } from "react-native";
import WhenItGoesWrong from "../../components/WhenItGoesWrong/WhenItGoesWrong";

const BACKGROUND_COLOUR = "#fbb959";

const GoesWrong = ({ navigation }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.fullScreenStyle}
    >
      <WhenItGoesWrong />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  fullScreenStyle: {
    backgroundColor: BACKGROUND_COLOUR,
  },
});
export default GoesWrong;
