import React from "react";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import styled from "styled-components/native";
import Checkbox from "../../../components/CheckBox";
import OneLineTextInput from "../../../components/OneLineTextInput";
import MultiLineTextInput from "../../../components/MultiLineTextInput";
import NumericTextInput from "../../../components/NumericTextInput";
import PlusLine from "../../../assets/icon/PlusLine";
import { Feather } from "@expo/vector-icons";
import { Alert } from "react-native";

export const CreateCategory = ({ commuCategory, setCommuCategory }) => (
  <Content>
    <Title>챌린지 카테고리</Title>
    <RowContent>
      <Checkbox
        isSelected={commuCategory == "자유게시판" ? true : false}
        onPress={() => setCommuCategory("자유게시판")}
        name={"자유게시판"}
      />
      <Checkbox
        isSelected={commuCategory == "판매게시판" ? true : false}
        onPress={() => setCommuCategory("판매게시판")}
        name={"판매게시판"}
      />
    </RowContent>
  </Content>
);

export const CreateTitle = ({ commuTitle, setCommuTitle }) => (
  <Content>
    <Title>게시글 제목</Title>
    <OneLineTextInput
      onChange={(text) => {
        if (text.length < 50) {
          setCommuTitle(text);
        }
      }}
      plh={"게시글 제목!"}
      value={commuTitle}
      style={{ width: "100%" }}
    />
  </Content>
);

export const CreateContent = ({ setContent }) => (
  <Content>
    <MultiLineTextInput
      onChange={(text) => {
        setContent(text);
      }}
      plh={"게시글 내용입니다! "}
      style={{
        backgroundColor: "#EEEEEE",
        borderWidth: 0,
        width: "100%",
        height: 250,
      }}
    />
  </Content>
);

const uploadFotmat = (uri) => {
  let uriParts = uri.split(".");
  let fileType = uriParts[uriParts.length - 1];
  return { uri, name: `titleImage.${fileType}`, type: `image/${fileType}` };
};

export const CreateImages = ({ images, setImages }) => (
  <Content>
    <Title>첨부 사진</Title>
    <VerticalContainer horizontal showsHorizontalScrollIndicator={false}>
      <Vertical
        onPress={async () => {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [4, 3],
            quality: 1,
          });
          if (!result.cancelled) {
            setImages([...images, uploadFotmat(result.uri)]);
          }
        }}
      >
        <PlusLine />
      </Vertical>
      {images
        .slice(0)
        .reverse()
        .map((item, idx) => {
          return (
            <Vertical
              key={idx}
              onPress={() => {
                setImages(images.slice(0).filter((e) => e !== item));
              }}
            >
              <BG source={{ uri: item.uri }} />
            </Vertical>
          );
        })}
    </VerticalContainer>
  </Content>
);

export const CreatePrice = ({ price, setPrice }) => (
  <Content>
    <Title>판매 금액</Title>
    <RowContent>
      <NumericTextInput
        onChange={(text) => {
          if (text == "" || parseInt(text) >= 0) {
            setPrice(text);
          }
        }}
        plh={"0"}
        value={price}
      />
      <Title>포인트</Title>
    </RowContent>
  </Content>
);

export const UploadFile = ({
  previewFile,
  setPreviewFile,
  allFile,
  setAllFile,
}) => (
  <Content>
    <FileContainer
      onPress={async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        if (result.type != "cancel") {
          setPreviewFile(uploadFotmat(result.uri));
        }
      }}
    >
      <TextWrap>
        {previewFile ? (
          <Title>{previewFile.name}</Title>
        ) : (
          <Title>미리보기 파일 업로드</Title>
        )}
      </TextWrap>
      <IconWrap>
        <Feather name="upload" size={24} color="#652DA1" />
      </IconWrap>
    </FileContainer>

    <FileContainer
      onPress={async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        if (result.type != "cancel") {
          setAllFile(uploadFotmat(result.uri));
        }
      }}
    >
      <TextWrap>
        {allFile ? (
          <Title>{allFile.name}</Title>
        ) : (
          <Title>전체 파일 업로드</Title>
        )}
      </TextWrap>
      <IconWrap>
        <Feather name="upload" size={24} color="#652DA1" />
      </IconWrap>
    </FileContainer>
  </Content>
);

const TextWrap = styled.View`
  width: 80%;
`;

const IconWrap = styled.View`
  padding: 9px;
  border-radius: 25px;
  background-color: #ce9fff;
`;
const FileContainer = styled.TouchableOpacity`
  margin: 10px 0px;
  padding: 10px 25px;
  border-radius: 15px;
  background-color: #f2e7fe;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const Vertical = styled.TouchableOpacity`
  width: 140px;
  height: 80px;
  margin-left: 20px;
  background-color: #eeeeee;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
const BG = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

const VerticalContainer = styled.ScrollView`
  margin-top: 20px;
`;

const Content = styled.View`
  margin: 20px 0px;
`;

const RowContent = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
`;

const Title = styled.Text`
  font-size: 20px;
  color: #3b1464;
  font-family: "nanumBold";
  margin-bottom: 5px;
`;
