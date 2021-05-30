import React from 'react';
import { View, StyleSheet } from 'react-native';
import { List, ListItem, Icon, Button, Text } from 'native-base';
import Api from "../../../api";

export default function PaymentResult({ route, navigation }) {
  const [myPoint, setMyPoint] = useState();

  console.log("여기요ㅠㅠㅠ")
  const { response, amount } = route.params;
  const { imp_success, success, imp_uid, merchant_uid, error_msg } = response;
  const { wrapper, title, listContainer, list, label, value } = resultStyles;


  let jsonData = JSON.stringify({
    merchant_uid: merchant_uid,
    point: amount
  });
  
  const chargePoint = async () => {
    const response = await Api.postChargePoint(jsonData);
    if (response.code == 200) {
      setPaymentInfo(response);
      console.log(paymentInfo);
      return true;
    }
    else{
      return false;
    }
  }


  // [WARNING: 이해를 돕기 위한 것일 뿐, imp_success 또는 success 파라미터로 결제 성공 여부를 장담할 수 없습니다.]
  // 아임포트 서버로 결제내역 조회(GET /payments/${imp_uid})를 통해 그 응답(status)에 따라 결제 성공 여부를 판단하세요.
  const isSuccess = !(imp_success === 'false' || imp_success === false || success === 'false' || success === false);
  const { icon, btn, btnText, btnIcon } = isSuccess ? resultSuccessStyles : resultFailureStyles;

  if(isSuccess){
    while(!chargePoint());
  }

  return (
    <View style={wrapper}>
      <Icon
        style={icon}
        type="AntDesign"
        name={isSuccess ? 'checkcircle' : 'exclamationcircle'}
      />
      <Text style={title}>{`결제에 ${isSuccess ? '성공' : '실패'}하였습니다`}</Text>
      <List style={listContainer}>
        <ListItem style={list}>
          <Text style={label}>아임포트 번호</Text>
          <Text style={value}>{imp_uid}</Text>
        </ListItem>
        {isSuccess ? (

          <ListItem style={list}>
            <Text style={label}>주문번호</Text>
            <Text style={value}>{merchant_uid}</Text>
          </ListItem>
        ) : (
          <ListItem style={list}>
            <Text style={label}>에러메시지</Text>
            <Text style={value}>{error_msg}</Text>
          </ListItem>
        )}
      </List>
      <Button
        bordered
        transparent
        style={btn}
        onPress={() => navigation.navigate('PointManagement')}
      >
        <Icon name="arrow-back" style={btnIcon} />
        <Text style={btnText}>돌아가기</Text>
      </Button>
    </View>
  );
}


const resultStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: 3,
    backgroundColor: '#fff',
  },
  icon: {
    fontSize: 100,
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listContainer: {
    width: '90%',
    marginBottom: 50,
  },
  list: {
    borderBottomWidth: 0,
    marginTop: -10,
    marginBottom: -10,
  },
  label: {
    width: '40%',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  value: {
    width: '60%',
  },
  btn: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: -20,
  },
});

const resultSuccessStyles = StyleSheet.create({
  icon: {
    ...resultStyles.icon,
    color: '#52c41a',
  },
  btn: {
    ...resultStyles.btn,
    borderColor: '#52c41a',
  },
  btnText: {
    color: '#52c41a',
  },
  btnIcon: {
    color: '#52c41a',
  },
});

const resultFailureStyles = StyleSheet.create({
  icon: {
    ...resultStyles.icon,
    color: '#f5222d',
  },
  btn: {
    ...resultStyles.btn,
    borderColor: '#f5222d',
  },
  btnText: {
    ...resultStyles.btnText,
    color: '#f5222d',
  },
  btnIcon: {
    color: '#f5222d',
  },
});