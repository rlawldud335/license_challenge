import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import InProgressChallenge from "../../screens/InProgressChallenge";
import EndedChallenge from "../../screens/EndedChallenge";

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
      options={{ tabBarLabel: "자유게시판" }}
      name="InProgressChallenge"
      component={InProgressChallenge}
    />
    <Tab.Screen
      options={{ tabBarLabel: "판매게시판" }}
      name="EndedChallenge"
      component={EndedChallenge}
    />
  </Tab.Navigator>
);
