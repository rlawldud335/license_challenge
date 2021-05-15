import React from "react";
import styled from "styled-components/native";

const Text = styled.Text`
  font-family: "nanumBold";
  font-size: 20px;
  color: #3b1464;
`;

const Title = ({ title }) => <Text>{title}</Text>;

export default Title;
