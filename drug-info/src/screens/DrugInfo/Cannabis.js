import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView, Dimensions } from "react-native";
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

const { height, width } = Dimensions.get("window");

const ICON_SIZE = 100;

export default class Cannabis extends Component {
  render() {
    return (
      <ScrollView>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 30 }}>Cannabis</Text>
          <Text style={{ fontSize: 20 }}>Scroll Down For More Information</Text>
          <HorizontalCard
            title="What is it?"
            description="The most common form of cannabis is weed which is the dried leaves and flowering parts of a cannabis plant. Skunk is normally twice as strong as the other varieties with a particularly strong smell."
            image={
              <FontAwesome5 name="cannabis" size={ICON_SIZE} color="black" />
            }
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
