import React, { Component, useState, useEffect } from "react";
import {
  Text,
  View,
  Button,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import Card from "./Card";
import OverlayComp from "./Overlay";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Overlay } from "react-native-elements";

const { height, width } = Dimensions.get("window");

const CardAndOverlay = ({
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
        <Card title={title} smallDescription={smallDescription} image={image} />
      </TouchableOpacity>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <ScrollView
          style={{
            flexGrow: 0,
            width: "85%",
            maxHeight: height * 0.85,
          }}
        >
          <OverlayComp
            title={title}
            description={largeDescription || smallDescription}
            image={image}
          />
        </ScrollView>
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CardAndOverlay;
