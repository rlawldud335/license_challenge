import React, { useState, useEffect } from "react";

import Api from "../../../api";
import CategoryPresenter from "./CategoryPresenter";

export default ({ route, navigation }) => {
  const {
    params: { category },
  } = route;
  const [challenge, setChallenge] = useState({
    pageNum: 0,
    numOfRows: 20,
    challengeData: [],
  });
  const getData = async () => {
    const challengeData = await Api.challengeCategory(
      challenge.pageNum,
      challenge.numOfRows,
      category
    );
    setChallenge({
      pageNum: challenge.pageNum + 1,
      numOfRows: challenge.numOfRows,
      challengeData: challenge.challengeData.concat(challengeData),
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <CategoryPresenter
      challengeData={challenge.challengeData}
      getData={getData}
      navigation={navigation}
    />
  );
};
