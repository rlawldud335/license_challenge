import React, { useState } from "react";
import styled from "styled-components/native";
import Icon from "../components/Explore/Icon";
import { LogoIcon } from "../assets/icon/ICON";
import SocialWebviewModal from "./SocialWebviewModal";
import MainTab from "../navigation/Tab/MainTab";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const LoginBtn = styled.TouchableOpacity`
  width: 70%;
  background-color: #652da1;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 10px;
`;

const Text = styled.Text`
  color: white;
  font-family: "nanumBold";
  font-size: 20px;
`;

export default () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [socialModalVisible, setSocialModalVisible] = useState(false);
  const [source, setSource] = useState(undefined);

  const signupWithSocial = async (social) => {
    setSocialModalVisible(!socialModalVisible);
    setSource(`http://localhost:3000/auth/${social}`);
  };

  const closeSocialModal = (isSuccess) => {
    if (isSuccess) {
      setIsSuccess(isSuccess);
    }
    setSocialModalVisible(!socialModalVisible);
  };

  return (
    <>
      {isSuccess ? (
        <MainTab />
      ) : (
        <Container>
          <Icon icon={LogoIcon} width={150} height={200} />
          {source !== undefined ? (
            <SocialWebviewModal
              visible={socialModalVisible}
              source={source}
              closeSocialModal={closeSocialModal}
            />
          ) : null}
          <LoginBtn onPress={() => signupWithSocial("kakao")}>
            <Text>카카오 계정으로 로그인</Text>
          </LoginBtn>
          <LoginBtn onPress={() => signupWithSocial("naver")}>
            <Text>네이버 계정으로 로그인</Text>
          </LoginBtn>
          <LoginBtn onPress={() => signupWithSocial("github")}>
            <Text>깃허브 계정으로 로그인</Text>
          </LoginBtn>
        </Container>
      )}
    </>
  );
};
