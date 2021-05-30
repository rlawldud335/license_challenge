import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getRequest = async (path, params = {}) => {
  try {
    const token = await AsyncStorage.getItem("token");
    const { data } = await axios.get(
      `https://license-challenge.herokuapp.com/${path}`,
      {
        headers: {
          authorization: `Basic ${token}`,
        },
        params,
      }
    );
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

const postReqest = async (path, params = {}) => {};

const Api = {
  licenseAll: (pageNum, numOfRows) =>
    getRequest("license", { pageNum, numOfRows }),
  challengeCategory: (pageNum, numOfRows, category) =>
    getRequest("challenge", { pageNum, numOfRows, category }),
  postChallenge: (params) => postReqest("/challenge", params),
  postAuthSignin: (email, password) =>
    postJsonReqest("/auth/signin", {
      email,
      password,
    }),
  postAuthSignup: (email, password, nickname, phoneNumber) =>
    postJsonReqest("/auth/signup", { email, password, nickname, phoneNumber }),

  postChallenge: (body) => postFormReqest("/challenge", body),

  getLicense: (pageNum, numOfRows) =>
    getRequest("/license", { pageNum, numOfRows }),

  getChallenge: (pageNum, numOfRows, category) =>
    getRequest("/challenge", { pageNum, numOfRows, category }),

  getChallengeChallengeId: (challengeId) =>
    getRequest(`/challenge/${challengeId}`),

  getLicenseSearch: (keyword) => getRequest("/license/search", { keyword }),

  getOngoingChallenge: () => getRequest("/challenge/ongoingChallenge"),

  getChallengeAchievementRate: (challengeId) =>
    getRequest(`/challenge/${challengeId}/achievement-rate`),

  getEndedChallenge: () => getRequest("/challenge/endedChallenge"),

  postProofPicture: (cid, body) =>
    postFormReqest(`/challenge/${cid}/proof-picture`, body),

  getUserInfo: () => getRequest("/user/my-info"),

  postFreeBoard: (body) => postFormReqest("/board/freeboard", body),
  postSaleBoard: (body) => postFormReqest("/board/saleboard", body),

  getPeedImages: (challengeId, pageNum, numOfRows) =>
    getRequest(`/challenge/${challengeId}/proof-picture`, {
      pageNum,
      numOfRows,
    }),

  getPeedInfo: (challengeId, pictureId) =>
    getRequest(`/challenge/${challengeId}/proof-picture/${pictureId}`),

  getMyPoint: () => getRequest("/point"),

  getMyPointHistory: (pageNum, numOfRows) =>
    getRequest("/point/history", { pageNum, numOfRows }),

  getFreeBoard: (pageNum, numOfRows) =>
    getRequest("/board/freeboard", { pageNum, numOfRows }),

  getSaleBoard: (pageNum, numOfRows) =>
    getRequest("/board/saleboard", { pageNum, numOfRows }),

  getFreeBoardInfo: (boardId) => getRequest(`/board/freeboard/${boardId}`),
  getBoardComment: (boardId) => getRequest(`/board/${boardId}/comment`),
  postComment: (boardId, content, level) =>
    postJsonReqest(`/board/${boardId}/comment`, {
      content,
      level,
    }),
  getChallengeAchievementRateInfo: (challengeId) =>
    getRequest(`/challenge/${challengeId}/achievement-rate-info`),

  getChallengeEnter: (deposit, challengeId) =>
    postJsonReqest("/challenge/enter", { deposit, challengeId }),

  postPayment: (body) => postJsonReqest("/point/payment", body),  
  postChargePoint: (body) => postJsonReqest("/point/charge", body),
  
};

export default Api;
