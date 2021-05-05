import React, { useState } from "react";
import { Image } from "react-native";
import { Asset } from "expo-asset";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import LoginStack from "./navigation/Stack/LoginStack";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

//function components
export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = () => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1618450483934-db421d2e739c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
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
      <NavigationContainer>
        <LoginStack />
      </NavigationContainer>
    </>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}
