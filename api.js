import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getRequest = async (path, params = {}) => {
  try {
    const token = await AsyncStorage.getItem("token");
    const { data } = await axios.get(
      `https://license-challenge.herokuapp.com${path}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
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

  getLicense: (pageNum, numOfRows) =>
    getRequest("/license", { pageNum, numOfRows }),

  postChallenge: (body) => postFormReqest("/challenge", body),

  getChallengeChallengeId: (cid) => getRequest(`/challenge/${cid}`),

  getChallenge: (pageNum, numOfRows, category) =>
    getRequest("/challenge", { pageNum, numOfRows, category }),

  getLicenseSearch: (keyword) => getRequest("/license/search", { keyword }),
};

export default Api;
