import React, { Component, useState, useEffect } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { Overlay } from "react-native-elements";
import MakingChoicesOverlay from "../components/MakingChoicesOverlay";
import {
  FontAwesome,
  Entypo,
  FontAwesome5,
  Foundation,
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const BACKGROUND_COLOUR = "#fbb959";

const Help = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: BACKGROUND_COLOUR,
      }}
    >
      <Button title="Open Overlay" onPress={toggleOverlay} />

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <View style={{ width: "90%", height: "90%" }}>
          <MakingChoicesOverlay
            title="Cannabis"
            description="The most common form of cannabis is weed which is the dried leaves and flowering parts of a cannabis plant. Skunk is normally twice as strong as the other varieties with a particularly strong smell."
            image={<FontAwesome5 name="cannabis" size={100} color="black" />}
          />
        </View>
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  overlayStyle: {},
});

export default Help;
