import React from "react";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

const Container = styled.TouchableOpacity`
  padding: 10px;
  align-items: center;
`;
const Title = styled.Text`
  font-family: "nanumBold";
  font-size: 15px;
  color: #3b1464;
  margin-top: 10px;
`;

export default ({ icon, width, height, title, screen, navigation }) => {
  if (navigation) {
    return (
      <Container onPress={() => navigation.navigate(screen)}>
        <SvgXml xml={icon} width={width} height={height} />
        <Title>{title}</Title>
      </Container>
    );
  } else {
    return (
      <Container>
        <SvgXml xml={icon} width={width} height={height} />
        <Title>{title}</Title>
      </Container>
    );
  }
};
