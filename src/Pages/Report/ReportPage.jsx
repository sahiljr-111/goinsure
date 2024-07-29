import React, { useContext, useState } from "react";
import {
  Tabs,
  Avatar,
  List,
  Button,
  Table,
  SelectPicker,
  Dropdown,
} from "rsuite";
import { User, ArrowRight2, Add, Filter, ArrowUp2 } from "iconsax-react";
import UserDetail from "../../Components/Common/Sidebar/UserDetails/UserDetail";
import { ModelName } from "../../context/callingModelContext";
import MinimizeScreen from "../../Components/Common/Dashbord/Calldailog/MinimizeScreen";
import CommonSelect from "../../Components/Common/UI/CustomSelect";
import Time from "../../Components/Common/UI/TimePicker/Time";
import EditModal from "../../Components/Common/Report/EditModal";
import ReportByAgent from "../../Components/Common/Report/ReportTables/ReportByAgent";
import RetentionReport from "../../Components/Common/Report/ReportTables/RetentionReport";
import ReportByMonth from "../../Components/Common/Report/ReportTables/ReportByMonth";
import { MdDelete } from "react-icons/md";
import DatePickerInput from "../../Components/Common/UI/DatePicker/DatePickerInput";
import DateInput from "../../Components/Common/UI/DatePicker/DateInput";
import DropdownMenu from "rsuite/esm/Dropdown/DropdownMenu";
import AddCustMenuModal from "../../Components/Common/Report/AddCustMenuModal";

const CustomMenu = ({ className, children, onClick, ...props }) => {
  return (
    <div>
      <DropdownMenu className="bg-transperent shadow-none px-1" {...props}>
        {props.props.data.map((res) => (
          <li className="py-1 cursor-pointer dropdownMenu px-1">{res.label}</li>
        ))}
      </DropdownMenu>

      {/* Custom Button at the end of the menu */}
      <div className="px-2">
        <button
          onClick={onClick}
          className="button-fill d-flex align-items-center justify-content-center gap-2 commonButtonDesign w-100"
        >
          <Add size="25" color="#FFF" /> Create New
        </button>
      </div>
    </div>
  );
};

const customDataViewMenus = [
  { label: "My custom view 1", value: "My custom view 1" },
  { label: "My custom view 2", value: "My custom view 2" },
  { label: "My custom view 3", value: "My custom view 3" },
];

const Report = () => {
  const [userOpen, setUserOpen] = useState(false);
  const [openDialPad, setOpenDialPad] = React.useState(false);
  const [custDataDesign, setCustDataDesign] = React.useState(false);
  const [openComposedMail, setOpenComposedMail] = React.useState(false);
  const [activeInboxTab, setActiveInboxTab] = React.useState("All");
  const [activeTab, setActiveTab] = useState("1");

  const { modelName } = useContext(ModelName);

  const hundleOpen = (e) => {
    e.preventDefault();
    if (userOpen === true) {
      setUserOpen(false);
    } else {
      setUserOpen(true);
    }
  };
  const handleAddCustDataView = () => {
    setCustDataDesign(true);
  };

  const policies = [
    { label: "Report by Agent", value: "Report by Agent" },
    { label: "Report by Month", value: "Report by Month" },
    { label: "Retention Report", value: "Retention Report" },
  ];

  const [selectedReport, setSelectedReport] = useState("Report by Agent");
  const [activeTabButton, setActiveTabButton] = useState("tab1");
  const [accordianExpend, setAccordianExpend] = useState(false);
  const [filterValues, setFilterValues] = useState([
    { custValue1: "", custValue2: "" },
  ]);

  const handleAddFilter = () => {
    setFilterValues([...filterValues, { custValue1: "", custValue2: "" }]);
  };

  const handleRemoveFilter = (id) => {
    const updatedDdata = filterValues.filter((res, index) => index !== id);
    setFilterValues(updatedDdata);
  };

  const handleReportChange = (value) => {
    setSelectedReport(value);
  };
  // Step 2: Event handler to update the state
  const handleTabClick = (tab) => {
    setActiveTabButton(tab);
  };

  const data = [
    "Report by Agent",
    "Report by Month",
    "Retention Report",
  ].map((item) => ({ label: item, value: item }));

  return (
    <>
      <section className="gw-content-body transition-ease position-relative">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 gw-body-col-12">
              {/* <div
                className={`gsw-user-details-click gsw-userinfo-click position-fixed top-50 ${
                  userOpen === true ? "active" : ""
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
                {/* User Details Sidebar start */}
                <div
                  className={`gsw-user-details-wrapper scrollbar d-flex flex-column ${
                    userOpen === true ? "active" : ""
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
                {/* User Details Sidebar End */}

                <div className="gsw-globel-tab flex-grow-1">
                  <div className="defult-page-frame h-100">
                    <div className="card border-0 bg-transparent box-main-card overflow-hidden">
                      <div
                        className={`accrodian_expended position-relative ${
                          accordianExpend ? "active" : ""
                        }`}
                      >
                        <div className="card-header">
                          <h5>Report for Transactions of Premium</h5>
                          <div className="d-flex align-items-center gap-3 input-main-box">
                            <div className="top-input">
                              <CommonSelect
                                inputWrapperClassName="rounded-3 w-100 outline-0"
                                wrapperClassName="rounded-3 w-100 outline-0"
                                data={data}
                                className="w-100 rounded-3 outline-0"
                                searchable={false}
                                cleanable={false}
                                placeholder="Report type"
                                onChange={handleReportChange}
                                value={selectedReport}
                              />
                            </div>
                            <div className="top-input">
                              <CommonSelect
                                inputWrapperClassName="rounded-3 w-100 outline-0"
                                wrapperClassName="rounded-3 w-100 outline-0"
                                // options={policies}
                                className="w-100 rounded-3 outline-0"
                                searchable={false}
                                placeholder="Type of Date"
                              />
                            </div>
                            <div className="time-lable top-input">
                              <DateInput />
                            </div>
                            <div className="time-lable top-input">
                              <DateInput />
                            </div>
                            <div className="top-input">
                              <CommonSelect
                                inputWrapperClassName="rounded-3 w-100 outline-0"
                                wrapperClassName="rounded-3 w-100 outline-0"
                                // options={policies}
                                className="w-100 rounded-3 outline-0"
                                searchable={false}
                                placeholder="Carrier"
                              />
                            </div>
                            <div className="top-input">
                              <CommonSelect
                                inputWrapperClassName="rounded-3 w-100 outline-0"
                                wrapperClassName="rounded-3 w-100 outline-0"
                                // options={policies}
                                className="w-100 rounded-3 outline-0"
                                searchable={false}
                                placeholder="Product"
                              />
                            </div>
                            <div className="top-input">
                              <CommonSelect
                                inputWrapperClassName="rounded-3 w-100 outline-0"
                                wrapperClassName="rounded-3 w-100 outline-0"
                                // options={policies}
                                className="w-100 rounded-3 outline-0"
                                searchable={false}
                                placeholder="Product Type"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 pb-0">
                          {/* custom filter start */}
                          {filterValues.map((res, index) => (
                            <div
                              key={index}
                              className="d-flex align-items-end gap-3 input-border border-top-0 px-3 pb-4"
                            >
                              <CommonSelect
                                inputWrapperClassName="rounded-3 w-100 outline-0"
                                wrapperClassName="rounded-3 w-100 outline-0"
                                // options={policies}
                                className="w-100 rounded-3 outline-0"
                                searchable={false}
                                label="Custom Field Name"
                                placeholder="Select Custom Field Name"
                              />

                              <CommonSelect
                                inputWrapperClassName="rounded-3 w-100 outline-0"
                                wrapperClassName="rounded-3 w-100 outline-0"
                                // options={policies}
                                className="w-100 rounded-3 outline-0"
                                searchable={false}
                                label="Custom Field Value"
                                placeholder="Select Custom Field Value"
                              />
                              {index === 0 ? (
                                <button
                                  onClick={handleAddFilter}
                                  className="button-fill d-flex align-items-center justify-content-center gap-2 add-bnt"
                                >
                                  <Add size="25" color="#FFF" /> Add Custom
                                  Filter
                                </button>
                              ) : (
                                <button
                                  onClick={() => handleRemoveFilter(index)}
                                  className="button-fill d-flex align-items-center justify-content-center gap-2 remove-bnt"
                                >
                                  <MdDelete size="25" color="#FFF" /> Remove
                                  Filter
                                </button>
                              )}
                            </div>
                          ))}
                          {/* custom filter end */}

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
                                // options={policies}
                                className="w-100 rounded-3 outline-0"
                                searchable={false}
                                placeholder="Preferences"
                              />
                            </div>
                            <div className="d-flex align-items-center gap-3 seting-select">
                              <CommonSelect
                                inputWrapperClassName="rounded-3 outline-0 d-flex align-items-center stopFocus"
                                wrapperClassName="rounded-3 outline-0 d-flex align-items-center"
                                // options={policies}
                                className="w-100 rounded-3 outline-0 d-flex align-items-center"
                                searchable={false}
                                renderMenu={(menu) => {
                                  return (
                                    <CustomMenu
                                      {...menu}
                                      onClick={handleAddCustDataView}
                                    />
                                  );
                                }}
                                onChange={(val) => console.log(val)}
                                data={customDataViewMenus}
                                placeholder="Custom Data View"
                              />
                              <button className="button-fill add-bnt">
                                Export
                              </button>
                            </div>
                          </div>
                          {/* togle button */}
                          <div className="d-flex justify-content-between align-items-center input-border border-top-0 py-2 px-3 ">
                            <div className="px-2 pb-3">
                              <div className="d-flex align-items-center gap-2">
                                <h4 className="green-title">
                                  Total Annual Premium:-
                                </h4>
                                <h4 className="green-title pe-3">
                                  USD 120,000
                                </h4>
                                <h4 className="green-title">
                                  Total Policies Count:
                                </h4>
                                <h4 className="green-title">2589</h4>
                              </div>
                            </div>

                            <div className="tab-buttons d-flex align-items-center gap-2 switch-buttons-main">
                              <button
                                className={`tab-button switch-button  ${
                                  activeTabButton === "tab1" ? "active" : ""
                                }`}
                                onClick={() => handleTabClick("tab1")}
                              >
                                <img
                                  src="/Images/table.svg"
                                  width={"18px"}
                                  alt="Table"
                                />
                                <p className="mb-0">Table</p>
                              </button>
                              <button
                                className={`tab-button switch-button  ${
                                  activeTabButton === "tab2" ? "active" : ""
                                }`}
                                onClick={() => handleTabClick("tab2")}
                              >
                                <img
                                  src="/Images/line-chart.svg"
                                  width={"18px"}
                                  alt="Graph"
                                />
                                <p className="mb-0">Graph</p>
                              </button>
                            </div>

                            <button
                              onClick={() =>
                                setAccordianExpend(!accordianExpend)
                              }
                              className={`accordianAerowButtn ${
                                accordianExpend ? "active" : ""
                              }`}
                            >
                              <ArrowUp2 size="20" color="#fff" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="card-body px-0 pb-0">
                        <div
                          className={
                            selectedReport === "Report by Agent"
                              ? "d-block"
                              : "d-none"
                          }
                        >
                          <ReportByAgent
                            activeTabButton={activeTabButton}
                            handleTabClick={handleTabClick}
                          />
                        </div>
                        <div
                          className={
                            selectedReport === "Report by Month"
                              ? "d-block"
                              : "d-none"
                          }
                        >
                          <ReportByMonth
                            activeTabButton={activeTabButton}
                            handleTabClick={handleTabClick}
                          />
                        </div>
                        <div
                          className={
                            selectedReport === "Retention Report"
                              ? "d-block"
                              : "d-none"
                          }
                        >
                          <RetentionReport
                            activeTabButton={activeTabButton}
                            handleTabClick={handleTabClick}
                          />
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
      <AddCustMenuModal open={custDataDesign} setOpen={setCustDataDesign} />
      {/* <IncomingCall /> */}
    </>
  );
};

export default Report;
