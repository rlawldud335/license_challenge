import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Title from "../../components/Explore/Title";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

const Container = styled.View`
  padding-left: 30px;
  width: 100%;
  height: ${HEIGHT / 3}px;
`;
const Commu = styled.View`
  width: ${WIDTH - 80}px;
  height: 60px;
  background-color: white;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 15px;
  margin-bottom: 10px;
`;
const SV = styled.View`
  margin-top: 10px;
  margin-left: -30px;
  background-color: #f2e7fe;
  align-items: center;
  padding: 10px;
`;
const NickName = styled.Text`
  font-family: "nanumBold";
  color: #3b1464;
`;
const Contents = styled.Text`
  font-family: "nanumBold";
  color: #3b1464;
`;
const Text = styled.Text`
  font-family: "nanumBold";
  color: #3b1464;
`;
const Image = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  margin-right: 10px;
`;
const TextContainer = styled.View`
  flex-direction: column;
`;
const ABC = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export default ({ navigation }) => {
  return (
    <Container>
      <Title title={"실시간 인기 커뮤니티글"} />
      <SV showsVerticalScrollIndicator={false}>
        <Commu>
          <Image source={require("../../assets/img/pink-sky.jpg")} />
          <TextContainer>
            <ABC>
              <NickName>사용자</NickName>
              <Text>자유게시판</Text>
            </ABC>
            <Contents>안녕하세요 반가워용 머리가 너무아프네여ㅠㅠ..</Contents>
          </TextContainer>
        </Commu>
        <Commu>
          <Image source={require("../../assets/img/pink-sky.jpg")} />
          <TextContainer>
            <ABC>
              <NickName>사용자</NickName>
              <Text>자유게시판</Text>
            </ABC>
            <Contents>안녕하세요 반가워용 머리가 너무아프네여ㅠㅠ..</Contents>
          </TextContainer>
        </Commu>
        <Commu>
          <Image source={require("../../assets/img/pink-sky.jpg")} />
          <TextContainer>
            <ABC>
              <NickName>사용자</NickName>
              <Text>자유게시판</Text>
            </ABC>
            <Contents>안녕하세요 반가워용 머리가 너무아프네여ㅠㅠ..</Contents>
          </TextContainer>
        </Commu>
      </SV>
    </Container>
  );
};
