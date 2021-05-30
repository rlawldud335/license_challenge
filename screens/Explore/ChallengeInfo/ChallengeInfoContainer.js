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

export default ({ route, navigation }) => {
  const {
    params: { challengeId },
  } = route;

  const [challengeData, setChallengeData] = useState();

  const getData = async () => {
    const response = await Api.getChallengeChallengeId(challengeId);
    if (response.status == 200) {
      setChallengeData(response.data);
    } else {
      Alert.alert("500 error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return challengeData ? (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          height: "93%",
          width: "100%",
        }}
      >
        <ChallengeInfoPresenter
          challenge={challengeData}
          navigation={navigation}
        />
      </View>

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
          onPress={() => {
            navigation.navigate("JoinChallenge", {challengeData});
            navigation.navigate("Payment", { challengeData });
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
  ) : (
    <View
      style={{
        flex: 1,
        justifyContents: "center",
        aligenItem: "center",
        backgroundColor: "white",
      }}
    >
      <ActivityIndicator size="small" color="purple" />
    </View>
  );
};
