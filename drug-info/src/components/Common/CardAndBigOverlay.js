import React, { Component, useState, useEffect } from "react";
import { Text, View, Button, ScrollView, StyleSheet } from "react-native";
import Card from "./Card";
import OverlayComp from "./BigOverlay";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Overlay } from "react-native-elements";

const CardAndBigOverlay = ({
  title,
  smallDescription,
  largeDescription,
  image,
}) => {
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <View>
      <TouchableOpacity onPress={toggleOverlay} activeOpacity={0.8}>
        <Card title={title} description={smallDescription} image={image} />
      </TouchableOpacity>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <View
          style={{
            width: "85%",
            height: "85%",
          }}
        >
          <OverlayComp
            style={{ flex: 1 }}
            title={title}
            largeDescription={largeDescription}
            image={image}
          />
        </View>
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CardAndBigOverlay;
