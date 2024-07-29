import React, { Component } from 'react';
import Chart from 'chart.js/auto';

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    this.buildChart();
  }

  componentDidUpdate() {
    this.buildChart();
  }

  buildChart() {
    const myChartRef = this.chartRef.current.getContext('2d');
    const { data, labels } = this.props;

    new Chart(myChartRef, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'My Bar Chart',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  render() {
    return <canvas ref={this.chartRef} />;
  }
}

export default BarChart;
