import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

const Category = styled.View`
  width: 100%;
  height: 35px;
  background-color: #652da1;
  justify-content: center;
`;

const Text = styled.Text`
  margin-left: 15px;
  color: white;
  font-family: "nanumReguler";
  font-size: 16px;
`;

const License = styled.TouchableOpacity`
  width: 100%;
  height: 55px;
  justify-content: center;
`;
const LicenseText = styled.Text`
  margin-left: 15px;
  color: #3b1464;
  font-family: "nanumBold";
  font-size: 18px;
`;

export default () => (
  <ScrollView
    showsVerticalScrollIndicator={false}
    style={{ backgroundColor: "white" }}
  >
    <Category>
      <Text>국가 기술 자격</Text>
    </Category>
    <License>
      <LicenseText>정보처리기사</LicenseText>
    </License>
    <License>
      <LicenseText>정보처리기사</LicenseText>
    </License>
    <License>
      <LicenseText>정보처리기사</LicenseText>
    </License>
    <License>
      <LicenseText>정보처리기사</LicenseText>
    </License>
    <License>
      <LicenseText>정보처리기사</LicenseText>
    </License>
    <Category>
      <Text>국가 기술 자격</Text>
    </Category>
    <License>
      <LicenseText>정보처리기사</LicenseText>
    </License>
    <License>
      <LicenseText>정보처리기사</LicenseText>
    </License>
    <License>
      <LicenseText>정보처리기사</LicenseText>
    </License>
    <License>
      <LicenseText>정보처리기사</LicenseText>
    </License>
  </ScrollView>
);
