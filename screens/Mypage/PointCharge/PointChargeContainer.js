import React, { useEffect, useState } from "react";
import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import Api from "../../../api";
import styled from "styled-components/native";
import NumericTextInput from "../../../components/NumericTextInput";

export default ({ navigation }) => {
  const [myPoint, setMyPoint] = useState();
  const [point, setPoint] = useState();
  const [totalPoint, setTotalPoint] = useState();
  const [paymentInfo, setPaymentInfo] = useState();

  const getMyPoint = async () => {
    const response = await Api.getMyPoint();
    if (response.status == 200) {
      setMyPoint(response.data.point);
      setTotalPoint(response.data.point);
    }
  };

  const chargePoint = async () => {
    console.log(point);

    let pay_method = "card"

    // let formData = new FormData();
    // formData.append("pay_method", pay_method);
    // formData.append("amount", point);

    let jsonData = JSON.stringify({
      pay_method: pay_method,
      amount: point
    });

    const response3 = await Api.postPayment(jsonData);
    if (response3.code == 200) {
      setPaymentInfo(response3);
      console.log(paymentInfo);

      const params = {
        pg: 'html5_inicis.INIBillTst',
        pay_method: paymentInfo.pay_method,
        merchant_uid: paymentInfo.merchant_uid,
        amount: paymentInfo.amount,
        buyer_tel: paymentInfo.buyer_tel,
        buyer_email: paymentInfo.buyer_email,
        escrow: false,
        buyer_name: '홍길동'
      };
      console.log(params);

      navigation.navigate("Iamport", {params});
    }
  };

  useEffect(() => {
    getMyPoint();
  }, []);

  return myPoint != undefined ? (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            onPress={() => {
              //결제모듈로 이동
              chargePoint();
            }}


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