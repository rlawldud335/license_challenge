import React, { useEffect, useState } from "react";
import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from "react-native";
import Api from "../../../api";
import styled from "styled-components/native";
import NumericTextInput from "../../../components/NumericTextInput";

export default ({ navigation }) => {
  const [userInfo, setUserInfo] = useState();
  const [myPoint, setMyPoint] = useState();
  const [point, setPoint] = useState();
  const [totalPoint, setTotalPoint] = useState();

  const getMyPoint = async () => {
    const response = await Api.getMyPoint();
    if (response.status == 200) {
      setMyPoint(response.data.point);
      setTotalPoint(response.data.point);
    }
    const response2 = await Api.getUserInfo();
    if (response2.status == 200) {
      setUserInfo(response2.data[0]);
    }
  };

  const chargePoint = async () => {
    let jsonData = JSON.stringify({
      merchant_uid: "chargeTest-" + new Date().getTime(),
      point: point,
    });

    console.log(jsonData);

    try {
      const response3 = await Api.postChargePoint(jsonData);
      if (response3.success == true) {
        setMyPoint(response3.balance);
        alert("충전 성공");
        navigation.reset({
          routes: [
            {
              name: "MainTab",
              params: {
                screen: "Mypage",
              },
            },
          ],
        });
      } else {
        alert("충전에 실패했습니다. 다시 시도해주세요.");
      }
    } catch {
      alert("충전에 실패했습니다. 다시 시도해주세요.");
    }
  };

  useEffect(() => {
    getMyPoint();
  }, []);
  function dismissKeyboard() {
    if (Platform.OS != "web") {
      Keyboard.dismiss();
    }
  }
  return myPoint != undefined ? (
    <Container>
      <TouchableWithoutFeedback onPress={() => dismissKeyboard()}>
        <KeyboardAvoidingView
          style={{
            flex: 1,
            backgroundColor: "white",
          }}
          behavior="padding"
        >
          <Content>
            <Title>충전할 금액을 입력해주세요.</Title>
            <RowContentTop>
              <NumericTextInput
                onChange={(text) => {
                  if (text == "" || parseInt(text) == 0) {
                    text = 0;
                    setPoint(text);
                    setTotalPoint(parseInt(myPoint) + parseInt(text));
                  } else if (0 < parseInt(text) && parseInt(text) % 1000 == 0) {
                    setPoint(text);
                    setTotalPoint(parseInt(myPoint) + parseInt(text));
                  }
                }}
                value={point}
              />
              <Title>P</Title>
            </RowContentTop>
            <Notice>* 1000원 단위로 충전 가능합니다.</Notice>
          </Content>

          <PointWrap>
            <RowContent>
              <Text>현재 포인트</Text>
              <Text>{myPoint} P</Text>
            </RowContent>

            <RowContent>
              <Text>충전 후 포인트</Text>
              <Text>{totalPoint} P</Text>
            </RowContent>
          </PointWrap>

          <TouchableOpacity
            style={{
              width: "100%",
              backgroundColor: "#FF5E5E",
              bottom: 0,
              height: 40,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginTop: "85%",
            }}
            onPress={chargePoint}
          >
            <Text
              style={{ color: "white", fontFamily: "nanumBold", fontSize: 17 }}
            >
              충전하기
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
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

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: 20px;
`;

const Content = styled.View`
  margin: 20px 0px;
`;

const RowContentTop = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const RowContent = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-size: 20px;
  color: #3b1464;
  font-family: "nanumBold";
  margin-bottom: 5px;
`;

const Notice = styled.Text`
  font-size: 16px;
  color: #3b1464;
  font-family: "nanumReguler";
  margin: 5px 5px 0px 0px;
  text-align: right;
`;

const PointWrap = styled.View`
  padding: 20px;
  width: 100%;
  background-color: #f2e7fe;
  align-items: center;
  border-radius: 20px;
`;

const Text = styled.Text`
  font-family: "nanumBold";
  color: #3b1464;
  font-size: 20px;
  margin: 2px;
`;
