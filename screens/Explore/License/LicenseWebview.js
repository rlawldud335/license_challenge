import React from "react";
import { SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

export default ({ route }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <WebView
      source={{
        uri: `http://www.q-net.or.kr//crf005.do?id=crf00505&gSite=Q&gId=&jmCd=${route.params.licenseId}&examInstiCd=`,
      }}
      javaScriptEnabled={true}
      useWebKit={true}
    />
  </SafeAreaView>
);
