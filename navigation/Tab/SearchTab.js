import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ChallengeSearch from "../../screens/ChallengeSearch";
import LicenseSearch from "../../screens/LicenseSearch";

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
      options={{ tabBarLabel: "챌린지" }}
      name="ChallengeSearch"
      component={ChallengeSearch}
    />
    <Tab.Screen
      options={{ tabBarLabel: "자격증" }}
      name="LicenseSearch"
      component={LicenseSearch}
    />
  </Tab.Navigator>
);
