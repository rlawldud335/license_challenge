import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components/native";
import Logo from "../assets/icon/Logo";
import {
  Alert,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Api from "../api";

export default (props) => {
  const [isLoading, setIsLoading] = useState(props.route.params.loading);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendCred = async (props) => {
    setIsLoading(true);
    const response = await Api.postAuthSignin(email, password);
    if (response.token) {
      await AsyncStorage.setItem("token", response.token);
      props.navigation.navigate("MainTab");
    } else {
      setIsLoading(false);
      Alert.alert("잘못된 Email혹은 Password입니다.");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container behavior="padding">
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
            <SignupBtn
              onPress={() =>
                props.navigation.navigate("Signup", { loading: false })
              }
            >
              don't have a account ?
            </SignupBtn>
          </>
        )}
      </Container>
    </TouchableWithoutFeedback>
  );
};

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
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

const Email = styled(Password)`
  margin-top: 50px;
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
