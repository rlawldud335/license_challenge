import React from "react";
import styled from "styled-components/native";
import Tag from "../../../components/Tag";
import { View } from "react-native";

const renderItem = ({ item, navigation }) => {
  if (item.empty === true) {
    return <View style={{ flex: 1, margin: 10 }} />;
  }
  return (
    <Challenge
      onPress={() => {
        navigation.navigate("ChallengeInfo", {
          challengeId: item.challengeId,
        });
      }}
    >
      <TitleImage source={{ uri: item.challengeTitleImage }} />
      <TitleName>{item.challengeTitle.slice(0, 20)}</TitleName>
      <Tags>
        <Tag tagName={`주 ${item.proofCount}회`} />
        <Tag tagName={`하루 ${item.proofCountOneDay}회`} />
        <Tag tagName={`${item.deposit} P`} />
        {item.licenseName ? <Tag tagName={item.licenseName} /> : null}
        <Tag tagName={`${item.proofAvailableDay}`} />
        <Tag tagName={`${item.challengeCategory}`} />
      </Tags>
    </Challenge>
  );
};

export default React.memo(renderItem);

const Challenge = styled.TouchableOpacity`
  flex: 1;
  margin: 10px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.1;
  shadow-radius: 2px;
  border-radius: 10px;
  background-color: white;
`;
const TitleImage = styled.Image`
  height: 130px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;
const TitleName = styled.Text`
  font-family: "nanumBold";
  color: #3b1464;
  font-size: 17px;
  margin: 5px 10px;
`;
const Tags = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 10px;
  padding-left: 5px;
`;
