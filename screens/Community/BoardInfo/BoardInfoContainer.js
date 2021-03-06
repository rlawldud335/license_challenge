import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Alert,
  ActivityIndicator,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import Api from "../../../api";
import Send from "../../../assets/icon/Send";
import { CreateBoardInfo, CreateComment } from "./BoardInfoPresenter";

export default ({ route }) => {
  const [boardInfo, setBoardInfo] = useState();
  const [commentInfo, setCommentInfo] = useState([]);
  const [myComment, setMyComment] = useState();
  const [level, setLevel] = useState(0);
  const [precedingComment, setPrecedingComment] = useState();
  const [previewFile, setPreviewFile] = useState();
  const [allFile, setAllFile] = useState();
  const [price, setPrice] = useState();
  const [fileId, setFileId] = useState();

  const getData = async () => {
    const response = await Api.getFreeBoardInfo(route.params.boardId);
    if (response.status == 200) {
      setBoardInfo(response.data[0]);
      if (response.data[0].category == "saleboard") {
        const saleBoard = await Api.getSaleBoardInfo(route.params.boardId);
        if (saleBoard.data[0]?.allFile) setAllFile(saleBoard.data[0].allFile);
        if (saleBoard.data[0]) {
          setPreviewFile(saleBoard.data[0].previewFile);
          setPrice(saleBoard.data[0].price);
          setFileId(saleBoard.data[0].fileId);
        }
      }
    }
  };

  const getComment = async () => {
    const comment = await Api.getBoardComment(route.params.boardId);
    if (comment.status == 200) {
      setCommentInfo(comment.data);
    }
  };

  const postData = async () => {
    const response = await Api.postComment(
      route.params.boardId,
      myComment,
      level,
      precedingComment
    );
    if (response.success == true) {
      getComment();
    } else {
      Alert.alert(response.message);
    }
  };

  const payment = async () => {
    const response = await Api.buyAttachedFile(
      route.params.boardId,
      price,
      fileId
    );
    const saleBoard = await Api.getSaleBoardInfo(route.params.boardId);
    if (saleBoard.data[0]?.allFile) setAllFile(saleBoard.data[0].allFile);
    Alert.alert(response.message);
  };

  useEffect(() => {
    getData();
    getComment();
  }, []);

  return boardInfo ? (
    <>
      <KeyboardAvoidingView
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "white",
        }}
        behavior="padding"
        enabled
        keyboardVerticalOffset={60}
      >
        <ScrollView>
          <CreateBoardInfo
            boardInfo={boardInfo}
            previewFile={previewFile}
            allFile={allFile}
            payment={payment}
            price={price}
          />
          <CreateComment commentInfo={commentInfo} />
        </ScrollView>
        <View
          style={{
            height: 50,
            width: "100%",
            backgroundColor: "#E3E0E0",
            borderTopColor: "#CACACA",
            borderTopWidth: 0.2,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              width: "80%",
              minWidth: 300,
              backgroundColor: "white",
              height: 35,
              borderRadius: 10,
              fontFamily: "nanumBold",
            }}
            onChangeText={(text) => setMyComment(text)}
            value={myComment}
            onSubmitEditing={() => {
              setMyComment("");
              postData();
            }}
          ></TextInput>
          <TouchableOpacity
            onPress={() => {
              setMyComment("");
              postData();
            }}
            style={{ position: "absolute", left: "83%", zIndex: 5 }}
          >
            <Send />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  ) : (
    <View
      style={{
        flex: 1,
        justifyContents: "center",
        aligenItem: "center",
        backgroundColor: "white",
      }}
    >
      <ActivityIndicator size="small" color="purple" />
    </View>
  );
};
