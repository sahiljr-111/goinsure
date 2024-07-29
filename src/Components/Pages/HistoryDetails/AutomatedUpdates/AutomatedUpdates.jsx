import React from "react";
import AutomatedUpdatesTable from "./AutomatedUpdatesTable";

const AutomatedUpdates = ({
  openTab,
  historyDataForSingleContact,
  setHistoryDataForSingleContact,
  getUserdata,
  getSingleContactNotesDetailData,
  getSingleContactPolicyData,
  getAllHistoryData,
  getFileData,
  limit,
  setLimit,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <>
      <div className="tab-content" id="inbox-inner-tabsContent">
        <div
          className={`tab-pane fade ${
            openTab === "Automated" ? "show active" : ""
          }`}
          id="Automatedupdates-tab-pane"
          role="tabpanel"
          aria-labelledby="Automatedupdates-tab"
          tabIndex="0"
        >
          <div className="gsw-globel-table call-logs-table">
            <div className="table-responsive mb-3 scrollbar">
              <AutomatedUpdatesTable
                historyDataForSingleContact={historyDataForSingleContact}
                setHistoryDataForSingleContact={setHistoryDataForSingleContact}
                getUserdata={getUserdata}
                getSingleContactNotesDetailData={
                  getSingleContactNotesDetailData
                }
                getSingleContactPolicyData={getSingleContactPolicyData}
                getAllHistoryData={getAllHistoryData}
                getFileData={getFileData}
                limit={limit}
                setLimit={setLimit}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AutomatedUpdates;
