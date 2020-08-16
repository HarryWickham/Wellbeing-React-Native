import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import HorizontalCard from "../../components/Common/HorizontalCard";
import {
  FontAwesome,
  Entypo,
  FontAwesome5,
  AntDesign,
  MaterialIcons,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default class NOS extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 30 }}>NOS</Text>
          <Text style={{ textAlign: "center", fontSize: 20 }}>
            Scroll Down For More Information
          </Text>
          <HorizontalCard
            title="What is it?"
            description="Nitrous oxide is a colourless gas that is commonly used for sedation and pain relief, but is also used by people to feel intoxicated or high.. It is commonly used by dentists and medical professionals to sedate patients undergoing minor medical procedures."
            image={
              <MaterialCommunityIcons
                name="diving-scuba-tank"
                size={100}
                color="black"
              />
            }
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
