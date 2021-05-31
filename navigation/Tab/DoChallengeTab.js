import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AchievementRate from "../../screens/Challenge/AchievementRate";
import Peed from "../../screens/Challenge/Peed";
import Chatting from "../../screens/Challenge/Chatting";

const Tab = createMaterialTopTabNavigator();

export default ({ route }) => {
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
        options={{ tabBarLabel: "달성률" }}
        name="AchievementRate"
        children={(props) => (
          <AchievementRate
            cid={route.params.challengeId}
            challengeTitleImage={route.params.challengeTitleImage}
            navigation={props.navigation}
          />
        )}
      />
      <Tab.Screen
        options={{ tabBarLabel: "피드" }}
        name="Peed"
        children={(props) => (
          <Peed
            cid={route.params.challengeId}
            navigation={props.navigation}
            route={props.route}
          />
        )}
      />
      <Tab.Screen
        options={{ tabBarLabel: "대화" }}
        name="Chatting"
        children={() => <Chatting cid={route.params.challengeId} />}
      />
    </Tab.Navigator>
  );
};
