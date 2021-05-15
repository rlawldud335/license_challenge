import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FreeBoard from "../../screens/Community/FreeBoard";
import DealBoard from "../../screens/Community/DealBoard";

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
      name="FreeBoard"
      component={FreeBoard}
    />
    <Tab.Screen
      options={{ tabBarLabel: "판매게시판" }}
      name="DealBoard"
      component={DealBoard}
    />
  </Tab.Navigator>
);
