import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CannabisScreen from "./Cannabis";
import CocaineScreen from "./Cocaine";
import EcstasyScreen from "./Ecstasy";
import KetamineScreen from "./Ketamine";
import NOSScreen from "./NOS";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const BACKGROUND_COLOUR = "#fbb959";

function Cannabis() {
  return <CannabisScreen />;
}
function Cocaine() {
  return <CocaineScreen />;
}
function Ecstasy() {
  return <EcstasyScreen />;
}
function Ketamine() {
  return <KetamineScreen />;
}
function NOS() {
  return <NOSScreen />;
}

const Tab = createMaterialTopTabNavigator();

export default function App({ route, navigation }) {
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
      <Tab.Screen
        name="Cannabis"
        component={Cannabis}
        options={{
          tabBarIcon: (props) => (
            <FontAwesome5 name="cannabis" size={20} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Cocaine"
        component={Cocaine}
        options={{
          tabBarIcon: (props) => (
            <MaterialCommunityIcons
              name="weather-tornado"
              size={20}
              color="black"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Ecstasy"
        component={Ecstasy}
        options={{
          tabBarIcon: (props) => (
            <FontAwesome5 name="pills" size={20} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Ketamine"
        component={Ketamine}
        options={{
          tabBarIcon: (props) => (
            <FontAwesome5 name="capsules" size={20} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="NOS"
        component={NOS}
        options={{
          tabBarIcon: (props) => (
            <MaterialCommunityIcons
              name="diving-scuba-tank"
              size={20}
              color="black"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
