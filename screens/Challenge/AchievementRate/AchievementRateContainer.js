import React, { useEffect, useState } from "react";
import Api from "../../../api";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import Camera from "../../../assets/icon/Camera";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";

export default ({ cid, challengeTitleImage, navigation, isEnd, deposit }) => {
  const [achieveRate, setAchieveRate] = useState();
  const [End, setEnd] = useState(isEnd);

  const getData = async () => {
    const response = await Api.getChallengeAchievementRate(cid);
    if (response.status == 200) {
      setAchieveRate(response.data);
    }
  };
  const postBonus = async () => {
    const response = await Api.postChallengeBonus(cid);
    Alert.alert(response.message);
    if (response.success == true) {
      getData();
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return achieveRate ? (
    <Container>
      {End ? (
        <>
          <View
            style={{
              backgroundColor: "#4287f5",
              flexDirection: "column",
              height: 80,
              width: "100%",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Title style={{ color: "white" }}>챌린지 결과</Title>
            <Contents style={{ marginTop: 5 }}>
              보증금 환급 : {achieveRate.refund_deposit ? deposit : 0} P
            </Contents>
            <Contents>보너스 포인트 : {achieveRate.refund_bonus} P</Contents>
          </View>

          <ProofPictureBtn
            style={{ backgroundColor: "#f54242" }}
            onPress={postBonus}
          >
            <Title style={{ color: "white" }}>보너스 포인트 받기</Title>
          </ProofPictureBtn>
        </>
      ) : (
        <ProofPictureBtn
          onPress={() =>
            navigation.navigate("ProofPicture", {
              item: {
                challengeId: achieveRate.challengeId,
                challengeTitle: achieveRate.challengeTitle,
                challengeTitleImage: challengeTitleImage,
              },
            })
          }
        >
          <Camera width="26" height="26" style={{ marginRight: 15 }} />
          <Title style={{ color: "white" }}>사진 인증</Title>
        </ProofPictureBtn>
      )}
      <ProofPictureBtn
        style={{ backgroundColor: "#DCBCFD" }}
        onPress={() =>
          navigation.navigate("ChallengeInfo", {
            challengeId: achieveRate.challengeId,
          })
        }
      >
        <Ionicons
          name="information-circle-outline"
          size={26}
          color="#3b1464"
          style={{ marginRight: 15 }}
        />
        <Title>챌린지 정보 보기</Title>
      </ProofPictureBtn>

      <AchieveRateView>
        <Title>현재 달성률 {achieveRate.achievement_rate} %</Title>
        <ProgressContainer>
          <ProgressBar>
            <View
              style={
                ([StyleSheet.absoluteFill],
                {
                  backgroundColor: "#B36DFF",
                  width: `${achieveRate.achievement_rate}%`,
                  borderRadius: 10,
                })
              }
            />
          </ProgressBar>
          <ProgressText>달성률 {achieveRate.achievement_rate} %</ProgressText>
        </ProgressContainer>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 20,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Title>인증 성공</Title>
            <Title>{achieveRate.successCnt}</Title>
          </View>
          <View style={{ alignItems: "center" }}>
            <Title>인증 실패</Title>
            <Title>{achieveRate.failCnt}</Title>
          </View>
          <View style={{ alignItems: "center" }}>
            <Title>오늘 인증</Title>
            <Title>{achieveRate.userDayCnt}</Title>
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
          달성률 50 ~ 79% : 달성률 퍼센트만큼 환급!
          달성률 80% ~ 99% : 전액환급!
          달성률 100% : 전액환급! + 보너스포인트!`}
        </Info>
      </AchieveRateView>
      <AchieveRateView>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Title>참가자 정보</Title>
          <TouchableOpacity
            style={{
              backgroundColor: "#CE9FFF",
              paddingVertical: 5,
              paddingHorizontal: 15,
              borderRadius: 10,
            }}
            onPress={() => {
              navigation.navigate("JoinPeopleList", { cid });
            }}
          >
            <Title style={{ fontSize: 15 }}>참가자 리스트 조회</Title>
          </TouchableOpacity>
        </View>
        <Title>전체 참가자 인원 : {achieveRate.countAllchallengers} 명</Title>
        <Title>
          오늘 인증 성공 인원 : {achieveRate.countDailyProofSuccess} 명
        </Title>
        <View
          style={{
            borderBottomColor: "#9F9F9F",
            borderBottomWidth: 1,
            marginTop: 10,
          }}
        />
        <Title style={{ marginVertical: 10 }}>참가자 인증 현황</Title>
        <Title>~20% : {achieveRate.achievementStatistics.to20} 명</Title>
        <Title>~40% : {achieveRate.achievementStatistics.to40} 명</Title>
        <Title>~60% : {achieveRate.achievementStatistics.to60} 명</Title>
        <Title>~80% : {achieveRate.achievementStatistics.to80} 명</Title>
        <Title>~100% : {achieveRate.achievementStatistics.to100} 명</Title>
      </AchieveRateView>
    </Container>
  ) : (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="small" color="purple" />
    </View>
  );
};

const Info = styled.Text`
  font-family: "nanumBold";
  color: #636363;
  font-size: 15px;
`;
const AchieveRateView = styled.View`
  padding: 20px 30px;
  background-color: #eeeeee;
  border-radius: 15px;
  margin: 20px 0px;
`;

const ProgressContainer = styled.View`
  width: 100%;
  margin: 20px 0px;
  justify-content: center;
  align-items: center;
  align-self: center;
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
  background-color: #ebebeb;
  border-color: #707070;
  border-width: 1px;
  border-radius: 10px;
`;
const Container = styled.ScrollView`
  background-color: white;
  padding: 20px;
`;

const ProofPictureBtn = styled.TouchableOpacity`
  width: 100%;
  min-width: 300px;
  background-color: #ff5e5e;
  height: 40px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 10px 0px;
`;

const Title = styled.Text`
  font-family: "nanumBold";
  font-size: 18px;
  color: #3b1464;
`;

const Contents = styled.Text`
  font-family: "nanumBold";
  font-size: 16px;
  color: white;
`;
