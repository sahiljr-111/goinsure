import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const chartData = {
  labels: ["2019", "2020", "2021", "2022", "2023", "2024", "2025"],
  datasets: [
    {
      label: "Projected Revenue",
      data: [4000, 2200, 4000, 4200, 3200, 4800, 4900],
      backgroundColor: "rgba(177, 140, 255, 0.5)",
      borderColor: "rgba(177, 140, 255, 1)",
      borderWidth: 1,
    },
    {
      label: "Sales Revenue",
      data: [5000, 200, 6000, 6200, 5000, 5800, 5000],
      backgroundColor: "rgba(127, 109, 255, 0.5)",
      borderColor: "rgba(127, 109, 255, 1)",
      borderWidth: 1,
    },
  ],
};

const CareerBarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current && chartData) {
      const ctx = chartRef.current.getContext("2d");

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: chartData.labels,
          datasets: chartData.datasets,
        },
        options: {
          plugins: {
            legend: {
              position: "top",
              labels: {
                boxWidth: 20,
                padding: 20,
              },
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  let label = context.dataset.label || "";
                  if (label) {
                    label += ": ";
                  }
                  label += context.raw;
                  return label;
                },
              },
            },
          },
          scales: {
            x: {
              beginAtZero: true,
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [chartData]);

  return <canvas width={"400px"} height={"400px"} ref={chartRef}></canvas>;
};

export default CareerBarChart;
