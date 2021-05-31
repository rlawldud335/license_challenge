import React, { useEffect, useState } from "react";
import Api from "../../../api";
import styled from "styled-components/native";
import {
  View,
  ActivityIndicator,
  Alert
} from "react-native";

export default ({ cid }) => {
    const [joinPeopleList, setJoinPeopleList] = useState();
  
    const getData = async () => {
      const response = await Api.getJoinPeopleList(cid);
      if (response.status == 200) {
        setJoinPeopleList(response.data);
      } else {
        Alert.alert("500 error");
      }
    };

    useEffect(() => {
        getData();
      }, []);

    // const renderItem = ({item}) => {
    //   return (
    //     <View>
    //       {item.profileImage ? <Image source={{ uri: item.profileImage }} /> : <Image />}
    //       <Name>{item.nickname}</Name>
    //     </View>
    //   );
    // };

    // return (
    //   <View renderItem={renderItem}></View>
    // );

    return joinPeopleList ? (
        <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 15}}>
          <Image source={{ uri: joinPeopleList.profileImage }}></Image>
          <Name>{joinPeopleList.nickname}</Name>

          joinPeopleList
        </View>
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
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;
