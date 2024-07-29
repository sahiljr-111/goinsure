import React, { useContext, useState } from "react";
import { Tabs, Avatar, List, Button, Table, Progress } from "rsuite";
import {
  User,
  ArrowRight2,
  Add,
  Filter,
} from "iconsax-react";
import UserDetail from "../../Components/Common/Sidebar/UserDetails/UserDetail";
import { ModelName } from "../../context/callingModelContext";
import MinimizeScreen from "../../Components/Common/Dashbord/Calldailog/MinimizeScreen";
import IncomingCall from "../../Components/Common/Dashbord/Calldailog/IncomingCall";
import CommonSelect from "../../Components/Common/UI/CustomSelect";
import Time from "../../Components/Common/UI/TimePicker/Time";
import PieChart from "../../Components/Common/Report/PieChart";
import BarChartCard from "../../Components/Common/Report/BarChartCard";
import LineChart from "../../Components/Common/Report/LineChart";

const ReportAgent = () => {
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
    { label: 'Submitted Application', value: '200' },
    { label: 'Placed Policies', value: '100' },
    { label: 'Submitted. AP', value: '$120000' },
    { label: 'Placed AP', value: '$60000' },
    { label: 'Placement %', value: '50%' },
    { label: 'Avg. AP', value: '600' },
    { label: 'Retention (3month)', value: '75' },
    { label: 'Placed Policy Type', value: 'Level, Graded, ROP, Guaranteed' },
  ];


  return (
    <>
      <section className="transition-ease position-relative">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 gw-body-col-12">
              {/* <div
                className={`gsw-user-details-click gsw-userinfo-click position-fixed top-50 ${userOpen === true ? "active" : ""
                  }`}
              >
                <User
                  size="24"
                  color="#fff"
                  variant="Outline"
                  onClick={hundleOpen}
                />
                <ArrowRight2
                  size="20"
                  color="#fff"
                  variant="Outline"
                  className="arrowright-svg"
                  onClick={hundleOpen}
                />
              </div> */}

              <div className="d-flex justify-content-between flex-wrap">
                <div
                  className={`gsw-user-details-wrapper scrollbar d-flex flex-column ${userOpen === true ? "active" : ""
                    }`}
                >
                  {/* <UserDetail
                    openDialPad={openDialPad}
                    setOpenDialPad={setOpenDialPad}
                    openComposedMail={openComposedMail}
                    setOpenComposedMail={setOpenComposedMail}
                    activeInboxTab={activeInboxTab}
                    setActiveInboxTab={setActiveInboxTab}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  /> */}
                </div>

                <div className="gsw-globel-tab flex-grow-1">
                  <div className="defult-page-frame h-100">
                    <div className="card border-0 bg-transparent box-main-card overflow-hidden">
                      {/* <div className="card-header">
                        <h5>Report for Transactions of Premium</h5>
                        <div className="d-flex align-items-center gap-3 input-main-box">
                          <div className="top-input">
                            <CommonSelect
                              inputWrapperClassName="rounded-3 w-100 outline-0"
                              wrapperClassName="rounded-3 w-100 outline-0"
                              options={policies}
                              className="w-100 rounded-3 outline-0"
                              searchable={false}
                              placeholder="Report type"
                            />
                          </div>
                          <div className="top-input">
                            <CommonSelect
                              inputWrapperClassName="rounded-3 w-100 outline-0"
                              wrapperClassName="rounded-3 w-100 outline-0"
                              options={policies}
                              className="w-100 rounded-3 outline-0"
                              searchable={false}
                              placeholder="Type of Date"
                            />
                          </div>
                          <div className="time-lable top-input">
                            <Time />
                          </div>
                          <div className="time-lable top-input">
                            <Time />
                          </div>
                          <div className="top-input">
                            <CommonSelect
                              inputWrapperClassName="rounded-3 w-100 outline-0"
                              wrapperClassName="rounded-3 w-100 outline-0"
                              options={policies}
                              className="w-100 rounded-3 outline-0"
                              searchable={false}
                              placeholder="Carrier"
                            />
                          </div>
                          <div className="top-input">
                            <CommonSelect
                              inputWrapperClassName="rounded-3 w-100 outline-0"
                              wrapperClassName="rounded-3 w-100 outline-0"
                              options={policies}
                              className="w-100 rounded-3 outline-0"
                              searchable={false}
                              placeholder="Product"
                            />
                          </div>
                          <div className="top-input">
                            <CommonSelect
                              inputWrapperClassName="rounded-3 w-100 outline-0"
                              wrapperClassName="rounded-3 w-100 outline-0"
                              options={policies}
                              className="w-100 rounded-3 outline-0"
                              searchable={false}
                              placeholder="Product Type"
                            />
                          </div>
                        </div>
                      </div> */}
                      <div className="card-body px-0">
                        {/* <div className="d-flex align-items-end gap-3 input-border border-top-0 px-3 pb-4">
                          <CommonSelect
                            inputWrapperClassName="rounded-3 w-100 outline-0"
                            wrapperClassName="rounded-3 w-100 outline-0"
                            options={policies}
                            className="w-100 rounded-3 outline-0"
                            searchable={false}
                            label="Custom Field Name"
                            placeholder="Select Custom Field Name"
                          />

                          <CommonSelect
                            inputWrapperClassName="rounded-3 w-100 outline-0"
                            wrapperClassName="rounded-3 w-100 outline-0"
                            options={policies}
                            className="w-100 rounded-3 outline-0"
                            searchable={false}
                            label="Custom Field Value"
                            placeholder="Select Custom Field Value"
                          />
                          <button className="button-fill d-flex align-items-center gap-2 add-bnt"><Add size="25" color="#FFF" /> Add Custom Filter</button>
                        </div>
                        <div className="d-flex justify-content-between align-items-end gap-3 input-border border-top-0 px-3 pb-4 pt-3 mx-2 border-start-0 border-end-0">
                          <div className="d-flex align-items-center gap-3">
                            <Button
                              type="button"
                              className="btn flex-shrink-1 flex-lg-shrink-0 ptfilter-btn"
                            >
                              <Filter size="16" color="#FFF" variant="Outline" /> Filter
                            </Button>

                            <button className="button-outline d-flex align-items-center gap-2 add-bnt">
                              Reset filter</button>

                            <CommonSelect
                              inputWrapperClassName="rounded-3 outline-0"
                              wrapperClassName="rounded-3 outline-0"
                              options={policies}
                              className="w-100 rounded-3 outline-0"
                              searchable={false}
                              placeholder="Preferences"
                            />
                          </div>
                          <div className="d-flex align-items-center gap-3 seting-select">
                            <CommonSelect
                              inputWrapperClassName="rounded-3 outline-0 d-flex align-items-center"
                              wrapperClassName="rounded-3 outline-0 d-flex align-items-center"
                              options={policies}
                              className="w-100 rounded-3 outline-0 d-flex align-items-center"
                              searchable={false}
                              placeholder="Custom Data View"
                            />
                            <button className="button-fill add-bnt">
                              Export
                            </button>
                          </div>
                        </div>
                        <div className="px-2 input-border border-top-0 pt-1 pb-3">
                          <div className="d-flex align-items-center gap-2">
                            <h4 className="green-title">Total Annual Premium:-</h4>
                            <h4 className="green-title pe-3">USD 120,000</h4>
                            <h4 className="green-title">Total Policies Count:</h4>
                            <h4 className="green-title">2589</h4>
                          </div>
                        </div>

                        <h2 className="table-subtitle mx-3 pt-4">Report by Agent</h2>

                        <div className="input-border mx-3 my-3 rounded-4 p-3 report-agent-cards d-flex justify-content-between align-items-center">

                          <div className="d-flex align-items-center gap-3">
                            {data.map((item, index) => (
                              <div className="agent-card pe-3" key={index}>
                                <p>{item.label}</p>
                                <h5>{item.value}</h5>
                              </div>
                            ))}
                          </div>

                          <button className="d-flex align-items-center gap-2 edit-btn border-0">
                            <img src="../../../../../public/Images/edit.png" width="16px" height="16px" alt="" />
                            <p className="border-bottom mb-0">Edit</p>
                          </button>

                        </div> */}


                        {/* <div className="gsw-globel-table">
                          <div className="table-responsive mb-3 scrollbar">
                            <table className="table-box-main">
                              <thead>
                                <tr>
                                  <th className="w-100px">
                                    <input className="form-check-input checkbox-table" type="checkbox" value="" id="flexCheckChecked" />
                                  </th>
                                  <th>Date</th>
                                  <th>Carrier</th>
                                  <th>Carrier</th>
                                  <th>Carrier</th>
                                  <th>Carrier</th>
                                  <th>Carrier</th>
                                  <th>Carrier</th>
                                  <th>Carrier</th>
                                  <th>Carrier</th>
                                  <th>Carrier</th>
                                  <th>Carrier</th>
                                  <th>Carrier</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="w-100px active">
                                    <input className="form-check-input checkbox-table" type="checkbox" value="" id="flexCheckChecked" />
                                  </td>
                                  <td className="active">19 Jan</td>
                                  <td className="active">$5000.00</td>
                                  <td className="active">$5000.00</td>
                                  <td className="active">$5000.00</td>
                                  <td className="active">$5000.00</td>
                                  <td className="active">$5000.00</td>
                                  <td className="active">$5000.00</td>
                                  <td className="active">$5000.00</td>
                                  <td className="active">$5000.00</td>
                                  <td className="active">$5000.00</td>
                                  <td className="active">$5000.00</td>
                                  <td className="active">$5000.00</td>
                                </tr>
                                <tr>
                                  <td className="active">
                                    <input className="form-check-input checkbox-table" type="checkbox" value="" id="flexCheckChecked" />
                                  </td>
                                  <td className="active">19 Jan</td>
                                  <td className="active">$5000.00</td>
                                  <td className="active">$5000.00</td>
                                  <td className="active">$5000.00</td>
                                  <td className="active">$5000.00</td>
                                  <td className="active">$5000.00</td>
                                  <td className="active">$5000.00</td>
                                  <td className="active">$5000.00</td>
                                  <td className="active">$5000.00</td>
                                  <td className="active">$5000.00</td>
                                  <td className="active">$5000.00</td>
                                  <td className="active">$5000.00</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div> */}
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
                                <div className='chart-box' style={{ width: '600px', height: '500px', }}>
                                  <PieChart
                                    chartData={{
                                      labels: ['Submitted Application', 'Placed Policies'],
                                      data: [180, 250],
                                      backgroundColor: ['#9f8dfb', '#fec956'],
                                      datasetLabel: 'Agent Statistics',
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
                                <div className='chart-box' style={{ width: '450px', height: '500px', }}>
                                  <PieChart
                                    chartData={{
                                      labels: ['Submitted. AP', 'Placed AP '],
                                      data: [180, 250],
                                      backgroundColor: ['#187ECC', '#FF903F'],
                                      datasetLabel: 'Agent Statistics',
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-lg-12 col-xl-6">
                            <div className="card chart-cards h-100">
                              <div className="card-header d-flex justify-content-between align-items-center mx-3">
                                <h5 className="chart-title mb-0">Placement %</h5>
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
                                <div className='chart-box px-3' style={{ width: '100%', height: '500px', }}>
                                  <BarChartCard />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-lg-12 col-xl-6">
                            <div className="card chart-cards h-100">
                              <div className="card-header d-flex justify-content-between align-items-center mx-3">
                                <h5 className="chart-title mb-0">Placement %</h5>
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
                                <div className='chart-box px-3' style={{ width: '100%', height: '500px', }}>
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
                                <div className='chart-box' style={{ width: '450px', height: '500px', }}>

                                  <PieChart
                                    chartData={{
                                      labels: ['Active', 'Retention%', 'FPW'],
                                      data: [180, 250, 100],
                                      backgroundColor: ['#FBE947', '#FF903E', '#FF5A5A'],
                                      datasetLabel: 'Agent Statistics',
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-lg-12 col-xl-6">
                            <div className="card chart-cards h-100">
                              <div className="card-header d-flex justify-content-between align-items-center mx-3">
                                <h5 className="chart-title mb-0">Placed Policy Type </h5>
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
      {/* <IncomingCall /> */}
    </>
  );
};

export default ReportAgent;
