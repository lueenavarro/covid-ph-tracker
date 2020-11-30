import "./App.css";

import Active from "components/charts/Active";
import Cases from "components/charts/Cases";
import { CovidDataProvider } from "contexts/CovidData";
import Deaths from "components/charts/Deaths";
import Footer from 'components/Footer';
import React from "react";
import Recovered from "components/charts/Recovered";
import Summary from "components/Summary";

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
