import React, { useContext } from "react";

import { CovidDataContext } from "contexts/CovidData";
import SingleChart from "../common/SingleChart";

const Active = () => {
  const { covidData } = useContext(CovidDataContext);

  const active = covidData.map((data) => data.active);
  const region = covidData.map((data) => data.region);

  return active.length > 0 ? (
    <SingleChart
      data={active}
      labels={region}
      title="Active"
      backgroundColor="blue"
    />
  ) : (
    <div>Loading...</div>
  );
};

export default Active;
