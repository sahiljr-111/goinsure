import React, { useContext, useState } from "react";
import { Tabs, Avatar, List, Button, Table } from "rsuite";
import { User, ArrowRight2, Add, Filter } from "iconsax-react";
import UserDetail from "../../Components/Common/Sidebar/UserDetails/UserDetail";
import { ModelName } from "../../context/callingModelContext";
import MinimizeScreen from "../../Components/Common/Dashbord/Calldailog/MinimizeScreen";
import IncomingCall from "../../Components/Common/Dashbord/Calldailog/IncomingCall";
import CommonSelect from "../../Components/Common/UI/CustomSelect";
import Time from "../../Components/Common/UI/TimePicker/Time";
import EditModal from "../../Components/Common/Report/EditModal";
import Index from "../../Components/Common/UI/CustomPagination/Index";

const ReportTransactions = () => {
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

  const subcards = [
    { id: 1, title: 'Submitted Application', count: '200' },
    { id: 2, title: 'Placed Policies', count: '100' },
    { id: 3, title: 'Submitted. AP', count: '$120000' },
    { id: 4, title: 'Placed AP', count: '$60000' },
    { id: 5, title: 'Placement %', count: '50%' },
    { id: 6, title: 'Avg. AP', count: '600' },
    { id: 6, title: ' Retention (3m)', count: 'Avg. AP ' },
    { id: 6, title: 'Placed Policy Type ', count: 'Level, Graded, ROP, Guaranteed' },
    // Add more items as needed
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
                          <button className="button-fill d-flex align-items-center gap-2 add-bnt">
                            <Add size="25" color="#FFF" /> Add Custom Filter
                          </button>
                        </div>
                        <div className="d-flex justify-content-between align-items-end gap-3 input-border border-top-0 px-3 pb-4 pt-3 mx-2 border-start-0 border-end-0">
                          <div className="d-flex align-items-center gap-3">
                            <Button
                              type="button"
                              className="btn flex-shrink-1 flex-lg-shrink-0 ptfilter-btn"
                            >
                              <Filter
                                size="16"
                                color="#FFF"
                                variant="Outline"
                              />{" "}
                              Filter
                            </Button>

                            <button className="button-outline d-flex align-items-center gap-2 add-bnt">
                              Reset filter
                            </button>

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
                            <h4 className="green-title">
                              Total Annual Premium:-
                            </h4>
                            <h4 className="green-title pe-3">USD 120,000</h4>
                            <h4 className="green-title">
                              Total Policies Count:
                            </h4>
                            <h4 className="green-title">2589</h4>
                          </div>
                        </div>
                        <div className="input-border mx-3 my-4 rounded-4 p-3">
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-w align-items-center gap-2 subcard-list">
                              {
                                // Step 2: Map over the array
                                subcards.map((subcard) => (
                                  <div key={subcard.id} className="subcard">
                                    <div className="subcard-header">
                                      <p className="mb-0">{subcard.title}</p>
                                    </div>
                                    <div className="subcard-body">
                                      <h6>{subcard.count}</h6>
                                    </div>
                                  </div>
                                ))
                              }
                            </div>
                            <div>
                              <EditModal />
                            </div>
                          </div>
                        </div>
                        <div className="gsw-globel-table">
                          <div className="table-responsive mb-3 scrollbar">
                            <table className="table-box-main text-center">
                              <thead>
                                <tr>
                                  <th className="w-100px">
                                    <input
                                      className="form-check-input checkbox-table"
                                      type="checkbox"
                                      value=""
                                      id="flexCheckChecked"
                                    />
                                  </th>
                                  <th>MOnth</th>
                                  <th>Applications</th>
                                  <th>Submitted Ap</th>
                                  <th>Placed Policies</th>
                                  <th>Placed AP</th>
                                  <th>Placement %</th>
                                  <th>Avg AP</th>
                                  <th>Retention</th>
                                  <th>Placed Policy Type</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="active">
                                    <input
                                      className="form-check-input checkbox-table"
                                      type="checkbox"
                                      value=""
                                      id="flexCheckChecked"
                                    />
                                  </td>
                                  <td className="active">-</td>
                                  <td className="active">-</td>
                                  <td className="active">-</td>
                                  <td className="active">-</td>
                                  <td className="active">-</td>
                                  <td className="active">-</td>
                                  <td className="active">-</td>
                                  <td className="active p-0">
                                    <table className="table-box-main sub-table">
                                      <tr>
                                        <td>Active</td>
                                        <td>Retention%</td>
                                        <td>FPW</td>
                                      </tr>
                                    </table>
                                  </td>
                                  <td className="active p-0">
                                    <table className="table-box-main sub-table">
                                      <tr>
                                        <td>Level</td>
                                        <td>%</td>
                                        <td>Graded</td>
                                        <td>%</td>
                                        <td>Rop</td>
                                        <td>%</td>
                                        <td>Guaranteed</td>
                                        <td>%</td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="active">
                                    <input
                                      className="form-check-input checkbox-table"
                                      type="checkbox"
                                      value=""
                                      id="flexCheckChecked"
                                    />
                                  </td>
                                  <td className="active">January</td>
                                  <td className="active">01993309</td>
                                  <td className="active">01993309</td>
                                  <td className="active">01993309</td>
                                  <td className="active">01993309</td>
                                  <td className="active">01993309</td>
                                  <td className="active">01993309</td>
                                  <td className="active p-0">
                                    <table className="table-box-main sub-table">
                                      <tr>
                                        <td>01993309</td>
                                        <td>01993309</td>
                                        <td>01993309</td>
                                      </tr>
                                    </table>
                                  </td>
                                  <td className="active p-0">
                                    <table className="table-box-main sub-table">
                                      <tr>
                                        <td>01993309</td>
                                        <td>01993309</td>
                                        <td>01993309</td>
                                        <td>01993309</td>
                                        <td>01993309</td>
                                        <td>01993309</td>
                                        <td>01993309</td>
                                        <td>01993309</td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <Index />
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

export default ReportTransactions;
