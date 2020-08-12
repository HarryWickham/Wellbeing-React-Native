import React, { Component, useState, useEffect } from "react";
import { Text, View, Button, ScrollView, StyleSheet } from "react-native";
import DrugInfoCard from "../Common/Card";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import {
  FontAwesome,
  Entypo,
  FontAwesome5,
  Foundation,
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const DrugInfoScrollView = ({ drugInfo }) => {
  const navigation = useNavigation();
  return (
    <View style={{ marginBottom: 20 }}>
      <View style={styles.fullViewStyle}>
        <View style={styles.titleViewStyle}>
          <Text style={styles.title}>Drug Information</Text>
          <Text style={styles.subTitle}>Tap to expand</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("DrugInfo", { page: "Cannabis" })
            }
            activeOpacity={0.8}
          >
            <DrugInfoCard
              title="Cannabis"
              description="The most common form of cannabis is weed which is the dried leaves and flowering parts of a cannabis plant. Skunk is normally twice as strong as the other varieties with a particularly strong smell."
              image={<FontAwesome5 name="cannabis" size={100} color="black" />}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("DrugInfo", { page: "Cocaine" })}
            activeOpacity={0.8}
          >
            <DrugInfoCard
              title="Cocaine"
              description="Cocaine refers to a drug in a powder form or crystal form. The powder is usually mixed with substances such as corn starch, talcum powder and/or sugar or other drugs such as local anesthetics or amphetamines."
              image={
                <MaterialCommunityIcons
                  name="weather-tornado"
                  size={100}
                  color="black"
                />
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("DrugInfo", { page: "Ecstasy" })}
            activeOpacity={0.8}
          >
            <DrugInfoCard
              title="Ecstasy"
              description="As an amphetamine ecstasy is a central nervous system stimulant that increases the activity of the brain."
              image={<FontAwesome5 name="pills" size={100} color="black" />}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("DrugInfo", { page: "Ketamine" })
            }
            activeOpacity={0.8}
          >
            <DrugInfoCard
              title="Ketamine"
              description="A medication that is used to induce loss of consciousness, or anaesthesia. It can produce relaxation and relieve pain in humans and animals. It is a commonly used due to its hallucinogenic, tranquilizing and dissociative effects."
              image={<FontAwesome5 name="capsules" size={100} color="black" />}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("DrugInfo", { page: "NOS" })}
            activeOpacity={0.8}
          >
            <DrugInfoCard
              title="NOS"
              description="Nitrous oxide is a colourless gas that is commonly used for sedation and pain relief, but is also used by people to feel intoxicated or high.. It is commonly used by dentists and medical professionals to sedate patients undergoing minor medical procedures."
              image={
                <MaterialCommunityIcons
                  name="diving-scuba-tank"
                  size={100}
                  color="black"
                />
              }
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullViewStyle: {
    backgroundColor: "#FBD499",
    alignItems: "center",
  },
  titleViewStyle: {
    alignContent: "center",
    paddingVertical: 10,
  },
  title: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitle: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
  },
});

export default DrugInfoScrollView;
