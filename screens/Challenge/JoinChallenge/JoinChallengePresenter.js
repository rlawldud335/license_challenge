import React from "react";
import Api from "../../../api";
import styled from "styled-components/native";
import Title from "../../../components/Title";
import Tag from "../../../components/Tag";
import RedButton from "../../../components/RedButton";
import { View, Image, Platform, TouchableOpacity } from "react-native";

export default ({ challenge }) => {
	return (
		<SView>
			<Contents>
				<Title title={"챌린지 정보"} />
				<ProofWrap>
                    <View
						style={{ flexDirection: "row", justifyContent: "space-around"}}
					>
			            <Image
						source={{ uri: challenge.challengeTitleImage }}
						style={{ width: Platform.OS === "web" ? 200 : 100, height: 130, marginBottom: 10 , marginRight:20}}
					    />

                        <View style={{ flexDirection: "column", justifyContent: "space-around" }}>
                            <BigTitle>{challenge.challengeTitle}</BigTitle>
                            <TagWrap>
                                <Tag tagName={`${challenge.deposit} P`} />
                                <Tag tagName={`${challenge.proofAvailableDay}`} />
                                <Tag tagName={`하루 ${challenge.proofCount}번 인증`} />
                                <Tag tagName={`하루 ${challenge.proofCountOneDay}번 인증`} />
                                <Tag tagName={`${challenge.challengeCategory}`} />
						        {challenge.licenseName && (<Tag tagName={`${challenge.licenseName}`} />)}
					        </TagWrap>
                        </View>
					</View>
					
					<View
						style={{
							borderBottomColor: "#9F9F9F",
							borderBottomWidth: 1,
						}}
					/>

					<View>
						<View
							style={{ flexDirection: "row", justifyContent: "space-between", margin: 15}}
						>
							<Middle>참가 기간</Middle>
							<Middle>
                                {challenge.chgStartDt.slice(0, 10)} ~{" "}
							    {challenge.chgEndDt.slice(0, 10)}
							</Middle>
						</View>

                        <View
							style={{ flexDirection: "row", justifyContent: "space-between", margin: 15}}
						>
							<Middle>참가 포인트</Middle>
							<Middle>
                                {challenge.deposit}P
							</Middle>
						</View>

                        <View
							style={{ flexDirection: "row", justifyContent: "space-between", margin: 15}}
						>
							<Middle>참가 인원</Middle>
							<Middle>
                                {challenge.joinPeople}/{challenge.limitPeople}명
							</Middle>
						</View>
					</View>
				</ProofWrap>

				<Title title={"참가 포인트 결제"} />
				<IntroWrap>
                    <View>
						<View
							style={{ flexDirection: "row", justifyContent: "space-between", margin: 15}}
						>
							<Middle>현재 포인트</Middle>
                            <PinkLine>
						        <PinkText>200</PinkText>
                                <Middle>포인트</Middle>
					        </PinkLine>
							
						</View>

                        <View
							style={{ flexDirection: "row", justifyContent: "space-between", margin: 15}}
						>
							<Middle>결제 포인트</Middle>
                            <PinkLine>
						        <PinkText>{-challenge.deposit}</PinkText>
                                <Middle>포인트</Middle>
					        </PinkLine>
							
						</View>

                        <View
							style={{ flexDirection: "row", justifyContent: "space-between", margin: 15}}
						>
							<Middle>결제 후 포인트</Middle>
                            <PinkLine>
						        <PinkText>{200 - challenge.deposit}</PinkText>
                                <Middle>포인트</Middle>
					        </PinkLine>
						</View>
					</View>

					<TouchableOpacity
						style={{
							width: "40%",
							minWidth: 300,
							backgroundColor: "#CE9FFF",
							height: 30,
							borderRadius: 10,
							justifyContent: "center",
							alignItems: "center",
                            alignContent: "center"
						}}
						onPress={() => {
							navigation.navigate(""); // 포인트 충전하는 화면으로 이동
						}}
					>
						<Text
							style={{
								color: "#3b1464",
								fontFamily: "nanumBold",
								fontSize: 15,
                                
							}}
						>
							부족한 포인트 충전하기
						</Text>
					</TouchableOpacity>
				</IntroWrap>
			</Contents>
		</SView>
	);
};

const SView = styled.ScrollView``;

const BigTitle = styled.Text`
  font-family: "nanumBold";
  font-size: 24px;
  color: #3b1464;
  text-align: center;
  margin-bottom: 10px;
`;

const Middle = styled.Text`
  font-family: "nanumBold";
  font-size: 17px;
  color: #3b1464;
`;

const PinkText = styled.Text`
	font-family: "nanumBold";
	font-size: 17px;
	color: #ff5e5e;
`;

const PinkLine = styled.View`
    width: 100px;
	padding: 5px;
    border-bottom-width: 3px;
	border-bottom-color: #ff5e5e;
    flex-direction: row;
    justify-content: space-between;
`;

const ProofWrap = styled.View`
	background-color: #ffc0c0;
	padding: 10px;
	border-radius: 10px;
	margin-top: 10px;
    margin-bottom: 40px;
`;

const IntroWrap = styled.View`
	margin-top: 10px;
	background-color: #eeeeee;
	border-radius: 10px;
	padding: 10px;
`;

const Text = styled.Text`
	font-family: "nanumBold";
	font-size: 17px;
	color: #3b1464;
`;

const Contents = styled.View`
	padding: 20px;
`;

const TagWrap = styled.View`
    width: 200px;
    flex-direction: row;
	flex-wrap: wrap;
    margin-bottom: 10px;
    margin-right: 10px;
`;