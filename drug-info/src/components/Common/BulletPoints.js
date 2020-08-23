import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import OverlayComp from "./Overlay";
import { Overlay } from "react-native-elements";
import * as Speech from "expo-speech";

const { height, width } = Dimensions.get("window");

const BulletPoints = ({ title, data }) => {
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
    Speech.stop();
  };
  return (
    <View style={styles.viewStyle}>
      <TouchableOpacity onPress={toggleOverlay} activeOpacity={0.8}>
        <Text style={styles.titleTextStyle}>{title}</Text>
        <Text style={styles.descTextStyle}>{bulletPointscontent(data)}</Text>
      </TouchableOpacity>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <ScrollView
          bounces={false}
          style={{
            flexGrow: 0,
            width: "85%",
            maxHeight: height * 0.85,
          }}
        >
          <OverlayComp title={title} description={bulletPointscontent(data)} />
        </ScrollView>
      </Overlay>
    </View>
  );
};

function bulletPointscontent(data) {
  return (
    <>
      {data.map((element) => {
        return (
          <Text key={element.content}>{"• " + element.content + "\r\n"}</Text>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#ffffff",
    margin: 10,
    flexShrink: 1,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    flexDirection: "column",
    justifyContent: "flex-start",
    borderRadius: 8,
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
});

export default BulletPoints;
