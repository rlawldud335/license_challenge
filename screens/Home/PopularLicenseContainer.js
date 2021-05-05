import React from "react";
import styled from "styled-components/native";
import { Dimensions, ScrollView } from "react-native";
import Title from "../../components/Explore/Title";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

const Container = styled.View`
  padding-left: 30px;
  width: 100%;
  height: ${HEIGHT / 6}px;
`;
const Vertical = styled.View`
  width: 140px;
  height: 80px;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;
const BG = styled.Image`
  height: 100%;
  width: 100%;
  opacity: 0.45;
  border-radius: 15px;
  position: absolute;
`;
const Name = styled.Text`
  width: 80px;
  color: #3b1464;
  font-size: 16px;
  font-family: "nanumBold";
`;

export default ({ navigation }) => {
  return (
    <Container>
      <Title title={"인기 자격증"} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingTop: 15 }}
      >
        <Vertical>
          <BG source={require("../../assets/img/study.jpg")} />
          <Name>정보처리기사 자격증</Name>
        </Vertical>
        <Vertical>
          <BG source={require("../../assets/img/study.jpg")} />
          <Name>정보처리기사 자격증</Name>
        </Vertical>
        <Vertical>
          <BG source={require("../../assets/img/study.jpg")} />
          <Name>정보처리기사 자격증</Name>
        </Vertical>
        <Vertical>
          <BG source={require("../../assets/img/study.jpg")} />
          <Name>정보처리기사 자격증</Name>
        </Vertical>
      </ScrollView>
    </Container>
  );
};
