import React from "react";
import {
  EventSwiper,
  Category,
  PopularChallenge,
  PopularLicense,
  PopularCommunity,
} from "./HomePresenter";
import { ScrollView } from "react-native";

export default ({ navigation }) => (
  <ScrollView
    showsVerticalScrollIndicator={false}
    style={{
      flex: 1,
      padding: 20,
      backgroundColor: "white",
    }}
  >
    <EventSwiper />
    <Category navigation={navigation} />
    <PopularChallenge />
    <PopularLicense navigation={navigation} />
    <PopularCommunity />
  </ScrollView>
);
