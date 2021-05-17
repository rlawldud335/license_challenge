import React from "react";
import styled from "styled-components/native";

const OneLineTextInput = ({ onChange, plh }) => (
  <TextInput onChangeText={onChange} placeholder={plh}></TextInput>
);

const TextInput = styled.TextInput`
  width: 80%;
  height: 40px;
  border-bottom-color: #652da1;
  border-bottom-width: 1.5px;
  font-family: "nanumBold";
  font-size: 17px;
`;

export default OneLineTextInput;
