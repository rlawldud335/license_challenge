import React from "react";
import styled from "styled-components/native";

const Container = styled.TouchableOpacity`
  width: 60%;
  min-width: 300px;
  background-color: #ff5e5e;
  height: 40px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text`
  color: white;
  font-family: "nanumBold";
  font-size: 17px;
`;

const RedButton = ({ fc, name, style }) => (
  <Container onPress={fc} style={style}>
    <Text>{name}</Text>
  </Container>
);

export default RedButton;
