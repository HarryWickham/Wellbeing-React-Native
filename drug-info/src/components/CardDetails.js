import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const CardDetails = ({ title, description, image, navigation }) => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.imageViewStyle}>
        <Image source={image} style={styles.imageStyle} />
      </View>
      <Text style={styles.titleTextStyle}>{title}</Text>
      <Text style={styles.descTextStyle}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    width: 200,
    height: 380,
    backgroundColor: "#ffffff",
    margin: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  titleTextStyle: {
    margin: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: "#008080",
  },
  descTextStyle: {
    marginHorizontal: 5,
    fontSize: 15,
    color: "#008080",
  },
  imageStyle: {
    width: 100,
    height: 100,
    margin: 20,
  },
  imageViewStyle: {
    alignItems: "center",
  },
});

export default CardDetails;
