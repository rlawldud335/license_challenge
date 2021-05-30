import React, { useEffect } from "react";
import { View, Text } from "react-native";

export default ({ route }) => {
  console.log(route.params);

  const getData = () => {};

  useEffect(() => {
    getData();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Text>Payment</Text>
      <Text>{route.params.amount}</Text>
    </View>
  );
};
