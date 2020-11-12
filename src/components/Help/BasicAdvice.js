import React, { useState } from "react";
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import CollapsibleComp from "../Common/CollapsibleComp";

const BasicAdvice = ({ data }) => {
  return <View style={styles.container}>{CollapsibleComps(data)}</View>;
};

export default BasicAdvice;

function CollapsibleComps(data) {
  return (
    <>
      {data.map((element) => {
        return (
          <CollapsibleComp
            key={element.title}
            data={element.bulletPoints}
            title={element.title}
            smallDescription={element.smallDescription}
          />
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbb959",
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "300",
    marginBottom: 20,
  },
  header: {
    padding: 10,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
  },
  content: {
    padding: 20,
    backgroundColor: "#FBD499",
  },
});
