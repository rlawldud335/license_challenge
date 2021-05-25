import React from "react";
import { FlatList } from "react-native";
import EndedChallengePresenter from "./EndedChallengePresenter";

export default ({ navigation }) => {
  const data = [
    {
      challengeId: 52,
      challengeTitle:
        "같이공부하자같이공부하자같이공부하자같이공부하자같이공부하자같이공부하자같이공부하자",
      licenseName: "토양환경기술사",
      proofCount: 2,
      proofCountOneDay: 2,
      challengeTerm: 4,
      challengeTitleImage:
        "https://licensechallenge.s3.ap-northeast-2.amazonaws.com/challenge/title/undefined_2021-05-25T07%3A00%3A00.363Z",
      deposit: 10000,
      chgStartDt: "2021-05-03T15:00:00.000Z",
      chgEndDt: "2021-06-05T15:00:00.000Z",
      challengeCreateDt: "2021-05-23T02:41:50.000Z",
      achievement_rate: "75",
    },
    {
      challengeId: 53,
      challengeTitle: "같이공부하자!2222",
      licenseName: "토양환경기술사",
      proofCount: 2,
      proofCountOneDay: 2,
      challengeTerm: 4,
      challengeTitleImage:
        "https://licensechallenge.s3.ap-northeast-2.amazonaws.com/challenge/title/undefined_2021-05-25T07%3A00%3A00.363Z",
      deposit: 10000,
      chgStartDt: "2021-05-03T15:00:00.000Z",
      chgEndDt: "2021-06-05T15:00:00.000Z",
      challengeCreateDt: "2021-05-23T02:41:50.000Z",
      achievement_rate: "75",
    },
  ];

  const renderItem = ({ item }) => {
    return <EndedChallengePresenter item={item} navigation={navigation} />;
  };

  return (
    <FlatList
      style={{ flex: 1, backgroundColor: "white" }}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.challengeId.toString()}
      disableVirtualization={false}
    />
  );
};
