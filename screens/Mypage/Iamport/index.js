import React from 'react';
import IMP from 'iamport-react-native';

import Loading from '../Loading';

export default function Payment({ navigation, route }) {
  const { params } = route.params;

  console.log("params:", params);
  console.log("pg:", params.pg);
  const { pg } = params;
  const data = {
    ...params,
    app_scheme: 'expba40064ef55f4312b9da861780a9b781',
  };

  console.log("data:", data.pg);
  
  return (
    <IMP.Payment
      userCode={getUserCode(pg)}
      loading={<Loading />}
      data={data}
      callback={response => navigation.replace('PaymentResult', { response, amount:data.amount })}
    />
  );   
}

export function getUserCode(pg) {
  return 'imp09408477';
}
