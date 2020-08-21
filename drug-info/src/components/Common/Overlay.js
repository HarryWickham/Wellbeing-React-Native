import React, { Component } from "react";
import { Text, StyleSheet, View, Image, Button } from "react-native";
import * as Speech from "expo-speech";

const Overlay = ({ title, description, image }) => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.imageViewStyle}>{image}</View>
      <Text style={styles.titleTextStyle}>{title}</Text>
      <Text style={styles.descTextStyle} adjustsFontSizeToFit>
        {description}
      </Text>
      <Button
        title="Text To Speech"
        onPress={() => Speech.speak(description)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#ffffff",
    margin: 10,
    borderRadius: 8,
  },
  titleTextStyle: {
    margin: 5,
    fontSize: 30,
    fontWeight: "bold",
    color: "#008080",
  },
  descTextStyle: {
    marginHorizontal: 5,
    fontSize: 20,
    color: "#008080",
  },
  imageViewStyle: {
    alignItems: "center",
    marginVertical: 5,
  },
});

export default Overlay;
