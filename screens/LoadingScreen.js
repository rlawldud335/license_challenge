import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default (props) => {
  const detectSignin = async () => {
    const token = await AsyncStorage.getItem("token");
    //token 유효한지 검사하기 (skip)
    if (token) {
      props.navigation.navigate("MainTab");
    } else {
      props.navigation.navigate("Signin");
    }
  };

  useEffect(() => {
    detectSignin();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <ActivityIndicator size="small" color="purple" />
    </View>
  );
};
