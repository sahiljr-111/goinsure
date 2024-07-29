import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {const data = {
    labels: ['Placement %'],
    datasets: [
      {
        data: [50, 50],
        backgroundColor: ['#8E44AD', '#E5E7E9'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
      },
    },
  };

  const centerTextPlugin = {
    id: 'centerText',
    beforeDraw: function(chart) {
      const width = chart.width;
      const height = chart.height;
      const ctx = chart.ctx;
      ctx.restore();
      const fontSize = (height / 114).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#000"; // Set the text color to black

      const text = "50%";
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = height / 2;

      ctx.fillText(text, textX, textY);
      ctx.save();
    }
  };

  return (
    <div style={{ width: "300px", height: "300px" }}>
      <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
    </div>
  );
};

export default DoughnutChart;
