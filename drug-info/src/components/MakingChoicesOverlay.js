import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const MakingChoicesOverlay = ({ title, description, image }) => {
  const newLocal = 6;
  return (
    <View style={styles.viewStyle}>
      <View style={styles.imageViewStyle}>{image}</View>
      <Text style={styles.titleTextStyle}>{title}</Text>
      <Text style={styles.descTextStyle} adjustsFontSizeToFit>
        {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#ffffff",
    margin: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
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

export default MakingChoicesOverlay;
