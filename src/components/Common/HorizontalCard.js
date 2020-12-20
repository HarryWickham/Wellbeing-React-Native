import React, { Component } from "react";
import { Text, StyleSheet, View, Image, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const HorizontalCard = ({ title, smallDescription, image }) => {
  if (image != null) {
    return (
      <View style={styles.viewStyle}>
        <View style={styles.imageViewStyle}>{image}</View>
        <View style={styles.viewStyle2}>
          <Text style={styles.titleTextStyle}>{title}</Text>
          <Text style={styles.descTextStyle} adjustsFontSizeToFit>
            {smallDescription}
          </Text>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.viewStyle}>
        <View style={styles.viewStyle2}>
          <Text style={styles.titleTextStyle}>{title}</Text>
          <Text style={styles.descTextStyle} adjustsFontSizeToFit>
            {smallDescription}
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  viewStyle: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  viewStyle2: {
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    flexShrink: 1,
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
    marginRight: 5,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    flexShrink: 0,
  },
});

export default HorizontalCard;
