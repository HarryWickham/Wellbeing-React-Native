import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Linking,
  Dimensions,
} from "react-native";

const { height, width } = Dimensions.get("window");

export default function FrankFooter(url) {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(url.url)}>
      <Image
        source={require("../../../assets/footer.png")}
        style={{
          alignSelf: "center",
          resizeMode: "contain",
          width: "95%",
        }}
      />
    </TouchableOpacity>
  );
}
