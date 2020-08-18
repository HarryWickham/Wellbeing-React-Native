Jimport React, { Component } from "react";
import { Text, View } from "react-native";
import {
  FontAwesome,
  Entypo,
  FontAwesome5,
  AntDesign,
  MaterialIcons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

const Icons = ({ iconLib, iconName, ICON_SIZE }) => {
  if (iconLib == "FontAwesome") {
    return <FontAwesome name={iconName} size={ICON_SIZE} color="black" />;
  } else if (iconLib == "Entypo") {
    return <Entypo name={iconName} size={ICON_SIZE} color="black" />;
  } else if (iconLib == "MaterialCommunityIcons") {
    return (
      <MaterialCommunityIcons name={iconName} size={ICON_SIZE} color="black" />
    );
  } else if (iconLib == "FontAwesome5") {
    return <FontAwesome5 name={iconName} size={ICON_SIZE} color="black" />;
  } else if (iconLib == "AntDesign") {
    return <AntDesign name={iconName} size={ICON_SIZE} color="black" />;
  } else if (iconLib == "MaterialIcons") {
    return <MaterialIcons name={iconName} size={ICON_SIZE} color="black" />;
  } else if (iconLib == "SimpleLineIcons") {
    return <SimpleLineIcons name={iconName} size={ICON_SIZE} color="black" />;
  } else if (iconLib == "Ionicons") {
    return <Ionicons name={iconName} size={ICON_SIZE} color="black" />;
  } else {
    return <FontAwesome5 name="skull-crossbones" size={24} color="black" />;
  }
};

export default Icons;
