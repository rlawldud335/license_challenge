import React from "react";
import styled from "styled-components/native";

let preSC = "",
  preBC = "";

const renderItem = ({ license, index, navigation }) => {
  if (index == 0) {
    (preSC = ""), (preBC = "");
  }
  let isBC = preBC != license.bigCategory ? true : false;
  let isSC = preSC != license.smallCategory ? true : false;
  preBC = license.bigCategory;
  preSC = license.smallCategory;

  return (
    <>
      {isBC ? (
        <BigCategory>
          <Text>{license.bigCategory}</Text>
        </BigCategory>
      ) : null}
      {isSC ? (
        <SmallCategory>
          <Text> - {license.smallCategory}</Text>
        </SmallCategory>
      ) : null}
      <License
        onPress={() => {
          navigation.navigate("LicenseWebview", {
            title: license.licenseName,
            licenseId: license.licenseId,
          });
        }}
      >
        <LicenseText>{license.licenseName}</LicenseText>
      </License>
    </>
  );
};

export default React.memo(renderItem);

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
