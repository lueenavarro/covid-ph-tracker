import { Line } from "react-chartjs-2";
import React from "react";

const SingleChart = ({ data, labels, title, backgroundColor }) => {
  return (
    <div>
    <Line
      height={350}
      data={{
        labels,
        datasets: [
          {
            data,
            backgroundColor,
          },
        ],
      }}
      options={{
        title: { display: true, text: title, fontSize: 25 },
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
      }}
    />
    </div>
  );
};

export default SingleChart;
