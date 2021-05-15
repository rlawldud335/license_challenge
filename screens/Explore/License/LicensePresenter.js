import React from "react";
import styled from "styled-components/native";

export default ({ licenseData, getData, navigation }) => {
  let preSC, preBC;

  const renderItem = ({ item, index }) => {
    if (index == 0) {
      (preSC = ""), (preBC = "");
    }
    let isBC = preBC != item.bigCategory ? true : false;
    let isSC = preSC != item.smallCategory ? true : false;
    preBC = item.bigCategory;
    preSC = item.smallCategory;
    return (
      <>
        {isBC ? (
          <BigCategory>
            <Text>{item.bigCategory}</Text>
          </BigCategory>
        ) : null}
        {isSC ? (
          <SmallCategory>
            <Text> - {item.smallCategory}</Text>
          </SmallCategory>
        ) : null}
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
  const handleLoadMore = () => {
    getData();
  };

  return (
    <LicenseList
      data={licenseData}
      renderItem={renderItem}
      keyExtractor={(item) => item.licenseId.toString()}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.1}
      showsVerticalScrollIndicator={false}
    />
  );
};

const LicenseList = styled.FlatList`
  flex: 1;
  background-color: white;
`;

const BigCategory = styled.View`
  height: 35px;
  background-color: #652da1;
  justify-content: center;
`;
const SmallCategory = styled.View`
  height: 35px;
  background-color: #8237d3;
  justify-content: center;
  border-top-width: 0.2px;
  border-color: white;
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
const Text = styled.Text`
  margin-left: 15px;
  color: white;
  font-family: "nanumReguler";
  font-size: 16px;
`;
