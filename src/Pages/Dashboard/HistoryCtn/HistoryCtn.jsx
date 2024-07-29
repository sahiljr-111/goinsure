import React, { useEffect, useState } from "react";
import {
  Filter,
  ArrowRotateLeft,
  RefreshCircle,
  Setting2,
  Eye,
} from "iconsax-react";
import { Input, SelectPicker, Button, DatePicker } from "rsuite";
import ManualUpdates from "../../../Components/Pages/HistoryDetails/ManualUpdate/ManualUpdates";
import AutomatedUpdates from "../../../Components/Pages/HistoryDetails/AutomatedUpdates/AutomatedUpdates";
import { useDispatch } from "react-redux";
import { getSingleContactHistoryData } from "../../../Redux/Actions/HistoryAction";

const data = [
  "Eugenia",
  "Bryan",
  "Linda",
  "Nancy",
  "Lloyd",
  "Alice",
  "Julia",
  "Albert",
].map((item) => ({ label: item, value: item }));

const HistoryCtn = ({
  userDetailData,
  setUserDetailData,
  activeTab,
  setActiveTab,
  getUserdata,
  getSingleContactNotesDetailData,
  getSingleContactPolicyData,
  getFileData,
}) => {
  const [openTab, setOpenTab] = useState("Manual");
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [
    historyDataForSingleContact,
    setHistoryDataForSingleContact,
  ] = React.useState({});
  const getAllHistoryData = () => {
    dispatch(
      getSingleContactHistoryData(
        userDetailData?.data?._id,
        openTab,
        currentPage,
        limit
      )
    ).then((res) => {
      setHistoryDataForSingleContact(res);
    });
  };

  useEffect(() => {
    getAllHistoryData();
  }, [userDetailData, openTab, activeTab, currentPage, limit]);
  return (
    <>
      <div className="time-filter d-flex align-items-center justify-content-between flex-wrap gap-2">
        {/* <div className="d-flex align-items-center calls-status-list flex-wrap policy-tracker-list">
          <h5 className="m-0">Payment Date</h5>
          <div className="form-group">
            <DatePicker format="dd-MM-yyyy" />
          </div>
          <div className="form-group">
            <DatePicker format="dd-MM-yyyy" />
          </div>
          <div className="form-group">
            <SelectPicker
              className="select-toggle-in"
              id="policy_id"
              data={data}
              searchable={false}
              placeholder="Policy"
            />
          </div>
          <div className="form-group">
            <SelectPicker
              className="select-toggle-in"
              id="policy_status"
              data={data}
              searchable={false}
              placeholder="Policy status"
            />
          </div>
        </div> */}
        <div className="d-flex align-items-center return-btns">
          <Button
            type="button"
            className="btn flex-shrink-1 flex-lg-shrink-0 ptfilter-btn"
          >
            <Filter size="16" color="#FFF" variant="Outline" /> Filter
          </Button>
          <Button
            type="button"
            className="btn flex-shrink-1 flex-lg-shrink-0 return-btn d-flex align-items-center justify-content-center ptclear-btn"
          >
            <ArrowRotateLeft size="20" color="#667085" variant="Outline" />
          </Button>
        </div>
      </div>
      <div className="updates-wrap d-flex align-items-center flex-wrap">
        <ul
          className="gsw-globel-filter-btn mb-0 p-0 list-unstyled d-flex flex-wrap align-items-center"
          id="inbox-inner-tabs"
          role="tablist"
        >
          <li role="presentation">
            <Button
              className={`btn ${openTab === "Manual" ? "active" : ""}`}
              id="Manualupdates-tab"
              data-bs-toggle="tab"
              data-bs-target="#Manualupdates-tab-pane"
              type="button"
              role="tab"
              aria-controls="Manualupdates-tab-pane"
              aria-selected="true"
              onClick={() => setOpenTab("Manual")}
            >
              <RefreshCircle size="16" color="#000000" variant="Bold" /> Manual
              updates
            </Button>
          </li>
          <li role="presentation">
            <Button
              className={`btn ${openTab === "Automated" ? "active" : ""}`}
              id="Automatedupdates-tab"
              data-bs-toggle="tab"
              data-bs-target="#Automatedupdates-tab-pane"
              type="button"
              role="tab"
              aria-controls="Automatedupdates-tab-pane"
              aria-selected="false"
              onClick={() => setOpenTab("Automated")}
            >
              <Setting2 size="16" color="#000000" variant="Bold" /> Automated
              updates (by system)
            </Button>
          </li>
        </ul>
      </div>
      <div className="tab-content" id="inbox-inner-tabsContent">
        {openTab === "Manual" && (
          <ManualUpdates
            openTab={openTab}
            historyDataForSingleContact={historyDataForSingleContact}
            setHistoryDataForSingleContact={setHistoryDataForSingleContact}
            getUserdata={getUserdata}
            getSingleContactNotesDetailData={getSingleContactNotesDetailData}
            getSingleContactPolicyData={getSingleContactPolicyData}
            getAllHistoryData={getAllHistoryData}
            getFileData={getFileData}
            limit={limit}
            setLimit={setLimit}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
        {openTab === "Automated" && (
          <AutomatedUpdates
            openTab={openTab}
            historyDataForSingleContact={historyDataForSingleContact}
            setHistoryDataForSingleContact={setHistoryDataForSingleContact}
            getUserdata={getUserdata}
            getSingleContactNotesDetailData={getSingleContactNotesDetailData}
            getSingleContactPolicyData={getSingleContactPolicyData}
            getAllHistoryData={getAllHistoryData}
            getFileData={getFileData}
            limit={limit}
            setLimit={setLimit}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </>
  );
};

export default HistoryCtn;
