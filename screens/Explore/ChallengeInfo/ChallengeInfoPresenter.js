import React from "react";
import styled from "styled-components/native";
import { View, Image, Platform } from "react-native";
import Title from "../../../components/Title";
import Tag from "../../../components/Tag";

export default ({ challenge }) => {
  return (
    <SView>
      <Image
        source={{ uri: challenge.challengeTitleImage }}
        style={{
          width: Platform.OS === "web" ? 720 : "100%",
          height: 250,
          backgroundColor: "#eeeeee",
        }}
      />

      <Contents>
        <ChallengeTitle>{challenge.challengeTitle}</ChallengeTitle>
        <DateWrap>
          <DateText>
            {challenge.chgStartDt.slice(0, 10)} ~{" "}
            {challenge.chgEndDt.slice(0, 10)}
          </DateText>
        </DateWrap>
        <TagWrap>
          <Tag tagName={`주 ${challenge.proofCount}회`} />
          <Tag tagName={`하루 ${challenge.proofCountOneDay}회`} />
          <Tag tagName={`${challenge.deposit} P`} />
          <Tag tagName={`${challenge.proofAvailableDay}`} />
          <Tag tagName={`${challenge.challengeCategory}`} />
          {challenge.licenseName && (
            <Tag tagName={`${challenge.licenseName}`} />
          )}
        </TagWrap>

        <ProofWrap>
          <Title title={"인증방법"} />
          <View style={{ padding: 15, marginBottom: 10 }}>
            <Text>{challenge.proofMethod}</Text>
          </View>

          <Title title={"인증예시"} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              paddingVertical: 15,
            }}
          >
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Image
                source={{ uri: challenge.goodProofImage }}
                style={{ width: 140, height: 140, borderRadius: 10 }}
              />
              <Text>좋은예시</Text>
            </View>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Image
                source={{ uri: challenge.badProofImage }}
                style={{ width: 140, height: 140, borderRadius: 10 }}
              />
              <Text>나쁜예시</Text>
            </View>
          </View>
        </ProofWrap>

        <IntroWrap>
          <Title title={"챌린지 소개글"} />
          <Leader>
            <Image
              source={{ uri: challenge.leaderProfileImage }}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: "white",
                margin: 5,
              }}
            />
            <Normal>{challenge.leaderName}</Normal>
            <Inro>
              <Text>{challenge.challengeIntroduction}</Text>
            </Inro>
          </Leader>
        </IntroWrap>

        <IntroWrap>
          <Title title={"참가현황"} />
          <View style={{ padding: 10 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <Middle>현재 참가인원</Middle>
              <Middle>
                {challenge.joinPeople}/{challenge.limitPeople}
              </Middle>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <Middle>참가 포인트</Middle>
              <Middle>{challenge.deposit} P</Middle>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: "#9F9F9F",
              borderBottomWidth: 1,
            }}
          />
          <Info>
            {`
          참가포인트를 걸어 의지를 만드세요! 
          달성률 50 ~ 79% : 달성률 퍼센트만큼 환급!
          달성률 80% ~ 99% : 전액환급!
          달성률 100% : 전액환급! + 보너스포인트!
          `}
          </Info>
        </IntroWrap>
      </Contents>
    </SView>
  );
};

const SView = styled.ScrollView``;

const Contents = styled.View`
  padding: 20px;
`;

const ChallengeTitle = styled.Text`
  font-family: "nanumBold";
  font-size: 25px;
  color: #3b1464;
  margin-bottom: 5px;
`;

const DateWrap = styled.View`
  align-items: center;
  width: 200px;
  background-color: #ff5e5e;
  padding: 5px;
  border-radius: 10px;
`;
const DateText = styled.Text`
  font-family: "nanumBold";
  font-size: 17px;
  color: #ffffff;
`;

const TagWrap = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px 0px;
`;

const Normal = styled.Text`
  font-family: "nanumBold";
  font-size: 17px;
  color: #3b1464;
`;
const Text = styled.Text`
  font-family: "nanumBold";
  font-size: 15px;
  color: #3b1464;
`;

const IntroWrap = styled.View`
  margin-top: 40px;
  background-color: #eeeeee;
  border-radius: 10px;
  padding: 10px;
`;
const Leader = styled.View`
  justify-content: center;
  align-items: center;
`;
const Inro = styled.View`
  margin-top: 15px;
  padding: 10px;
`;

const ProofWrap = styled.View`
  background-color: #ffc0c0;
  padding: 10px;
  border-radius: 10px;
  margin-top: 30px;
`;

const Middle = styled.Text`
  font-family: "nanumBold";
  font-size: 17px;
  color: #3b1464;
`;

const Info = styled.Text`
  font-family: "nanumBold";
  color: #636363;
  font-size: 15px;
`;
