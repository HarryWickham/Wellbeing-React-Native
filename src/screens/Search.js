import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity, Platform } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import Icon from "../components/Common/Icons";
import { useNavigation } from "@react-navigation/native";

const Item = ({ item, navigation }) => (
  <TouchableOpacity
    onPress={() =>
      navigation.navigate("Drug Information", {
        page: item.title,
      })
    }
  >
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 5,
        marginHorizontal: 5,
        paddingVertical: 5
      }}
    >
      <View style={{ width: 50 }}>
        <Icon iconLib={item.iconLib} iconName={item.iconName} ICON_SIZE={40} />
      </View>
      <Text style={{ alignSelf: "center", paddingLeft: 10, fontSize: 18 }}>{item.title}</Text>
    </View>
  </TouchableOpacity>
);

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
          height: 2,
          width: "100%",
          backgroundColor: "#fbb959",
        }}
      />
    );
  };

  searchFilterFunction = (text) => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter((item) => {
      const itemData = `${item.title.toUpperCase()} ${item.synonyms.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <View style={{ paddingBottom: 10 }}>
        <SearchBar
          style={{ color: "red" }}
          placeholder="Type Here..."
          platform={Platform.OS === "android" ? "android" : "ios"}
          onChangeText={(text) => this.searchFilterFunction(text)}
          autoCorrect={false}
          value={this.state.value}
        />
      </View>
    );
  };

  renderItem = ({ item }) => {
    return <Item item={item} navigation={this.props.navigation} />;
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fbb959" }}>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

export default Search;
