import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import ChallengeSearch from "../../screens/Explore/ChallengeSearch";
import LicenseSearch from "../../screens/Explore/LicenseSearch";

const Tab = createMaterialTopTabNavigator();

export default ({ route }) => {
  console.log(route.params);
  return (
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
        children={({ navigation }) => {
          return (
            <ChallengeSearch
              keyword={route.params?.keyword}
              navigation={navigation}
            />
          );
        }}
      />
      <Tab.Screen
        options={{ tabBarLabel: "자격증" }}
        name="LicenseSearch"
        children={({ navigation }) => {
          return (
            <LicenseSearch
              keyword={route.params?.keyword}
              navigation={navigation}
            />
          );
        }}
      />
    </Tab.Navigator>
  );
};
