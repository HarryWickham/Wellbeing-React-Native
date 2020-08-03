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

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Item,
  Icon,
  Input,
  Button,
} from "native-base";

class Search extends React.Component {
  state = {
    drugSearch: "",
    onCall: true,
  };
  searchDrug = () => {};

  renderBody = () => {
    if (this.state.onCall) {
      return <Text>True</Text>;
    } else {
      return <Text>False</Text>;
    }
  };

  clearSearch = () => {
    this.setState({ drugSearch: "" });
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Container>
          <Header
            searchBar={true}
            rounded={true}
            backgroundColor="#fbb959"
            transparent={true}
          >
            <Left style={{ flex: 0.1 }}>
              <Button transparent>
                <Icon
                  name="arrow-back"
                  style={{ color: "black" }}
                  onPress={() => this.props.switchScreen("homepage")}
                />
              </Button>
            </Left>
            <Body style={{ flex: 0.8 }}>
              <Item>
                <Icon name="ios-search" onPress={this.searchDrug} />
                <Input
                  value={this.state.drugSearch}
                  placeholder="Search..."
                  onChangeText={(drugSearch) => this.setState({ drugSearch })}
                />
              </Item>
            </Body>
            <Right style={{ flex: 0.1 }}>
              <Button transparent>
                <Icon
                  name="close"
                  onPress={this.clearSearch}
                  style={{ color: "black" }}
                />
              </Button>
            </Right>
          </Header>
          {this.renderBody}
        </Container>
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
    margin: 10,
    flex: 1,
  },
});

export default Search;
