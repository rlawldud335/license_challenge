import Api from "../../../api";
import PaymentPresenter from "./PaymentPresenter";
import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  View,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";

export default ({ route, navigation }) => {
  const {
    params: { challengeData },
  } = route;
  const [myPonit, setMyPoint] = useState();

  useState(async () => {
    const response = await Api.getMyPoint();
    if (response.status == 200) {
      setMyPoint(parseInt(response.data.point));
    }
  }, []);

  return challengeData ? (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          height: "93%",
          width: "100%",
        }}
      >
        <PaymentPresenter
          challenge={challengeData}
          navigation={navigation}
          myPonit={myPonit}
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
          onPress={async () => {
            const response = await Api.getChallengeEnter(
              challengeData.deposit,
              challengeData.challengeId
            );
            if (response.success == true) {
              navigation.reset({
                routes: [
                  {
                    name: "MainTab",
                    params: {
                      screen: "Challenge",
                    },
                  },
                ],
              });
            } else {
              Alert.alert(response.message);
            }
          }}
        >
          <Text
            style={{ color: "white", fontFamily: "nanumBold", fontSize: 17 }}
          >
            결제하기
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
      <ActivityIndicator />
    </View>
  );
};
