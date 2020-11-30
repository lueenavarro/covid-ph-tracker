import React, { createContext, useEffect, useState } from "react";
import httpService from "services/httpService";

const dataSource =
  "https://og6gue4ryf.execute-api.ap-southeast-2.amazonaws.com/dev/covid-tracker/ph/regions";

const initialState = [];

export const CovidDataContext = createContext(initialState);

export const CovidDataProvider = ({ children }) => {
  const [covidData, setCovidData] = useState(initialState);
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    httpService.get(dataSource).then(
      (data) => {
        setCovidData(data.ph_regions);
        setLastUpdated(data.last_updated);
      },
      (err) => console.error(err)
    );
  }, []);

  return (
    <CovidDataContext.Provider
      value={{
        covidData,
        lastUpdated,
      }}
    >
      {children}
    </CovidDataContext.Provider>
  );
};
