import React from "react";
import styled from "styled-components/native";
import Menu from "../../../assets/icon/Menu";
import Tag from "../../../components/Tag";
import { View, StyleSheet } from "react-native";

const renderItem = ({ item, navigation }) => {
  return (
    <Box
      onPress={() => {
        navigation.navigate("DoChallengeTab", {
          challengeId: item.challengeId,
          challengeTitleImage: item.challengeTitleImage,
          challengeTitle: item.challengeTitle,
          isEnd: true,
          deposit: item.deposit,
        });
      }}
    >
      <Content>
        <TitleView>
          <Title>{item.challengeTitle.slice(0, 15)}</Title>
          <Menu />
        </TitleView>

        <TagWrap>
          <Tag tagName={`주 ${item.proofCount}회`} />
          <Tag tagName={`하루 ${item.proofCountOneDay}회`} />
          <Tag tagName={`${item.deposit} P`} />
          <Tag tagName={`${item.proofAvailableDay}`} />
          <Tag tagName={`${item.challengeCategory}`} />
          {item.licenseName ? <Tag tagName={item.licenseName} /> : null}
        </TagWrap>

        <ProgressContainer>
          <ProgressBar>
            <View
              style={
                ([StyleSheet.absoluteFill],
                {
                  backgroundColor: "#B36DFF",
                  width: `${item.achievement_rate}%`,
                  borderRadius: 10,
                })
              }
            />
          </ProgressBar>
          <ProgressText>{`달성률 ${item.achievement_rate}%`}</ProgressText>
        </ProgressContainer>
      </Content>

      <ImageBtn>
        <Image source={{ uri: item.challengeTitleImage }} />
      </ImageBtn>
    </Box>
  );
};

export default React.memo(renderItem);

const Box = styled.TouchableOpacity`
  height: 160px;
  flex-direction: row;
  margin: 7px 10px;
  border-radius: 10px;
  background-color: #e5e5e5;
  justify-content: center;
  align-items: center;
`;

const Content = styled.View`
  width: 57%;
`;

const ImageBtn = styled.View`
  width: 120px;
  height: 100px;
  border-radius: 10px;
  margin-left: 15px;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  width: 120px;
  height: 100px;
  border-radius: 10px;
`;

const TitleView = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-size: 17px;
  font-family: "nanumBold";
  color: #3b1464;
  margin-left: 5px;
`;

const TagWrap = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const ProgressContainer = styled.View`
  width: 90%;
  margin-top: 5px;
  justify-content: center;
  align-items: center;
`;

const ProgressText = styled.Text`
  position: absolute;
  color: #2a0059;
  font-size: 10px;
`;

const ProgressBar = styled.View`
  flex-direction: row;
  height: 15px;
  width: 100%;
  background-color: #e5e5e5;
  border-color: #707070;
  border-width: 1px;
  border-radius: 10px;
`;
