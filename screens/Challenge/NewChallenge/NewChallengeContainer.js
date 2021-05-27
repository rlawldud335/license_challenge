import React, { useState, useEffect } from "react";
import Api from "../../../api";
import styled from "styled-components/native";
import RedButton from "../../../components/RedButton";
import * as ImagePicker from "expo-image-picker";
import { Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import {
  CreateCategory,
  CreateLicenseSelect,
  CreateTitleImage,
  CreateTitle,
  CreateDescription,
  CreateProofCount,
  CreateProofAvailableDay,
  CreateProofCountOneDay,
  CreateProofMethod,
  CreateProofImageExample,
  CreateChgStartDt,
  CreateChgEndDt,
  CreateDeposit,
  CreateLimitPeople,
} from "./NewChallengePresenter";

const uploadFotmat = (uri) => {
  let uriParts = uri.split(".");
  let fileType = uriParts[uriParts.length - 1];
  return { uri, name: `titleImage.${fileType}`, type: `image/${fileType}` };
};

export default ({ navigation }) => {
  const [challengeTitle, setChallengeTitle] = useState(""); //챌린지 제목 ok
  const [challengeCategory, setChallengeCategory] = useState("스터디"); //챌린지 카테고리 ok
  const [licenseId, setLicenseId] = useState(); //카테고리가 자격증이라면 자격증id x
  const [proofMethod, setProofMethod] = useState(""); //인증방법 ok
  const [proofAvailableDay, setProofAvailableDay] = useState("월"); //인증가능요일 ok
  const [proofCount, setProofCount] = useState(1); //일주일당 인증횟수 ok
  const [proofCountOneDay, setProofCountOneDay] = useState(); //하루당 인증횟수 ok
  const [chgStartDt, setChgStartDt] = useState(new Date()); //챌린지 시작일 ok
  const [chgEndDt, setChgEndDt] = useState(new Date()); //챌린지 종료일 ok
  const [challengeTitleImage, setChallengeTitleImage] = useState(); //챌린지 타이틀 이미지 ok
  const [challengeIntroduction, setChallengeIntroduction] = useState(); //챌린지 소개글 ok
  const [goodProofImage, setGoodProofImage] = useState(); //좋은예 ok
  const [badProofImage, setBadProofImage] = useState(); //나쁜예 ok
  const [deposit, setDeposit] = useState(); //보증금 ok
  const [limitPeople, setLimitPeople] = useState(); //제한인원 ok

  const [searchResult, setSearchResult] = useState([]);

  const makeFormData = () => {
    let formData = new FormData();
    formData.append("challengeTitle", challengeTitle);
    formData.append("challengeCategory", challengeCategory);
    formData.append("licenseId", licenseId);
    formData.append("proofMethod", proofMethod);
    formData.append("proofAvailableDay", proofAvailableDay);
    formData.append("proofCount", proofCount);
    formData.append("proofCountOneDay", proofCountOneDay);
    formData.append("chgStartDt", chgStartDt.toISOString());
    formData.append("chgEndDt", chgEndDt.toISOString());
    formData.append("challengeTitleImage", uploadFotmat(challengeTitleImage));
    formData.append("challengeIntroduction", challengeIntroduction);
    formData.append("goodProofImage", uploadFotmat(goodProofImage));
    formData.append("badProofImage", uploadFotmat(badProofImage));
    formData.append("deposit", deposit);
    formData.append("limitPeople", limitPeople);
    return formData;
  };

  const postData = async () => {
    if (challengeCategory == "자격증" && !licenseId)
      Alert.alert("자격증 종류를 선택해주세요!");
    else if (challengeTitleImage == "" || !challengeTitleImage)
      Alert.alert("챌린지 타이틀 이미지를 입력하세요!");
    else if (challengeTitle == "" || !challengeTitle)
      Alert.alert("챌린지 제목을 입력하세요!");
    else if (challengeIntroduction == "" || !challengeIntroduction)
      Alert.alert("챌린지 소개글을 입력하세요!");
    else if (proofCountOneDay == "" || !proofCountOneDay)
      Alert.alert("하루 인증 횟수를 입력하세요!");
    else if (proofMethod == "" || !proofMethod)
      Alert.alert("인증 방법을 입력하세요!");
    else if (goodProofImage == "" || !goodProofImage)
      Alert.alert("좋은예시 사진을 입력하세요!");
    else if (badProofImage == "" || !badProofImage)
      Alert.alert("나쁜예시 사진을 입력하세요!");
    else if (deposit == "" || !deposit)
      Alert.alert("챌린지 보증금을 입력하세요!");
    else if (parseInt(deposit) < 1000)
      Alert.alert("챌린지 보증금은 최소 1000원 입니다!");
    else if (limitPeople == "" || !limitPeople)
      Alert.alert("챌린지 제한인원을 입력하세요!");
    else {
      // const response = await Api.postChallenge(makeFormData());
      // if (response.code == "200") {
      //   navigation.reset({
      //     routes: [
      //       {
      //         name: "MainTab",
      //       },
      //       {
      //         name: "Category",
      //         params: { title: "챌린지 전체보기", category: "전체보기" },
      //       },
      //     ],
      //   });
      // } else {
      //   Alert.alert("챌린지 생성 실패");
      // }
    }
  };

  const searchLicense = async (text) => {
    const result = await Api.getLicenseSearch(text);
    setSearchResult(result.data);
  };

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

  return (
    <Container behavior="padding">
      <Body>
        <Scroll>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <CT>
              <CreateCategory
                challengeCategory={challengeCategory}
                setChallengeCategory={setChallengeCategory}
              />

              {challengeCategory == "자격증" && (
                <CreateLicenseSelect
                  searchLicense={searchLicense}
                  searchResult={searchResult}
                  setLicenseId={setLicenseId}
                />
              )}

              <CreateTitleImage
                challengeTitleImage={challengeTitleImage}
                setChallengeTitleImage={setChallengeTitleImage}
              />

              <CreateTitle
                challengeTitle={challengeTitle}
                setChallengeTitle={setChallengeTitle}
              />

              <CreateDescription
                challengeIntroduction={challengeIntroduction}
                setChallengeIntroduction={setChallengeIntroduction}
              />

              <CreateProofCount
                proofCount={proofCount}
                setProofCount={setProofCount}
                setProofAvailableDay={setProofAvailableDay}
              />

              <CreateProofAvailableDay
                proofCount={proofCount}
                proofAvailableDay={proofAvailableDay}
                setProofAvailableDay={setProofAvailableDay}
              />

              <CreateProofCountOneDay
                proofCountOneDay={proofCountOneDay}
                setProofCountOneDay={setProofCountOneDay}
              />

              <CreateProofMethod
                proofMethod={proofMethod}
                setProofMethod={setProofMethod}
              />

              <CreateProofImageExample
                goodProofImage={goodProofImage}
                setGoodProofImage={setGoodProofImage}
                badProofImage={badProofImage}
                setBadProofImage={setBadProofImage}
              />

              <CreateChgStartDt
                chgStartDt={chgStartDt}
                setChgStartDt={setChgStartDt}
              />

              <CreateChgEndDt chgEndDt={chgEndDt} setChgEndDt={setChgEndDt} />

              <CreateDeposit deposit={deposit} setDeposit={setDeposit} />

              <CreateLimitPeople
                limitPeople={limitPeople}
                setLimitPeople={setLimitPeople}
              />
            </CT>
          </TouchableWithoutFeedback>
        </Scroll>
      </Body>
      <Footer>
        <RedButton fc={postData} name={"챌린지 생성하기"} />
      </Footer>
    </Container>
  );
};

const Container = styled.KeyboardAvoidingView`
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
