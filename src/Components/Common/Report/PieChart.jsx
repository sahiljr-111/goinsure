import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = ({ chartData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current && chartData) {
      const ctx = chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: chartData.labels,
          datasets: [{
            label: chartData.datasetLabel || 'Data',
            data: chartData.data,
            backgroundColor: chartData.backgroundColor || [],
          }]
        },
        options: {
          plugins: {
            legend: {
              position: 'right',
            },
          },
          // You can add more options here as needed
        }
      });
    }
  }, [chartData]);

  return (  
    <canvas width={'400px'} height={'400'} ref={chartRef}></canvas>
  );
};

export default PieChart;
