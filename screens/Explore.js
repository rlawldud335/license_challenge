import React from "react";
import ExploreTab from "../navigation/Tab/ExploreTab";
import styled from "styled-components/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Container = styled.View`
  background-color: #ffffff;
  flex: 1;
`;
const Header = styled.View`
  background-color: #ffffff;
  flex: 0.7;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 20px;
  margin-right: 30px;
  margin-left: 30px;
`;
const Body = styled.View`
  flex: 5;
`;
const SearchBtn = styled.TouchableOpacity`
  background-color: #f2e7fe;
  width: 85%;
  padding: 10px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;

const NoticeBtn = styled.TouchableOpacity`
  padding-bottom: 5px;
`;

const Text = styled.Text`
  margin-left: 10px;
  color: #3b1464;
  font-family: nanumReguler;
`;

export default ({ navigation }) => {
  return (
    <Container>
      <Header>
        <SearchBtn onPress={() => navigation.navigate("Search")}>
          <MaterialIcons name="search" size={24} color="#652DA1" />
          <Text>원하는 챌린지를 찾아보세요!</Text>
        </SearchBtn>
        <NoticeBtn>
          <Ionicons
            name="notifications"
            size={30}
            color="#652DA1"
            onPress={() => navigation.navigate("NoticeTab")}
          />
        </NoticeBtn>
      </Header>
      <Body>
        <ExploreTab />
      </Body>
    </Container>
  );
};
