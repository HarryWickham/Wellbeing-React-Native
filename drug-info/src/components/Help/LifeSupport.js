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
import HorizontalCardAndOverlay from "../Common/HorizontalCardAndOverlay";

const LifeSupport = ({ data }) => {
  const [Collapsed, setCollapsed] = useState(false);
  const [UpDown, setUpDown] = useState("up");
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
          <Text style={styles.headerText}>Life Support</Text>
          <View style={{ alignSelf: "flex-end" }}>
            <Icons iconLib="AntDesign" iconName={UpDown} ICON_SIZE={30} />
          </View>
        </View>
      </TouchableOpacity>
      <Collapsible collapsed={Collapsed} align="center">
        <View style={styles.content}>{card(data)}</View>
      </Collapsible>
    </View>
  );
};

export default LifeSupport;

function card(data) {
  return (
    <>
      {data.map((element) => {
        return (
          <HorizontalCardAndOverlay
            key={element.title}
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
    backgroundColor: "#FBD499",
  },
});
