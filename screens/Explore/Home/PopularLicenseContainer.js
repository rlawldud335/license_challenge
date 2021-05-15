import React from "react";
import styled from "styled-components/native";

import Title from "../../../components/Title";

const Container = styled.View`
  width: 100%;
  height: 170px;
`;
const VerticalContainer = styled.ScrollView`
  margin-top: 20px;
`;

const Vertical = styled.View`
  width: 140px;
  height: 80px;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;
const BG = styled.Image`
  height: 100%;
  width: 100%;
  opacity: 0.6;
  border-radius: 10px;
  position: absolute;
`;
const Name = styled.Text`
  z-index: 2;
  width: 80px;
  color: #3b1464;
  font-size: 16px;
  font-family: "nanumBold";
`;

export default ({ navigation }) => {
  return (
    <Container>
      <Title title={"인기 자격증"} />
      <VerticalContainer horizontal showsHorizontalScrollIndicator={false}>
        <Vertical>
          <BG source={require("../../../assets/img/study.jpg")} />
          <Name>정보처리기사 자격증</Name>
        </Vertical>
        <Vertical>
          <BG source={require("../../../assets/img/study.jpg")} />
          <Name>정보처리기사 자격증</Name>
        </Vertical>
        <Vertical>
          <BG source={require("../../../assets/img/study.jpg")} />
          <Name>정보처리기사 자격증</Name>
        </Vertical>
        <Vertical>
          <BG source={require("../../../assets/img/study.jpg")} />
          <Name>정보처리기사 자격증</Name>
        </Vertical>
        <Vertical>
          <BG source={require("../../../assets/img/study.jpg")} />
          <Name>정보처리기사 자격증</Name>
        </Vertical>
      </VerticalContainer>
    </Container>
  );
};
