import React from 'react';
import IMP from 'iamport-react-native';
import { WebView } from 'react-native-webview';

//export default class Payment extends React.Component {

export default function Payment({ route, navigation }) {
    const { params } = route.params;

    console.log("params:", params);
    const data = {
        ...params,
        app_scheme: 'expba40064ef55f4312b9da861780a9b781',
    };

    return (

        <IMP.Payment
            userCode={'imp09408477'}
            data={data}
            callback={response => navigation.replace('PaymentResult', { response, amount:data.amount })}
        />

    )
}