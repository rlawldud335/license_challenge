import React from "react";
import styled from "styled-components/native";
import SwiperContainer from "./SwiperContainer";
import CategoryContainer from "./CategoryContainer";
import PopularLicenseContainer from "./PopularLicenseContainer";
import PopularChallengeContainer from "./PopularChallengeContainer";
import PopularCommunityContainer from "./PopularCommunityContainer";

const Container = styled.ScrollView`
  background-color: white;
`;

export default ({ navigation }) => (
  <Container showsVerticalScrollIndicator={false}>
    <SwiperContainer />
    <CategoryContainer navigation={navigation} />
    <PopularLicenseContainer />
    <PopularChallengeContainer />
    <PopularCommunityContainer />
  </Container>
);
