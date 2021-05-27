import React, { useEffect } from "react";
import { View, Text } from "react-native";
import Api from "../../../api";

export default ({ cid, navigation }) => {
  console.log(cid);

  const getData = async () => {
    const response = await Api.getChallengeAchievementRate(cid);
    console.log(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Text>AchievementRate</Text>
    </View>
  );
};