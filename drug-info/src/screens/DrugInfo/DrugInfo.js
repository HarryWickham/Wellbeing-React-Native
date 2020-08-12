import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CannabisScreen from "./Cannabis";
import CocaineScreen from "./Cocaine";
import EcstasyScreen from "./Ecstasy";
import KetamineScreen from "./Ketamine";
import NOSScreen from "./NOS";
import {
  FontAwesome,
  Entypo,
  FontAwesome5,
  Foundation,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

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

function MyTabBar({ state, descriptors, navigation, position }) {
  return (
    <View style={{ flexDirection: "row", backgroundColor: "white" }}>
      <ScrollView
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          // modify inputRange for custom behavior
          const inputRange = state.routes.map((_, i) => i);

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityStates={isFocused ? ["selected"] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={{
                flex: 1,

                borderBottomColor: isFocused ? "dodgerblue" : "white",
                paddingVertical: 20,
                borderBottomWidth: 2,

                width: 80,
              }}
            >
              <Text
                style={{
                  color: "black",
                  textAlign: "center",
                }}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App({ route, navigation }) {
  const { page } = route.params;

  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      initialRouteName={page}
      tabBarOptions={{
        labelStyle: { fontSize: Platform.OS === "android" ? 9 : 6 },
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
