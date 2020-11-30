import React, { useContext } from "react";

import { CovidDataContext } from "contexts/CovidData";
import SingleChart from "../common/SingleChart";

const Recovered = () => {
  const { covidData } = useContext(CovidDataContext);

  const recovered = covidData.map((data) => data.recovered);
  const region = covidData.map((data) => data.region);

  return recovered.length > 0 ? (
    <SingleChart
      data={recovered}
      labels={region}
      title="Recovered"
      backgroundColor="green"
    />
  ) : (
    <div>Loading...</div>
  );
};

export default Recovered;
