import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";

import Explore from "../../screens/Explore/Explore";
import Challenge from "../../screens/Challenge/Challenge";
import Community from "../../screens/Community/Community";
import Mypage from "../../screens/Mypage/Mypage";

const Tab = createBottomTabNavigator();

export default (props) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          size = 30;
          if (route.name === "Explore") {
            return <MaterialIcons name="explore" size={size} color={color} />;
          } else if (route.name === "Challenge") {
            return <FontAwesome name="star" size={size} color={color} />;
          } else if (route.name === "Community") {
            return <Ionicons name="people" size={size} color={color} />;
          } else if (route.name === "Mypage") {
            return <Ionicons name="settings" size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "#652DA1",
        inactiveTintColor: "#CFC2DD",
        labelStyle: { fontFamily: "nanumReguler" },
      }}
    >
      <Tab.Screen
        options={{ tabBarLabel: "탐색" }}
        name="Explore"
        component={Explore}
      />
      <Tab.Screen
        options={{ tabBarLabel: "챌린지" }}
        name="Challenge"
        component={Challenge}
      />
      <Tab.Screen
        options={{ tabBarLabel: "커뮤니티" }}
        name="Community"
        component={Community}
      />
      <Tab.Screen
        options={{ tabBarLabel: "마이페이지" }}
        name="Mypage"
        component={Mypage}
      />
    </Tab.Navigator>
  );
};
