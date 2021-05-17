import React from "react";
import styled from "styled-components/native";

const MultiLineTextInput = ({ onChange, plh }) => (
  <TextInput
    multiline
    numberOfLines={4}
    onChangeText={onChange}
    placeholder={plh}
  ></TextInput>
);

const TextInput = styled.TextInput`
  padding: 20px;
  min-height: 100px;
  width: 80%;
  border-radius: 10px;
  border-color: #652da1;
  border-width: 1.5px;
  font-family: "nanumBold";
  font-size: 17px;
`;

export default MultiLineTextInput;
