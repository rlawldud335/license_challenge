import React, { useState } from "react";
import NewChallengePresenter from "./NewChallengePresenter";
import Api from "../../../api";
import { Alert } from "react-native";

export default ({ navigation }) => {
  const [challengeTitle, setChallengeTitle] = useState(); //챌린지 제목 ok
  const [challengeCategory, setChallengeCategory] = useState("스터디"); //챌린지 카테고리 ok
  const [licenseId, setLicenseId] = useState(); //카테고리가 자격증이라면 자격증id x
  const [proofMethod, setProofMethod] = useState(); //인증방법 ok
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

  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const challengeData = {
    challengeTitle,
    challengeCategory,
    licenseId,
    proofMethod,
    proofAvailableDay,
    proofCount,
    proofCountOneDay,
    chgStartDt,
    chgEndDt,
    challengeTitleImage,
    challengeIntroduction,
    goodProofImage,
    badProofImage,
    deposit,
    limitPeople,
  };
  const setChallengeData = {
    setChallengeTitle,
    setChallengeCategory,
    setLicenseId,
    setProofMethod,
    setProofAvailableDay,
    setProofCount,
    setProofCountOneDay,
    setChgStartDt,
    setChgEndDt,
    setChallengeTitleImage,
    setChallengeIntroduction,
    setGoodProofImage,
    setBadProofImage,
    setDeposit,
    setLimitPeople,
  };

  const uploadFotmat = (uri) => {
    let uriParts = uri.split(".");
    let fileType = uriParts[uriParts.length - 1];
    return { uri, name: `titleImage.${fileType}`, type: `image/${fileType}` };
  };
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
    if (
      challengeTitleImage.uri == "" ||
      challengeTitle == "" ||
      challengeIntroduction == "" ||
      proofCountOneDay == "" ||
      proofMethod == "" ||
      goodProofImage.uri == "" ||
      badProofImage.uri == "" ||
      deposit == "" ||
      limitPeople == ""
    ) {
      Alert.alert("모든 항목을 제대로 입력해주세요");
    }
    //시작일 종료일 체크
    //하루인증횟수,제한인원, 참가보증금 체크

    const response = await Api.postChallenge(makeFormData());
    if (response.code == "200") {
      navigation.reset({
        routes: [
          {
            name: "MainTab",
          },
          {
            name: "Category",
            params: { title: "챌린지 전체보기", category: "전체보기" },
          },
        ],
      });
    } else {
      Alert.alert("챌린지 생성 실패");
    }
  };

  const searchLicense = async (text) => {
    await setKeyword(text);
    const result = await Api.getLicenseSearch(text);
    setSearchResult(result.data);
  };

  return (
    <NewChallengePresenter
      CD={challengeData}
      SCD={setChallengeData}
      postData={postData}
      keyword={keyword}
      setKeyword={setKeyword}
      searchResult={searchResult}
      searchLicense={searchLicense}
    />
  );
};
