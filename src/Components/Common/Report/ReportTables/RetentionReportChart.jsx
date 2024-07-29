import React, { useContext, useState } from "react";
import { Tabs, Avatar, List, Button, Table, Progress } from "rsuite";
import { User, ArrowRight2, Add, Filter } from "iconsax-react";
import MinimizeScreen from "../../Dashbord/Calldailog/MinimizeScreen";
import IncomingCall from "../../Dashbord/Calldailog/IncomingCall";
import CommonSelect from "../../UI/CustomSelect";
import PieChart from "../../Report/PieChart";
import BarChartCard from "../../Report/BarChartCard";
import LineChart from "../../Report/LineChart";
import { ModelName } from "../../../../context/callingModelContext";
import DoughnutChart from "../DoughnutChart";

const RetentionReportChart = () => {
  const [userOpen, setUserOpen] = useState(false);
  const [openDialPad, setOpenDialPad] = React.useState(false);
  const [openComposedMail, setOpenComposedMail] = React.useState(false);
  const [activeInboxTab, setActiveInboxTab] = React.useState("All");
  const [activeTab, setActiveTab] = useState("1"); // default active tab
  const { modelName } = useContext(ModelName);

  const hundleOpen = (e) => {
    e.preventDefault();
    if (userOpen === true) {
      setUserOpen(false);
    } else {
      setUserOpen(true);
    }
  };

  const policies = [
    { label: "Test 1", value: "Test 1" },
    { label: "Test 2", value: "Test 2" },
    { label: "Test 3", value: "Test 3" },
  ];

  const data = [
    { label: "Submitted Application", value: "200" },
    { label: "Placed Policies", value: "100" },
    { label: "Submitted. AP", value: "$120000" },
    { label: "Placed AP", value: "$60000" },
    { label: "Placement %", value: "50%" },
    { label: "Avg. AP", value: "600" },
    { label: "Retention (3month)", value: "75" },
    { label: "Placed Policy Type", value: "Level, Graded, ROP, Guaranteed" },
  ];
  return (
    <>
      <section className="transition-ease position-relative">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 gw-body-col-12">
              <div className="d-flex justify-content-between flex-wrap">
                <div
                  className={`gsw-user-details-wrapper scrollbar d-flex flex-column ${
                    userOpen === true ? "active" : ""
                  }`}
                ></div>

                <div className="gsw-globel-tab flex-grow-1">
                  <div className="defult-page-frame h-100">
                    <div className="card border-0 bg-transparent box-main-card overflow-hidden">
                      <div className="card-body px-0">
                        <div className="row mx-2 chart-main-row g-4">
                          <div className="col-12 col-lg-12 col-xl-6">
                            <div className="card chart-cards h-100">
                              <div className="card-header d-flex justify-content-between align-items-center mx-3">
                                <h5 className="chart-title mb-0">Policies</h5>
                                <div className="d-flex align-items-center gap-3">
                                  <p className="mb-0">Filter BY</p>
                                  <div className="top-input filter-icons-box">
                                    <CommonSelect
                                      inputWrapperClassName="rounded-3 outline-0 d-flex align-items-center"
                                      wrapperClassName="rounded-3 outline-0 d-flex align-items-center"
                                      options={policies}
                                      className="w-100 rounded-3 outline-0 d-flex align-items-center"
                                      searchable={false}
                                      placeholder="By Year"
                                    />
                                  </div>
                                  <div className="top-input">
                                    <CommonSelect
                                      inputWrapperClassName="rounded-3 outline-0 chart-select-input"
                                      wrapperClassName="rounded-3 outline-0 chart-select-input"
                                      options={policies}
                                      className="rounded-3 outline-0 chart-select-input"
                                      searchable={false}
                                      placeholder="2024"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="card-body">
                                <div
                                  className="chart-box"
                                  style={{ width: "600px", height: "500px" }}
                                >
                                  <PieChart
                                    chartData={{
                                      labels: [
                                        "Submitted Application",
                                        "Placed Policies",
                                      ],
                                      data: [100, 200],
                                      backgroundColor: ["#9f8dfb", "#fec956"],
                                      datasetLabel: "Agent Statistics",
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-lg-12 col-xl-6">
                            <div className="card chart-cards h1-00">
                              <div className="card-header d-flex justify-content-between align-items-center mx-3">
                                <h5 className="chart-title mb-0">AP</h5>
                                <div className="d-flex align-items-center gap-3">
                                  <p className="mb-0">Filter BY</p>
                                  <div className="top-input filter-icons-box">
                                    <CommonSelect
                                      inputWrapperClassName="rounded-3 outline-0 d-flex align-items-center"
                                      wrapperClassName="rounded-3 outline-0 d-flex align-items-center"
                                      options={policies}
                                      className="w-100 rounded-3 outline-0 d-flex align-items-center"
                                      searchable={false}
                                      placeholder="By Year"
                                    />
                                  </div>
                                  <div className="top-input">
                                    <CommonSelect
                                      inputWrapperClassName="rounded-3 outline-0 chart-select-input"
                                      wrapperClassName="rounded-3 outline-0 chart-select-input"
                                      options={policies}
                                      className="rounded-3 outline-0 chart-select-input"
                                      searchable={false}
                                      placeholder="2024"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="card-body">
                                <div
                                  className="chart-box"
                                  style={{ width: "450px", height: "500px" }}
                                >
                                  <PieChart
                                    chartData={{
                                      labels: ["Submitted. AP", "Placed AP "],
                                      data: [12000, 8000],
                                      backgroundColor: ["#187ECC", "#FF903F"],
                                      datasetLabel: "Agent Statistics",
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-lg-12 col-xl-6">
                            <div className="card chart-cards h-100">
                              <div className="card-header d-fle`x justify-content-between align-items-center mx-3">
                                <h5 className="chart-title mb-0">
                                  Placement %
                                </h5>
                                <div className="d-flex align-items-center gap-3">
                                  <p className="mb-0">Filter BY</p>
                                  <div className="top-input filter-icons-box">
                                    <CommonSelect
                                      inputWrapperClassName="rounded-3 outline-0 d-flex align-items-center"
                                      wrapperClassName="rounded-3 outline-0 d-flex align-items-center"
                                      options={policies}
                                      className="w-100 rounded-3 outline-0 d-flex align-items-center"
                                      searchable={false}
                                      placeholder="By Year"
                                    />
                                  </div>
                                  <div className="top-input">
                                    <CommonSelect
                                      inputWrapperClassName="rounded-3 outline-0 chart-select-input"
                                      wrapperClassName="rounded-3 outline-0 chart-select-input"
                                      options={policies}
                                      className="rounded-3 outline-0 chart-select-input"
                                      searchable={false}
                                      placeholder="2024"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="card-body">
                                <div
                                  className="chart-box px-3"
                                  style={{ width: "100%", height: "500px" }}
                                >
                                  <DoughnutChart />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-lg-12 col-xl-6">
                            <div className="card chart-cards h-100">
                              <div className="card-header d-flex justify-content-between align-items-center mx-3">
                                <h5 className="chart-title mb-0">
                                  Placement %
                                </h5>
                                <div className="d-flex align-items-center gap-3">
                                  <p className="mb-0">Filter BY</p>
                                  <div className="top-input filter-icons-box">
                                    <CommonSelect
                                      inputWrapperClassName="rounded-3 outline-0 d-flex align-items-center"
                                      wrapperClassName="rounded-3 outline-0 d-flex align-items-center"
                                      options={policies}
                                      className="w-100 rounded-3 outline-0 d-flex align-items-center"
                                      searchable={false}
                                      placeholder="By Year"
                                    />
                                  </div>
                                  <div className="top-input">
                                    <CommonSelect
                                      inputWrapperClassName="rounded-3 outline-0 chart-select-input"
                                      wrapperClassName="rounded-3 outline-0 chart-select-input"
                                      options={policies}
                                      className="rounded-3 outline-0 chart-select-input"
                                      searchable={false}
                                      placeholder="2024"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="card-body">
                                <div
                                  className="chart-box px-3"
                                  style={{ width: "100%", height: "500px" }}
                                >
                                  <LineChart />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-lg-12 col-xl-6">
                            <div className="card chart-cards h-100">
                              <div className="card-header d-flex justify-content-between align-items-center mx-3">
                                <h5 className="chart-title mb-0"> Retention</h5>
                                <div className="d-flex align-items-center gap-3">
                                  <p className="mb-0">Filter BY</p>
                                  <div className="top-input filter-icons-box">
                                    <CommonSelect
                                      inputWrapperClassName="rounded-3 outline-0 d-flex align-items-center"
                                      wrapperClassName="rounded-3 outline-0 d-flex align-items-center"
                                      options={policies}
                                      className="w-100 rounded-3 outline-0 d-flex align-items-center"
                                      searchable={false}
                                      placeholder="By Year"
                                    />
                                  </div>
                                  <div className="top-input">
                                    <CommonSelect
                                      inputWrapperClassName="rounded-3 outline-0 chart-select-input"
                                      wrapperClassName="rounded-3 outline-0 chart-select-input"
                                      options={policies}
                                      className="rounded-3 outline-0 chart-select-input"
                                      searchable={false}
                                      placeholder="2024"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="card-body">
                                <div
                                  className="chart-box"
                                  style={{ width: "450px", height: "500px" }}
                                >
                                  <PieChart
                                    chartData={{
                                      labels: ["Active", "Retention%", "FPW"],
                                      data: [180, 250, 100],
                                      backgroundColor: [
                                        "#B09FFF",
                                        "#FFD572",
                                        "#7AD3FF",
                                      ],
                                      datasetLabel: "Agent Statistics",
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-lg-12 col-xl-6">
                            <div className="card chart-cards h-100">
                              <div className="card-header d-flex justify-content-between align-items-center mx-3">
                                <h5 className="chart-title mb-0">
                                  Placed Policy Type{" "}
                                </h5>
                                <div className="d-flex align-items-center gap-3">
                                  <p className="mb-0">Filter BY</p>
                                  <div className="top-input filter-icons-box">
                                    <CommonSelect
                                      inputWrapperClassName="rounded-3 outline-0 d-flex align-items-center"
                                      wrapperClassName="rounded-3 outline-0 d-flex align-items-center"
                                      options={policies}
                                      className="w-100 rounded-3 outline-0 d-flex align-items-center"
                                      searchable={false}
                                      placeholder="By Year"
                                    />
                                  </div>
                                  <div className="top-input">
                                    <CommonSelect
                                      inputWrapperClassName="rounded-3 outline-0 chart-select-input"
                                      wrapperClassName="rounded-3 outline-0 chart-select-input"
                                      options={policies}
                                      className="rounded-3 outline-0 chart-select-input"
                                      searchable={false}
                                      placeholder="2024"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="card-body">
                                <div className="progress-bar mx-2 pt-4">
                                  <div className="row text-start align-items-center mb-3 progress-bar-line">
                                    <div className="col-2">
                                      <p>Level</p>
                                    </div>
                                    <div className="col-10">
                                      <div className="position-relative dots-list">
                                        <Progress.Line percent={45} />
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row text-start align-items-center mb-3 progress-bar-line">
                                    <div className="col-2">
                                      <p>Graded</p>
                                    </div>
                                    <div className="col-10">
                                      <div className="position-relative dots-list">
                                        <Progress.Line percent={45} />
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row text-start align-items-center mb-3 progress-bar-line">
                                    <div className="col-2">
                                      <p>ROP</p>
                                    </div>
                                    <div className="col-10">
                                      <div className="position-relative dots-list">
                                        <Progress.Line percent={45} />
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row text-start align-items-center mb-3 progress-bar-line">
                                    <div className="col-2">
                                      <p>Guaranteed</p>
                                    </div>
                                    <div className="col-10">
                                      <div className="position-relative dots-list">
                                        <Progress.Line percent={45} />
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                        <div className="dots"></div>
                                        <div className="dots"></div>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {modelName === "minimizeModel" && (
        <div className="minimize-screen-position">
          <MinimizeScreen setOpenDialPad={setOpenDialPad} />
        </div>
      )}
    </>
  );
};

export default RetentionReportChart;
