import React, { Component, useState, useEffect } from "react";
import { Text, View, Button, ScrollView, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Overlay } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import ConversationCardAndOverlay from "../Common/CardAndOverlay";
import {
  FontAwesome,
  Entypo,
  FontAwesome5,
  AntDesign,
  MaterialIcons,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const ConversationScrollView = ({ drugInfo }) => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const [visible2, setVisible2] = useState(false);
  const toggleOverlay2 = () => {
    setVisible2(!visible2);
  };
  return (
    <View style={{ marginBottom: 20 }}>
      <View style={styles.fullViewStyle}>
        <View style={styles.titleViewStyle}>
          <Text style={styles.title}>Start A Conversation</Text>
          <Text style={styles.subTitle}>Tap to expand</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ConversationCardAndOverlay
            title="Inform Yourself"
            description="Gather information on the drug you think your friend might be taking and be aware of the risks and the effects. This will help you understand and articulate why you are worrieed about them."
            image={
              <MaterialCommunityIcons name="puzzle" size={100} color="black" />
            }
          />
          <ConversationCardAndOverlay
            title="Choose Wisely"
            description="'Choose a time to talk in privacy when you know you won't be interrupted. It might be good to be on a walk, playing a sport, or doing an activity to make the situation less intense, but still with room to intentionally talk."
            image={<FontAwesome name="tree" size={100} color="black" />}
          />
          <ConversationCardAndOverlay
            title="Be Open Minded"
            description="Ask about the drug use, don't make assumptions on what you think they will be doing. Don't pass judgement or tease out any information they don't want to share. Remain focussed on the topic."
            image={<SimpleLineIcons name="speech" size={100} color="black" />}
          />
          <ConversationCardAndOverlay
            title="Remain Sensitive"
            description="Stay calm and reasonable and don't let it turn into an argument. Use statements including “I”, removing blame from them. Instead of saying “You make me feel worried” say something like “I feel worried about this'."
            image={
              <FontAwesome5 name="user-friends" size={100} color="black" />
            }
          />
          <ConversationCardAndOverlay
            title="Prepare For Negativity"
            description="They may not see their drug use as a problem and may not want to talk about it. Be prepared for a negative reaction but know that broaching the subject is enough for them to know you care and that they can trust you."
            image={
              <MaterialIcons name="do-not-disturb" size={100} color="black" />
            }
          />
          <ConversationCardAndOverlay
            title="Be A Friend First"
            description="Let them know you care about them and remind them of their good qualities. They're more likely to take advice on board if they feel valued and respected. Remind them we're all human and we all have problems."
            image={
              <FontAwesome5 name="user-friends" size={100} color="black" />
            }
          />
          <ConversationCardAndOverlay
            title="Be Honest"
            description="Reassure them that they can change and you'll support them but it takes time. Addiction and use are two separate issues and require different responses. Be honest you're no expert but you're there for them."
            image={<AntDesign name="clockcircle" size={100} color="black" />}
          />
          <ConversationCardAndOverlay
            title="Signpost Or Research"
            description="In cases of addiction, it can be important to seek some professional help, from a GP or from a drug support service. If the issue is recreational use, research together ways to move away from drug use."
            image={<FontAwesome name="map-signs" size={100} color="black" />}
          />
          <ConversationCardAndOverlay
            title="Know When To Step Back"
            description="Not everyone will see it as a problem and some won't want help. Reassure them you're still mates and happy to chat if they want."
            image={<Entypo name="back" size={100} color="black" />}
          />
          <ConversationCardAndOverlay
            title="Care For Yourself"
            description="Conversations like that can be tricky and you don't want to neglect your own mental health. Take some time to process the conversation and talk to someone outside of the situation i.e. a parent or partner, if you feel necessary."
            image={<FontAwesome5 name="heartbeat" size={100} color="black" />}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullViewStyle: {
    backgroundColor: "#FBD499",
    alignItems: "center",
  },
  titleViewStyle: {
    alignContent: "center",
    paddingVertical: 10,
  },
  title: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitle: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
  },
});

export default ConversationScrollView;
