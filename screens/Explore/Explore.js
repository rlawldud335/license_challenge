import React from "react";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

import Bell from "../../assets/icon/Bell";
import ExploreTab from "../../navigation/Tab/ExploreTab";

const Container = styled.View`
  background-color: white;
  flex: 1;
`;
const Header = styled.View`
  flex-direction: row;
  padding: 18px;
  height: 75px;
`;
const SearchBtn = styled.TouchableOpacity`
  flex: 1;
  background-color: #f2e7fe;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;
const NoticeBtn = styled.TouchableOpacity`
  justify-content: center;
  margin-left: 15px;
`;
const Text = styled.Text`
  margin-left: 10px;
  color: #3b1464;
  font-family: nanumReguler;
`;

export default ({ navigation, route }) => {
  return (
    <Container>
      <Header>
        <SearchBtn onPress={() => navigation.navigate("Search")}>
          <MaterialIcons
            name="search"
            size={24}
            color="#652DA1"
            style={{ marginLeft: 10 }}
          />
          <Text>원하는 챌린지를 찾아보세요!</Text>
        </SearchBtn>
        <NoticeBtn onPress={() => navigation.navigate("NoticeTab")}>
          <Bell />
        </NoticeBtn>
      </Header>
      <ExploreTab />
    </Container>
  );
};
