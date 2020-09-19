import React from "react";
import { StyleSheet, View, ScrollView, Image, Dimensions } from "react-native";
import HorizontalCard from "../components/Common/HorizontalCard";

const { width, height } = Dimensions.get('window');

const OnboardingScreen = (data) => {
  
  return (
    <ScrollView
      scrollEnabled={true}
      bounces={true}
      style={{ backgroundColor: "#fbb959", }}
      id
    >
      <View style={{paddingBottom: 60 }}>
      <Image source={require("../../assets/splash.png")} style={{resizeMode: 'contain', width: "100%", maxHeight: (width/2)+10 }}/>
      <View style={{ backgroundColor: "#FBD499",  }}>
        <HorizontalCard
          title="Disclaimer"
          smallDescription={data.data.disclaimer}
        />
      </View>
      </View>
    </ScrollView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
