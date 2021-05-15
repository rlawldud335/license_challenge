import React from "react";
import { View, Text } from "react-native";

import Title from "../../components/Title";

export default () => (
  <View style={{ flex: 1, backgroundColor: "white" }}>
    <View
      style={{
        flexDirection: "row",
        height: 60,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Title title={"마이페이지"} />
    </View>
    <View style={{ flex: 1 }}>
      <Text>MyPage</Text>
    </View>
  </View>
);
