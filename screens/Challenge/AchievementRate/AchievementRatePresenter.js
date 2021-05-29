import React from "react";
import styled from "styled-components/native";
import { View, Image, Platform, TouchableOpacity } from "react-native";
import Title from "../../../components/Title";

export default ({ challenge }) => {
	return (
		<Sview>
			<Contents>
				<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
					<TouchableOpacity
						style={{
							width: "40%",
							minWidth: 300,
							backgroundColor: "#ff5e5e",
							height: 50,
							borderRadius: 10,
							justifyContent: "center",
							alignItems: "center",
							alignContent: "center",
						}}
						onPress={() => {
							navigation.navigate("ProofPicture"); /////////////// 사진 인증
						}}
					>
						<Text
							style={{
								color: "#ffffff",
								fontFamily: "nanumBold",
								fontSize: 15,
							}}
						>
							사진 인증
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							width: "40%",
							minWidth: 300,
							backgroundColor: "#ff5e5e",
							height: 50,
							borderRadius: 10,
							justifyContent: "center",
							alignItems: "center",
							alignContent: "center",
						}}
						onPress={() => {
							navigation.navigate(""); //////////////// 합격 인증
						}}
					>
						<Text
							style={{
								color: "#ffffff",
								fontFamily: "nanumBold",
								fontSize: 15,
							}}
						>
							합격 인증
						</Text>
					</TouchableOpacity>
				</View>

				<IntroWrap>
					<View
						style={{ flexDirection: "row", justifyContent: "space-around" }}
					>
						<Title title={"현재 달성률"} />
						<Title title={`${item.achievement_rate}%`} />
						<TouchableOpacity
							style={{
								width: "40%",
								minWidth: 300,
								backgroundColor: "#CE9FFF",
								height: 30,
								borderRadius: 10,
								justifyContent: "center",
								alignItems: "center",
								alignContent: "center",
							}}
							onPress={() => {
								navigation.navigate("ChallengeInfo");
							}}
						>
							<Text
								style={{
									color: "#3b1464",
									fontFamily: "nanumBold",
									fontSize: 15,
								}}
							>
								챌린지 정보 확인하기
							</Text>
						</TouchableOpacity>
					</View>

					<View>
						<ProgressContainer>
							<ProgressBar>
								<View
									style={
										([StyleSheet.absoluteFill],
										{
											backgroundColor: "#B36DFF",
											width: `${item.achievement_rate}%`, //// 여기 item 채워야됨
											borderRadius: 10,
										})
									}
								/>
							</ProgressBar>
							<ProgressText>{`달성률 ${item.achievement_rate}%`}</ProgressText>
						</ProgressContainer>
					</View>

					<View style={{ flexDirection: "row", justifyContent: "space-around" }}>
						<View style={{ flexDirection: "column", justifyContent: "space-around" }}>
                            <Title title={"인증 성공"} />
                            // joinChallenge.successCnt
                        </View>

                        <View style={{ flexDirection: "column", justifyContent: "space-around" }}>
                            <Title title={"인증 실패"} />
                            // joinChallenge.failCnt
                        </View>

                        <View style={{ flexDirection: "column", justifyContent: "space-around" }}>
                            <Title title={"남은 인증"} />
                            // 성공+실패 횟수
                        </View>
					</View>

					<View
						style={{ borderBottomColor: "#9F9F9F", borderBottomWidth: 1 }}
					/>

					<View>
						<Info>
							{`
                                달성률 80% ~ 94% : 전액환급!
                                달성률 95% ~ 99% + 합격인증 : 전액환급! + 보너스포인트!
                                달성률 100% : 전액환급! + 보너스포인트!
                            `}
						</Info>
					</View>
				</IntroWrap>

				<IntroWrap>
					<View
						style={{ flexDirection: "row", justifyContent: "space-between" }}
					>
						<Title title={"합격 인증 여부"} />
					</View>

                    //// 합격 인증한 사진들 보여주기
				</IntroWrap>

				<IntroWrap>
					<View
						style={{ flexDirection: "row", justifyContent: "space-between" }}
					>
						<Title title={"참가자 정보"} />
                        <TouchableOpacity
							style={{
								width: "40%",
								minWidth: 300,
								backgroundColor: "#CE9FFF",
								height: 30,
								borderRadius: 10,
								justifyContent: "center",
								alignItems: "center",
								alignContent: "center",
							}}
							onPress={() => {
								navigation.navigate(""); /// 참가자 정보 확인하기
							}}
						>
							<Text
								style={{
									color: "#3b1464",
									fontFamily: "nanumBold",
									fontSize: 15,
								}}
							>
								참가자 정보 확인하기
							</Text>
						</TouchableOpacity>
					</View>

					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							margin: 15,
						}}
					>
						<Middle>전체 참가자 인원</Middle>
						<PinkText>{challenge.joinPeople}명</PinkText>
					</View>

					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							margin: 15,
						}}
					>
						<Middle>오늘 인증 성공한 참가자</Middle>
						<PinkText>1명</PinkText>
					</View>

					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							margin: 15,
						}}
					>
						<Middle>합격 인증 성공한 참가자</Middle>
						<PinkText>1명</PinkText>
					</View>

					<View>
						<Title title={"참가자 인증 현황"} />
                        
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                margin: 15,
                            }}
                        >
                            <Middle>~ 20%</Middle>
                            <PinkText> 명</PinkText>
					    </View>

					    <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                margin: 15,
                            }}
                        >
                            <Middle>~ 40%</Middle>
                            <PinkText> 명</PinkText>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                margin: 15,
                            }}
                        >
                            <Middle>~ 60%</Middle>
                            <PinkText> 명</PinkText>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                margin: 15,
                            }}
                        >
                            <Middle>~ 80%</Middle>
                            <PinkText> 명</PinkText>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                margin: 15,
                            }}
                        >
                            <Middle>~ 100%</Middle>
                            <PinkText> 명</PinkText>
                        </View>
					</View>
				</IntroWrap>
			</Contents>
		</Sview>
	);
};

const SView = styled.ScrollView``;

const Contents = styled.View`
	padding: 20px;
`;

const IntroWrap = styled.View`
	margin-top: 40px;
	background-color: #eeeeee;
	border-radius: 10px;
	padding: 10px;
`;

const Info = styled.Text`
	font-family: "nanumBold";
	color: #636363;
	font-size: 15px;
	text-align: center;
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

const ProgressContainer = styled.View`
	width: 90%;
	margin-top: 5px;
	justify-content: center;
	align-items: center;
`;

const ProgressText = styled.Text`
	position: absolute;
	color: #2a0059;
	font-size: 10px;
`;

const ProgressBar = styled.View`
	flex-direction: row;
	height: 15px;
	width: 100%;
	background-color: white;
	border-color: #707070;
	border-width: 1px;
	border-radius: 10px;
`;
