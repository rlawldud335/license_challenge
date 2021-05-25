import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Title from "../../../components/Title";
import Tag from "../../../components/Tag";

export default ({ challenge }) => {
  return (
    <View style={{ position: "absolute", height: "93%", width: "100%" }}>
      <ScrollView>
        <Image
          source={{ url: challenge.challengeTitleImage }}
          style={{ width: "100%", height: 250 }}
        />
        <View style={{ padding: 20 }}>
          <Title title={challenge.challengeTitle} />
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              marginVertical: 10,
              paddingLeft: 5,
            }}
          >
            <Tag tagName={`${challenge.deposit} P`} />
            <Tag tagName={`${challenge.challengeCategory}`} />
            <Tag tagName={`${challenge.licenseName}`} />
            <Tag tagName={`${challenge.proofAvailableDay}`} />
            <Tag tagName={`하루 ${challenge.proofCountOneDay}번 인증`} />
            <Tag tagName={`총 ${challenge.challengeTerm}번 인증`} />
          </View>
          <Text>
            {challenge.chgStartDt} ~{challenge.chgEndDt}
          </Text>
          <View style={{ marginTop: 20 }}>
            <Title title={"챌린지 소개글"} />
            <Text>{challenge.leaderId}</Text>
            <Text>{challenge.challengeInroduction}</Text>
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
            <Text>{challenge.proofMethod}</Text>
            <Title title={"인증예시"} />
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <View style={{ flexDirection: "column" }}>
                <Image
                  source={{ uri: challenge.goodProofImage }}
                  style={{ width: 140, height: 140, borderRadius: 10 }}
                />
                <Text>좋은예시</Text>
              </View>
              <View style={{ flexDirection: "column" }}>
                <Image
                  source={{ uri: challenge.badProofImage }}
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
              현재 참가인원 {challenge.joinPeople}/{challenge.limitPeople}
            </Text>
            <Text> 참가 포인트 {challenge.deposit}P</Text>
          </View>

          <Text>정보처리기사 관련 추천 자격증</Text>
        </View>
      </ScrollView>
    </View>
  );
};
