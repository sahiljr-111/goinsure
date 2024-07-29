import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = () => {
  const chartContainer = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext('2d');

      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
          datasets: [
            {
              data: [650, 590, 800, 810, 600, 550, 400],
              fill: true,
              borderColor: '#fe595c',
              backgroundColor: 'rgba(254, 89, 92, 0.1)',
              pointRadius: 5,
              pointBackgroundColor: '#fe595c',
              pointHoverRadius: 7,
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: '#fe595c',
              pointHoverBorderWidth: 2,
              tension: 0.4
            }
          ]
        },
        options: {
          scales: {
            x: {
              display: true,
              grid: {
                display: false
              }
            },
            y: {
              display: true,
              grid: {
                display: true,
                color: 'rgba(200, 200, 200, 0.1)'
              }
            }
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              enabled: false,
              external: function(context) {
                // Tooltip Element
                let tooltipEl = document.getElementById('chartjs-tooltip');
                if (!tooltipEl) {
                  tooltipEl = document.createElement('div');
                  tooltipEl.id = 'chartjs-tooltip';
                  tooltipEl.innerHTML = '<table></table>';
                  document.body.appendChild(tooltipEl);
                }

                // Hide if no tooltip
                const tooltipModel = context.tooltip;
                if (tooltipModel.opacity === 0) {
                  tooltipEl.style.opacity = 0;
                  return;
                }

                // Set Text
                if (tooltipModel.body) {
                  const titleLines = tooltipModel.title || [];
                  const bodyLines = tooltipModel.body.map(bodyItem => bodyItem.lines);

                  let innerHtml = '<thead>';

                  titleLines.forEach(function(title) {
                    innerHtml += '<tr><th>' + title + '</th></tr>';
                  });

                  innerHtml += '</thead><tbody>';

                  bodyLines.forEach(function(body, i) {
                    const colors = tooltipModel.labelColors[i];
                    const style = 'background:' + colors.backgroundColor;
                    const span = '<span style="' + style + '"></span>';
                    innerHtml += '<tr><td>' + span + body + '</td></tr>';
                  });

                  innerHtml += '</tbody>';

                  const tableRoot = tooltipEl.querySelector('table');
                  tableRoot.innerHTML = innerHtml;
                }

                const positionY = chartContainer.current.offsetTop;
                const positionX = chartContainer.current.offsetLeft;

                // Display, position, and set styles for font
                tooltipEl.style.opacity = 1;
                tooltipEl.style.position = 'absolute';
                tooltipEl.style.left = positionX + tooltipModel.caretX + 'px';
                tooltipEl.style.top = positionY + tooltipModel.caretY + 'px';
                tooltipEl.style.fontFamily = tooltipModel.options.bodyFont.family;
                tooltipEl.style.fontSize = tooltipModel.options.bodyFont.size + 'px';
                tooltipEl.style.fontStyle = tooltipModel.options.bodyFont.style;
                tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
                tooltipEl.style.pointerEvents = 'none';
                tooltipEl.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                tooltipEl.style.color = '#fff';
                tooltipEl.style.borderRadius = '3px';
              }
            }
          },
          interaction: {
            intersect: false,
            mode: 'index'
          }
        },
        plugins: [{
          afterDraw: chart => {
            if (chart.tooltip._active && chart.tooltip._active.length) {
              const ctx = chart.ctx;
              ctx.save();
              const activePoint = chart.tooltip._active[0];
              ctx.beginPath();
              ctx.moveTo(activePoint.element.x, chart.chartArea.top);
              ctx.lineTo(activePoint.element.x, chart.chartArea.bottom);
              ctx.lineWidth = 1;
              ctx.strokeStyle = 'rgba(254, 89, 92, 0.4)';
              ctx.stroke();
              ctx.restore();
            }
          }
        }]
      });

      return () => {
        myChart.destroy();
      };
    }
  }, []);

  return <canvas ref={chartContainer} />;
};

export default LineChart;
