import React, { useState, useEffect } from "react";
import styled from "styled-components/native";

import Api from "../../../api";
import CategoryPresenter from "./CategoryPresenter";
import { ActivityIndicator } from "react-native";

const numColumns = 2;
const numOfRows = 20;
const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

export default ({ route, navigation }) => {
  const {
    params: { category },
  } = route;

  const [isEnd, setIsEnd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNum, setPageNum] = useState(0);
  const [challengeData, setChallengeData] = useState([]);

  const getData = async () => {
    setIsLoading(true);
    const response = await Api.getChallenge(pageNum, numOfRows, category);
    if (response.data.length == 0) {
      setIsEnd(true);
    }
    if (response.status == 200) {
      setPageNum(pageNum + 1);
      setChallengeData(challengeData.concat(response.data));
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

  const renderItem = ({ item }) => {
    return <CategoryPresenter item={item} navigation={navigation} />;
  };

  const Extract = (item) => {
    if (!item.empty) {
      return item.challengeId.toString();
    }
  };

  return (
    <ChallengeList
      data={formatData(challengeData, numColumns)}
      renderItem={renderItem}
      numColumns={numColumns}
      keyExtractor={Extract}
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

const ChallengeList = styled.FlatList`
  flex: 1;
  padding: 10px 10px;
  background-color: white;
`;
