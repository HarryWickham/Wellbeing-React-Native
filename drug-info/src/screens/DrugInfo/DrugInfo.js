import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CannabisScreen from "./Cannabis";
import CocaineScreen from "./Cocaine";
import EcstasyScreen from "./Ecstasy";
import KetamineScreen from "./Ketamine";
import NOSScreen from "./NOS";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const BACKGROUND_COLOUR = "#fbb959";

function Cannabis({ route }) {
  return <CannabisScreen data={route.params.data} />;
}
function Cocaine({ route }) {
  return <CocaineScreen data={route.params.data} />;
}
function Ecstasy({ route }) {
  return <EcstasyScreen data={route.params.data} />;
}
function Ketamine({ route }) {
  return <KetamineScreen data={route.params.data} />;
}
function NOS({ route }) {
  return <NOSScreen data={route.params.data} />;
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
        initialParams={{ data: route.params.data }}
        options={{
          tabBarIcon: (props) => (
            <FontAwesome5 name="cannabis" size={20} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Cocaine"
        component={Cocaine}
        initialParams={{ data: route.params.data }}
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
        initialParams={{ data: route.params.data }}
        options={{
          tabBarIcon: (props) => (
            <FontAwesome5 name="pills" size={20} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Ketamine"
        component={Ketamine}
        initialParams={{ data: route.params.data }}
        options={{
          tabBarIcon: (props) => (
            <FontAwesome5 name="capsules" size={20} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="NOS"
        component={NOS}
        initialParams={{ data: route.params.data }}
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
