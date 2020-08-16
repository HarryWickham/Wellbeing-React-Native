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

export default class Ketamine extends Component {
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
          <Text style={{ textAlign: "center", fontSize: 30 }}>Ketamine</Text>
          <Text style={{ textAlign: "center", fontSize: 20 }}>
            Scroll Down For More Information
          </Text>
          <HorizontalCard
            title="What is it?"
            description="A medication that is used to induce loss of consciousness, or anaesthesia. It can produce relaxation and relieve pain in humans and animals. It is a commonly used due to its hallucinogenic, tranquilizing and dissociative effects."
            image={<FontAwesome5 name="capsules" size={100} color="black" />}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
