import React, { Component, useState, useEffect } from "react";
import { Text, View, Button, ScrollView, StyleSheet } from "react-native";
import MakingChoicesCard from "./MakingChoicesCard";
import MakingChoicesOverlay from "./MakingChoicesOverlay";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Overlay } from "react-native-elements";

const MakingChoicesCardAndOverlay = ({ title, description, image }) => {
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <View>
      <TouchableOpacity onPress={toggleOverlay} activeOpacity={0.8}>
        <MakingChoicesCard
          title={title}
          description={description}
          image={image}
        />
      </TouchableOpacity>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <View
          style={{
            width: "85%",
            height: "85%",
          }}
        >
          <MakingChoicesOverlay
            title={title}
            description={description}
            image={image}
          />
        </View>
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MakingChoicesCardAndOverlay;
