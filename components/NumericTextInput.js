import React from "react";
import styled from "styled-components/native";

const NumericTextInput = ({ onChange, plh }) => (
  <TextInput
    onChangeText={onChange}
    placeholder={plh}
    keyboardType="numeric"
    numeric
  ></TextInput>
);

const TextInput = styled.TextInput`
  width: 80%;
  height: 40px;
  border-radius: 10px;
  border-color: #652da1;
  border-width: 1.5px;
  font-family: "nanumBold";
  font-size: 17px;
  text-align: right;
  padding: 10px;
  margin-right: 10px;
`;

export default NumericTextInput;
