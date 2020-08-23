import React, { Component } from "react";
import { Text, View, Button, StyleSheet, ScrollView } from "react-native";
import HelpCard from "../../components/Common/HelpCard";

const BACKGROUND_COLOUR = "#fbb959";

const GoesWrong = ({ data }) => {
  return (
    <View showsVerticalScrollIndicator={false} style={styles.fullScreenStyle}>
      <Text>Goes Wrong screen</Text>
      <HelpCard
        title={data.basicAdvice[1].title}
        smallDescription={data.basicAdvice[0].title}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  fullScreenStyle: {
    backgroundColor: BACKGROUND_COLOUR,
    flex: 1,
  },
});
export default GoesWrong;
