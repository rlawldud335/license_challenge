import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import styled from "styled-components/native";
import RedButton from "../../../components/RedButton";
import { Platform, TouchableOpacity, Text, View } from "react-native";
import Checkbox from "../../../components/CheckBox";
import OneLineTextInput from "../../../components/OneLineTextInput";
import MultiLineTextInput from "../../../components/MultiLineTextInput";
import NumericTextInput from "../../../components/NumericTextInput";
import Camera from "../../../assets/icon/Camera";

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

  const pickImage = async (type) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      if (type == "title") {
        SCD.setChallengeTitleImage(result.uri);
      } else if (type == "good") {
        SCD.setGoodProofImage(result.uri);
      } else if (type == "bad") {
        SCD.setBadProofImage(result.uri);
      }
    }
  };

  return (
    <Container>
      <Body>
        <Scroll>
          <CT>
            <Content>
              <Title>챌린지 카테고리</Title>
              <RowContent>
                <Checkbox
                  isSelected={CD.challengeCategory == "자격증" ? true : false}
                  onPress={() => SCD.setChallengeCategory("자격증")}
                  name={"자격증"}
                />
                <Checkbox
                  isSelected={CD.challengeCategory == "공인시험" ? true : false}
                  onPress={() => SCD.setChallengeCategory("공인시험")}
                  name={"공인시험"}
                />
                <Checkbox
                  isSelected={CD.challengeCategory == "스터디" ? true : false}
                  onPress={() => SCD.setChallengeCategory("스터디")}
                  name={"스터디"}
                />
              </RowContent>
            </Content>

            {CD.challengeCategory == "자격증" ? (
              <>
                <Title>자격증 선택</Title>
                <Title>자격증 회차 선택</Title>
              </>
            ) : null}

            <Content>
              <Title>챌린지 타이틀 사진</Title>
              <PickImage onPress={() => pickImage("title")}>
                {CD.challengeTitleImage ? (
                  <Image source={{ uri: CD.challengeTitleImage }} />
                ) : null}
                <Camera style={{ position: "absolute" }} />
              </PickImage>
            </Content>

            <Content>
              <Title>챌린지 제목</Title>
              <OneLineTextInput
                onChange={(text) => {
                  SCD.setChallengeTitle(text);
                }}
                plh={"예) 정보처리기사 자격증 챌린지!!"}
              />
            </Content>

            <Content>
              <Title>챌린지 소개글</Title>
              <MultiLineTextInput
                onChange={(text) => {
                  SCD.setChallengeIntroduction(text);
                }}
                plh={"예) 2021년 정처기 공부 같이 꾸준히 해봐요! "}
              />
            </Content>

            <Content>
              <Title>인증빈도</Title>
              <RowContent>
                <Checkbox
                  isSelected={CD.proofCount == 1 ? true : false}
                  onPress={() => SCD.setProofCount(1)}
                  name={"주 1회"}
                />
                <Checkbox
                  isSelected={CD.proofCount == 2 ? true : false}
                  onPress={() => SCD.setProofCount(2)}
                  name={"주 2회"}
                />
                <Checkbox
                  isSelected={CD.proofCount == 3 ? true : false}
                  onPress={() => SCD.setProofCount(3)}
                  name={"주 3회"}
                />
                <Checkbox
                  isSelected={CD.proofCount == 4 ? true : false}
                  onPress={() => SCD.setProofCount(4)}
                  name={"주 4회"}
                />
                <Checkbox
                  isSelected={CD.proofCount == 5 ? true : false}
                  onPress={() => SCD.setProofCount(5)}
                  name={"주 5회"}
                />
                <Checkbox
                  isSelected={CD.proofCount == 6 ? true : false}
                  onPress={() => SCD.setProofCount(6)}
                  name={"주 6회"}
                />
                <Checkbox
                  isSelected={CD.proofCount == 7 ? true : false}
                  onPress={() => SCD.setProofCount(7)}
                  name={"주 7회"}
                />
              </RowContent>
            </Content>

            {CD.proofCount == 7 ? null : (
              <Content>
                <Title>인증가능 요일</Title>
                <RowContent>
                  <Checkbox isSelected={false} name={"월"} />
                  <Checkbox isSelected={false} name={"화"} />
                  <Checkbox isSelected={false} name={"수"} />
                  <Checkbox isSelected={false} name={"목"} />
                  <Checkbox isSelected={false} name={"금"} />
                  <Checkbox isSelected={false} name={"토"} />
                  <Checkbox isSelected={false} name={"일"} />
                </RowContent>
              </Content>
            )}

            <Content>
              <Title>하루 인증 횟수</Title>
              <RowContent>
                <NumericTextInput
                  onChange={(text) => SCD.setProofCountOneDay(text)}
                  plh={"1"}
                />
                <Title>회</Title>
              </RowContent>
            </Content>

            <Content>
              <Title>인증방법</Title>
              <MultiLineTextInput
                onChange={(text) => {
                  SCD.setChallengeIntroduction(text);
                }}
                plh={"예) 정처기 책 한페이지 찍어서 올리기! "}
              />
            </Content>

            <Content>
              <Title>인증샷 예시</Title>
              <RowContent>
                <View
                  style={{
                    flexDirection: "column",
                    margin: 10,
                    alignItems: "center",
                  }}
                >
                  <PickImage onPress={() => pickImage("good")}>
                    {CD.goodProofImage ? (
                      <Image source={{ uri: CD.goodProofImage }} />
                    ) : null}
                    <Camera style={{ position: "absolute" }} />
                  </PickImage>
                  <Text>좋은 예시</Text>
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    margin: 10,
                    alignItems: "center",
                  }}
                >
                  <PickImage onPress={() => pickImage("bad")}>
                    {CD.badProofImage ? (
                      <Image source={{ uri: CD.badProofImage }} />
                    ) : null}
                    <Camera style={{ position: "absolute" }} />
                  </PickImage>
                  <Text>나쁜 예시</Text>
                </View>
              </RowContent>
            </Content>

            <Content>
              <Title>챌린지 시작일</Title>
            </Content>

            <Content>
              <Title>챌린지 종료일</Title>
            </Content>

            <Content>
              <Title>참가 보증금</Title>
              <RowContent>
                <NumericTextInput
                  onChange={(text) => {
                    SCD.setDeposit(text);
                  }}
                  plh={"1000"}
                />
                <Title>포인트</Title>
              </RowContent>
            </Content>

            <Content>
              <Title>제한인원</Title>
              <RowContent>
                <NumericTextInput
                  onChange={(text) => {
                    SCD.setLimitPeople(text);
                  }}
                  plh={"10"}
                />
                <Title>명</Title>
              </RowContent>
            </Content>
          </CT>
        </Scroll>
      </Body>
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
const Body = styled.View`
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
  flex: 1;
  margin: 0px 20px;
`;

const Content = styled.View`
  margin: 20px 0px;
`;

const RowContent = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
  color: #3b1464;
  font-family: "nanumBold";
  margin-bottom: 5px;
`;

const PickImage = styled.TouchableOpacity`
  width: 150px;
  height: 100px;
  border-radius: 10px;
  background-color: #bebebe;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  width: 150px;
  height: 100px;
  border-radius: 10px;
`;
