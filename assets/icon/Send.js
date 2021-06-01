import React from "react";
import Svg, { Path, G, Rect } from "react-native-svg";

export default (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <G id="paper-plane" transform="translate(12 12)">
        <G
          id="paper-plane-2"
          data-name="paper-plane"
          transform="translate(-12 -12)"
        >
          <G id="paper-plane-3" data-name="paper-plane">
            <Rect
              id="사각형_436"
              data-name="사각형 436"
              width="24"
              height="24"
              fill="#652da1"
              opacity="0"
            />
            <Path
              id="패스_856"
              data-name="패스 856"
              d="M21,4a1.31,1.31,0,0,0-.06-.27V3.64a.884.884,0,0,0-.49-.49h-.09A.86.86,0,0,0,20.05,3H20a1,1,0,0,0-.3,0L1.7,9a1,1,0,0,0,0,1.9l8.53,2.84,2.84,8.53a1,1,0,0,0,1.9,0l6-18A1,1,0,0,0,21,4ZM16.3,6.29l-5.57,5.57L5.16,10ZM14,18.84l-1.86-5.57L17.71,7.7Z"
              fill="#652da1"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};
