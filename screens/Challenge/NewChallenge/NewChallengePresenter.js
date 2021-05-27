import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import styled from "styled-components/native";
import { Text, View, FlatList } from "react-native";
import Checkbox from "../../../components/CheckBox";
import OneLineTextInput from "../../../components/OneLineTextInput";
import MultiLineTextInput from "../../../components/MultiLineTextInput";
import NumericTextInput from "../../../components/NumericTextInput";
import Camera from "../../../assets/icon/Camera";
import DateTimePicker from "@react-native-community/datetimepicker";

export const CreateCategory = ({ challengeCategory, setChallengeCategory }) => (
  <Content>
    <Title>챌린지 카테고리</Title>
    <RowContent>
      <Checkbox
        isSelected={challengeCategory == "자격증" ? true : false}
        onPress={() => setChallengeCategory("자격증")}
        name={"자격증"}
      />
      <Checkbox
        isSelected={challengeCategory == "공인시험" ? true : false}
        onPress={() => setChallengeCategory("공인시험")}
        name={"공인시험"}
      />
      <Checkbox
        isSelected={challengeCategory == "스터디" ? true : false}
        onPress={() => setChallengeCategory("스터디")}
        name={"스터디"}
      />
    </RowContent>
  </Content>
);

export const CreateLicenseSelect = ({
  searchLicense,
  searchResult,
  setLicenseId,
}) => {
  const [keyword, setKeyword] = useState("");

  return (
    <Content>
      <Title>자격증 선택</Title>
      <OneLineTextInput
        value={keyword}
        onChange={(text) => {
          setKeyword(text);
        }}
        onSubmit={() => searchLicense(keyword)}
        plh={"자격증 이름을 검색해보세요."}
      />
      {searchResult.length == 0 ? null : (
        <>
          <FlatList
            nestedScrollEnabled
            style={{ maxHeight: 100, width: "80%" }}
            data={searchResult}
            renderItem={({ item }) => {
              return (
                <LicenseName
                  onPress={() => {
                    setLicenseId(item.licenseId);
                    searchLicense(item.licenseName);
                    setKeyword(item.licenseName);
                  }}
                >
                  {item.licenseName}
                </LicenseName>
              );
            }}
            numColumns={1}
            keyExtractor={(item) => item.licenseId.toString()}
          />
        </>
      )}
    </Content>
  );
};

export const CreateTitleImage = ({
  challengeTitleImage,
  setChallengeTitleImage,
}) => (
  <Content>
    <Title>챌린지 타이틀 사진</Title>
    <PickImage onPress={() => pickImage(setChallengeTitleImage)}>
      {challengeTitleImage ? (
        <Image source={{ uri: challengeTitleImage }} />
      ) : null}
      <Camera style={{ position: "absolute" }} />
    </PickImage>
  </Content>
);

export const CreateTitle = ({ challengeTitle, setChallengeTitle }) => (
  <Content>
    <Title>챌린지 제목</Title>
    <OneLineTextInput
      onChange={(text) => {
        if (text.length < 50) {
          setChallengeTitle(text);
        }
      }}
      plh={"예) 정보처리기사 자격증 챌린지!!"}
      value={challengeTitle}
    />
  </Content>
);

export const CreateDescription = ({ setChallengeIntroduction }) => {
  return (
    <Content>
      <Title>챌린지 소개글</Title>
      <MultiLineTextInput
        onChange={(text) => {
          setChallengeIntroduction(text);
        }}
        plh={"예) 2021년 정처기 공부 같이 꾸준히 해봐요! "}
      />
    </Content>
  );
};

export const CreateProofCount = ({
  proofCount,
  setProofCount,
  setProofAvailableDay,
}) => {
  const days = [
    "월",
    "월화",
    "월화수",
    "월화수목",
    "월화수목금",
    "월화수목금토",
    "월화수목금토일",
  ];

  return (
    <Content>
      <Title>일주일 인증 횟수</Title>
      <RowContent>
        {days.map((item, idx) => (
          <Checkbox
            isSelected={proofCount == idx + 1 ? true : false}
            onPress={() => {
              setProofCount(idx + 1);
              setProofAvailableDay(item);
            }}
            name={`주 ${idx + 1}회`}
            key={idx}
          />
        ))}
      </RowContent>
    </Content>
  );
};

export const CreateProofAvailableDay = ({
  proofCount,
  proofAvailableDay,
  setProofAvailableDay,
}) => {
  const days = ["월", "화", "수", "목", "금", "토", "일"];
  if (proofCount == 7) {
    return null;
  } else {
    return (
      <Content>
        <Title>인증가능 요일</Title>
        <RowContent>
          {days.map((item, idx) => (
            <Checkbox
              isSelected={proofAvailableDay.indexOf(item) == -1 ? false : true}
              onPress={() => {
                if (proofAvailableDay.indexOf(item) == -1) {
                  setProofAvailableDay(proofAvailableDay + item);
                } else {
                  if (proofCount < proofAvailableDay.length) {
                    setProofAvailableDay(proofAvailableDay.replace(item, ""));
                  }
                }
              }}
              name={item}
              key={idx}
            />
          ))}
        </RowContent>
      </Content>
    );
  }
};

export const CreateProofCountOneDay = ({
  proofCountOneDay,
  setProofCountOneDay,
}) => (
  <Content>
    <Title>하루 인증 횟수</Title>
    <RowContent>
      <NumericTextInput
        onChange={(text) => {
          if (text == "" || parseInt(text) <= 10) {
            setProofCountOneDay(text);
          }
        }}
        plh={"하루 최대 10번 가능합니다."}
        value={proofCountOneDay}
      />
      <Title>회</Title>
    </RowContent>
  </Content>
);

export const CreateProofMethod = ({ setProofMethod }) => (
  <Content>
    <Title>인증방법</Title>
    <MultiLineTextInput
      onChange={(text) => {
        setProofMethod(text);
      }}
      plh={"예) 정처기 책 한페이지 찍어서 올리기! "}
    />
  </Content>
);

export const CreateProofImageExample = ({
  goodProofImage,
  setGoodProofImage,
  badProofImage,
  setBadProofImage,
}) => (
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
        <PickImage onPress={() => pickImage(setGoodProofImage)}>
          {goodProofImage ? <Image source={{ uri: goodProofImage }} /> : null}
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
        <PickImage onPress={() => pickImage(setBadProofImage)}>
          {badProofImage ? <Image source={{ uri: badProofImage }} /> : null}
          <Camera style={{ position: "absolute" }} />
        </PickImage>
        <Text>나쁜 예시</Text>
      </View>
    </RowContent>
  </Content>
);

const pickImage = async (setImage) => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    aspect: [4, 3],
    quality: 1,
  });
  if (!result.cancelled) {
    setImage(result.uri);
  }
};

export const CreateChgStartDt = ({ chgStartDt, setChgStartDt }) => (
  <Content>
    <Title>챌린지 시작일</Title>
    <DateTimePicker
      value={chgStartDt}
      mode={"date"}
      is24Hour={true}
      display="default"
      onChange={(event, selectedDate) => {
        const currentDate = selectedDate || chgStartDt;
        setChgStartDt(currentDate);
      }}
    />
  </Content>
);

export const CreateChgEndDt = ({ chgEndDt, setChgEndDt }) => (
  <Content>
    <Title>챌린지 종료일</Title>
    <DateTimePicker
      value={chgEndDt}
      mode={"date"}
      is24Hour={true}
      display="default"
      onChange={(event, selectedDate) => {
        const currentDate = selectedDate || chgEndDt;
        setChgEndDt(currentDate);
      }}
    />
  </Content>
);

export const CreateDeposit = ({ deposit, setDeposit }) => (
  <Content>
    <Title>참가 보증금</Title>
    <RowContent>
      <NumericTextInput
        onChange={(text) => {
          if (text == "" || parseInt(text) >= 0) {
            setDeposit(text);
          }
        }}
        plh={"0"}
        value={deposit}
      />
      <Title>포인트</Title>
    </RowContent>
  </Content>
);

export const CreateLimitPeople = ({ limitPeople, setLimitPeople }) => (
  <Content>
    <Title>제한인원</Title>
    <RowContent>
      <NumericTextInput
        onChange={(text) => {
          if (text == "" || 0 < parseInt(text) <= 100) {
            setLimitPeople(text);
          }
        }}
        plh={"10"}
        value={limitPeople}
      />
      <Title>명</Title>
    </RowContent>
  </Content>
);

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

const LicenseName = styled.Text`
  font-size: 17px;
  color: #04009a;
  font-family: "nanumBold";
  margin: 5px 0px;
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
