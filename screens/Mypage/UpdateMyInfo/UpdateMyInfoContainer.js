import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  Alert,
  View,
  ActivityIndicator,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import Api from "../../../api";
import styled from "styled-components/native";
import RedButton from "../../../components/RedButton";
import Camera from "../../../assets/icon/Camera";


export default ({ navigation }) => {
  const [userData, setUserData] = useState();
  const [profileImage, setProfileImage] = useState();
  const [nickname, setNickname] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();

  const getData = async () => {
    const response = await Api.getUserInfo();
    if (response.status == 200) {
      setUserData(response.data[0]);
    }
  };

  const updateUserInfo = async () => {
    const response = await Api.updateMyInfo(nickname, password, phoneNumber, profileImage);
    if (response.success == true) {
      navigation.reset({
        routes: [
          {
            name: "MainTab",
            params: {
              screen: "Mypage",
            },
          },
        ],
      });
    } else {
      Alert.alert("수정 실패");
    }
  };

  const deleteWithdrawal = async () => {
    const response = await Api.withdrawalUser();
    if (response.success == true) {
      navigation.reset({
        routes: [
          {
            name: "Signin",
            params: { loading: false }
          }
        ],
      });
    } else {
      Alert.alert("탈퇴 실패");
    }
  };

  const pickImage = async (setProfileImage) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setProfileImage(result.uri);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return userData != undefined ? (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <PickImage onPress={() => pickImage(setProfileImage)}>
          {profileImage ? <UserImage source={{ uri: profileImage }} /> : <UserImage source={{ uri: userData.profileImage }} />}
          <Camera style={{ position: "absolute" }} />
        </PickImage>
        <UserInfo>
          <TextWrap>
            <Text>닉네임</Text>
            <Nickname
              placeholder={userData.nickname}
              autoCapitalize="none"
              onChangeText={(text) => {
                setNickname(text);
              }}
              value={nickname}
            />
          </TextWrap>
          <TextWrap>
            <Text>전화번호</Text>
            <PhoneNumber
              placeholder={userData.phoneNumber}
              autoCapitalize="none"
              onChangeText={(text) => {
                setPhoneNumber(text);
              }}
              value={phoneNumber}
            />
          </TextWrap>
          <TextWrap>
            <Text>비밀번호</Text>
            <Password
              secureTextEntry={true}
              placeholder="Password"
              autoCapitalize="none"
              onChangeText={(text) => {
                setPassword(text);
              }}
              value={password}
            />
          </TextWrap>
        </UserInfo>
        <Footer>
          <RedButton fc={updateUserInfo} name={"회원정보수정"} />
          <RedButton fc={deleteWithdrawal} name={"회원탈퇴"} />
        </Footer>
      </Container>
    </TouchableWithoutFeedback>
  ) : (
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

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: white;
  padding: 20px;
  align-items: center;
`;

const UserImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
const UserInfo = styled.View`
  width: 100%;
`;

const TextWrap = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const Text = styled.Text`
  font-family: "nanumBold";
  font-size: 20px;
  color: #3b1464;
  margin-top: 15px;
  margin-left: 15px;
`;

const Password = styled.TextInput`
  width: 70%;
  padding: 10px 20px;
  border-radius: 10px;
  border-color: #652da1;
  border-width: 2px;
  margin: 10px;
  margin-top: 10px;
`;

const Nickname = styled(Password)``;

const PhoneNumber = styled(Password)``;

const Footer = styled.View`
  position: absolute;
  bottom: 20px;
  height: 17%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const PickImage = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 15px;
  background-color: #bebebe;
  justify-content: center;
  align-items: center;
`;