import React, { useContext } from "react";
import SingleChart from "../common/SingleChart";
import { CovidDataContext } from "contexts/CovidData";

const Deaths = () => {
  const { covidData } = useContext(CovidDataContext);

  const deaths = covidData.map((data) => data.deaths);
  const region = covidData.map((data) => data.region);

  return deaths.length > 0 ? (
    <SingleChart
      data={deaths}
      labels={region}
      title="Deaths"
      backgroundColor="red"
    />
  ) : (
    <div>Loading...</div>
  );
};

export default Deaths;
