import React from "react";
import styled from "styled-components/native";

import Title from "../../../components/Title";

const Container = styled.View`
  height: 300px;
  width: 100%;
`;
const Commu = styled.View`
  max-width: 350px;
  width: 85%;
  height: 60px;
  background-color: white;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 15px;
  margin-bottom: 10px;
`;
const CommuContainer = styled.View`
  margin-top: 10px;
  margin-left: -30px;
  margin-right: -30px;
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
      <CommuContainer>
        <Commu>
          <Image source={require("../../../assets/img/pink-sky.jpg")} />
          <TextContainer>
            <ABC>
              <NickName>사용자</NickName>
              <Text>자유게시판</Text>
            </ABC>
            <Contents>안녕하세요 자격증 챌린지 어플 테스트 글 입니다.</Contents>
          </TextContainer>
        </Commu>
        <Commu>
          <Image source={require("../../../assets/img/pink-sky.jpg")} />
          <TextContainer>
            <ABC>
              <NickName>사용자</NickName>
              <Text>자유게시판</Text>
            </ABC>
            <Contents>안녕하세요 자격증 챌린지 어플 테스트 글 입니다.</Contents>
          </TextContainer>
        </Commu>
        <Commu>
          <Image source={require("../../../assets/img/pink-sky.jpg")} />
          <TextContainer>
            <ABC>
              <NickName>사용자</NickName>
              <Text>자유게시판</Text>
            </ABC>
            <Contents>안녕하세요 자격증 챌린지 어플 테스트 글 입니다.</Contents>
          </TextContainer>
        </Commu>
      </CommuContainer>
    </Container>
  );
};
