import React from "react";
import ManualUpdatesTable from "./ManualUpdatesTable";

const ManualUpdates = ({
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
  setCurrentPage
}) => {
  return (
    <>
      {" "}
      <div className="tab-content" id="inbox-inner-tabsContent">
        <div
          className={`tab-pane fade ${
            openTab === "Manual" ? "show active" : ""
          }`}
          id="Manualupdates-tab-pane"
          role="tabpanel"
          aria-labelledby="Manualupdates-tab"
          tabIndex="0"
        >
          <div className="gsw-globel-table call-logs-table">
            <div className="table-responsive mb-3 scrollbar">
              <ManualUpdatesTable
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

export default ManualUpdates;
