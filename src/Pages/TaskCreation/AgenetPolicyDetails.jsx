import { Filter, SearchNormal1 } from "iconsax-react";
import React, { useEffect, useRef, useState } from "react";
import { Avatar, Button, Form } from "rsuite";
import DateInput from "../../Components/Common/UI/DatePicker/DateInput";
import { Progress } from "rsuite";
import "./TaskCreation.css";
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { registerables } from 'chart.js';
Chart.register(...registerables);

const AgenetPolicyDetails = () => {

  return (
    <section className="gw-content-body transition-ease position-relative">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 gw-body-col-12">
            <div className="d-flex justify-content-between flex-wrap">
              <div className="gsw-globel-tab flex-grow-1">
                <div className="defult-page-frame h-auto">
                  <div className="card border-0 bg-transparent box-main-card overflow-hidden rounded-4">
                    <div className="GLobalMainHeader d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center gap-2">
                        Filter by
                        <Form>
                          <Form.Group
                            controlId=""
                            className="form-group mb-0 w-100 d-flex"
                          >
                            <Form.Control
                              className="rounded-3 search-control"
                              placeholder="Search task by name"
                              name="globalsearch"
                            />
                            <Button className="search-btn-cont">
                              <SearchNormal1
                                color="#667085"
                                variant="Outline"
                                size={16}
                              />
                            </Button>
                          </Form.Group>
                        </Form>
                        <div className="time-lable top-input">
                          <DateInput placeholder="From - 24 mar,2024" />
                        </div>
                        <div className="time-lable top-input">
                          <DateInput placeholder="To - 28 mar,2024" />
                        </div>
                        <button
                          type="button"
                          className="button-fill d-flex align-items-center justify-content-center gap-2 add-bnt"
                        >
                          <Filter size="16" color="#FFF" variant="Outline" />{" "}
                          Filter
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <div className="chart-statistics w-100 defult-page-frame mt-3 p-3">
                    <h4 className="chart-heading pb-1" style={{ borderBottom: '1px solid lightgray' }}>Sales funnel report</h4>
                    <div>
                      <FunnelChart />
                    </div>
                    <h6 className="chart-heading pt-1 d-flex justify-content-between" style={{ borderTop: '1px solid lightgray' }}><span>Active preminum/month</span><span className="text-success">$6789</span></h6>
                  </div>
                  <div className="chart-statistics w-100 defult-page-frame mt-3 p-3">
                    <h4 className="chart-heading pb-1" style={{ borderBottom: '1px solid lightgray' }}>Austin Henroid Preformance</h4>
                    <div>
                      chart
                    </div>
                    <h6 className="chart-heading pt-1 d-flex justify-content-between" style={{ borderTop: '1px solid lightgray' }}><span>Sales Performance</span><span className="text-success">90%</span></h6>
                  </div>
                </div>
                <div className="chart-statistics w-100 defult-page-frame mt-3">
                  <div className="chart-section p-3">
                    <div className="d-flex justify-content-between align-items-center px-4">
                      <h4 className="chart-heading ">Month wise selles performance</h4>
                      <div className="d-flex align-items-center gap-2">
                        Filter by
                        <Form>
                          <Form.Group
                            controlId=""
                            className="form-group mb-0 w-100 d-flex"
                          >
                            <Form.Control
                              className="rounded-3 search-control"
                              placeholder="Search task by name"
                              name="globalsearch"
                            />
                            <Button className="search-btn-cont">
                              <SearchNormal1
                                color="#667085"
                                variant="Outline"
                                size={16}
                              />
                            </Button>
                          </Form.Group>
                        </Form>
                        <div className="time-lable top-input">
                          <DateInput placeholder="From - 24 mar,2024" />
                        </div>
                        <div className="time-lable top-input">
                          <DateInput placeholder="To - 28 mar,2024" />
                        </div>
                        <button
                          type="button"
                          className="button-fill d-flex align-items-center justify-content-center gap-2 add-bnt"
                        >
                          <Filter size="16" color="#FFF" variant="Outline" />{" "}
                          Filter
                        </button>
                      </div>
                    </div>
                    <div className="card chart-cards h-100 border-0">
                      <div className="card-body">
                        <div
                          className="chart-box px-3 pb-3"
                          style={{ width: "100%", height: "500px", borderBottom: '1px solid lightgray', borderTop: '1px solid lightgray' }}
                        >
                          <BarChartCard />
                        </div>
                        <p className="text-center pt-3">Policy sold month wise</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chart-statistics w-100 defult-page-frame mt-3">
                  <div className="chart-section p-3">
                    <h4 className="chart-heading p-2 " style={{ borderBottom: '1px solid lightgray' }}>Austin Henroid Preformance</h4>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <DonutChart />
                      </div>
                      <div className="card-body">
                        <div className="progress-bar mx-2 pt-4">
                          <div className="row text-start align-items-center mb-3 progress-bar-line">
                            <div className="col-2">
                              <p>Assigned contacts</p>
                            </div>
                            <div className="col-10">
                              <div className="position-relative dots-list">
                                <Progress.Line percent={100} />
                              </div>
                            </div>
                          </div>

                          <div className="row text-start align-items-center mb-3 progress-bar-line">
                            <div className="col-2">
                              <p>Sold policies</p>
                            </div>
                            <div className="col-10">
                              <div className="position-relative dots-list">
                                <Progress.Line percent={60} />
                              </div>
                            </div>
                          </div>

                          <div className="row text-start align-items-center mb-3 progress-bar-line">
                            <div className="col-2">
                              <p>Active policies</p>
                            </div>
                            <div className="col-10">
                              <div className="position-relative dots-list">
                                <Progress.Line percent={40} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between gap-3 mt-5">
                      <div className="statics-of-chart w-100 border rounded-4" style={{ height: 'fit-content' }}>
                        <div className="d-flex justify-content-between align-items-center p-4">
                          <h4 className="chart-heading">Assigned Contracts</h4>
                          <h4 className="text-info">2457</h4>
                        </div>
                        <div className="gsw-globel-table p-0">
                          <div className="table-responsive mb-3 scrollbar">
                            <table className="table-box-main">
                              <thead>
                                <tr>
                                  <th>POLICY NUMBER</th>
                                  <th>CARRIER</th>
                                  <th>PREMIUM</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="active">GIW6739302810</td>
                                  <td className="active">GIW</td>
                                  <td className="active">$67.86</td>
                                </tr>
                                <tr>
                                  <td className="active">GIW6739302810</td>
                                  <td className="active">GIW</td>
                                  <td className="active">$67.86</td>
                                </tr>
                                <tr>
                                  <td className="active">GIW6739302810</td>
                                  <td className="active">GIW</td>
                                  <td className="active">$67.86</td>
                                </tr>
                                <tr>
                                  <td className="active">GIW6739302810</td>
                                  <td className="active">GIW</td>
                                  <td className="active">$67.86</td>
                                </tr>
                                <tr>
                                  <td className="active">GIW6739302810</td>
                                  <td className="active">GIW</td>
                                  <td className="active">$67.86</td>
                                </tr>
                                <tr>
                                  <td className="active">GIW6739302810</td>
                                  <td className="active">GIW</td>
                                  <td className="active">$67.86</td>
                                </tr>
                                <tr>
                                  <td className="active">GIW6739302810</td>
                                  <td className="active">GIW</td>
                                  <td className="active">$67.86</td>
                                </tr>
                                <tr style={{ background: '#F9FAFB' }}>
                                  <td className="fw-bold">TOTAL VALUE</td>
                                  <td className="fw-bold"></td>
                                  <td className="fw-bold">$1000</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="statics-of-chart w-100 border rounded-4">
                        <div className="d-flex justify-content-between align-items-center p-4" style={{ height: 'fit-content' }}>
                          <h4 className="chart-heading">Sold Policies</h4>
                          <h4 className="text-danger">876</h4>
                        </div>
                        <div className="gsw-globel-table p-0">
                          <div className="table-responsive mb-3 scrollbar">
                            <table className="table-box-main">
                              <thead>
                                <tr>
                                  <th>POLICY NUMBER</th>
                                  <th>CARRIER</th>
                                  <th>PREMIUM</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="active">GIW6739302810</td>
                                  <td className="active">GIW</td>
                                  <td className="active">$67.86</td>
                                </tr>
                                <tr>
                                  <td className="active">GIW6739302810</td>
                                  <td className="active">GIW</td>
                                  <td className="active">$67.86</td>
                                </tr>
                                <tr>
                                  <td className="active">GIW6739302810</td>
                                  <td className="active">GIW</td>
                                  <td className="active">$67.86</td>
                                </tr>
                                <tr>
                                  <td className="active">GIW6739302810</td>
                                  <td className="active">GIW</td>
                                  <td className="active">$67.86</td>
                                </tr>
                                <tr>
                                  <td className="active">GIW6739302810</td>
                                  <td className="active">GIW</td>
                                  <td className="active">$67.86</td>
                                </tr>
                                <tr style={{ background: '#F9FAFB' }}>
                                  <td className="fw-bold">TOTAL VALUE</td>
                                  <td className="fw-bold"></td>
                                  <td className="fw-bold">$1000</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="statics-of-chart w-100 border rounded-4" style={{ height: 'fit-content' }}>
                        <div className="d-flex justify-content-between align-items-center p-4">
                          <h4 className="chart-heading">Active Policies</h4>
                          <h4 className="text-success">378</h4>
                        </div>
                        <div className="gsw-globel-table p-0">
                          <div className="table-responsive mb-3 scrollbar">
                            <table className="table-box-main">
                              <thead>
                                <tr>
                                  <th>POLICY NUMBER</th>
                                  <th>CARRIER</th>
                                  <th>PREMIUM</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="active">GIW6739302810</td>
                                  <td className="active">GIW</td>
                                  <td className="active">$67.86</td>
                                </tr>
                                <tr>
                                  <td className="active">GIW6739302810</td>
                                  <td className="active">GIW</td>
                                  <td className="active">$67.86</td>
                                </tr>
                                <tr>
                                  <td className="active">GIW6739302810</td>
                                  <td className="active">GIW</td>
                                  <td className="active">$67.86</td>
                                </tr>
                                <tr style={{ background: '#F9FAFB' }}>
                                  <td className="fw-bold">TOTAL VALUE</td>
                                  <td className="fw-bold"></td>
                                  <td className="fw-bold">$1000</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chart-statistics w-100 defult-page-frame mt-3">
                  <div className="chart-section p-3">
                    <h4 className="chart-heading p-2 " style={{ borderBottom: '1px solid lightgray' }}>Carrier wise Policies sold 2024</h4>
                    <div className="card chart-cards h-100 border-0">
                      <div className="card-body">
                        <div
                          className="chart-box px-3 pb-3"
                          style={{ width: "100%", height: "500px", borderBottom: '1px solid lightgray', borderTop: '1px solid lightgray' }}
                        >
                          <CarrierBarChart />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
const BarChartCard = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Data for the bar chart
    const data = {
      labels: ['JAN 2024', 'FEB 2024', 'MAR 2024', 'APR 2024', 'MAY 2024', 'JUN 2024', 'JUL 2024', 'AUG 2024', 'SEP 2024', 'OCT 2024', 'NOV 2024', 'DEC 2024',],
      datasets: [
        {
          label: 'Sales',
          backgroundColor: '#a694fc',
          borderWidth: 0, // Remove the border from the bars
          data: [93, 56, 92, 110, 74, 96, 112, 40, 110, 58, 84, 52],
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
            callback: function (value, index, values) {
              return value; // Add percentage sign to y-axis values
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

const DonutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Data for the donut chart
    const data = {

      datasets: [
        {
          label: 'My First Dataset',
          data: [100, 40],
          backgroundColor: [
            'rgb(54, 162, 235)',
            '#f35252',
          ],
          hoverOffset: 4,
        },
      ],
    };

    // Options for the donut chart
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      },
    };

    // Create the chart instance
    const myChart = new Chart(chartRef.current, {
      type: 'doughnut',
      data: data,
      options: options,
    });

    // Clean up function
    return () => myChart.destroy();
  }, []);

  return <canvas ref={chartRef} />;
}

const CarrierBarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Data for the bar chart
    const data = {
      labels: ['Accendo', 'Wellable', 'AIG', 'AFLAC', 'GTL'],
      datasets: [
        {
          backgroundColor: [
            '#f0c257',
            '#72cff6',
            '#ef5356',
            '#eda2d1',
            '#b2dcef',
          ],
          borderWidth: 1, // Remove the border from the bars
          data: [40, 60, 80, 60, 40],
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
          //text: 'Sales Report',
          fontSize: 20,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (value, index, values) {
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
}

const FunnelChart = () => {
  const data = {
    labels: ['Contact assigned', 'Policy sold', 'Active policies'],
    datasets: [
      {
        label: 'Funnel Data',
        data: [2457, 876, 378],
        backgroundColor: ['#ff8c42', '#36a2eb', '#ffce56'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        display: false,
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 14,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.raw;
          },
        },
      },
    },
    elements: {
      bar: {
        borderRadius: 10,
        borderSkipped: false,
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};


export default AgenetPolicyDetails