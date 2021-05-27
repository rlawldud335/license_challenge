import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  TextInput,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Text,
} from "react-native";

import NoticeTab from "../Tab/NoticeTab";
import MainTab from "../Tab/MainTab";
import SearchTab from "../Tab/SearchTab";
import DoChallengeTab from "../Tab/DoChallengeTab";

import Category from "../../screens/Explore/Category/index";
import ChallengeInfo from "../../screens/Explore/ChallengeInfo";
import NewChallenge from "../../screens/Challenge/NewChallenge/NewChallengeContainer";
import LicenseWebview from "../../screens/Explore/License/LicenseWebview";
import LoadingScreen from "../../screens/LoadingScreen";
import SigninScreen from "../../screens/SigninScreen";
import SignupScreen from "../../screens/SignupScreen";
import NewCommunity from "../../screens/Community/NewCommunity";
import Payment from "../../screens/Explore/Payment";
import ProofPicture from "../../screens/Challenge/ProofPicture";
import UploadProofPicture from "../../screens/Challenge/UploadProofPicture";

const Stack = createStackNavigator();

const WIDTH = Dimensions.get("window").width;

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      headerBackTitleVisible: false,
      headerTintColor: "#3B1464",
      headerTitleStyle: {
        fontFamily: "nanumBold",
        fontSize: 20,
      },
      headerTitleAlign: "center",
    }}
  >
    <Stack.Screen
      name="Loading"
      component={LoadingScreen}
      options={{ gestureEnabled: false }}
    />
    <Stack.Screen
      name="Signin"
      component={SigninScreen}
      options={{
        gestureEnabled: false,
      }}
    />
    <Stack.Screen
      name="Signup"
      component={SignupScreen}
      options={{
        gestureEnabled: false,
      }}
    />
    <Stack.Screen
      name="MainTab"
      component={MainTab}
      options={{ gestureEnabled: false }}
    />
    <Stack.Screen
      name="Search"
      component={SearchTab}
      options={{
        headerShown: true,
        headerBackTitleVisible: false,
        headerStyle: {
          borderColor: "white",
          height: 75,
        },
        headerTitleContainerStyle: {
          flex: 1,
        },
        headerTitle: () => (
          <TextInput
            placeholder="검색어를 입력하세요"
            style={{
              backgroundColor: "#f2e7fe",
              paddingHorizontal: 20,
              borderRadius: 10,
              width: "100%",
              marginLeft: 20,
              height: 39,
            }}
          />
        ),
      }}
    />
    <Stack.Screen
      name="NoticeTab"
      component={NoticeTab}
      options={{
        headerShown: true,
        headerBackTitleVisible: false,
        headerStyle: {
          borderBottomColor: "white",
        },
        title: "알림 & 일정",
      }}
    />
    <Stack.Screen
      name="Category"
      component={Category}
      options={({ route }) => ({
        title: route.params.title,
        headerShown: true,
        headerBackTitleVisible: false,
      })}
    />
    <Stack.Screen
      name="ChallengeInfo"
      component={ChallengeInfo}
      options={{
        headerShown: true,
        headerBackTitleVisible: false,
        title: "",
      }}
    />
    <Stack.Screen
      name="NewChallenge"
      component={NewChallenge}
      options={{
        headerShown: true,
        headerBackTitleVisible: false,
        title: "새로운 챌린지 생성",
      }}
    />
    <Stack.Screen
      name="LicenseWebview"
      component={LicenseWebview}
      options={({ route }) => ({
        title: route.params.title,
        headerShown: true,
        headerBackTitleVisible: false,
      })}
    />
    <Stack.Screen
      name="NewCommunity"
      component={NewCommunity}
      options={{
        headerShown: true,
        headerBackTitleVisible: false,
        title: "새로운 커뮤니티 글 생성",
      }}
    />
    <Stack.Screen
      name="Payment"
      component={Payment}
      options={{
        headerShown: true,
        headerBackTitleVisible: false,
        title: "결제하기",
      }}
    />
    <Stack.Screen
      name="ProofPicture"
      component={ProofPicture}
      options={{
        headerShown: true,
        headerBackTitleVisible: false,
        title: "사진인증",
      }}
    />
    <Stack.Screen
      name="UploadProofPicture"
      component={UploadProofPicture}
      options={{
        headerShown: true,
        headerBackTitleVisible: false,
        title: "사진 업로드",
      }}
    />
    <Stack.Screen
      name="DoChallengeTab"
      component={DoChallengeTab}
      title="Hello"
      options={({ route }) => ({
        headerShown: true,
        headerBackTitleVisible: false,
        headerStyle: {
          height: 80,
        },
        headerTitleStyle: { flex: 1, textAlign: "center" },
        headerLeftContainerStyle: { zIndex: 10 },
        headerTitle: () => {
          return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                style={{ width: WIDTH, height: 80, opacity: 0.35 }}
                source={{ uri: route.params.challengeTitleImage }}
              />
              <Text
                style={{
                  fontFamily: "nanumBold",
                  fontSize: 20,
                  color: "#3b1464",
                  position: "absolute",
                }}
              >
                {route.params.challengeTitle}
              </Text>
            </View>
          );
        },
      })}
    />
  </Stack.Navigator>
);
