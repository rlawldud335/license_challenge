import React, { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions } from "react-native";
import Api from "../../../api";
import styled from "styled-components/native";
import Menu from "../../../assets/icon/Menu";

const WIDTH = Platform.OS === "web" ? 720 : Dimensions.get("window").width;

export default ({ route, navigation }) => {
  const [peedInfo, setPeedInfo] = useState();

  const getData = async () => {
    const response = await Api.getPeedInfo(
      route.params.challengeId,
      route.params.pictureId
    );
    if (response.status == 200) {
      setPeedInfo(response.data[0]);
    } else {
      navigation.goback();
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return peedInfo ? (
    <Container>
      <Header>
        <PUD>
          <Profile source={{ uri: peedInfo.profileImage }} />
          <Vertical>
            <UserName>{peedInfo.nickname}</UserName>
            <ProofDate>{peedInfo.proofDt.slice(0, 10)}</ProofDate>
          </Vertical>
        </PUD>
        <Menu />
      </Header>
      <ProofImage source={{ uri: peedInfo.proofImage }} resizeMode="contain" />
      <ReviewContainer>
        <DailyReview>{peedInfo.dailyReview}</DailyReview>
      </ReviewContainer>
      <BtnWrap>
        <Btn>
          <DailyReview>신고하기 ({peedInfo.reportCnt})</DailyReview>
        </Btn>
      </BtnWrap>
    </Container>
  ) : (
    <Container>
      <ActivityIndicator size="small" color="purple" />
    </Container>
  );
};

const Btn = styled.TouchableOpacity`
  padding: 7px;
  background-color: #ce9fff;
  border-radius: 10px;
`;
const BtnWrap = styled.View`
  align-items: flex-end;
  margin-top: 20px;
`;

const ReviewContainer = styled.View`
  background-color: #f2e7fe;
  padding: 15px;
  border-radius: 15px;
  min-height: 150px;
`;
const DailyReview = styled.Text`
  font-family: "nanumBold";
  font-size: 17px;
  color: #3b1464;
`;

const ProofImage = styled.Image`
  width: ${WIDTH - 50}px;
  height: 300px;
  margin: 25px 0px;
`;

const Vertical = styled.View`
  margin-left: 20px;
  justify-content: space-around;
`;

const PUD = styled.View`
  flex-direction: row;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const ProofDate = styled.Text`
  font-family: "nanumBold";
  font-size: 17px;
  color: #3b1464;
`;
const UserName = styled.Text`
  font-family: "nanumBold";
  font-size: 20px;
  color: #3b1464;
`;

const Container = styled.ScrollView`
  flex: 1;
  background-color: white;
  padding: 25px;
`;

const Profile = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;
