import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components/native";
import Logo from "../assets/icon/Logo";
import { Alert, ActivityIndicator } from "react-native";

export default (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendCred = async (props) => {
    setIsLoading(true);
    fetch("https://license-challenge.herokuapp.com/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        if (data.token) {
          await AsyncStorage.setItem("token", data.token);
          props.navigation.navigate("MainTab");
        } else {
          Alert.alert("잘못된 Email혹은 Password입니다.");
        }
      });
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
          <Signin onPress={() => sendCred(props)}>
            <Text>Sign in</Text>
          </Signin>
          <SignupBtn onPress={() => props.navigation.navigate("Signup")}>
            don't have a account ?
          </SignupBtn>
        </>
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const Email = styled.TextInput`
  width: 70%;
  padding: 10px 20px;
  border-radius: 10px;
  border-color: #652da1;
  border-width: 2px;
  margin: 10px;
  margin-top: 50px;
`;

const Password = styled.TextInput`
  width: 70%;
  padding: 10px 20px;
  border-radius: 10px;
  border-color: #652da1;
  border-width: 2px;
  margin: 10px;
`;

const Signin = styled.TouchableOpacity`
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
