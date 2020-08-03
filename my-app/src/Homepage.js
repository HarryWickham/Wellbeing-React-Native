import React from "react";
import {
  StyleSheet,
  Text,
  StatusBar,
  Platform,
  SafeAreaView,
  Image,
  View,
  Dimensions,
} from "react-native";

import { Button } from "native-base";

class Homepage extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.viewStyle}>
          <Text>Home Page</Text>
          <Button
            block={true}
            style={styles.buttonStyle}
            onPress={() => this.props.switchScreen("search")}
          >
            <Text style={{ color: "#fff" }}>Search</Text>
          </Button>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbb959",
    justifyContent: "center",
  },
  viewStyle: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    margin: 10,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  buttonStyle: {
    margin: 10,
  },
});

export default Homepage;
