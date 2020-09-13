import * as React from "react";
import { Text, View, Alert, Platform, ScrollView } from "react-native";
import { Button } from "react-native-elements";
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
import * as Sentry from "sentry-expo";
import Onboarding from "react-native-onboarding-swiper";
import { getBottomSpace } from "react-native-iphone-x-helper";
import OnboardingScreen from "./src/screens/OnboardingScreen";

Sentry.init({
  dsn:
    "https://7d0d7ccbb01843f4ab9ca74797e71269@o437910.ingest.sentry.io/5401009",
  enableInExpoDevelopment: true,
  debug: true,
});

const ICON_FOCUSED_COLOUR = Platform.OS === "android" ? "#1a73e7" : "#0279fe";
const ICON_UNFOCUSED_COLOUR = Platform.OS === "android" ? "#717578" : "#919191";
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
        name="Drug Information"
        component={DrugInfo}
        initialParams={{ data: route.params.data.druginfo }}
      />
    </HomeStack.Navigator>
  );
}

const AboutStack = createStackNavigator();

function AboutStackScreen({ route }) {
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
      <AboutStack.Screen
        name="About"
        component={AboutScreen}
        initialParams={{ data: route.params.data.about }}
      />
      <AboutStack.Screen name="Details" component={DetailsScreen} />
    </AboutStack.Navigator>
  );
}

const HelpStack = createStackNavigator();

function HelpStackScreen({ route }) {
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
      <HelpStack.Screen
        name="Help"
        component={HelpScreen}
        initialParams={{ data: route.params.data.help }}
      />
      <HelpStack.Screen name="Details" component={DetailsScreen} />
    </HelpStack.Navigator>
  );
}

const SearchStack = createStackNavigator();

function SearchStackScreen({ route }) {
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
      <SearchStack.Screen
        name="Search"
        component={SearchScreen}
        initialParams={{ data: route.params.data.search }}
      />
      <SearchStack.Screen name="Details" component={DetailsScreen} />
    </SearchStack.Navigator>
  );
}

const Done = ({ ...props }) => (
  <Button
    title={"Accept"}
    buttonStyle={{ paddingRight: 20 }}
    containerViewStyle={{
      marginVertical: 10,
      width: 70,
    }}
    type="clear"
    {...props}
  />
);

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  state = {
    appIsReady: false,
    onboarded: false,
  };

  async componentDidMount() {
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.warn(e);
    }
    this.prepareResources();
    //this.checkOnbarded();
  }

  async checkOnbarded() {
    const onboardedStatus = await AsyncStorage.getItem("@onboarding_data");
    if (onboardedStatus != null) {
      this.setState({ onboarded: true });
    }
  }

  async onboardedComplete() {
    await AsyncStorage.setItem("@onboarding_data", "true");
    this.setState({ onboarded: true });
  }

  async prepareResources() {
    try {
      const data = await loadData();
      this.setState({ appIsReady: true, data }, async () => {
        await SplashScreen.hideAsync();
      });
    } catch (e) {
      console.log(e);
      Sentry.captureException(new Error("Connection to server error"));
      Alert.alert(
        "Connection To Server Unavailable",
        "Please Connect To The Internet To Continue",
        [{ text: "Refresh", onPress: () => this.prepareResources() }],
        { cancelable: false }
      );
    }
  }

  render() {
    if (!this.state.appIsReady) {
      return null;
    }
    if (!this.state.onboarded) {
      return (
        <Onboarding
          onDone={() => this.onboardedComplete()}
          controlStatusBar={false}
          showSkip={false}
          transitionAnimationDuration={100}
          DoneButtonComponent={Done}
          flatlistProps={{ scrollEnabled: false }}
          pages={[
            {
              backgroundColor: "#fff",
              image: <View />,
              title: <OnboardingScreen />,
              subTitleStyles: { borderWidth: 1 },
              subtitle: `${this.state.data.about.disclaimer} \n\n Writen by: ${this.state.data.about.writenBy} \n ${this.state.data.about.writenByContact} \n\n Developed by: ${this.state.data.about.developedBy} \n ${this.state.data.about.developedByContact}`,
            },
          ]}
        />
      );
    } else if (this.state.onboarded) {
      return (
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
              tabStyle: {
                transform: [{ translateY: -getBottomSpace() }],
                backgroundColor: "white",
                borderTopWidth: 1,
                borderColor: "#B8B8B8",
              },
              style: {
                backgroundColor: "white",
              },
              keyboardHidesTabBar: true,
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
                      props.focused
                        ? ICON_FOCUSED_COLOUR
                        : ICON_UNFOCUSED_COLOUR
                    }
                    style={{ marginBottom: -3 }}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Search"
              component={SearchStackScreen}
              initialParams={{ data: this.state.data }}
              options={{
                tabBarIcon: (props) => (
                  <FontAwesome5
                    name="search"
                    size={25}
                    color={
                      props.focused
                        ? ICON_FOCUSED_COLOUR
                        : ICON_UNFOCUSED_COLOUR
                    }
                    style={{ marginBottom: -3 }}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Help"
              component={HelpStackScreen}
              initialParams={{ data: this.state.data }}
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
              initialParams={{ data: this.state.data }}
              options={{
                tabBarIcon: (props) => (
                  <FontAwesome
                    name="question-circle"
                    size={30}
                    color={
                      props.focused
                        ? ICON_FOCUSED_COLOUR
                        : ICON_UNFOCUSED_COLOUR
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
}

async function loadData() {
  try {
    const result = await fetch(
      "https://wellbeing-data.harrywickham.co.uk/v1/data.json"
    );
    const data = await result.json();
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem("@drug_data", jsonValue);
  } catch (e) {
    console.warn(e);
  }
  try {
    const jsonValue = await AsyncStorage.getItem("@drug_data");
    if (jsonValue !== null) {
      return JSON.parse(jsonValue);
    }
  } catch (e) {
    console.warn(e);
  }
  throw new Error();
}
