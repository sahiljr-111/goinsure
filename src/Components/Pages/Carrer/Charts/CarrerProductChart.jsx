import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const chartData = {
  labels: ["Product 1", "Product 2", "Product 3", "Product 4", "Product 5"],
  datasets: [
    {
      data: [1000, 1000, 1000, 1000, 1000],
      backgroundColor: ["#FFD700", "#87CEFA", "#FF4500", "#FF69B4", "#32CD32"],
    },
  ],
  datasetLabel: "Sales Distribution",
};

const CareerProductChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current && chartData) {
      const ctx = chartRef.current.getContext("2d");

      const drawCenterTextPlugin = {
        id: "drawCenterText",
        beforeDraw: function (chart) {
          const width = chart.width;
          const height = chart.height;
          const ctx = chart.ctx;
          ctx.restore();

          const fontSize = (height / 150).toFixed(2); // dynamically calculate font size
          ctx.font = `${fontSize}em sans-serif`;
          ctx.textBaseline = "middle";

          const text = "100%";
          const textX = Math.round((width - ctx.measureText(text).width) / 2.5);
          const textY = height / 2;

          ctx.fillStyle = "#4F4F4F";
          ctx.fillText(text, textX, textY);
          ctx.save();
        },
      };

      new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: chartData.labels,
          datasets: [
            {
              label: chartData.datasetLabel || "Data",
              data: chartData.datasets[0].data,
              backgroundColor: chartData.datasets[0].backgroundColor || [],
              hoverOffset: 4,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              position: "right",
              labels: {
                boxWidth: 20,
                padding: 20,
              },
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  let label = context.label || "";
                  if (label) {
                    label += ": ";
                  }
                  label += context.raw;
                  return label;
                },
              },
            },
          },
          cutout: "70%", // to create the inner circle effect
          rotation: -90, // to start the chart from the top
        },
        plugins: [drawCenterTextPlugin],
      });
    }
  }, [chartData]);

  return <canvas width={"400px"} height={"400px"} ref={chartRef}></canvas>;
};

export default CareerProductChart;
    