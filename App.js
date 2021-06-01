import React, { useState } from "react";
import { Image, View, SafeAreaView, Platform } from "react-native";
import { Asset } from "expo-asset";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./navigation/Stack/MainStack";

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const loadAssets = () => {
    const images = cacheImages([
      require("./assets/img/sample1.jpg"),
      require("./assets/img/sample2.jpg"),
      require("./assets/img/sample3.jpg"),
      require("./assets/img/study.jpg"),
      require("./assets/img/pink-sky.jpg"),
      require("./assets/img/food.jpg"),
    ]);
    const fonts = cacheFonts([
      {
        nanumBold: require("./assets/fonts/NanumBarunpenB.ttf"),
        nanumReguler: require("./assets/fonts/NanumBarunpenR.ttf"),
      },
    ]);
    return Promise.all([...images, ...fonts]);
  };
  const onFinish = () => setIsReady(true);

  return isReady ? (
    <>
      <StatusBar />
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          paddingTop: Platform.OS === "android" ? 25 : 0,
        }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            maxWidth: 720,
          }}
        >
          <NavigationContainer>
            <MainStack />
          </NavigationContainer>
        </View>
      </SafeAreaView>
    </>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}
