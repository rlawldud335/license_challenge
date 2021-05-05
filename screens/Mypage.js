import React from "react";
import { View, Text, Button } from "react-native";
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
      <Title title={"마이페이지"} />
    </View>
    <View style={{ flex: 7, justifyContent: "center", alignItems: "center" }}>
      <Text>MyPage</Text>
    </View>
  </View>
);
