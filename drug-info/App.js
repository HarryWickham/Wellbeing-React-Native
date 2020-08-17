import * as React from "react";
import { Button, Text, View, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FontAwesome,
  Entypo,
  FontAwesome5,
  Foundation,
} from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import HomeScreen from "./src/screens/Home";
import HelpScreen from "./src/screens/HelpScreens/HelpHome";
import AboutScreen from "./src/screens/About";
import SearchScreen from "./src/screens/Search";
import DrugInfo from "./src/screens/DrugInfo/DrugInfo";
import AsyncStorage from "@react-native-community/async-storage";
import { render } from "react-dom";

const ICON_FOCUSED_COLOUR = "#146f29";
const ICON_UNFOCUSED_COLOUR = "black";
const BACKGROUND_COLOUR = "#fbb959";

function DetailsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: BACKGROUND_COLOUR,
      }}
    >
      <Text>Details!</Text>
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen({ route }) {
  return (
    <HomeStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerTintColor: "black",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: BACKGROUND_COLOUR,
        },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{ data: route.params.data }}
      />
      <HomeStack.Screen
        name="DrugInfo"
        component={DrugInfo}
        initialParams={{ data: route.params.data }}
      />
    </HomeStack.Navigator>
  );
}

const AboutStack = createStackNavigator();

function AboutStackScreen() {
  return (
    <AboutStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerTintColor: "black",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: BACKGROUND_COLOUR,
        },
      }}
    >
      <AboutStack.Screen name="About" component={AboutScreen} />
      <AboutStack.Screen name="Details" component={DetailsScreen} />
    </AboutStack.Navigator>
  );
}

const HelpStack = createStackNavigator();

function HelpStackScreen() {
  return (
    <HelpStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerTintColor: "black",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: BACKGROUND_COLOUR,
        },
      }}
    >
      <HelpStack.Screen name="Help" component={HelpScreen} />
      <HelpStack.Screen name="Details" component={DetailsScreen} />
    </HelpStack.Navigator>
  );
}

const SearchStack = createStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerTintColor: "black",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: BACKGROUND_COLOUR,
        },
      }}
    >
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen name="Details" component={DetailsScreen} />
    </SearchStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  state = {
    appIsReady: false,
  };

  async componentDidMount() {
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.warn(e);
    }
    this.prepareResources();
  }

  async prepareResources() {
    try {
      const data = await loadData();

      this.setState({ appIsReady: true, data }, async () => {
        await SplashScreen.hideAsync();
      });
    } catch (e) {
      console.log(e);
      Alert.alert(
        "Connection To Server Unavailable",
        "Please Connect To The Internt To Continue",
        [{ text: "Refresh", onPress: () => this.prepareResources() }],
        { cancelable: false }
      );
    }
  }

  render() {
    if (!this.state.appIsReady) {
      return null;
    }

    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            inactiveTintColor: ICON_UNFOCUSED_COLOUR,
            activeTintColor: ICON_FOCUSED_COLOUR,
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            initialParams={{ data: this.state.data }}
            options={{
              tabBarIcon: (props) => (
                <Entypo
                  name="home"
                  size={30}
                  color={
                    props.focused ? ICON_FOCUSED_COLOUR : ICON_UNFOCUSED_COLOUR
                  }
                  style={{ marginBottom: -3 }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchStackScreen}
            options={{
              tabBarIcon: (props) => (
                <FontAwesome5
                  name="search"
                  size={25}
                  color={
                    props.focused ? ICON_FOCUSED_COLOUR : ICON_UNFOCUSED_COLOUR
                  }
                  style={{ marginBottom: -3 }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Help"
            component={HelpStackScreen}
            options={{
              tabBarIcon: (props) => (
                <Foundation
                  name="alert"
                  size={30}
                  color={props.focused ? ICON_FOCUSED_COLOUR : "red"}
                  style={{ marginBottom: -3 }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="About"
            component={AboutStackScreen}
            options={{
              tabBarIcon: (props) => (
                <FontAwesome
                  name="question-circle"
                  size={30}
                  color={
                    props.focused ? ICON_FOCUSED_COLOUR : ICON_UNFOCUSED_COLOUR
                  }
                  style={{ marginBottom: -3 }}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

async function loadData() {
  try {
    const result = await fetch(
      "https://wellbeing-data.harrywickham.co.uk/data.json"
    );
    const data = await result.json();
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem("@storage_Key", jsonValue);
  } catch (e) {
    console.warn(e);
  }
  try {
    const jsonValue = await AsyncStorage.getItem("@storage_Key");
    if (jsonValue !== null) {
      return JSON.parse(jsonValue);
    }
  } catch (e) {
    console.warn(e);
  }
  throw new Error();
}
