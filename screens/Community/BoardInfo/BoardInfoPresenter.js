import styled from "styled-components/native";
import React from "react";
import Menu from "../../../assets/icon/Menu";
import { View } from "react-native";

export const CreateComment = ({ commentInfo }) => {
  return (
    <View style={{ marginTop: 20 }}>
      {commentInfo.map((item) => {
        // console.log(item);
        return (
          <View
            style={{
              width: "100%",
              borderBottomWidth: 1,
              borderBottomColor: "#d6d6d6",
              padding: 10,
            }}
            key={item.commentId}
          >
            <Text>{item.userId}</Text>
            <Text>{item.content}</Text>
            <Text>{item.createDt.slice(0, 10)}</Text>
            <Text>{item.createDt.slice(11, 16)}</Text>
          </View>
        );
      })}
    </View>
  );
};

export const CreateBoardInfo = ({ boardInfo }) => {
  return (
    <>
      <Header>
        <PUD>
          <Profile source={{ uri: boardInfo.profileImage }} />
          <Vertical>
            <UserName>{boardInfo.nickname}</UserName>
            <ProofDate>{boardInfo.createDt.slice(0, 10)}</ProofDate>
          </Vertical>
        </PUD>
        <Menu />
      </Header>
      <Title>{boardInfo.title}</Title>
      <ReviewContainer>
        <DailyReview>{boardInfo.content}</DailyReview>
      </ReviewContainer>
      <BtnWrap>
        <Btn>
          <ProofDate>신고하기 ({boardInfo.reportCnt})</ProofDate>
        </Btn>
      </BtnWrap>
    </>
  );
};

const Btn = styled.TouchableOpacity`
  padding: 6px;
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
  min-height: 130px;
`;

const Vertical = styled.View`
  margin-left: 20px;
  justify-content: space-around;
`;

const Profile = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const PUD = styled.View`
  flex-direction: row;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Text = styled.Text`
  font-family: "nanumBold";
  color: #3b1464;
`;
const DailyReview = styled(Text)`
  font-size: 17px;
`;
const Title = styled(Text)`
  font-size: 20px;
  padding: 15px;
  padding-top: 40px;
`;
const ProofDate = styled(Text)`
  font-size: 16px;
`;

const UserName = styled(Text)`
  font-size: 18px;
`;
