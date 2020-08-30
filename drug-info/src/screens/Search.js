import React, { useState } from "react";
import { View, Text, FlatList, ActivityIndicator, Alert } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const Search = ({ route }) => {
  console.log("search", route.params.data.druginfo);
  const [data, setdata] = useState([route.params.data.druginfo]);
  const [arrayholder, setarrayholder] = useState([route.params.data.druginfo]);
  const [value, setvalue] = useState();

  const navigation = useNavigation();

  function renderSeparator() {
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
  }

  function searchFilterFunction(text) {
    //setvalue(text);
    const newData = arrayholder.filter((item) => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      //setdata(newData);
      return itemData.indexOf(textData) > -1;
    });
  }

  function renderHeader() {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={(text) => searchFilterFunction(text)}
        autoCorrect={false}
        value={value}
      />
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListItem
            title={item.name}
            onPress={() =>
              navigation.navigate("Drug Information", {
                page: item.name,
              })
            }
          />
        )}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={renderSeparator()}
        ListHeaderComponent={renderHeader()}
      />
    </View>
  );
};

export default Search;
