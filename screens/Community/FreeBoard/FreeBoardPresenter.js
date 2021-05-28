import React from "react";
import styled from "styled-components/native";

const renderItem = ({ freeBoard, index, navigation }) => {
  return (
    <>
      <FreeBoard
        onPress={() => {
          navigation.navigate("LicenseWebview", {
            title: freeBoard.title,
            boardId: freeBoard.boardId,
          });
        }}
      >
        <FreeBoardText>{freeBoard.title}</FreeBoardText>
      </FreeBoard>
    </>
  );
};

export default React.memo(renderItem);

const FreeBoard = styled.TouchableOpacity`
  height: 55px;
  justify-content: center;
`;
const FreeBoardText = styled.Text`
  margin-left: 15px;
  color: #3b1464;
  font-family: "nanumBold";
  font-size: 18px;
`;
const Text = styled.Text`
  margin-left: 15px;
  color: white;
  font-family: "nanumReguler";
  font-size: 16px;
`;
