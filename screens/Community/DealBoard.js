import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import Api from "../../api";
import styled from "styled-components/native";

export default ({ navigation }) => {
  const numOfRows = 20;
  const [isEnd, setIsEnd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNum, setPageNum] = useState(0);
  const [boardData, setBoardData] = useState([]);

  const getData = async () => {
    setIsLoading(true);
    const response = await Api.getSaleBoard(pageNum, numOfRows);
    if (response.data.length == 0) {
      setIsEnd(true);
    }
    if (response.status == 200) {
      setPageNum(pageNum + 1);
      setBoardData(boardData.concat(response.data));
    }
    setIsLoading(false);
  };

  const handleLoadMore = () => {
    if (isLoading || isEnd) {
      return;
    } else {
      getData();
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Post onPress={() => navigation.navigate("BoardInfo")}>
        {item.image ? (
          <Image source={{ uri: item.image }} />
        ) : (
          <Image
            source={{
              uri: `https://licensechallenge.s3.ap-northeast-2.amazonaws.com/front/pink-sky.jpg`,
            }}
          />
        )}
        <Vertical>
          <Title>{item.title.slice(0, 20)}</Title>
          <Content>{item.content.slice(0, 30)}</Content>
        </Vertical>
        <TimeName>
          {item.createDt.slice(0, 10)} | {item.nickname}
        </TimeName>
      </Post>
    );
  };

  return (
    <LicenseList
      data={boardData}
      renderItem={renderItem}
      keyExtractor={(item) => item.boardId.toString()}
      showsVerticalScrollIndicator={false}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.3}
      ListFooterComponent={
        isLoading && <ActivityIndicator size="small" color="purple" />
      }
      disableVirtualization={false}
    />
  );
};

const TimeName = styled.Text`
  font-family: "nanumBold";
  font-size: 14px;
  color: #3b1464;
`;

const Content = styled.Text`
  font-family: "nanumBold";
  font-size: 14px;
  color: #3b1464;
`;

const Title = styled.Text`
  font-family: "nanumBold";
  font-size: 18px;
  color: #3b1464;
`;

const Vertical = styled.View`
  width: 45%;
  justify-content: center;
  margin: 0px 15px;
`;

const Image = styled.Image`
  width: 80px;
  height: 60px;
  border-radius: 10px;
`;

const Post = styled.TouchableOpacity`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #d6d6d6;
  padding: 15px;
  flex-direction: row;
`;

const LicenseList = styled.FlatList`
  flex: 1;
  background-color: white;
  padding: 10px;
`;
