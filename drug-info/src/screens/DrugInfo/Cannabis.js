import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView, Dimensions } from "react-native";
import HorizontalCard from "../../components/Common/HorizontalCard";

import Icons from "../../components/Common/Icons";

const ICON_SIZE = 100;

function cards(data) {
  return (
    <>
      {data.cannabis.map((element) => {
        return (
          <HorizontalCard
            key={element.title}
            title={element.title}
            description={element.smallDescription}
            image={
              <Icons
                iconLib={element.iconLib}
                iconName={element.iconName}
                ICON_SIZE={ICON_SIZE}
              />
            }
          />
        );
      })}
    </>
  );
}

const Cannabis = ({ data }) => {
  return (
    <ScrollView>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 30 }}>Cannabis</Text>
        {cards(data)}
      </View>
    </ScrollView>
  );
};

export default Cannabis;

const styles = StyleSheet.create({});
