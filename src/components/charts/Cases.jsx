import React, { useContext } from "react";

import { CovidDataContext } from "contexts/CovidData";
import SingleChart from "../common/SingleChart";

const Cases = () => {
  const { covidData } = useContext(CovidDataContext);

  const cases = covidData.map((data) => data.cases);
  const region = covidData.map((data) => data.region);

  return cases.length > 0 ? (
    <SingleChart
      data={cases}
      labels={region}
      title="Cases"
      backgroundColor="pink"
    />
  ) : (
    <div>Loading...</div>
  );
};

export default Cases;
