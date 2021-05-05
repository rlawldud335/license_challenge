import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Icon from "../../components/Explore/Icon";
import Title from "../../components/Explore/Title";
import {
  licenseIcon,
  cerExamIcon,
  studyIcon,
  allIcon,
} from "../../assets/icon/ICON";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

const Container = styled.View`
  padding-left: 30px;
  padding-right: 30px;
  width: 100%;
  height: ${HEIGHT / 6}px;
`;

const IconContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export default ({ navigation }) => {
  return (
    <Container>
      <Title title={"챌린지 카테고리"} />
      <IconContainer>
        <Icon
          icon={licenseIcon}
          width={50}
          height={50}
          title={"자격증"}
          screen={"Category"}
          navigation={navigation}
        />
        <Icon
          icon={cerExamIcon}
          width={50}
          height={50}
          title={"공인시험"}
          screen={"Category"}
          navigation={navigation}
        />
        <Icon
          icon={studyIcon}
          width={50}
          height={50}
          title={"스터디"}
          screen={"Category"}
          navigation={navigation}
        />
        <Icon
          icon={allIcon}
          width={50}
          height={50}
          title={"전체보기"}
          screen={"Category"}
          navigation={navigation}
        />
      </IconContainer>
    </Container>
  );
};
