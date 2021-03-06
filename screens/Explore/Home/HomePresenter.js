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
      <Title title={"????????? ????????????"} />
      <IconContainer>
        <IconBtn
          onPress={() =>
            navigation.navigate("Category", {
              title: "????????? ?????????",
              category: "?????????",
            })
          }
        >
          <LicenseIcon />
          <CategoryName>?????????</CategoryName>
        </IconBtn>
        <IconBtn
          onPress={() =>
            navigation.navigate("Category", {
              title: "???????????? ?????????",
              category: "????????????",
            })
          }
        >
          <CerExamIcon />
          <CategoryName>????????????</CategoryName>
        </IconBtn>
        <IconBtn
          onPress={() =>
            navigation.navigate("Category", {
              title: "????????? ?????????",
              category: "?????????",
            })
          }
        >
          <StudyIcon />
          <CategoryName>?????????</CategoryName>
        </IconBtn>
        <IconBtn
          onPress={() =>
            navigation.navigate("Category", {
              title: "????????? ????????????",
              category: "????????????",
            })
          }
        >
          <AllIcon />
          <CategoryName>????????????</CategoryName>
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
      <Title title={"????????? ??????"} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingTop: 15 }}
      >
        <ChallengeView>
          <ChallengeImage source={require("../../../assets/img/food.jpg")} />
          <ChallengeName>
            [?????????????????????] ?????? 1?????? ????????? ?????????{" "}
          </ChallengeName>
        </ChallengeView>
        <ChallengeView>
          <ChallengeImage source={require("../../../assets/img/job1.jpg")} />
          <ChallengeName>
            [?????????????????????] ???????????? 3??? ????????? 1??? ??????{" "}
          </ChallengeName>
        </ChallengeView>
        <ChallengeView>
          <ChallengeImage source={require("../../../assets/img/job2.jpg")} />
          <ChallengeName>
            [???????????????????????????] ????????? ?????? ?????????{" "}
          </ChallengeName>
        </ChallengeView>
        <ChallengeView>
          <ChallengeImage source={require("../../../assets/img/job3.jpg")} />
          <ChallengeName>[??????????????????] ?????? ?????? ????????? </ChallengeName>
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

  const Vertical = styled.TouchableOpacity`
    width: 140px;
    height: 80px;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
  `;
  const BG = styled.Image`
    height: 100%;
    width: 100%;
    opacity: 0.4;
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
      <Title title={"?????? ?????????"} />
      <VerticalContainer horizontal showsHorizontalScrollIndicator={false}>
        <Vertical
          onPress={() => {
            navigation.navigate("LicenseWebview", {
              title: "??????????????????",
              licenseId: 1320,
            });
          }}
        >
          <BG source={require("../../../assets/img/study.jpg")} />
          <Name>??????????????????</Name>
        </Vertical>
        <Vertical
          onPress={() => {
            navigation.navigate("LicenseWebview", {
              title: "?????????????????????",
              licenseId: 7967,
            });
          }}
        >
          <BG source={require("../../../assets/img/make-up.jpg")} />
          <Name>?????????????????????</Name>
        </Vertical>
        <Vertical
          onPress={() => {
            navigation.navigate("LicenseWebview", {
              title: "????????????????????????",
              licenseId: 7761,
            });
          }}
        >
          <BG source={require("../../../assets/img/energy.jpg")} />
          <Name>????????????????????????</Name>
        </Vertical>
        <Vertical
          onPress={() => {
            navigation.navigate("LicenseWebview", {
              title: "????????????????????????",
              licenseId: 7918,
            });
          }}
        >
          <BG source={require("../../../assets/img/green.jpg")} />
          <Name>???????????????</Name>
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
      <Title title={"????????? ?????? ???????????????"} />
      <CommuContainer>
        <Commu>
          <Image source={require("../../../assets/img/pink-sky.jpg")} />
          <TextContainer>
            <ABC>
              <NickName>?????????</NickName>
              <Text>???????????????</Text>
            </ABC>
            <Contents>??????????????? ????????? ????????? ?????? ????????? ??? ?????????.</Contents>
          </TextContainer>
        </Commu>
        <Commu>
          <Image source={require("../../../assets/img/pink-sky.jpg")} />
          <TextContainer>
            <ABC>
              <NickName>?????????</NickName>
              <Text>???????????????</Text>
            </ABC>
            <Contents>??????????????? ????????? ????????? ?????? ????????? ??? ?????????.</Contents>
          </TextContainer>
        </Commu>
        <Commu>
          <Image source={require("../../../assets/img/pink-sky.jpg")} />
          <TextContainer>
            <ABC>
              <NickName>?????????</NickName>
              <Text>???????????????</Text>
            </ABC>
            <Contents>??????????????? ????????? ????????? ?????? ????????? ??? ?????????.</Contents>
          </TextContainer>
        </Commu>
      </CommuContainer>
    </Container>
  );
};
