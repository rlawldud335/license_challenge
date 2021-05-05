import React from "react";
import { View, Text, Button } from "react-native";
import ChallengeTab from "../navigation/Tab/ChallengeTab";
import Title from "../components/Explore/Title";

export default () => (
  <View style={{ flex: 1, backgroundColor: "white" }}>
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexDirection: "row",
        marginLeft: 20,
        marginBottom: 10,
        marginRight: 20,
      }}
    >
      <Title title={"챌린지"} />
      <Button title={"새로운 챌린지 생성"} />
    </View>
    <View style={{ flex: 7 }}>
      <ChallengeTab />
    </View>
  </View>
);
