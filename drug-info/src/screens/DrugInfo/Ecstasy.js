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

export default class Ecstasy extends Component {
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
          <Text style={{ textAlign: "center", fontSize: 30 }}>Ecstasy</Text>
          <Text style={{ textAlign: "center", fontSize: 20 }}>
            Scroll Down For More Information
          </Text>
          <HorizontalCard
            title="What Is It?"
            description="As an amphetamine ecstasy is a central nervous system stimulant that increases the activity of the brain."
            image={<FontAwesome5 name="pills" size={100} color="black" />}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
