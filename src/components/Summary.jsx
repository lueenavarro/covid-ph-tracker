import React, { useContext } from "react";

import { CovidDataContext } from "./../contexts/CovidData";

const Summary = () => {
  const { lastUpdated } = useContext(CovidDataContext);
  const lastUpdatedString = new Date(lastUpdated).toLocaleDateString();
  return (
    <>
      <h3>Philippine Covid Cases</h3>
      <p>
        This is the summary of covid cases in the Philippines per region. Data
        last updated on {lastUpdatedString}. Source: <a href="https://en.wikipedia.org/wiki/COVID-19_pandemic_in_the_Philippines#Statistics" target="_blank" rel="noreferrer">Wikipedia</a>
      </p>
    </>
  );
};

export default Summary;
