import React from "react";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

const Container = styled.View`
  height: ${HEIGHT / 4}px;
`;
const Section = styled.View``;
const BG = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

export default () => (
  <Container>
    <Swiper
      loop
      timeout={4}
      containerStyle={{
        marginTop: 30,
      }}
      swipeAreaStyle={{
        height: "80%",
      }}
      slideWrapperStyle={{
        height: "100%",
        width: WIDTH - 60,
        marginLeft: 30,
        marginRight: 30,
      }}
      controlsProps={{
        prevPos: false,
        nextPos: false,
        dotsTouchable: true,
        dotActiveStyle: {
          backgroundColor: "#652DA1",
        },
      }}
    >
      <Section>
        <BG source={require("../../assets/img/sample1.jpg")} />
      </Section>
      <Section>
        <BG source={require("../../assets/img/sample2.jpg")} />
      </Section>
      <Section>
        <BG source={require("../../assets/img/sample3.jpg")} />
      </Section>
    </Swiper>
  </Container>
);
