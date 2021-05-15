import React from "react";
import Svg, { Path, G, Rect } from "react-native-svg";

export default (props) => {
  return (
    <Svg width="30" height="17" viewBox="0 0 17 17" {...props}>
      <G id="plus-square" transform="translate(0 -0.163)">
        <Rect
          width="17"
          height="17"
          transform="translate(0 0.163)"
          opacity="0"
        />
        <Path
          d="M15.974,3H5.595A2.6,2.6,0,0,0,3,5.595V15.974a2.6,2.6,0,0,0,2.595,2.595H15.974a2.6,2.6,0,0,0,2.595-2.595V5.595A2.6,2.6,0,0,0,15.974,3Zm-.4,8.649H11.649V15.7a.865.865,0,1,1-1.73,0V11.649H5.839a.865.865,0,1,1,0-1.73h4.08V6.025a.865.865,0,1,1,1.73,0V9.919h3.927a.865.865,0,1,1,0,1.73Z"
          transform="translate(-2.151 -2.255)"
          fill="#652da1"
        />
      </G>
    </Svg>
  );
};
