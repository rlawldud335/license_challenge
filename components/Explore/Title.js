import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Text = styled.Text`
  font-family: "nanumBold";
  font-size: 22px;
  color: #3b1464;
`;

const Title = ({ title }) => <Text>{title}</Text>;

export default Title;
