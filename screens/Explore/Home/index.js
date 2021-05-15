import React from "react";
import SwiperContainer from "./SwiperContainer";
import CategoryContainer from "./CategoryContainer";
import PopularLicenseContainer from "./PopularLicenseContainer";
import PopularChallengeContainer from "./PopularChallengeContainer";
import PopularCommunityContainer from "./PopularCommunityContainer";
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
    <SwiperContainer />
    <CategoryContainer navigation={navigation} />
    <PopularChallengeContainer />
    <PopularLicenseContainer />
    <PopularCommunityContainer />
  </ScrollView>
);
