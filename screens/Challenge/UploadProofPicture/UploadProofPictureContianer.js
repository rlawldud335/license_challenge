import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  ActivityIndicator,
} from "react-native";
import MultiLineTextInput from "../.../../../../components/MultiLineTextInput";
import RedButton from "../../../components/RedButton";
import Api from "../../../api";

export default ({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [dailyReview, setDailyReview] = useState();

  const uploadFotmat = (uri) => {
    let uriParts = uri.split(".");
    let fileType = uriParts[uriParts.length - 1];
    return { uri, name: `titleImage.${fileType}`, type: `image/${fileType}` };
  };

  const upload = async () => {
    setIsLoading(true);
    let data = new FormData();
    data.append("dailyReview", dailyReview);
    data.append("proofImage", uploadFotmat(route.params.proofImage.uri));
    const response = await Api.postProofPicture(route.params.cid, data);
    if (response.code == 200) {
      navigation.reset({
        routes: [
          {
            name: "MainTab",
          },
        ],
      });
    } else {
      Alert.alert("upload fail");
    }
  };
  return isLoading ? (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="small" color="purple" />
    </View>
  ) : (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
        behavior="padding"
      >
        <View
          style={{
            height: "90%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={{ uri: route.params.proofImage.uri }}
            style={{ width: 150, height: 200, backgroundColor: "#EBEBEB" }}
            resizeMode="contain"
          />

          <MultiLineTextInput
            style={{ height: 250, marginTop: 50 }}
            plh="사진에 대한 설명을 작성해주세요."
            onChange={(text) => {
              setDailyReview(text);
            }}
          />
        </View>
        <View style={{ height: "10%", width: "100%", alignItems: "center" }}>
          <RedButton name={"업로드하기"} fc={upload} />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
