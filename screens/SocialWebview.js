import React from "react";
import { SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";
const INJECTED_JAVASCRIPT =
  '(function() {if(window.document.getElementsByTagName("pre").length>0){window.ReactNativeWebView.postMessage((window.document.getElementsByTagName("pre")[0].innerHTML));}})();';

let userAgent =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1";

const SocialWebview = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        // ref={ref => (this.webview = ref)}
        source={props.source}
        userAgent={userAgent}
        useWebKit={true}
        javaScriptEnabled={true}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        onMessage={async (event) => {
          let result = JSON.parse(event.nativeEvent.data);
          console.log(result);
          let success = result.userId;
          if (success) {
            console.log("success");
            props.closeSocialModal(true);
          } else {
            console.log("fail");
            props.closeSocialModal(false);
          }
        }}
      />
    </SafeAreaView>
  );
};
export default SocialWebview;
