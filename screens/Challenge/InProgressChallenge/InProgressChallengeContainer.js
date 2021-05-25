import React from "react";
import { View, Text, FlatList, Image, Dimensions } from "react-native";
import Menu from "../../../assets/icon/Menu";
import Tag from "../../../components/Tag";
import Title from "../../../components/Title";
import styled from "styled-components/native";

const wdt = Dimensions.get("window").width;

export default () => {
  const data = [
    {
      challengeId: 52,
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
    return (
      <Box>
        <View style={{ width: "55%" }}>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 5,
              justifyContent: "space-between",
            }}
          >
            <Title title={item.challengeTitle} />
            <Menu />
          </View>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <Tag tagName={`일주일에 ${item.proofCount}번 인증`} />
            <Tag tagName={`하루 ${item.proofCountOneDay}번 인증`} />
            <Tag tagName={`총 ${item.challengeTerm}번 인증`} />
            <Tag tagName={`${item.deposit} P`} />
          </View>
          <Text>{item.achievement_rate}</Text>
        </View>
        <Image
          source={{ uri: item.challengeTitleImage }}
          style={{ width: 120, height: 100, borderRadius: 10, marginLeft: 20 }}
        />
      </Box>
    );
  };

  return (
    <FlatList
      style={{ flex: 1, backgroundColor: "white" }}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.challengeId.toString()}
    />
  );
};

const Box = styled.View`
  height: 160px;
  flex-direction: row;
  margin: 7px 10px;
  shadow-color: #000;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.15;
  shadow-radius: 10px;
  border-radius: 10px;
  background-color: white;
  justify-content: center;
  align-items: center;
`;
