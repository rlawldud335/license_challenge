import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TextInput } from "react-native";

import NoticeTab from "../Tab/NoticeTab";
import Category from "../../screens/Explore/Category/index";
import ChallengeInfo from "../../screens/Explore/ChallengeInfo";
import MainTab from "../Tab/MainTab";
import SearchTab from "../Tab/SearchTab";
import NewChallenge from "../../screens/Challenge/NewChallenge/NewChallengeContainer";
import LicenseWebview from "../../screens/Explore/License/LicenseWebview";
import LoadingScreen from "../../screens/LoadingScreen";
import SigninScreen from "../../screens/SigninScreen";
import SignupScreen from "../../screens/SignupScreen";
import NewCommunity from "../../screens/Community/NewCommunity/NewCommunityContainer";

const Stack = createStackNavigator();

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
  </Stack.Navigator>
);
