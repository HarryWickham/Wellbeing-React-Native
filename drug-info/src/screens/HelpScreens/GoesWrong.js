import React, { useState } from "react";
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import BasicAdvice from "../../components/Help/BasicAdvice";
import LifeSupport from "../../components/Help/LifeSupport";

const GoesWrong = ({ data }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <LifeSupport data={data.lifeSupport} />
        <BasicAdvice data={data.basicAdvice} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbb959",
  },
});

export default GoesWrong;
