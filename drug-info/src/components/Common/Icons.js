import React, { Component } from "react";
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
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
  } else if (iconLib == "EvilIcons") {
    return <EvilIcons name={iconName} size={ICON_SIZE} color="black" />;
  } else if (iconLib == "Feather") {
    return <Feather name={iconName} size={ICON_SIZE} color="black" />;
  } else if (iconLib == "Fontisto") {
    return <Fontisto name={iconName} size={ICON_SIZE} color="black" />;
  } else if (iconLib == "Foundation") {
    return <Foundation name={iconName} size={ICON_SIZE} color="black" />;
  } else if (iconLib == "Octicons") {
    return <Octicons name={iconName} size={ICON_SIZE} color="black" />;
  } else if (iconLib == "Zocial") {
    return <Zocial name={iconName} size={ICON_SIZE} color="black" />;
  } else {
    return <FontAwesome5 name="doesntExist" size={24} color="black" />;
  }
};

export default Icons;
