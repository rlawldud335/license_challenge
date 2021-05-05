import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../../screens/Home";
import License from "../../screens/License";

const Tab = createMaterialTopTabNavigator();

export default () => (
  <Tab.Navigator
    tabBarOptions={{
      tabStyle: { width: 100 },
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
      name="Home"
      component={Home}
      options={{ tabBarLabel: "홈" }}
      navigationOptions={{ gesturesEnabled: false }}
    />
    <Tab.Screen
      name="license"
      component={License}
      options={{ tabBarLabel: "자격증" }}
    />
  </Tab.Navigator>
);
