import React from "react";
import { View } from "react-native";

import CommunityTab from "../../navigation/Tab/CommunityTab";
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
      <Title title={"커뮤니티"} />
    </View>
    <View style={{ flex: 1 }}>
      <CommunityTab />
    </View>
  </View>
);
