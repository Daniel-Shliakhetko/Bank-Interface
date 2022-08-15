import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
//   import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const options = {
  responsive: true,
  tension: 0.5,
  plugins: {
    title: {
      display: true,
      text: "Analytics Chart",
    },
    tooltip: {
      enabled: false,
      position: 'nearest',
    },
  },
  scales: {
    x: {
      ticks: {
        color: "white",
      },
      grid: {
        display: false,
      },
    },
    xAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
    y: {
      borderColor: "#1e2e56",
      display: false,
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
  elements: {
    point: {
      radius: 1,
    },
    line: {
      borderWidth: 5,
    },
  },
};

const labels = [10, 20, 30, 40, 50, 60, 70];

const data = {
  labels,
  datasets: [
    {
      label: "Expenses",
      data: [304, 463, 120, 800, 456, 600, 250],
      borderColor: "#06c4de",
      backgroundColor: "#06c4de",
    },
  ],
};

export const ChartPage = () => {
  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};
