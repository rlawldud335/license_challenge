import styled from "styled-components/native";
import React from "react";
import Menu from "../../../assets/icon/Menu";
import { View, Linking } from "react-native";
import * as FileSystem from "expo-file-system";

export const CreateComment = ({ commentInfo }) => {
  return (
    <View
      style={{
        marginTop: 20,
        borderTopWidth: 1,
        borderTopColor: "#d6d6d6",
        margin: 20,
      }}
    >
      {commentInfo.map((item) => {
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
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text>{item.nickname}</Text>
              <Text>
                {item.createDt.slice(0, 10)} | {item.createDt.slice(11, 16)}
              </Text>
            </View>
            <Text style={{ fontSize: 16 }}>{item.content}</Text>
          </View>
        );
      })}
    </View>
  );
};

export const CreateBoardInfo = ({ boardInfo, previewFile, allFile }) => {
  return (
    <View style={{ margin: 20 }}>
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
      {boardInfo.image ? (
        <Image source={{ uri: boardInfo.image }} resizeMode="contain" />
      ) : null}
      <ReviewContainer>
        <DailyReview>{boardInfo.content}</DailyReview>
      </ReviewContainer>

      {previewFile ? (
        <>
          <PreviewFile
            onPress={async () => {
              const fileUri = FileSystem.documentDirectory + "tqtqtqt.jpg";
              const file = await FileSystem.downloadAsync(previewFile, fileUri);
              // console.log("Finished downloading to ", file.uri);
            }}
            style={{ marginTop: 20 }}
          >
            <Text style={{ color: "white" }}>미리보기 파일 다운로드</Text>
          </PreviewFile>
          <PreviewFile onPress={() => Linking.openURL(previewFile)}>
            <Text style={{ color: "white" }}>
              결제하고 전체파일 다운로드받기{" "}
            </Text>
          </PreviewFile>
        </>
      ) : null}

      {allFile ? (
        <PreviewFile>
          <Text>전체 파일 다운로드</Text>
        </PreviewFile>
      ) : null}

      <BtnWrap>
        <Btn>
          <ProofDate>신고하기 ({boardInfo.reportCnt})</ProofDate>
        </Btn>
      </BtnWrap>
    </View>
  );
};

const PreviewFile = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: #ff5e5e;
  border-radius: 10px;
  margin: 7px 0px;
`;

const Image = styled.Image`
  width: 100%;
  height: 250px;
  background-color: #eeeeee;
  border-radius: 10px;
  align-self: center;
  margin: 20px;
`;

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
