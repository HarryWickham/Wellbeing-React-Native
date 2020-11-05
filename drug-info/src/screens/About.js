import React, { Component } from "react";
import {
  Text,
  ScrollView,
  Button,
  View,
  Linking,
  StyleSheet,
} from "react-native";
import HorizontalCard from "../components/Common/HorizontalCard";
import { FontAwesome } from "@expo/vector-icons";
import HorizontalCardAndOverlay from "../components/Common/HorizontalCardAndOverlay";
import Communications from "react-native-communications";

const BACKGROUND_COLOUR = "#fbb959";

function sources(data) {
  return (
    <>
      {data.sources.map((element) => {
        return cardWithButton(element);
      })}
    </>
  );
}

function campaign(data) {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewStyle2}>
        <Text style={styles.titleTextStyle}>Writen By: {data.writenBy}</Text>
        <Text style={styles.descTextStyle} adjustsFontSizeToFit>
          {data.writenByContact}
        </Text>
        <View style={{ padding: 10 }}>
          <Button
            title={"Email " + data.writenBy}
            onPress={() =>
              Communications.email(
                [data.writenByContact],
                null,
                null,
                null,
                null
              )
            }
          />
        </View>
        <Text style={styles.titleTextStyle}>
          Developed By: {data.developedBy}
        </Text>
        <Text style={styles.descTextStyle} adjustsFontSizeToFit>
          {data.developedByContact}
        </Text>
        <View style={{ padding: 10 }}>
          <Button
            title={"Email " + data.developedBy}
            onPress={() =>
              Communications.email(
                [data.developedByContact],
                null,
                null,
                null,
                null
              )
            }
          />
        </View>
        <Text style={styles.titleTextStyle}>
          Designed By: {data.designedBy}
        </Text>
      </View>
    </View>
  );
}

function cardWithButton(data) {
  return (
    <View style={styles.viewStyle} key={data.title}>
      <View style={styles.viewStyle2}>
        <Text style={styles.titleTextStyle}>{data.title}</Text>
        <Text style={styles.descTextStyle} adjustsFontSizeToFit>
          {data.url}
        </Text>
        <View style={{ padding: 10 }}>
          <Button
            title={"Visit Website"}
            onPress={() => Linking.openURL(data.url)}
          />
        </View>
      </View>
    </View>
  );
}

const About = ({ route }) => {
  const data = route.params.data;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: BACKGROUND_COLOUR,
      }}
    >
      <ScrollView>
        <HorizontalCardAndOverlay
          title="Disclaimer: "
          smallDescription={data.disclaimer}
        />
        <View style={{ backgroundColor: "#FBD499", marginTop: 15 }}>
          <Text
            style={{
              color: "black",
              fontSize: 30,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Sources
          </Text>
          {sources(data)}
        </View>
        <View style={{ backgroundColor: "#FBD499", marginTop: 15 }}>
          <Text
            style={{
              color: "black",
              fontSize: 30,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Campaign By
          </Text>
          {campaign(data)}
        </View>
      </ScrollView>
    </View>
  );
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
    flexGrow: 1,
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

export default About;
