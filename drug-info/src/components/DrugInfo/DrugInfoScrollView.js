import React, { Component, useState, useEffect } from "react";
import { Text, View, Button, ScrollView, StyleSheet } from "react-native";
import DrugInfoCard from "../Common/Card";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Icons from "../Common/Icons";

const ICON_SIZE = 100;

function cards(data) {
  const navigation = useNavigation();
  return (
    <>
      {data.druginfo.map((element) => {
        return (
          <TouchableOpacity
            key={element.name}
            onPress={() =>
              navigation.navigate("DrugInfo", { page: element.name })
            }
            activeOpacity={0.8}
          >
            <DrugInfoCard
              title={element.name}
              smallDescription={element.info[0].smallDescription}
              largeDescription={element.info[0].largeDescription}
              image={
                <Icons
                  iconLib={element.info[0].iconLib}
                  iconName={element.info[0].iconName}
                  ICON_SIZE={ICON_SIZE}
                />
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
