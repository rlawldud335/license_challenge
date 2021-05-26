import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AchievementRate from "../../screens/Challenge/AchievementRate";
import Peed from "../../screens/Challenge/Peed";
import Chatting from "../../screens/Challenge/Chatting";

const Tab = createMaterialTopTabNavigator();

export default () => (
  <Tab.Navigator
    tabBarOptions={{
      labelStyle: {
        fontSize: 16,
        color: "#3B1464",
        fontFamily: "nanumBold",
      },
      indicatorStyle: {
        borderBottomColor: "#6E00E4",
        borderBottomWidth: 3,
      },
    }}
    swipeEnabled={false}
  >
    <Tab.Screen
      options={{ tabBarLabel: "인증률" }}
      name="AchievementRate"
      component={AchievementRate}
    />
    <Tab.Screen
      options={{ tabBarLabel: "피드" }}
      name="Peed"
      component={Peed}
    />
    <Tab.Screen
      options={{ tabBarLabel: "피드" }}
      name="Chatting"
      component={Chatting}
    />
  </Tab.Navigator>
);
