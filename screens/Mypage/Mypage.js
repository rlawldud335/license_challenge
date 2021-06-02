import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { ActivityIndicator, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Title from "../../components/Title";
import Api from "../../api";
import { MaterialIcons } from "@expo/vector-icons";

export default ({ navigation, loading }) => {
  const [isLoading, setIsLoading] = useState(loading);
  const [userData, setUserData] = useState();

  const getData = async () => {
    const response = await Api.getUserInfo();
    if (response.status == 200) {
      setUserData(response.data[0]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return isLoading ? (
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
  ) : (
    <Container>
      <TitleView>
        <Title title={"마이페이지"} />
      </TitleView>

      <Profile
        onPress={() => {
          navigation.navigate("UpdateMyInfo");
        }}
      >
        <UserImage source={{ uri: userData.profileImage }} />
        <UserInfo>
          <TextWrap>
            <Text>닉네임</Text>
            <Text>{userData.nickname}</Text>
          </TextWrap>
          <TextWrap>
            <Text>이메일</Text>
            <Text>{userData.email}</Text>
          </TextWrap>
          <TextWrap>
            <Text>전화번호</Text>
            <Text>{userData.phoneNumber}</Text>
          </TextWrap>
          <TextWrap>
            <Text>포인트</Text>
            <Text>{userData.point}</Text>
          </TextWrap>
        </UserInfo>
      </Profile>

      <Logout
        onPress={() => {
          navigation.navigate("PointManagement");
        }}
      >
        <Left>
          <IconWrap style={{ backgroundColor: "#FFF39B" }}>
            <MaterialIcons name="attach-money" size={28} color="#463F04" />
          </IconWrap>
          <BtnText>포인트 관리</BtnText>
        </Left>
        <MaterialIcons name="navigate-next" size={24} color="black" />
      </Logout>

      <Logout>
        <Left>
          <IconWrap style={{ backgroundColor: "#C4E2FF" }}>
            <MaterialIcons name="developer-board" size={26} color="#00456A" />
          </IconWrap>
          <BtnText>커뮤니티 관리</BtnText>
        </Left>
        <MaterialIcons name="navigate-next" size={24} color="black" />
      </Logout>

      <Logout>
        <Left>
          <IconWrap style={{ backgroundColor: "#C6E879" }}>
            <MaterialIcons name="card-giftcard" size={24} color="#395200" />
          </IconWrap>
          <BtnText>기프티콘 관리</BtnText>
        </Left>
        <MaterialIcons name="navigate-next" size={24} color="black" />
      </Logout>

      <Logout
        onPress={async () => {
          await AsyncStorage.clear();
          navigation.reset({
            routes: [{ name: "Signin", params: { loading: false } }],
          });
        }}
      >
        <Left>
          <IconWrap style={{ backgroundColor: "#FF9B9B" }}>
            <MaterialIcons name="logout" size={24} color="#430909" />
          </IconWrap>
          <BtnText>로그아웃</BtnText>
        </Left>
        <MaterialIcons name="navigate-next" size={24} color="black" />
      </Logout>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
`;

const TitleView = styled.View`
  flex-direction: row;
  height: 60px;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
`;

const Profile = styled.TouchableOpacity`
  width: 100%;
  height: 180px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f2e7fe;
  margin-bottom: 15px;
`;

const UserImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: #eeeeee;
`;
const UserInfo = styled.View`
  width: 70%;
  align-items: flex-end;
`;

const TextWrap = styled.View`
  width: 80%;
  margin: 5px;
  flex-direction: row;
  justify-content: space-between;
`;

const Text = styled.Text`
  font-family: "nanumBold";
  font-size: 17px;
  color: #3b1464;
`;

const BtnText = styled.Text`
  font-family: "nanumBold";
  font-size: 19px;
  color: #3b1464;
`;

const Left = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Logout = styled.TouchableOpacity`
  width: 100%;
  padding: 0px 25px;
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;
const IconWrap = styled.View`
  padding: 14px;
  background-color: #ce9fff;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
`;
