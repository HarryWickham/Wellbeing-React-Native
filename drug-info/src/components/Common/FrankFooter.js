import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Linking,
  Dimensions,
} from "react-native";

const { height, width } = Dimensions.get("window");

export default function FrankFooter() {
  return (
    <TouchableOpacity
      onPress={() => Linking.openURL("http://talktofrank.com/")}
    >
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
