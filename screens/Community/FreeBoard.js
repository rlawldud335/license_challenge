import React, { useEffect } from "react";
import { View, Text } from "react-native";

const getData = ()=>{

}

export default () => {

useEffect(
  ()=>{
    getData();
  },[]);

  return (  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
  <Text>FreeBoard</Text>
</View>);
};
