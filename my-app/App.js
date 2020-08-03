import React from "react";
import {
  StyleSheet,
  Text,
  StatusBar,
  Platform,
  SafeAreaView,
  Image,
  View,
  ImageBackground,
} from "react-native";

import { Button } from "native-base";

var landinglogo = require("./assets/goodricke_logo.png");
var footerlogo = require("./assets/frank_footer.png");

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.viewStyle}>
          <Text style={styles.titleStyle}>ALL THE GEAR NO IDEA</Text>
          <Image source={landinglogo} style={styles.backgroundImage} />
          <Text style={styles.titleStyle}>College Well-being</Text>
          <Image source={footerlogo} style={styles.footerImage} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbb959",
  },
  viewStyle: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    margin: 10,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  titleStyle: {
    fontSize: 30,
    color: "#146f29",
    fontWeight: "bold",
  },
  backgroundImage: {},
  footerImage: {
    alignSelf: "center",
  },
});

export default App;
