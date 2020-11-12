import React, { Component, useState, useEffect } from "react";
import {
  Text,
  Image,
  Button,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import DrugInfoScrollView from "../components/DrugInfo/DrugInfoScrollView";
import MakingChoicesScrollView from "../components/MakingChoices/MakingChoicesScrollView";
import ConversationScrollView from "../components/Conversation/ConversationScrollView";
import Footer from "../components/Common/FrankFooter";

const BACKGROUND_COLOUR = "#fbb959";

const Home = ({ route }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.fullScreenStyle}
    >
      <DrugInfoScrollView data={route.params.data} />
      <MakingChoicesScrollView data={route.params.data} />
      <ConversationScrollView data={route.params.data} />
      <Footer />
    </ScrollView>
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
  fullScreenStyle: {
    backgroundColor: BACKGROUND_COLOUR,
  },
});

export default Home;
