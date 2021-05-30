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
  Platform,
} from "react-native";

const WIDTH = Platform.OS === "web" ? 720 : Dimensions.get("window").width;

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

export default ({ navigation, route, cid }) => {
  console.log(cid);
  const [images, setImages] = useState([]);
  const [isEnd, setIsEnd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNum, setPageNum] = useState(0);

  const getData = async () => {
    setIsLoading(true);
    const response = await Api.getPeedImages(cid, pageNum, numOfRows);
    setIsLoading(false);

    if (response.data.length == 0) {
      setIsEnd(true);
    }
    if (response.status == 200) {
      setPageNum(pageNum + 1);
      setImages(images.concat(response.data));
    }
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("PeedInfo", {
            pictureId: item.pictureId,
            challengeId: cid,
          });
        }}
      >
        <Image
          source={{ uri: item.proofImage }}
          style={{ width: WIDTH / numColumns, height: WIDTH / numColumns }}
        />
      </TouchableOpacity>
    );
  };
  const handleLoadMore = () => {
    if (isLoading || isEnd) {
      return;
    } else {
      getData();
    }
  };

  const Extract = (item) => {
    return item.pictureId.toString();
  };

  useEffect(() => {
    getData();
  }, []);

  return isLoading ? (
    <Container>
      <ActivityIndicator size="small" color="purple" />
    </Container>
  ) : (
    <ChallengeList
      data={formatData(images, numColumns)}
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
  background-color: white;
`;

const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;
