import React, { useState, useEffect } from "react";

import styled from "styled-components/native";
import LicensePresenter from "./LicensePresenter";
import Api from "../../../api";
import { ActivityIndicator } from "react-native";

export default ({ navigation }) => {
  const numOfRows = 20;
  const [isEnd, setIsEnd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNum, setPageNum] = useState(0);
  const [licenseData, setLicenseData] = useState([]);

  const getData = async () => {
    setIsLoading(true);
    const response = await Api.getLicense(pageNum, numOfRows);
    if (response.data.length == 0) {
      setIsEnd(true);
    }
    if (response.status == 200) {
      setPageNum(pageNum + 1);
      setLicenseData(licenseData.concat(response.data));
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
  const renderItem = ({ item, index }) => {
    return (
      <LicensePresenter license={item} index={index} navigation={navigation} />
    );
  };

  return (
    <LicenseList
      data={licenseData}
      renderItem={renderItem}
      keyExtractor={(item) => item.licenseId.toString()}
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

const LicenseList = styled.FlatList`
  flex: 1;
  background-color: white;
`;
