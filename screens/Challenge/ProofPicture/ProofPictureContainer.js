import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
} from "react-native";
import { Camera } from "expo-camera";
import Gallery from "../../../assets/icon/Gallery";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome5 } from "@expo/vector-icons";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Platform.OS === "web" ? 720 : Dimensions.get("window").width;

export default ({ route, navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const SelectGalleryPicture = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setCapturedImage(result);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {capturedImage ? (
        <View style={{ height: "80%", width: "100%", flexWrap: "wrap" }}>
          <Image
            source={{ uri: capturedImage.uri }}
            style={{
              width: WIDTH,
              height: HEIGHT * 0.8 - 50,
              padding: 0,
              margin: 0,
            }}
            resizeMode="contain"
          />
        </View>
      ) : (
        <Camera
          style={styles.camera}
          type={type}
          ref={(ref) => {
            setCameraRef(ref);
          }}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <Text style={styles.text}> 반전 </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      )}
      <View
        style={{
          height: "20%",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={SelectGalleryPicture}>
          <Gallery />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            borderColor: "#652DA1",
            borderWidth: 5,
          }}
          onPress={async () => {
            if (cameraRef) {
              let photo = await cameraRef.takePictureAsync();
              setCapturedImage(photo);
            } else {
              setCapturedImage(null);
            }
          }}
        ></TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (capturedImage) {
              navigation.navigate("UploadProofPicture", {
                cid: route.params.item.challengeId,
                proofImage: capturedImage,
                challengeTitle: route.params.item.challengeTitle,
                challengeTitleImage: route.params.item.challengeTitleImage,
              });
            }
          }}
        >
          <FontAwesome5 name="arrow-right" size={24} color="#FF5E5E" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  camera: {
    height: "80%",
    width: "100%",
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
