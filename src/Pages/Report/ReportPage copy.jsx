import React, { useContext, useState } from "react";
import { Tabs, Avatar, List, Button, Table } from "rsuite";
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
import EditModal from "../../Components/Common/Report/EditModal";

const Report = () => {
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


  return (
    <>
      <section className="gw-content-body transition-ease position-relative">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 gw-body-col-12">
              <div
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
              </div>

              <div className="d-flex justify-content-between flex-wrap">
                {/* User Details Sidebar start */}
                <div
                  className={`gsw-user-details-wrapper scrollbar d-flex flex-column ${userOpen === true ? "active" : ""
                    }`}
                >
                  <UserDetail
                    openDialPad={openDialPad}
                    setOpenDialPad={setOpenDialPad}
                    openComposedMail={openComposedMail}
                    setOpenComposedMail={setOpenComposedMail}
                    activeInboxTab={activeInboxTab}
                    setActiveInboxTab={setActiveInboxTab}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                </div>
                {/* User Details Sidebar End */}

                <div className="gsw-globel-tab flex-grow-1">
                  <div className="defult-page-frame h-100">
                    <div className="card border-0 bg-transparent box-main-card overflow-hidden">
                      <div className="card-header">
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
                      </div>
                      <div className="card-body px-0">
                        <div className="d-flex align-items-end gap-3 input-border border-top-0 px-3 pb-4">
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
                        <div className="input-border mx-3 my-4 rounded-4 p-3">
                          <div className="row">
                            <div className="col-8">
                              <div className="d-flex align-items-center gap-3 card-title-box mb-2">
                                <p className="m-0">Submitted Application:- <span>12</span></p>
                                <p className="m-0">Submitted. AP :- <span>12</span></p>
                                <p className="m-0">Placed Policies :- <span>12</span></p>
                                <p className="m-0">Placed AP :- <span>12</span></p>
                              </div>
                              <div className="d-flex align-items-center gap-3 card-title-box">
                                <p className="m-0">Placement % :- <span>12%</span></p>
                                <p className="m-0">Avg. Ap :- <span>$12</span></p>
                                <p className="m-0"> Retention (3m) :- <span>12</span></p>
                                <p className="m-0">Placed Policy Type :- <span>Loreum ipsum</span></p>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="d-flex justify-content-end">
                                <EditModal />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="gsw-globel-table">
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
      <IncomingCall />
    </>
  );
};

export default Report;
