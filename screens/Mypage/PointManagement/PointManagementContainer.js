import React, { useEffect, useState } from "react";
import { ActivityIndicator, Platform } from "react-native";
import styled from "styled-components/native";
import Api from "../../../api";

export default ({ navigation }) => {
  const numOfRows = 20;
  const [myPoint, setMyPoint] = useState();
  const [history, setHistory] = useState([]);
  const [isEnd, setIsEnd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNum, setPageNum] = useState(0);

  const getMyPoint = async () => {
    const response = await Api.getMyPoint();
    setMyPoint(response.data.point);
  };

  const getPointHistory = async () => {
    setIsLoading(true);
    const response = await Api.getMyPointHistory(pageNum, numOfRows);
    if (response.data.length == 0) {
      setIsEnd(true);
    }
    if (response.status == 200) {
      setPageNum(pageNum + 1);
      setHistory(history.concat(response.data));
    }
    setIsLoading(false);
  };

  const handleLoadMore = () => {
    if (isLoading || isEnd) {
      return;
    } else {
      getPointHistory();
    }
  };
  useEffect(() => {
    getMyPoint();
    getPointHistory();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <HistoryLog>
        <Vertical>
          <LogDate>{item.dealDt.slice(0, 10)}</LogDate>
        </Vertical>
        <Vertical style={{ width: "50%" }}>
          <Text>{item.type}</Text>
        </Vertical>
        <Vertical>
          {item.type.indexOf("결제") == -1 ? (
            <Plus>{item.price}P</Plus>
          ) : (
            <Mius>-{item.price}P</Mius>
          )}

          <Balance>잔액 {item.balance} P</Balance>
        </Vertical>
      </HistoryLog>
    );
  };

  return (
    <Container>
      <BtnView>
        <BtnWrap
          onPress={() => {
            navigation.navigate("PointCharge");
          }}
        >
          <Text>충전하기</Text>
        </BtnWrap>
        <BtnWrap
          onPress={() => {
            navigation.navigate("PointWithdraw");
          }}
        >
          <Text>출금하기</Text>
        </BtnWrap>
      </BtnView>
      <PointWrap>
        <Text>현재 포인트</Text>
        <Text>{myPoint} P</Text>
      </PointWrap>
      <HistoryList
        data={history}
        renderItem={renderItem}
        keyExtractor={(item) => item.pointId.toString()}
        showsVerticalScrollIndicator={false}
        disableVirtualization={false}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.3}
        ListFooterComponent={
          isLoading && <ActivityIndicator size="small" color="purple" />
        }
      />
    </Container>
  );
};

const Plus = styled.Text`
  font-family: "nanumBold";
  color: #5e64ff;
  font-size: 20px;
`;
const Mius = styled.Text`
  font-family: "nanumBold";
  color: #ff5e5e;
  font-size: 20px;
`;
const Balance = styled.Text`
  font-family: "nanumBold";
  color: #3b1464;
  font-size: 16px;
`;

const Vertical = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogDate = styled.Text`
  font-family: "nanumBold";
  color: #3b1464;
  font-size: 15px;
`;

const HistoryLog = styled.View`
  background-color: #efefef;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
`;
const HistoryList = styled.FlatList`
  width: 100%;
`;

const BtnView = styled.View`
  flex-direction: row;
`;

const BtnWrap = styled.TouchableOpacity`
  background-color: #ce9fff;
  padding: 5px;
  margin: 20px;
  border-radius: 10px;
  flex: 1;
  align-items: center;
  min-width: 150px;
  shadow-color: #000;
  shadow-offset: 0px 5px;
  shadow-opacity: 0.1;
  shadow-radius: 2px;
`;

const Text = styled.Text`
  font-family: "nanumBold";
  color: #3b1464;
  font-size: 19px;
  margin: 2px;
`;

const PointWrap = styled.View`
  padding: 20px;
  width: 100%;
  background-color: #f2e7fe;
  align-items: center;
  border-radius: 20px;
  margin-bottom: 20px;
`;

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
  padding: 20px;
`;
