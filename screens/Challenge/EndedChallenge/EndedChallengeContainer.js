import React, { useState, useEffect } from "react";
import { FlatList, ActivityIndicator, View, Alert } from "react-native";
import EndedChallengePresenter from "./EndedChallengePresenter";
import Api from "../../../api";

export default ({ navigation }) => {
  const [challengeData, setChallengeData] = useState();

  const getData = async () => {
    const response = await Api.getEndedChallenge();
    if (response.status == 200) {
      setChallengeData(response.data);
    } else {
      Alert.alert("500 error");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({ item }) => {
    return <EndedChallengePresenter item={item} navigation={navigation} />;
  };

  return challengeData ? (
    <FlatList
      style={{ flex: 1, backgroundColor: "white" }}
      data={challengeData}
      renderItem={renderItem}
      keyExtractor={(item) => item.challengeId.toString()}
      disableVirtualization={false}
    />
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
