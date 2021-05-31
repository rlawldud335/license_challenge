import React, { useEffect, useState } from "react";
import {
  Alert,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import Api from "../../../api";
import styled from "styled-components/native";
import RedButton from "../../../components/RedButton";
import NumericTextInput from "../../../components/NumericTextInput";
import RNPickerSelect from 'react-native-picker-select';

export default ({ navigation }) => {
  const [myPoint, setMyPoint] = useState();
  const [point, setPoint] = useState();
  const [totalPoint, setTotalPoint] = useState();
  const [bank, setBank] = useState();
  const [account, setAccount] = useState();

  const getMyPoint = async () => {
    const response = await Api.getMyPoint();
    if (response.status == 200) {
      setMyPoint(response.data.point);
      setTotalPoint(response.data.point);
    }
  };

  const postWithdrawPoint = async () => {
    console.log(point);
    const response = await Api.postWithdrawPoint({ point });
    if (response.success == true) {
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
      Alert.alert(response.message);
      setLoading(false);
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
            <Title>환급 할 금액을 입력해주세요.</Title>
            <RowContentTop>
              <NumericTextInput
                onChange={(text) => {
                  if (text == "" || parseInt(text) == 0) {
                    text = 0;
                    setPoint(text);
                    setTotalPoint(parseInt(myPoint) - parseInt(text));
                  } else if (0 < parseInt(text) && parseInt(text) % 1000 == 0) {
                    setPoint(text);
                    setTotalPoint(parseInt(myPoint) - parseInt(text));
                  }
                }}
                value={point}
              />
              <Title>P</Title>
            </RowContentTop>

            <Title>환급 받을 은행을 선택해주세요.</Title>
            <RNPickerSelect
              onValueChange={(value) => setBank(value)}
              value={bank}
              items={[
                { label: "NH농협", value: "NH농협" },
                { label: "KB국민", value: "KB국민" },
                { label: "우리", value: "우리" },
                { label: "하나", value: "하나" },
                { label: "IBK기업", value: "IBK기업" },
                { label: "SC제일", value: "SC제일" },
                { label: "씨티", value: "씨티" },
                { label: "KDB산업", value: "KDB산업" },
                { label: "SBI저축은행", value: "SBI저축은행" },
                { label: "새마을", value: "새마을" },
                { label: "대구", value: "대구" },
                { label: "광주", value: "광주" },
                { label: "우체국", value: "우체국" },
                { label: "신협", value: "신협" },
                { label: "전북", value: "전북" },
                { label: "경남", value: "경남" },
                { label: "부산", value: "부산" },
                { label: "수협", value: "수협" },
                { label: "제주", value: "제주" },
                { label: "저축은행", value: "저축은행" },
                { label: "산림조합", value: "산림조합" },
                { label: "케이뱅크", value: "케이뱅크" },
                { label: "카카오뱅크", value: "카카오뱅크" },
                { label: "HSBC", value: "HSBC" },
                { label: "중국공상", value: "중국공상" },
                { label: "JP모간", value: "JP모간" },
                { label: "도이치", value: "도이치" },
                { label: "BNP파리바", value: "BNP파리바" },
                { label: "BOA", value: "BOA" },
              ]}
              placeholder={{
                label: "은행을 선택해주세요.",
                value: null,
              }}
              style={PickerStyle}
              useNativeAndroidPickerStyle={false}
            />

            <Title>환급 받을 계좌를 입력해주세요.</Title>
            <NumericTextInput
              onChange={(text) => {
                setAccount(text);
              }}
              value={account}
            />
          </Content>
          <Notice>* 1000원 단위로 환급 가능합니다.</Notice>
          <PointWrap>
            <RowContent>
              <Text>현재 포인트</Text>
              <Text>{myPoint} P</Text>
            </RowContent>

            <RowContent>
              <Text>환급 후 포인트</Text>
              <Text>{totalPoint} P</Text>
            </RowContent>
          </PointWrap>
          <Footer>
            <RedButton fc={postWithdrawPoint} name={"환급하기"} />
          </Footer>
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
  margin-bottom: 15px;
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

const PickerStyle = {
  inputIOS: {
    color: "black",
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
  },
  inputAndroid: {
    color: "black",
  },
  placeholderColor: "black",
  underline: { borderTopWidth: 0 },
  icon: {
    position: 'absolute',
    backgroundColor: 'transparent',
    borderTopWidth: 5,
    borderTopColor: '#00000099',
    borderRightWidth: 5,
    borderRightColor: 'transparent',
    borderLeftWidth: 5,
    borderLeftColor: 'transparent',
    width: 0,
    height: 0,
    top: 20,
    right: 15,
  },
};
