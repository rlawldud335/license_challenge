import React from "react";
import styled from "styled-components/native";
import { Dimensions, ScrollView } from "react-native";
import Title from "../../components/Explore/Title";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

const Container = styled.View`
  padding-left: 30px;
  width: 100%;
  height: ${HEIGHT / 4}px;
`;
const Vertical = styled.View`
  width: 150px;
  height: 100px;
  margin-right: 20px;
`;
const BG = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 15px;
`;
const Name = styled.Text`
  color: #3b1464;
  font-size: 16px;
  font-family: "nanumBold";
  padding-top: 10px;
`;

export default ({ navigation }) => {
  return (
    <Container>
      <Title title={"챌린지 추천"} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingTop: 15 }}
      >
        <Vertical>
          <BG source={require("../../assets/img/food.jpg")} />
          <Name>[한식조리기능사] 매일 1요리 만들기 챌린지 </Name>
        </Vertical>
        <Vertical>
          <BG source={require("../../assets/img/food.jpg")} />
          <Name>[한식조리기능사] 매일 1요리 만들기 챌린지 </Name>
        </Vertical>
        <Vertical>
          <BG source={require("../../assets/img/food.jpg")} />
          <Name>[한식조리기능사] 매일 1요리 만들기 챌린지 </Name>
        </Vertical>
        <Vertical>
          <BG source={require("../../assets/img/food.jpg")} />
          <Name>[한식조리기능사] 매일 1요리 만들기 챌린지 </Name>
        </Vertical>
      </ScrollView>
    </Container>
  );
};
