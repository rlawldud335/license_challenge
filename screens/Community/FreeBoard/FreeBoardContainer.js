import React, { useState, useEffect } from "react";

import styled from "styled-components/native";
import FreeBoardPresenter from "./FreeBoardPresenter";
import Api from "../../../api";
import { ActivityIndicator } from "react-native";

export default ({ navigation }) => {
  const numOfRows = 20;
  const [isEnd, setIsEnd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNum, setPageNum] = useState(0);
  const [FreeBoardData, setFreeBoardData] = useState([]);

  const getData = async () => {
    setIsLoading(true);
    const response = await Api.getFreeBoard(pageNum, numOfRows);
    if (response.data.length == 0) {
      setIsEnd(true);
    }
    if (response.status == 200) {
      setPageNum(pageNum + 1);
      setFreeBoardData(FreeBoardData.concat(response.data));
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
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
  const renderItem = ({ item, index, navigation }) => {
    return (
      <FreeBoardPresenter freeBoard={item} index={index} navigation={navigation} />
    );
  };

  return (
    <FreeBoardList
      data={FreeBoardData}
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

const FreeBoardList = styled.FlatList`
  flex: 1;
  background-color: white;
`;
