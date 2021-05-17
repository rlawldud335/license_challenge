import React, { useState } from "react";
import NewChallengePresenter from "./NewChallengePresenter";

export default ({ navigation }) => {
  const [challengeTitle, setChallengeTitle] = useState(); //챌린지 제목 ok
  const [challengeCategory, setChallengeCategory] = useState("스터디"); //챌린지 카테고리 ok
  const [licenseId, setLicenseId] = useState(); //카테고리가 자격증이라면 자격증id x
  const [scheduleId, setScheduleId] = useState(); //자격증의 스케줄선택 x
  const [proofMethod, setProofMethod] = useState(); //인증방법 ok
  const [proofAvailableDay, setProofAvailableDay] = useState("월"); //인증가능요일 x
  const [proofCount, setProofCount] = useState(1); //일주일당 인증횟수 ok
  const [proofCountOneDay, setProofCountOneDay] = useState(); //하루당 인증횟수 ok
  const [chgStartDt, setChgStartDt] = useState(new Date()); //챌린지 시작일 x
  const [chgEndDt, setChgEndDt] = useState(new Date()); //챌린지 종료일 x
  const [challengeTitleImage, setChallengeTitleImage] = useState(); //챌린지 타이틀 이미지 ok
  const [challengeIntroduction, setChallengeIntroduction] = useState(); //챌린지 소개글 ok
  const [goodProofImage, setGoodProofImage] = useState(); //좋은예 ok
  const [badProofImage, setBadProofImage] = useState(); //나쁜예 ok
  const [deposit, setDeposit] = useState(); //보증금 ok
  const [limitPeople, setLimitPeople] = useState(); //제한인원 ok

  const challengeData = {
    challengeTitle,
    challengeCategory,
    licenseId,
    scheduleId,
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
    setScheduleId,
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

  const postData = async () => {
    //모든 값이 입력이 되었는지 확인후 안들어왔다면 alert 띄우기.
    // await Api.postChallenge(challengeData);
    console.log(challengeData);
  };

  return (
    <NewChallengePresenter
      CD={challengeData}
      SCD={setChallengeData}
      postData={postData}
    />
  );
};
