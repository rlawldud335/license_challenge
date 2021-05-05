import React from "react";
import { View, Text, Button } from "react-native";
import CommunityTab from "../navigation/Tab/CommunityTab";
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
      <Title title={"커뮤니티"} />
    </View>
    <View style={{ flex: 7 }}>
      <CommunityTab />
    </View>
  </View>
);
