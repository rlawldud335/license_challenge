import React from "react";
import styled from "styled-components/native";

import Title from "../../../components/Title";
import LicenseIcon from "../../../assets/icon/LicenseIcon";
import CerExamIcon from "../../../assets/icon/CerExamIcon";
import StudyIcon from "../../../assets/icon/StudyIcon";
import AllIcon from "../../../assets/icon/AllIcon";

const Container = styled.View`
  height: 150px;
  width: 100%;
`;
const IconContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding-top: 20px;
`;

const IconBtn = styled.TouchableOpacity`
  align-items: center;
  justify-content: flex-end;
`;

const BtnName = styled.Text`
  font-family: "nanumBold";
  font-size: 15px;
  color: #3b1464;
  margin-top: 5px;
`;

export default ({ navigation }) => {
  return (
    <Container>
      <Title title={"챌린지 카테고리"} />
      <IconContainer>
        <IconBtn
          onPress={() =>
            navigation.navigate("Category", {
              title: "자격증 챌린지",
              category: "자격증",
            })
          }
        >
          <LicenseIcon />
          <BtnName>자격증</BtnName>
        </IconBtn>
        <IconBtn
          onPress={() =>
            navigation.navigate("Category", {
              title: "공인시험 챌린지",
              category: "공인시험",
            })
          }
        >
          <CerExamIcon />
          <BtnName>공인시험</BtnName>
        </IconBtn>
        <IconBtn
          onPress={() =>
            navigation.navigate("Category", {
              title: "스터디 챌린지",
              category: "스터디",
            })
          }
        >
          <StudyIcon />
          <BtnName>스터디</BtnName>
        </IconBtn>
        <IconBtn
          onPress={() =>
            navigation.navigate("Category", {
              title: "챌린지 전체보기",
              category: "전체보기",
            })
          }
        >
          <AllIcon />
          <BtnName>전체보기</BtnName>
        </IconBtn>
      </IconContainer>
    </Container>
  );
};
