import React from "react";
import styled from "styled-components/native";

const TG = styled.View`
  background-color: #f6eefe;
  padding: 5px;
  border-radius: 5px;
  margin: 3px;
`;

const TGName = styled.Text`
  font-family: "nanumBold";
  color: #3b1464;
`;

const Tag = ({ tagName }) => (
  <TG>
    <TGName>{tagName}</TGName>
  </TG>
);

export default Tag;
