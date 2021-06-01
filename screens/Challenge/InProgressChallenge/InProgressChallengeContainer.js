import React, { useState, useEffect } from "react";
import { FlatList, Alert, View, ActivityIndicator } from "react-native";
import InProgressChallengePresenter from "./InProgressChallengePresenter";
import Api from "../../../api";

export default ({ navigation }) => {
  const [challengeData, setChallengeData] = useState();

  const getData = async () => {
    const response = await Api.getOngoingChallenge();
    if (response.status == 200) {
      setChallengeData(response.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({ item }) => {
    return <InProgressChallengePresenter item={item} navigation={navigation} />;
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
      <ActivityIndicator size="small" color="purple" />
    </View>
  );
};
