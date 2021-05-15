import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Title from "../../../components/Title";
import Tag from "../../../components/Tag";
import { Entypo } from "@expo/vector-icons";

const HEIGHT = Dimensions.get("window").height - 60;
const data = {
  challengeId: 1,
  challengeTitle:
    "CHALLENGE1부시작과 공부끝에 인증사진 찍어서 올리세부시작과 공부끝에 인증사진 찍어서 올리세부시작과 공부끝에 인증사진 찍어서 올리세",
  challengeCategory: "공인시험",
  scheduleId: 1,
  leaderId: "2021001",
  proofMethod:
    "공부시작과 공부끝에 인증사진 찍어서 올리세요.부시작과 공부끝에 인증사진 찍어서 올리세부시작과 공부끝에 인증사진 찍어서 올리세부시작과 공부끝에 인증사진 찍어서 올리세",
  proofCount: 2,
  proofCountOneDay: 2,
  chgStartDt: "2021-05-03T15:00:00.000Z",
  chgEndDt: "2021-05-30T15:00:00.000Z",
  challengeTerm: 4,
  challengeTitleImage:
    "https://licensechallenge.s3.ap-northeast-2.amazonaws.com/challenge/title/1620114161603",
  challengeInroduction: "정처기 챌린지방입니다",
  goodProofImage:
    "https://licensechallenge.s3.ap-northeast-2.amazonaws.com/challenge/title/1620661285873",
  badProofImage:
    "https://licensechallenge.s3.ap-northeast-2.amazonaws.com/challenge/title/1620661285881",
  deposit: 10000,
  limitPeople: 20,
  joinPeople: 10,
};

export default ({ route }) => {
  console.log(route);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ position: "absolute", height: "93%", width: "100%" }}>
        <ScrollView>
          <Image
            source={{ uri: data.challengeTitleImage }}
            style={{ width: "100%", height: 300 }}
          />
          <View style={{ padding: 20 }}>
            <Title title={data.challengeTitle} />
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                marginVertical: 10,
                paddingLeft: 5,
              }}
            >
              <Tag tagName={`${data.deposit} P`} />
              <Tag tagName={`하루 ${data.proofCountOneDay}번 인증`} />
              <Tag tagName={`태그입니다`} />
              <Tag tagName={`태그입니다`} />
              <Tag
                tagName={`${data.chgStartDt.slice(
                  0,
                  10
                )} ~ ${data.chgEndDt.slice(0, 10)}`}
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <Title title={"챌린지 소개글"} />
              <Text>{data.leaderId}</Text>
              <Text>{data.challengeInroduction}</Text>
            </View>
            <View
              style={{
                backgroundColor: "#FFC0C0",
                padding: 10,
                borderRadius: 10,
                marginTop: 20,
              }}
            >
              <Title title={"인증방법"} />
              <Text>{data.proofMethod}</Text>
              <Title title={"인증예시"} />
              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                <View style={{ flexDirection: "column" }}>
                  <Image
                    source={{ uri: data.goodProofImage }}
                    style={{ width: 140, height: 140, borderRadius: 10 }}
                  />
                  <Text>좋은예시</Text>
                </View>
                <View style={{ flexDirection: "column" }}>
                  <Image
                    source={{ uri: data.badProofImage }}
                    style={{ width: 140, height: 140, borderRadius: 10 }}
                  />
                  <Text>나쁜예시</Text>
                </View>
              </View>
            </View>

            <View style={{ marginTop: 20 }}>
              <Title title={"참가현황"} />
              <Text>
                {" "}
                현재 참가인원 {data.joinPeople}/{data.limitPeople}
              </Text>
              <Text> 참가 포인트 {data.deposit}P</Text>
            </View>

            <Text>정보처리기사 관련 추천 자격증</Text>
          </View>
        </ScrollView>
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
        >
          <Text
            style={{ color: "white", fontFamily: "nanumBold", fontSize: 17 }}
          >
            챌린지 참가하기
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
