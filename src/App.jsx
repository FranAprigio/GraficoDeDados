import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import "./App.css";

import doacoesData from "./data/doacoesData.json";
import origensData from "./data/origensData.json";
import demografiaData from "./data/demografiaData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

export const App = () => {
  return (
    <div className="Container">
      <div className="cardDados doacoesCard">
        <Line
          data={{
            labels: doacoesData.map((data) => data.label),
            datasets: [
              {
                label: "Doacoes",
                data: doacoesData.map((data) => data.doacoes),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              },
              {
                label: "Custos",
                data: doacoesData.map((data) => data.custos),
                backgroundColor: "#FF3030",
                borderColor: "#FF3030",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Doacoes & Custos Mensais",
              },
            },
          }}
        />
      </div>

      <div className="cardDados customerCard">
        <Bar
          data={{
            labels: demografiaData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: demografiaData.map((data) => data.value),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderRadius: 5,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Generos dos moradores",
              },
            },
          }}
        />
      </div>

      <div className="cardDados categoryCard">
        <Doughnut
          data={{
            labels: origensData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: origensData.map((data) => data.value),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Origens das Doações",
              },
            },
          }}
        />
      </div>
    </div>
  );
};
