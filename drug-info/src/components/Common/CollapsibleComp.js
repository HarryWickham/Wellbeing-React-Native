import React, { Component, useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import Icons from "./Icons";
import BulletPoints from "../Common/BulletPoints";

const CollapsibleComp = ({ data, title, smallDescription }) => {
  const [Collapsed, setCollapsed] = useState(true);
  const [UpDown, setUpDown] = useState("down");
  const toggleExpanded = () => {
    setCollapsed(!Collapsed);
    if (Collapsed == false) {
      setUpDown("down");
    } else {
      setUpDown("up");
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleExpanded}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{title}</Text>
          <View style={{ alignSelf: "flex-end" }}>
            <Icons iconLib="AntDesign" iconName={UpDown} ICON_SIZE={30} />
          </View>
        </View>
      </TouchableOpacity>
      <Collapsible collapsed={Collapsed} align="center">
        <View style={styles.content}>
          <BulletPoints data={data} title={smallDescription} />
        </View>
      </Collapsible>
    </View>
  );
};

//

export default CollapsibleComp;

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
  titleBox: {
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    flexShrink: 1,
    marginTop: 5,
    marginHorizontal: 5,
  },
  titleTextStyle: {
    margin: 5,
    fontSize: 18,
    fontWeight: "bold",
    color: "#008080",
    textAlign: "center",
  },
});
