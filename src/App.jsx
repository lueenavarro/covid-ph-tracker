import "./App.css";

import Active from "./components/Active";
import Cases from "./components/Cases";
import { CovidDataProvider } from "./contexts/CovidData";
import Deaths from "./components/Deaths";
import Footer from './components/Footer';
import React from "react";
import Recovered from "./components/Recovered";
import Summary from "./components/Summary";

function App() {
  return (
    <CovidDataProvider>
      <div className="container">
        <Summary />
        <div className="charts">
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
