import React, { useState, useEffect } from "react";

import styled from "styled-components/native";
import Api from "../../api";
import { ActivityIndicator, View, Text } from "react-native";

export default ({ navigation, keyword }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [licenseData, setLicenseData] = useState([]);

  const getData = async () => {
    setIsLoading(true);
    if (keyword) {
      const response = await Api.getLicenseSearch(keyword);
      if (response.status == 200) {
        setLicenseData(response.data);
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [keyword]);

  const renderItem = ({ item }) => {
    return (
      <>
        <License
          onPress={() => {
            navigation.navigate("LicenseWebview", {
              title: item.licenseName,
              licenseId: item.licenseId,
            });
          }}
        >
          <LicenseText>{item.licenseName}</LicenseText>
        </License>
      </>
    );
  };

  return isLoading ? (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="small" color="purple" />
    </View>
  ) : (
    <LicenseList
      data={licenseData}
      renderItem={renderItem}
      keyExtractor={(item) => item.licenseId.toString()}
      showsVerticalScrollIndicator={false}
      disableVirtualization={false}
    />
  );
};

const LicenseList = styled.FlatList`
  flex: 1;
  background-color: white;
`;
const License = styled.TouchableOpacity`
  height: 55px;
  justify-content: center;
`;
const LicenseText = styled.Text`
  margin-left: 15px;
  color: #3b1464;
  font-family: "nanumBold";
  font-size: 18px;
`;
