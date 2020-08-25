import React, { useState } from "react";
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Collapsible from "react-native-collapsible";
import Icons from "../Common/Icons";

const BasicAdvice = () => {
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
          <Text style={styles.headerText}>Basic Advice</Text>
          <View style={{ alignSelf: "flex-end" }}>
            <Icons iconLib="AntDesign" iconName={UpDown} />
          </View>
        </View>
      </TouchableOpacity>
      <Collapsible collapsed={Collapsed} align="center">
        <View style={styles.content}>
          <Text>Add components here</Text>
        </View>
      </Collapsible>
    </View>
  );
};

export default BasicAdvice;

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
