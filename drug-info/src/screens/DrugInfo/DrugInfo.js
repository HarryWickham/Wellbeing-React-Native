import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, StyleSheet, View, ScrollView, Dimensions } from "react-native";
import HorizontalCardAndOverlay from "../../components/Common/HorizontalCardAndOverlay";
import HorizontalCard from "../../components/Common/HorizontalCard";

import Icons from "../../components/Common/Icons";

const BACKGROUND_COLOUR = "#fbb959";

const ICON_SIZE = 100;

const Tab = createMaterialTopTabNavigator();

export default function DrugInfo({ route, navigation, data }) {
  const { page } = route.params;
  return (
    <Tab.Navigator
      initialRouteName={page}
      tabBarOptions={{
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
          initialParams={{ druginfo: drug.info }}
          options={{
            tabBarIcon: (props) => (
              <Icons
                iconLib={drug.info[0].iconLib}
                iconName={drug.info[0].iconName}
                ICON_SIZE={20}
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
    <ScrollView>
      <View
        style={{
          alignItems: "center",
        }}
      >
        {cards(drug)}
      </View>
    </ScrollView>
  );
}

function cards(drug) {
  return (
    <>
      {drug.route.params.druginfo.map((element) => {
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
