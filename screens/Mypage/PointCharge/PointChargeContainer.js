import React from "react";
import { View, Text } from "react-native";

export default () => {
  const getData = () => {};

  useEffect(() => {
    getData;
  }, []);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>PointCharge</Text>
    </View>
  );
};