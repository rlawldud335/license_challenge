import React from "react";
import Svg, {
  Path,
  G,
  Stop,
  Polygon,
  Defs,
  LinearGradient,
} from "react-native-svg";

export default (props) => {
  return (
    <Svg width="90.19" height="161.781" viewBox="0 0 90.19 161.781" {...props}>
      <Defs>
        <LinearGradient
          id="linear-gradient"
          x1="0.496"
          y1="0.185"
          x2="0.506"
          y2="1.046"
        >
          <Stop offset="0" stopColor="#1d2088" />
          <Stop offset="0.67" stopColor="#601986" />
        </LinearGradient>

        <LinearGradient
          id="linear-gradient-3"
          x1="0.467"
          y1="0.258"
          x2="0.312"
          y2="0.946"
        >
          <Stop offset="0" stopColor="#920783" />
          <Stop offset="0.12" stopColor="#870f85" />
          <Stop offset="0.44" stopColor="#70228b" />
          <Stop offset="0.75" stopColor="#612d8e" />
          <Stop offset="1" stopColor="#5c318f" />
        </LinearGradient>

        <LinearGradient
          id="linear-gradient-4"
          x1="0.099"
          y1="0.187"
          x2="0.781"
          y2="0.83"
        >
          <Stop offset="0.11" stopColor="#d41076" />
          <Stop offset="0.95" stopColor="#f8b62d" />
        </LinearGradient>
      </Defs>

      <G id="logo" transform="translate(0.021 -0.06)">
        <Path
          d="M44.3,48.03,20.54,58.563l19.708,44.426,7.237-15.7,16.523,5.166Z"
          transform="translate(25.225 58.852)"
          fill="url(#linear-gradient)"
        />
        <Path
          d="M.56,91.8l16.657-4.676,6.77,15.922,21.066-43.8L21.626,47.98Z"
          transform="translate(0.713 58.791)"
          fill="url(#linear-gradient)"
        />
        <Path
          d="M86.213,57.892A28.415,28.415,0,0,1,65.347,72.411,26.121,26.121,0,0,0,78,53.817a25.676,25.676,0,0,0-2.672-15.588c-11.78-19.44-24.5-36.409-24.5-36.409l-.178.245c1,2.494,11.357,28.726,11.357,38.48a18.55,18.55,0,0,1-37.077,0h0c-9.553,16.011-18.06,33.4-18.06,43.98a43.958,43.958,0,0,0,87.894,0C94.742,77.466,91.2,67.935,86.213,57.892Z"
          transform="translate(-4.595 -1.76)"
          fill="url(#linear-gradient-3)"
        />
        <Path
          d="M94.314,60.786c0,4.142-11.134,33-42.31,33-24.117,0-41.976-18.661-45.294-33a32.713,32.713,0,0,1,3.073-23.07c4.454-6.391,15.076-7.594,22.781-5.322,11.8,3.5,9.665,20.8,22.024,28.949C70.888,72.01,94.314,60.786,94.314,60.786Z"
          transform="translate(-5.86 34.449)"
          fill="url(#linear-gradient-4)"
        />
      </G>
    </Svg>
  );
};
