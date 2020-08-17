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

const ICON_SIZE = 100;

function cards(data) {
  const navigation = useNavigation();
  return (
    <>
      {data.drugs.map((element) => {
        return (
          <TouchableOpacity
            key={element.title}
            onPress={() =>
              navigation.navigate("DrugInfo", { page: element.title })
            }
            activeOpacity={0.8}
          >
            <DrugInfoCard
              title={element.title}
              smallDescription={element.smallDescription}
              largeDescription={element.largeDescription}
              image={
                <FontAwesome5 name="cannabis" size={ICON_SIZE} color="black" />
              }
            />
          </TouchableOpacity>
        );
      })}
    </>
  );
}

const DrugInfoScrollView = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
      }}
    >
      <View style={styles.fullViewStyle}>
        <View style={styles.titleViewStyle}>
          <Text style={styles.title}>Drug Information</Text>
          <Text style={styles.subTitle}>Tap to expand</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {cards(data)}
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
