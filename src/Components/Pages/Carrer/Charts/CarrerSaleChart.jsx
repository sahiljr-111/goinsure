import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const chartData = {
  labels: ["AIG sale pending", "Other sale pending"],
  datasets: [
    {
      data: [200, 800],
      backgroundColor: ["#FF8C00", "#FFD700"],
    },
  ],
  datasetLabel: "Sale pending",
};

const CarrerSaleChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current && chartData) {
      const ctx = chartRef.current.getContext("2d");

      const drawCenterTextPlugin = {
        id: "drawCenterText123",
        beforeDraw: function(chart) {
          const width = chart.width;
          const height = chart.height;
          const ctx = chart.ctx;
          ctx.restore();

          const fontSize = 1.5; // dynamically calculate font size
          ctx.font = `${fontSize}em sans-serif`;
          ctx.textBaseline = "middle";

          const text = "1000\nSale pending";
          const textX = Math.round((width - ctx.measureText(text).width) / 2);
          const textY = height / 2;

          ctx.fillStyle = "green";
          ctx.fillText("1000", textX, textY - 10);
          ctx.fillText("Sale pending", textX - 30, textY + 10);
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
                label: function(context) {
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
          cutout: "70%",
          rotation: -90,
        },
        plugins: [drawCenterTextPlugin],
      });
    }
  }, [chartData]);

  return <canvas width={"400px"} height={"400px"} ref={chartRef}></canvas>;
};

export default CarrerSaleChart;
