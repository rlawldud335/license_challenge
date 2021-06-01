import React from "react";
import Svg, { Circle, G, Rect } from "react-native-svg";

export default (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24">
      <Rect
        width="24"
        height="24"
        transform="translate(0 24) rotate(-90)"
        fill="#652da1"
        opacity="0"
      />
      <Circle cx="2" cy="2" r="2" transform="translate(10 10)" fill="#652da1" />
      <Circle cx="2" cy="2" r="2" transform="translate(10 3)" fill="#652da1" />
      <Circle cx="2" cy="2" r="2" transform="translate(10 17)" fill="#652da1" />
    </Svg>
  );
};
