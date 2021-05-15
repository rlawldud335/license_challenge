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
};

export default Api;
