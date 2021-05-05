import React from "react";
import { View, Text } from "react-native";
import SearchTab from "../navigation/Tab/SearchTab";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

const Container = styled.View`
  background-color: white;
  flex: 1;
`;
const Header = styled.View`
  flex: 0.8;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 20px;
  margin-right: 30px;
  margin-left: 30px;
`;
const TextInput = styled.TextInput`
  background-color: #f2e7fe;
  width: 88%;
  padding: 10px;
  border-radius: 10px;
`;

export default ({ navigation }) => (
  <Container>
    <Header>
      <AntDesign
        name="arrowleft"
        size={24}
        color="#652DA1"
        style={{ paddingBottom: 5 }}
        onPress={() => navigation.goBack()}
      />
      <TextInput placeholder="검색어를 입력하세요" />
    </Header>
    <View style={{ flex: 7 }}>
      <SearchTab />
    </View>
  </Container>
);
