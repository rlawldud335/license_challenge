import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getRequest = async (path, params = {}) => {
  try {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.get(
      `https://license-challenge.herokuapp.com${path}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
          Accept: "*/*",
        },
        params,
      }
    );
    return response;
  } catch (e) {
    console.log(e);
    return [];
  }
};

const postFormReqest = async (path, body) => {
  try {
    const token = await AsyncStorage.getItem("token");
    const { data } = await axios.post(
      `https://license-challenge.herokuapp.com${path}`,
      body,
      {
        headers: {
          authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

const postJsonReqest = async (path, body) => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      const { data } = await axios.post(
        `https://license-challenge.herokuapp.com${path}`,
        body,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return data;
    } else {
      const { data } = await axios.post(
        `https://license-challenge.herokuapp.com${path}`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return data;
    }
  } catch (e) {
    console.log(e);
  }
};

const putJsonReqest = async (path, body) => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      const { data } = await axios.put(
        `https://license-challenge.herokuapp.com${path}`,
        body,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return data;
    } else {
      const { data } = await axios.put(
        `https://license-challenge.herokuapp.com${path}`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return data;
    }
  } catch (e) {
    console.log(e);
  }
};

const deleteJsonReqest = async (path) => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      const { data } = await axios.delete(
        `https://license-challenge.herokuapp.com${path}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return data;
    } else {
      const { data } = await axios.delete(
        `https://license-challenge.herokuapp.com${path}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return data;
    }
  } catch (e) {
    console.log(e);
  }
};

const Api = {
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

  getChallengeAchievementRateInfo: (challengeId) =>
    getRequest(`/challenge/${challengeId}/achievement-rate-info`),

  getJoinPeopleList: (challengeId) =>
    getRequest(`/challenge/${challengeId}/join-people`),

  getEndedChallenge: () => getRequest("/challenge/endedChallenge"),

  postProofPicture: (cid, body) =>
    postFormReqest(`/challenge/${cid}/proof-picture`, body),

  getUserInfo: () => getRequest("/user/my-info"),

  updateMyInfo: (nickname, password, phoneNumber, profileImage) =>
    putJsonReqest(`/user/my-info`, { nickname, password, phoneNumber, profileImage }),

  withdrawalUser: () => deleteJsonReqest(`/user/withdrawal`),

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

  getSaleBoardInfo: (boardId) => getRequest(`/board/saleboard/${boardId}`),
  postWithdrawPoint: (body) => postJsonReqest(`/point/withdraw`, body),

  getSearchChallenge: (keyword, pageNum, numOfRows) =>
    getRequest("/challenge/search", { keyword, pageNum, numOfRows }),

  getJoinPeopleList: (challengeId) =>
    getRequest(`/challenge/${challengeId}/join-people`),

  postChargePoint: (body) => postJsonReqest("/point/charge", body),
  buyAttachedFile: (boardId, body) =>
    postFormReqest(`/board/saleboard/${boardId}`, body),
};

export default Api;
