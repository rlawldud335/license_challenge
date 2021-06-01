import React, { useEffect, useState } from "react";
import Api from "../../../api";
import styled from "styled-components/native";
import { View, ActivityIndicator, ScrollView } from "react-native";

export default ({ route }) => {
  const [joinPeopleList, setJoinPeopleList] = useState();

  const getData = async () => {
    const response = await Api.getJoinPeopleList(route.params.cid);
    if (response.status == 200) {
      setJoinPeopleList(response.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return joinPeopleList ? (
    <SView>
      {joinPeopleList.map((item) => {
        return (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              margin: 10,
              padding: 10,
              borderBottomColor: "#eeeeee",
              borderBottomWidth: 1,
            }}
            key={item.nickname}
          >
            <Image source={{ uri: item.profileImage }}></Image>
            <Name>{item.nickname}</Name>
          </View>
        );
      })}
    </SView>
  ) : (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="small" color="purple" />
    </View>
  );
};

const Name = styled.Text`
  font-family: "nanumBold";
  font-size: 20px;
  color: #3b1464;
`;

const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #eeeeee;
`;

const SView = styled.ScrollView`
  background-color: white;
  padding: 10px 30px;
`;
