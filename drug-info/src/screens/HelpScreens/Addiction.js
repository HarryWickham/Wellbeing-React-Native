import React, { Component } from "react";
import { Text, View, Button, StyleSheet, ScrollView } from "react-native";
import BulletPoints from "../../components/Common/BulletPoints";
import Frank from "../../components/Common/FrankFooter";
import * as MailComposer from "expo-mail-composer";
import Communications from "react-native-communications";

const BACKGROUND_COLOUR = "#fbb959";

const ICON_SIZE = 100;

function externalAddiction(data) {
  return (
    <>
      {data.externalAddiction.map((element) => {
        return (
          <BulletPoints
            key={element.title}
            title={element.title}
            data={element.bulletPoints}
            email={element.email}
            phone={element.phone}
            contactTitle={element.contactTitle}
          />
        );
      })}
    </>
  );
}

function internalAddiction(data) {
  return (
    <>
      {data.internalAddiction.map((element) => {
        return (
          <BulletPoints
            key={element.title}
            title={element.title}
            data={element.bulletPoints}
            email={element.email}
            phone={element.phone}
            contactTitle={element.contactTitle}
          />
        );
      })}
    </>
  );
}

const Addiction = ({ data }) => {
  return (
    <ScrollView style={{ backgroundColor: "#fbb959" }}>
      <View style={styles.fullViewStyle}>
        <View style={{ backgroundColor: "#FBD499", marginBottom: 10 }}>
          <View style={styles.titleViewStyle}>
            <Text style={styles.title}>
              Getting Addiction Help Inside The University
            </Text>
            <Text style={styles.subTitle}>Tap to expand</Text>
          </View>
          {internalAddiction(data)}
        </View>

        <View style={{ backgroundColor: "#FBD499", marginTop: 10 }}>
          <View style={styles.titleViewStyle}>
            <Text style={styles.title}>
              Getting Addiction Help Outside The University
            </Text>
            <Text style={styles.subTitle}>Tap to expand</Text>
          </View>
          {externalAddiction(data)}
        </View>
      </View>
      <Frank />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  fullViewStyle: {
    backgroundColor: "#fbb959",
    alignItems: "center",
  },
  titleViewStyle: {
    alignContent: "center",
    paddingVertical: 10,
  },
  title: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitle: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
  },
});

export default Addiction;
