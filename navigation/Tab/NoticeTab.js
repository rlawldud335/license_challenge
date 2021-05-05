import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Notice from "../../screens/Notice";
import Schedule from "../../screens/Schedule";

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
      options={{ tabBarLabel: "알림" }}
      name="Notice"
      component={Notice}
    />
    <Tab.Screen
      options={{ tabBarLabel: "일정" }}
      name="Schedule"
      component={Schedule}
    />
  </Tab.Navigator>
);
