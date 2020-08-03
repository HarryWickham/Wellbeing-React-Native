import React from "react";
import { StyleSheet, View } from "react-native";

import Landing from "./src/Landing";
import Homepage from "./src/Homepage";
import Search from "./src/Search";

class App extends React.Component {
  state = {
    currentScreen: "search",
  };

  switchScreen = (currentScreen) => {
    this.setState({ currentScreen });
  };

  renderScreen = () => {
    if (this.state.currentScreen === "landing") {
      return <Landing switchScreen={this.switchScreen} />;
    } else if (this.state.currentScreen === "homepage") {
      return <Homepage switchScreen={this.switchScreen} />;
    } else if (this.state.currentScreen === "search") {
      return <Search switchScreen={this.switchScreen} />;
    }
  };

  render() {
    return <View style={{ flex: 1 }}>{this.renderScreen()}</View>;
  }
}

const styles = StyleSheet.create({});
export default App;
