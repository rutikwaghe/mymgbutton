import { View, Text } from "react-native";
import React from "react";

const MyMgButton = (props) => {
  const { width, height, color, title, backgroundColor, color, fontSize } =
    props;
  return (
    <View
      style={{ width: width, height: height, backgroundColor: backgroundColor }}
    >
      <Text style={{ fontSize: fontSize, color: color }}>MyMgButton</Text>
    </View>
  );
};

export default MyMgButton;
