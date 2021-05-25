import React from "react";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import Title from "../../../components/Title";
import LicenseIcon from "../../../assets/icon/LicenseIcon";
import CerExamIcon from "../../../assets/icon/CerExamIcon";
import StudyIcon from "../../../assets/icon/StudyIcon";
import AllIcon from "../../../assets/icon/AllIcon";
import { ScrollView } from "react-native";

export const EventSwiper = () => {
  const Container = styled.View`
    width: 100%;
    height: 200px;
  `;
  const EventImageView = styled.View`
    width: 90%;
    background-color: white;
  `;
  const EventImage = styled.Image`
    width: 100%;
    height: 160px;
    border-radius: 10px;
  `;

  return (
    <Container>
      <Swiper
        swipeAreaStyle={{
          height: "80%",
        }}
        slideWrapperStyle={{
          height: "100%",
          alignItems: "center",
        }}
        controlsProps={{
          prevPos: false,
          nextPos: false,
          dotsTouchable: true,
          dotActiveStyle: {
            backgroundColor: "#652DA1",
          },
        }}
      >
        <EventImageView>
          <EventImage
            resizeMode={"cover"}
            source={require("../../../assets/img/sample1.jpg")}
          />
        </EventImageView>
        <EventImageView>
          <EventImage
            resizeMode={"cover"}
            source={require("../../../assets/img/sample2.jpg")}
          />
        </EventImageView>
        <EventImageView>
          <EventImage
            resizeMode={"cover"}
            source={require("../../../assets/img/sample3.jpg")}
          />
        </EventImageView>
      </Swiper>
    </Container>
  );
};

export const Category = ({ navigation }) => {
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
  const CategoryName = styled.Text`
    font-family: "nanumBold";
    font-size: 15px;
    color: #3b1464;
    margin-top: 5px;
  `;
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
          <CategoryName>자격증</CategoryName>
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
          <CategoryName>공인시험</CategoryName>
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
          <CategoryName>스터디</CategoryName>
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
          <CategoryName>전체보기</CategoryName>
        </IconBtn>
      </IconContainer>
    </Container>
  );
};

export const PopularChallenge = ({ navigation }) => {
  const Container = styled.View`
    height: 230px;
    width: 100%;
  `;
  const ChallengeView = styled.View`
    width: 150px;
    height: 100px;
    margin-left: 20px;
  `;
  const ChallengeImage = styled.Image`
    height: 100%;
    width: 100%;
    border-radius: 15px;
  `;
  const ChallengeName = styled.Text`
    color: #3b1464;
    font-size: 16px;
    font-family: "nanumBold";
    padding-top: 10px;
  `;
  return (
    <Container>
      <Title title={"챌린지 추천"} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingTop: 15 }}
      >
        <ChallengeView>
          <ChallengeImage source={require("../../../assets/img/food.jpg")} />
          <ChallengeName>
            [한식조리기능사] 매일 1요리 만들기 챌린지{" "}
          </ChallengeName>
        </ChallengeView>
        <ChallengeView>
          <ChallengeImage source={require("../../../assets/img/food.jpg")} />
          <ChallengeName>
            [한식조리기능사] 매일 1요리 만들기 챌린지{" "}
          </ChallengeName>
        </ChallengeView>
        <ChallengeView>
          <ChallengeImage source={require("../../../assets/img/food.jpg")} />
          <ChallengeName>
            [한식조리기능사] 매일 1요리 만들기 챌린지{" "}
          </ChallengeName>
        </ChallengeView>
        <ChallengeView>
          <ChallengeImage source={require("../../../assets/img/food.jpg")} />
          <ChallengeName>
            [한식조리기능사] 매일 1요리 만들기 챌린지{" "}
          </ChallengeName>
        </ChallengeView>
      </ScrollView>
    </Container>
  );
};

export const PopularLicense = ({ navigation }) => {
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

export const PopularCommunity = ({ navigation }) => {
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
