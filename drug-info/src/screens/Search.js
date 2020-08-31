import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator, Alert } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";

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
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%",
        }}
      />
    );
  };

  searchFilterFunction = (text) => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter((item) => {
      const itemData = `${item.name.toUpperCase()}`;
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
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              title={`${item.name}`}
              onPress={() =>
                this.props.navigation.navigate("Drug Information", {
                  page: item.name,
                })
              }
            />
          )}
          keyExtractor={(item) => item.name}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

export default Search;
