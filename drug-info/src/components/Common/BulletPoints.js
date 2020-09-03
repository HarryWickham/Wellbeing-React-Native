import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Button,
} from "react-native";
import OverlayComp from "./Overlay";
import { Overlay } from "react-native-elements";
import * as Speech from "expo-speech";
import Communications from "react-native-communications";

const { height, width } = Dimensions.get("window");

const BulletPoints = ({ title, data, email, phone, contactTitle }) => {
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
    Speech.stop();
  };
  return (
    <View>
      <View style={styles.viewStyle}>
        <TouchableOpacity onPress={toggleOverlay} activeOpacity={0.8}>
          <Text style={styles.titleTextStyle}>{title}</Text>
          <Text style={styles.descTextStyle}>{bulletPointscontent(data)}</Text>
        </TouchableOpacity>
      </View>
      {buttons(email, phone, contactTitle)}
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

function buttons(email, phone, contactTitle) {
  if (email && phone != null) {
    return (
      <View>
        <View
          style={{
            marginHorizontal: 10,
            marginBottom: 10,
            backgroundColor: "white",
            borderRadius: 5,
          }}
        >
          <Button
            title={"E-mail " + contactTitle}
            onPress={() =>
              Communications.email([email], null, null, null, null)
            }
          />
        </View>
        <View
          style={{
            marginHorizontal: 10,
            marginBottom: 10,
            backgroundColor: "white",
            borderRadius: 5,
          }}
        >
          <Button
            title={"Call " + contactTitle}
            onPress={() => Communications.phonecall(phone, true)}
          />
        </View>
      </View>
    );
  } else if (phone != null) {
    return (
      <View
        style={{
          marginHorizontal: 10,
          marginBottom: 10,
          backgroundColor: "white",
          borderRadius: 5,
        }}
      >
        <Button
          title={"Call " + contactTitle}
          onPress={() => Communications.phonecall(phone, true)}
        />
      </View>
    );
  } else if (email != null) {
    return (
      <View
        style={{
          marginHorizontal: 10,
          marginBottom: 10,
          backgroundColor: "white",
          borderRadius: 5,
        }}
      >
        <Button
          title={"E-mail " + contactTitle}
          onPress={() => Communications.email([email], null, null, null, null)}
        />
      </View>
    );
  }
}

function bulletPointscontent(data) {
  if (data != null) {
    return (
      <>
        {data.map((element) => {
          if (element.content != null) {
            return (
              <Text key={element.content}>
                {"• " + element.content + "\r\n"}
              </Text>
            );
          }
          if (element.signs != null && element.action != null) {
            return (
              <Text key={element.signs}>
                {"• " + element.signs + "\r\n" + "↳ " + element.action + "\r\n"}
              </Text>
            );
          }
          if (element.signs != null) {
            return (
              <Text key={element.signs}>{"• " + element.signs + "\r\n"}</Text>
            );
          }
          if (element.action != null) {
            return (
              <Text key={element.action}>{" ↳ " + element.action + "\r\n"}</Text>
            );
          }
        })}
      </>
    );
  }
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
