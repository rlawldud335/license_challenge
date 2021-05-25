import React, { useState } from "react";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Logo from "../assets/icon/Logo";
import { Alert, ActivityIndicator } from "react-native";
import Api from "../api";

export default (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const sendCred = async (props) => {
    setIsLoading(true);
    const response = await Api.postAuthSignup(
      email,
      password,
      nickname,
      phoneNumber
    );
    if (response.token) {
      await AsyncStorage.setItem("token", response.token);
      props.navigation.navigate("MainTab");
    } else {
      Alert.alert("잘못된 Email혹은 Password입니다.");
      setIsLoading(false);
    }
  };

  return (
    <Container>
      {isLoading ? (
        <ActivityIndicator size="small" color="purple" />
      ) : (
        <>
          <Logo />
          <Email
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
          <Password
            secureTextEntry={true}
            placeholder="Password"
            autoCapitalize="none"
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
          <Nickname
            placeholder="Nickname"
            autoCapitalize="none"
            onChangeText={(text) => {
              setNickname(text);
            }}
          />
          <PhoneNumber
            placeholder="PhoneNumber"
            autoCapitalize="none"
            onChangeText={(text) => {
              setPhoneNumber(text);
            }}
          />
          <Signup onPress={() => sendCred(props)}>
            <Text>Sign Up</Text>
          </Signup>
          <SignupBtn onPress={() => props.navigation.navigate("Signin")}>
            already have a account ?
          </SignupBtn>
        </>
      )}
    </Container>
  );
};

const Password = styled.TextInput`
  width: 70%;
  padding: 10px 20px;
  border-radius: 10px;
  border-color: #652da1;
  border-width: 2px;
  margin: 10px;
  margin-top: 10px;
`;

const Email = styled(Password)`
  margin-top: 50px;
`;

const Nickname = styled(Password)``;

const PhoneNumber = styled(Password)``;

const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const Signup = styled.TouchableOpacity`
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

const SignupBtn = styled.Text`
  color: #652da1;
  margin: 15px;
  font-family: "nanumBold";
`;
