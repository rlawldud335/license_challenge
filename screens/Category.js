import React from "react";
import { View, Button } from "react-native";

export default ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Button
      title="ChallengeInfo"
      onPress={() => navigation.navigate("ChallengeInfo")}
    />
  </View>
);
