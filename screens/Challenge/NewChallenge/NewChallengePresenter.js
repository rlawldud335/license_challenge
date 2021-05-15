import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import styled from "styled-components/native";
import RedButton from "../../../components/RedButton";
import { TextInput, Checkbox } from "react-native-paper";
import { Platform, Image, TouchableOpacity } from "react-native";

export default ({ CD, SCD, postData, navigation }) => {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      SCD.setChallengeTitleImage(result.uri);
    }
  };

  return (
    <Container>
      <Contents>
        <Scroll>
          <CT>
            <Title>챌린지 타이틀 사진</Title>
            <TouchableOpacity onPress={pickImage} style={{ width: "100%" }}>
              {CD.challengeTitleImage ? (
                <Image
                  source={{ uri: CD.challengeTitleImage }}
                  style={{ width: "100%", height: 150 }}
                />
              ) : (
                <Image
                  source={require("../../../assets/img/food.jpg")}
                  style={{ width: "100%", height: 150 }}
                />
              )}
            </TouchableOpacity>

            <TextInput
              label="챌린지 제목"
              mode="outlined"
              style={{
                width: "70%",
                margin: 10,
                marginTop: 20,
                maxWidth: 320,
                height: 40,
              }}
              onChangeText={(text) => {
                SCD.setChallengeTitle(text);
              }}
            />
            <TextInput
              label="챌린지 소개글"
              mode="outlined"
              style={{
                width: "70%",
                margin: 10,
                maxWidth: 320,
              }}
              multiline={true}
              onChangeText={(text) => {
                SCD.setChallengeIntroduction(text);
              }}
            />

            <Title>챌린지 카테고리</Title>
            <ChallengeCategory>
              <Checkbox.Item
                status={
                  CD.challengeCategory == "자격증" ? "checked" : "unchecked"
                }
                onPress={() => {
                  SCD.setChallengeCategory("자격증");
                }}
                label="자격증"
              />
              <Checkbox.Item
                status={
                  CD.challengeCategory == "공인시험" ? "checked" : "unchecked"
                }
                onPress={() => {
                  SCD.setChallengeCategory("공인시험");
                }}
                label="공인시험"
              />
              <Checkbox.Item
                status={
                  CD.challengeCategory == "스터디" ? "checked" : "unchecked"
                }
                onPress={() => {
                  SCD.setChallengeCategory("스터디");
                }}
                label="스터디"
              />
            </ChallengeCategory>

            {CD.challengeCategory == "자격증" ? (
              <>
                <Title>자격증 선택</Title>
                <Title>자격증 회차 선택</Title>
              </>
            ) : null}

            <TextInput
              label="일주일 당 인증 횟수"
              mode="outlined"
              style={{
                width: "70%",
                margin: 10,
                maxWidth: 320,
              }}
              onChangeText={(text) => {
                SCD.setProofCount(text);
              }}
            />
            <TextInput
              label="하루 당 인증 횟수"
              mode="outlined"
              style={{
                width: "70%",
                margin: 10,
                maxWidth: 320,
              }}
              onChangeText={(text) => {
                SCD.setProofCountOneDay(text);
              }}
            />

            <Title>인증 가능 요일</Title>
            <Checkbox.Item
              status={CD.challengeCategory == "월" ? "checked" : "unchecked"}
              onPress={() => {
                SCD.setProofAvailableDay("월");
              }}
              label="월"
            />

            <Checkbox.Item
              status={CD.challengeCategory == "월" ? "checked" : "unchecked"}
              onPress={() => {
                SCD.setProofAvailableDay("월");
              }}
              label="월"
            />
            <Checkbox.Item
              status={CD.challengeCategory == "월" ? "checked" : "unchecked"}
              onPress={() => {
                SCD.setProofAvailableDay("월");
              }}
              label="월"
            />
            <Checkbox.Item
              status={CD.challengeCategory == "월" ? "checked" : "unchecked"}
              onPress={() => {
                SCD.setProofAvailableDay("월");
              }}
              label="월"
            />
            <Checkbox.Item
              status={CD.challengeCategory == "월" ? "checked" : "unchecked"}
              onPress={() => {
                SCD.setProofAvailableDay("월");
              }}
              label="월"
            />
            <Checkbox.Item
              status={CD.challengeCategory == "월" ? "checked" : "unchecked"}
              onPress={() => {
                SCD.setProofAvailableDay("월");
              }}
              label="월"
            />
            <Checkbox.Item
              status={CD.challengeCategory == "월" ? "checked" : "unchecked"}
              onPress={() => {
                SCD.setProofAvailableDay("월");
              }}
              label="월"
            />
          </CT>
        </Scroll>
      </Contents>
      <Footer>
        <RedButton name={"챌린지 생성하기"} />
      </Footer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
const Contents = styled.View`
  position: absolute;
  height: 93%;
  width: 100%;
`;

const Footer = styled.View`
  position: absolute;
  bottom: 0;
  height: 7%;
  width: 100%;
  background-color: white;
  border-top-color: #cacaca;
  border-top-width: 0.2px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Scroll = styled.ScrollView``;

const CT = styled.View`
  align-items: center;
`;

const Title = styled.Text`
  font-size: 15px;
  color: #3b1464;
  margin: 5px;
  margin-top: 20px;
`;

const ChallengeCategory = styled.View`
  flex-direction: row;
`;
