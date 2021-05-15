import React, { useState, useEffect } from "react";

import LicensePresenter from "./LicensePresenter";
import Api from "../../../api";

export default ({ navigation }) => {
  const [license, setLicense] = useState({
    pageNum: 0,
    numOfRows: 30,
    licenseData: [],
  });

  const getData = async () => {
    const licenseData = await Api.licenseAll(
      license.pageNum,
      license.numOfRows
    );
    setLicense({
      pageNum: license.pageNum + 1,
      numOfRows: license.numOfRows,
      licenseData: license.licenseData.concat(licenseData),
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <LicensePresenter
      licenseData={license.licenseData}
      getData={getData}
      navigation={navigation}
    />
  );
};
