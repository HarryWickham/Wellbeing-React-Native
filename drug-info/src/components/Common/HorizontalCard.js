import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const HorizontalCard = ({ title, description, image }) => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.imageViewStyle}>{image}</View>
      <View style={styles.viewStyle2}>
        <Text style={styles.titleTextStyle}>{title}</Text>
        <Text style={styles.descTextStyle} adjustsFontSizeToFit>
          {description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    width: "60%",
    margin: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  viewStyle2: {
    flexDirection: "column",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    justifyContent: "center",
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
    textAlign: "left",
    marginBottom: 5,
  },
  imageViewStyle: {
    alignItems: "center",
    marginHorizontal: 5,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
});

export default HorizontalCard;
