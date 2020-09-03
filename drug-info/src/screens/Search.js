import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator, Alert } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import Icon from "../components/Common/Icons";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    this.setState({
      data: this.props.route.params.data,
    });
    this.arrayholder = this.props.route.params.data;
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
        }}
      />
    );
  };

  searchFilterFunction = (text) => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter((item) => {
      const itemData = `${item.title.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={(text) => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };

  render() {
    const ITEMCOLOUR = "#fff";
    return (
      <View style={{ flex: 1, backgroundColor: "#fbb959" }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row", backgroundColor: ITEMCOLOUR }}>
              <View
                style={{ width: 50, justifyContent: "center", marginLeft: 5 }}
              >
                <Icon
                  iconLib={item.iconLib}
                  iconName={item.iconName}
                  ICON_SIZE={40}
                />
              </View>
              <ListItem
                underlayColor={"#fbb959"}
                style={{ flex: 1, backgroundColor: ITEMCOLOUR }}
                title={`${item.title}`}
                onPress={() =>
                  this.props.navigation.navigate("Drug Information", {
                    page: item.title,
                  })
                }
              ></ListItem>
            </View>
          )}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

export default Search;
