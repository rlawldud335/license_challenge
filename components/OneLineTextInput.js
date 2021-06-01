import React, { forwardRef } from "react";
import styled from "styled-components/native";

const OneLineTextInput = forwardRef((props, ref) => {
  return (
    <TextInput
      onChangeText={props.onChange}
      placeholder={props.plh}
      onSubmitEditing={props.onSubmit}
      value={props.value}
      ref={ref}
      style={props.style}
    ></TextInput>
  );
});

const TextInput = styled.TextInput`
  width: 80%;
  height: 40px;
  border-bottom-color: #652da1;
  border-bottom-width: 1.5px;
  font-family: "nanumBold";
  font-size: 17px;
`;

export default OneLineTextInput;
