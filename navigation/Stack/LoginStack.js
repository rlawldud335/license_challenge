import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainTab from "../Tab/MainTab";
import Login from "../../screens/Login";
import Search from "../../screens/Search";
import NoticeTab from "../Tab/NoticeTab";
import Category from "../../screens/Category";
import LicenseInfo from "../../screens/LicenseInfo";
import ChallengeInfo from "../../screens/ChallengeInfo";
import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";

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
    }}
  >
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="MainTab" component={MainTab} />
    <Stack.Screen name="Search" component={Search} />
    <Stack.Screen
      name="NoticeTab"
      component={NoticeTab}
      options={{
        headerShown: true,
        headerBackTitleVisible: false,
        title: "알림 & 일정",
      }}
    />
    <Stack.Screen
      name="Category"
      component={Category}
      options={{ headerShown: true, headerBackTitleVisible: false }}
    />
    <Stack.Screen
      name="LicenseInfo"
      component={LicenseInfo}
      options={{ headerShown: true, headerBackTitleVisible: false }}
    />
    <Stack.Screen
      name="ChallengeInfo"
      component={ChallengeInfo}
      options={{ headerShown: true, headerBackTitleVisible: false }}
    />
  </Stack.Navigator>
);
