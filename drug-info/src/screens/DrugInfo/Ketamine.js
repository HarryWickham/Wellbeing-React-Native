import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import HorizontalCard from "../../components/Common/HorizontalCard";
import Icons from "../../components/Common/Icons";

const ICON_SIZE = 100;

function cards(data) {
  return (
    <>
      {data.ketamine.map((element) => {
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

const Ketamine = ({ data }) => {
  return (
    <ScrollView>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 30 }}>Ketamine</Text>
        {cards(data)}
      </View>
    </ScrollView>
  );
};

export default Ketamine;

const styles = StyleSheet.create({});
