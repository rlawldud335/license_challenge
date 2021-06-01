import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import CommunityTab from "../../navigation/Tab/CommunityTab";
import Title from "../../components/Title";
import Plus from "../../assets/icon/Plus";

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
const Header = styled.View`
  flex-direction: row;
  height: 60px;
  width: 100%;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
`;
const NewCommunityBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #dcbcfd;
  padding: 10px;
  border-radius: 10px;
  shadow-color: #000;
  shadow-offset: 3px 3px;
  shadow-opacity: 0.1;
  shadow-radius: 2px;
`;
const BtnText = styled.Text`
  color: #3b1464;
  font-family: "nanumBold";
  font-size: 15px;
`;

export default ({ navigation }) => (
  <Container>
    <Header>
      <Title title={"커뮤니티"} />
      <NewCommunityBtn onPress={() => navigation.navigate("NewCommunity")}>
        <BtnText>새로운 글 추가</BtnText>
        <Plus />
      </NewCommunityBtn>
    </Header>
    <View style={{ flex: 1 }}>
      <CommunityTab />
    </View>
  </Container>
);
