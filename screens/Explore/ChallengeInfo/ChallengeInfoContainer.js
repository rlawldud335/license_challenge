import Api from "../../../api";
import ChallengeInfoPresenter from "./ChallengeInfoPresenter";
import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  View,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

export default ({ route }) => {
  const {
    params: { challengeId },
  } = route;
  console.log(challengeId);
  const [isLoading, setIsLoading] = useState(false);
  const [challenge, setChallenge] = useState();

  const getData = async () => {
    setIsLoading(true);
    const response = await Api.getChallengeChallengeId(challengeId);
    await console.log(response);
    await setChallenge(response[0]);
    if (response[0]) {
      setIsLoading(false);
    } else {
      Alert.alert("response none");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return isLoading ? (
    <View
      style={{
        flex: 1,
        justifyContents: "center",
        aligenItem: "center",
        backgroundColor: "white",
      }}
    >
      <ActivityIndicator />
    </View>
  ) : (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ChallengeInfoPresenter challenge={challenge} />
      <View
        style={{
          height: "7%",
          width: "100%",
          position: "absolute",
          bottom: 0,
          backgroundColor: "white",
          borderTopColor: "#CACACA",
          borderTopWidth: 0.2,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Entypo name="info-with-circle" size={24} color="#652DA1" />
        <TouchableOpacity
          style={{
            width: "60%",
            minWidth: 300,
            backgroundColor: "#FF5E5E",
            height: 40,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{ color: "white", fontFamily: "nanumBold", fontSize: 17 }}
          >
            챌린지 참가하기
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
