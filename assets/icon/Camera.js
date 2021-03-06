import React from "react";
import Svg, { Path, Rect } from "react-native-svg";

export default (props) => {
  return (
    <Svg width="42" height="42" viewBox="0 0 42 42" {...props}>
      <Rect width="42" height="42" opacity="0" />
      <Path
        d="M31.75,10H26.5V7.375A4.375,4.375,0,0,0,22.125,3h-5.25A4.375,4.375,0,0,0,12.5,7.375V10H7.25A5.25,5.25,0,0,0,2,15.25v14A5.25,5.25,0,0,0,7.25,34.5h24.5A5.25,5.25,0,0,0,37,29.25v-14A5.25,5.25,0,0,0,31.75,10ZM16,7.375a.875.875,0,0,1,.875-.875h5.25A.875.875,0,0,1,23,7.375V10H16ZM33.5,29.25A1.75,1.75,0,0,1,31.75,31H7.25A1.75,1.75,0,0,1,5.5,29.25v-14A1.75,1.75,0,0,1,7.25,13.5h24.5a1.75,1.75,0,0,1,1.75,1.75Z"
        transform="translate(1.5 2.25)"
        fill="#fff"
      />
      <Path
        d="M14.625,10.5a6.125,6.125,0,1,0,6.125,6.125A6.125,6.125,0,0,0,14.625,10.5Zm0,8.75a2.625,2.625,0,1,1,2.625-2.625,2.625,2.625,0,0,1-2.625,2.625Z"
        transform="translate(6.375 7.875)"
        fill="#fff"
      />
    </Svg>
  );
};
