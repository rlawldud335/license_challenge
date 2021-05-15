import React from "react";
import styled from "styled-components/native";

import ChallengeTab from "../../navigation/Tab/ChallengeTab";
import Title from "../../components/Title";
import Plus from "../../assets/icon/Plus";

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
const Header = styled.View`
  flex-direction: row;
  height: 60px;
  width: 100%;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
`;
const Body = styled.View`
  flex: 1;
`;
const NewChallengeBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #dcbcfd;
  padding: 10px;
  border-radius: 10px;
  shadow-color: #000;
  shadow-offset: 3px 3px;
  shadow-opacity: 0.1;
  shadow-radius: 2px;
`;
const BtnText = styled.Text`
  color: #3b1464;
  font-family: "nanumBold";
  font-size: 15px;
`;

export default ({ navigation }) => {
  return (
    <Container>
      <Header>
        <Title title={"챌린지"} />
        <NewChallengeBtn onPress={() => navigation.navigate("NewChallenge")}>
          <BtnText>새로운 챌린지 생성</BtnText>
          <Plus />
        </NewChallengeBtn>
      </Header>
      <Body>
        <ChallengeTab />
      </Body>
    </Container>
  );
};
