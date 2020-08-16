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

export default class Cocaine extends Component {
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
          <Text style={{ textAlign: "center", fontSize: 30 }}>Cocaine</Text>
          <Text style={{ textAlign: "center", fontSize: 20 }}>
            Scroll Down For More Information
          </Text>
          <HorizontalCard
            title="What is it?"
            description="Cocaine refers to a drug in a powder form or crystal form. The powder is usually mixed with substances such as corn starch, talcum powder and/or sugar or other drugs such as local anesthetics or amphetamines."
            image={
              <MaterialCommunityIcons
                name="weather-tornado"
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
