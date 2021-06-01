import React from "react";
import Svg, { Path, Circle, Rect } from "react-native-svg";

export default (props) => {
  return (
    <Svg width="31" height="31" viewBox="0 0 31 31" {...props}>
      <Rect width="31" height="31" fill="#652da1" opacity="0" />
      <Path
        d="M22.22,3H6.844A3.844,3.844,0,0,0,3,6.844V22.22a3.844,3.844,0,0,0,3.844,3.844H22.22a3.844,3.844,0,0,0,3.844-3.844V6.844A3.844,3.844,0,0,0,22.22,3ZM6.844,5.563H22.22A1.281,1.281,0,0,1,23.5,6.844V17.556l-4.1-3.5a3.549,3.549,0,0,0-4.51,0L5.563,21.836V6.844A1.281,1.281,0,0,1,6.844,5.563Z"
        transform="translate(0.844 0.844)"
        fill="#652da1"
      />
      <Circle
        cx="1.922"
        cy="1.922"
        r="1.922"
        transform="translate(8.329 8.969)"
        fill="#652da1"
      />
    </Svg>
  );
};
