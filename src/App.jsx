import React from "react";
import Active from "components/charts/Active";
import Cases from "components/charts/Cases";
import Deaths from "components/charts/Deaths";
import Recovered from "components/charts/Recovered";
import Footer from 'components/Footer';
import Summary from "components/Summary";
import { CovidDataProvider } from "contexts/CovidData";
import "./App.css";

function App() {
  return (
    <CovidDataProvider>
      <div className="container">
        <Summary />
        <div>
          <Active />
          <Cases />
          <Deaths />
          <Recovered />
        </div>
        <Footer />
      </div>
    </CovidDataProvider>
  );
}

export default App;
