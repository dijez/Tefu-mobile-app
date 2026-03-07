import React from "react";
import Svg, { Path } from "react-native-svg";
import { View } from "react-native";

const CustomShape = ({ width = 253.67, height = 407, stroke = "#0A5F3A" }) => {
  return (
    <View>
      <Svg width={width} height={height} viewBox="0 0 260 410">
        <Path
          d="
            M60 120
            C70 60, 110 10, 130 10
            C150 10, 190 60, 200 120
            C220 130, 230 150, 230 170
            L230 330
            C230 370, 200 400, 160 400
            L100 400
            C60 400, 30 370, 30 330
            L30 170
            C30 150, 40 130, 60 120
            Z
          "
          stroke={stroke}
          strokeWidth={4}
          fill="none"
        />
      </Svg>
    </View>
  );
};

export default CustomShape;