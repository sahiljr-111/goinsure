import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const BarChartCard = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Data for the bar chart
    const data = {
      labels: ['2017', '2018', '2019', '2020', '2021', '2022','2023', '2024' ],
      datasets: [
        {
          label: 'Sales',
          backgroundColor: '#cbc1fe',
          borderWidth: 0, // Remove the border from the bars
          data: [90, 78, 50, 65, 59, 58, 39, 70],
        },
      ],
    };

    // Options for the bar chart
    const options = {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          // text: 'Sales Report',
          fontSize: 20,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value, index, values) {
              return value + '%'; // Add percentage sign to y-axis values
            }
          }
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
      elements: {
        bar: {
          borderRadius: 10, // Add border radius to the bars
        },
      },
    };

    // Create the chart instance
    const myChart = new Chart(chartRef.current, {
      type: 'bar',
      data: data,
      options: options,
    });

    // Clean up function
    return () => myChart.destroy();
  }, []);

  return <canvas ref={chartRef} />;
};

export default BarChartCard;
