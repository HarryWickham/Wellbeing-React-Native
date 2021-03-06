import React, { useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  BackHandler,
  Alert,
} from "react-native";
import HorizontalCardAndOverlay from "../../components/Common/HorizontalCardAndOverlay";
import { useNavigation } from "@react-navigation/native";
import Frank from "../../components/Common/FrankFooter";

import Icons from "../../components/Common/Icons";

const BACKGROUND_COLOUR = "#fbb959";

const ICON_SIZE = 100;

const ICON_FOCUSED_COLOUR = Platform.OS === "android" ? "#1a73e7" : "#0279fe";
const ICON_UNFOCUSED_COLOUR = Platform.OS === "android" ? "#717578" : "#919191";

const Tab = createMaterialTopTabNavigator();

export default function DrugInfo({ route, navigation, data }) {
  const { page } = route.params;
  return (
    <Tab.Navigator
      initialRouteName={page}
      tabBarOptions={{
        inactiveTintColor: ICON_UNFOCUSED_COLOUR,
        activeTintColor: ICON_FOCUSED_COLOUR,
        scrollEnabled: true,
        labelStyle: 12,
        showLabel: true,
        showIcon: true,
      }}
    >
      {route.params.data.map((drug) => (
        <Tab.Screen
          key={drug.name}
          name={drug.name}
          component={DrugScreen}
          initialParams={{ druginfo: drug }}
          options={{
            tabBarIcon: (props) => (
              <Icons
                iconLib={drug.info[0].iconLib}
                iconName={drug.info[0].iconName}
                ICON_SIZE={20}
                colour={
                  props.focused ? ICON_FOCUSED_COLOUR : ICON_UNFOCUSED_COLOUR
                }
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

function DrugScreen(druginfo) {
  return <View>{Drug(druginfo)}</View>;
}

function Drug(drug) {
  return (
    <ScrollView style={{ backgroundColor: "#fbb959" }}>
      <View
        style={{
          backgroundColor: "#FBD499",
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>{drug.route.params.druginfo.name}</Text>
        <Text style={styles.subTitle}>Tap to expand</Text>
        {cards(drug)}
      </View>
      <Frank url={drug.route.params.druginfo.frankurl} />
    </ScrollView>
  );
}

function cards(drug) {
  return (
    <>
      {drug.route.params.druginfo.info.map((element) => {
        return (
          <HorizontalCardAndOverlay
            key={element.title}
            title={element.title}
            smallDescription={element.smallDescription}
            image={
              <Icons
                iconLib={element.iconLib}
                iconName={element.iconName}
                ICON_SIZE={ICON_SIZE}
              />
            }
          />
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
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
