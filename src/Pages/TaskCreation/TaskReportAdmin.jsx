import { Add, Filter, SearchNormal1 } from "iconsax-react";
import React, { useEffect, useRef, useState } from "react";
import { Avatar, Button, Form } from "rsuite";
import DateInput from "../../Components/Common/UI/DatePicker/DateInput";
import { Progress } from "rsuite";
import "./TaskCreation.css";
import CommonSelect from "../../Components/Common/UI/CustomSelect";
import Chart from 'chart.js/auto';

const TaskReportAdmin = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const policies = [
    { label: "Test 1", value: "Test 1" },
    { label: "Test 2", value: "Test 2" },
    { label: "Test 3", value: "Test 3" },
  ];
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
                    <div className="chart-section p-3">
                      <h4 className="chart-heading">Assigned Task</h4>
                      <div className="card chart-cards h-100 border-0">
                        <div className="card-body">
                          <div
                            className="chart-box px-3 pb-3"
                            style={{ width: "100%", height: "500px", borderBottom: '1px solid lightgray' }}
                          >
                            <BarChartCard />
                          </div>
                          <p className="text-center pt-3">Done task month wise</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chart-statistics defult-page-frame mt-3 h-100">
                  <div className="taskSubHeader d-flex justify-content-start align-items-center gap-2">
                    <Button
                      className={`taskCurrentMenu ${currentTab === 1 &&
                        "active"}`}
                      onClick={() => setCurrentTab(1)}
                    >
                      Top Performer
                    </Button>
                    <Button
                      className={`taskCurrentMenu ${currentTab === 2 &&
                        "active"}`}
                      onClick={() => setCurrentTab(2)}
                    >
                      Average Performer
                    </Button>
                    <Button
                      className={`taskCurrentMenu ${currentTab === 3 &&
                        "active"}`}
                      onClick={() => setCurrentTab(3)}
                    >
                      Low Performer
                    </Button>
                  </div>
                  <div>
                    <h5 className="pt-4 px-3">
                      {currentTab == 1
                        ? "Top"
                        : currentTab == 2
                          ? "Average"
                          : "Low"}{" "}
                      Performar
                    </h5>
                    <div className="gsw-globel-table">
                      <div className="table-responsive mb-3 scrollbar">
                        <table className="table-box-main">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>EMPLOYEE NAME</th>
                              <th>TOTAL TASK ASSIGNED</th>
                              <th>DONE TASK</th>
                              <th>STATUS</th>
                            </tr>
                          </thead>
                          {currentTab === 1 ? (
                            <tbody>
                              <tr>
                                <td className="active">#1</td>
                                <td className="active d-flex align-items-center gap-2">
                                  <Avatar
                                    src="https://i.pravatar.cc/150?u=1"
                                    className="rounded-circle"
                                    size="sm"
                                  />
                                  <span>Carmon Williamson</span>
                                </td>
                                <td className="active">30</td>
                                <td className="active">26</td>
                                <td className="active">
                                  <Progress.Line
                                    percent={90}
                                    strokeColor="#58B15B"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="active">#1</td>
                                <td className="active d-flex align-items-center gap-2">
                                  <Avatar
                                    src="https://i.pravatar.cc/150?u=1"
                                    className="rounded-circle"
                                    size="sm"
                                  />
                                  <span>Jerom bell</span>
                                </td>
                                <td className="active">40</td>
                                <td className="active">26</td>
                                <td className="active">
                                  <Progress.Line
                                    percent={86}
                                    strokeColor="#58B15B"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="active">#1</td>
                                <td className="active d-flex align-items-center gap-2">
                                  <Avatar
                                    src="https://i.pravatar.cc/150?u=1"
                                    className="rounded-circle"
                                    size="sm"
                                  />
                                  <span>Courtney Henry</span>
                                </td>
                                <td className="active">90</td>
                                <td className="active">20</td>
                                <td className="active">
                                  <Progress.Line
                                    percent={80}
                                    strokeColor="#58B15B"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          ) : currentTab === 2 ? (
                            <tbody>
                              <tr>
                                <td className="active">#1</td>
                                <td className="active d-flex align-items-center gap-2">
                                  <Avatar
                                    src="https://i.pravatar.cc/150?u=1"
                                    className="rounded-circle"
                                    size="sm"
                                  />
                                  <span>Carmon Williamson</span>
                                </td>
                                <td className="active">30</td>
                                <td className="active">26</td>
                                <td className="active">
                                  <Progress.Line
                                    percent={60}
                                    strokeColor="#f49404"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="active">#1</td>
                                <td className="active d-flex align-items-center gap-2">
                                  <Avatar
                                    src="https://i.pravatar.cc/150?u=1"
                                    className="rounded-circle"
                                    size="sm"
                                  />
                                  <span>Jerom bell</span>
                                </td>
                                <td className="active">30</td>
                                <td className="active">26</td>
                                <td className="active">
                                  <Progress.Line
                                    percent={56}
                                    strokeColor="#f49404"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="active">#1</td>
                                <td className="active d-flex align-items-center gap-2">
                                  <Avatar
                                    src="https://i.pravatar.cc/150?u=1"
                                    className="rounded-circle"
                                    size="sm"
                                  />
                                  <span>Courtney Henry</span>
                                </td>
                                <td className="active">30</td>
                                <td className="active">26</td>
                                <td className="active">
                                  <Progress.Line
                                    percent={50}
                                    strokeColor="#f49404"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          ) : (
                            <tbody>
                              <tr>
                                <td className="active">#1</td>
                                <td className="active d-flex align-items-center gap-2">
                                  <Avatar
                                    src="https://i.pravatar.cc/150?u=1"
                                    className="rounded-circle"
                                    size="sm"
                                  />
                                  <span>Carmon Williamson</span>
                                </td>
                                <td className="active">30</td>
                                <td className="active">26</td>
                                <td className="active">
                                  <Progress.Line
                                    percent={20}
                                    strokeColor="#ec2a35"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="active">#1</td>
                                <td className="active d-flex align-items-center gap-2">
                                  <Avatar
                                    src="https://i.pravatar.cc/150?u=1"
                                    className="rounded-circle"
                                    size="sm"
                                  />
                                  <span>Jerom bell</span>
                                </td>
                                <td className="active">30</td>
                                <td className="active">26</td>
                                <td className="active">
                                  <Progress.Line
                                    percent={26}
                                    strokeColor="#ec2a35"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="active">#1</td>
                                <td className="active d-flex align-items-center gap-2">
                                  <Avatar
                                    src="https://i.pravatar.cc/150?u=1"
                                    className="rounded-circle"
                                    size="sm"
                                  />
                                  <span>Courtney Henry</span>
                                </td>
                                <td className="active">30</td>
                                <td className="active">26</td>
                                <td className="active">
                                  <Progress.Line
                                    percent={20}
                                    strokeColor="#ec2a35"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          )}
                        </table>
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
  );
};

const BarChartCard = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Data for the bar chart
    const data = {
      labels: ['JAN 2024', 'FEB 2024', 'MAR 2024', 'APR 2024', 'MAY 2024', 'JUN 2024', 'JUL 2024', 'AUG 2024', 'SEP 2024', 'OCT 2024', 'NOV 2024', 'DEC 2024',],
      datasets: [
        {
          label: 'Sales',
          backgroundColor: 'lightgreen',
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

export default TaskReportAdmin;
