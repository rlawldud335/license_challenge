import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import RedButton from "../../../components/RedButton";
import {
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  Alert,
} from "react-native";
import {
  CreateCategory,
  CreateTitle,
  CreateContent,
  CreateImages,
  CreatePrice,
  UploadFile,
} from "./NewCommunityPresenter";
import * as ImagePicker from "expo-image-picker";
import Api from "../../../api";

export default ({ navigation }) => {
  const [commuCategory, setCommuCategory] = useState("자유게시판");
  const [commuTitle, setCommuTitle] = useState();
  const [content, setContent] = useState();
  const [images, setImages] = useState([]);
  const [price, setPrice] = useState();
  const [previewFile, setPreviewFile] = useState();
  const [allFile, setAllFile] = useState();

  useEffect(() => {
    (async () => {
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

  const postData = async () => {
    if (commuTitle == "" || !commuTitle) {
      Alert.alert("제목을 입력하세요!");
      return;
    } else if (content == "" || !content) {
      Alert.alert("내용을 입력하세요!");
      return;
    }
    if (commuCategory == "자유게시판") {
      let formData = new FormData();
      formData.append("title", commuTitle);
      formData.append("content", content);
      formData.append("image", images);
      const response = await Api.postFreeBoard(formData);
      if (response.code == 200) {
        navigation.goBack();
      } else {
        Alert.alert("생성 실패!");
      }
    } else {
      if (!price || !previewFile || !allFile) {
        Alert.alert("모두 입력해주세요");
        return;
      }
      let formData = new FormData();
      formData.append("title", commuTitle);
      formData.append("content", content);
      formData.append("image", images);
      formData.append("price", price);
      formData.append("previewFile", previewFile);
      formData.append("allFile", allFile);
      const response = await Api.postSaleBoard(formData);
      if (response.code == 200) {
        navigation.goBack();
      } else {
        Alert.alert("생성 실패!");
      }
    }
  };

  return (
    <Container behavior="padding">
      <Body>
        <Scroll>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <CT>
              <CreateCategory
                commuCategory={commuCategory}
                setCommuCategory={setCommuCategory}
              />

              <CreateTitle
                commuTitle={commuTitle}
                setCommuTitle={setCommuTitle}
              />

              <CreateContent setContent={setContent} />

              <CreateImages images={images} setImages={setImages} />

              {commuCategory == "판매게시판" && (
                <>
                  <CreatePrice price={price} setPrice={setPrice} />
                  <UploadFile
                    previewFile={previewFile}
                    setPreviewFile={setPreviewFile}
                    allFile={allFile}
                    setAllFile={setAllFile}
                  />
                </>
              )}
            </CT>
          </TouchableWithoutFeedback>
        </Scroll>
      </Body>
      <Footer>
        <RedButton fc={postData} name={"게시글 생성하기"} />
      </Footer>
    </Container>
  );
};

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: white;
`;
const Body = styled.View`
  position: absolute;
  height: 93%;
  width: 100%;
`;

const Footer = styled.View`
  position: absolute;
  bottom: 0;
  height: 7%;
  width: 100%;
  background-color: white;
  border-top-color: #cacaca;
  border-top-width: 0.2px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Scroll = styled.ScrollView``;

const CT = styled.View`
  flex: 1;
  margin: 0px 30px;
`;
