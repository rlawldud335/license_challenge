import React, { useState, useEffect } from "react";
import Api from "../../../api";
import styled from "styled-components/native";
import {
  ActivityIndicator,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";

const WIDTH = Dimensions.get("window").width;

let cnt = -1;
const numColumns = 3;
const numOfRows = 20;

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({
      key: `blank-${numberOfElementsLastRow}`,
      empty: true,
      pictureId: cnt,
    });
    numberOfElementsLastRow++;
    cnt--;
  }

  return data;
};

const data = [
  {
    pictureId: 18,
    proofImage:
      "https://licensechallenge.s3.ap-northeast-2.amazonaws.com/challenge/proofPicture/64_54_2021-05-26T19%3A19%3A42.681Z",
  },
  {
    pictureId: 17,
    proofImage:
      "https://licensechallenge.s3.ap-northeast-2.amazonaws.com/challenge/proofPicture/64_54_2021-05-26T19%3A19%3A39.530Z",
  },
];

export default ({ navigation, route, cid }) => {
  const [isEnd, setIsEnd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNum, setPageNum] = useState(0);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <Image
          source={{ uri: item.proofImage }}
          style={{ width: WIDTH / numColumns, height: WIDTH / numColumns }}
        />
      </TouchableOpacity>
    );
  };

  const Extract = (item) => {
    return item.pictureId.toString();
  };

  return (
    <ChallengeList
      data={formatData(data, numColumns)}
      renderItem={renderItem}
      numColumns={numColumns}
      keyExtractor={Extract}
      showsVerticalScrollIndicator={false}
      // onEndReached={handleLoadMore}
      // onEndReachedThreshold={0.3}
      // ListFooterComponent={
      //   isLoading && <ActivityIndicator size="small" color="purple" />
      // }
      disableVirtualization={false}
    />
  );
};

const ChallengeList = styled.FlatList`
  flex: 1;
  background-color: white;
`;
