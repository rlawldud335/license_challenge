import React from "react";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  height: 200px;
`;

const ImageView = styled.View`
  width: 90%;
  background-color: white;
`;
const EventImage = styled.Image`
  width: 100%;
  height: 160px;
  border-radius: 10px;
`;

export default () => (
  <Container>
    <Swiper
      swipeAreaStyle={{
        height: "80%",
      }}
      slideWrapperStyle={{
        height: "100%",
        alignItems: "center",
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
      <ImageView>
        <EventImage
          resizeMode={"cover"}
          source={require("../../../assets/img/sample1.jpg")}
        />
      </ImageView>
      <ImageView>
        <EventImage
          resizeMode={"cover"}
          source={require("../../../assets/img/sample2.jpg")}
        />
      </ImageView>
      <ImageView>
        <EventImage
          resizeMode={"cover"}
          source={require("../../../assets/img/sample3.jpg")}
        />
      </ImageView>
    </Swiper>
  </Container>
);
