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

const GoesWrong = () => {
  const [Collapsed, setCollapsed] = useState(false);
  const toggleExpanded = () => {
    setCollapsed(!Collapsed);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <LifeSupport />
        <BasicAdvice />
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
