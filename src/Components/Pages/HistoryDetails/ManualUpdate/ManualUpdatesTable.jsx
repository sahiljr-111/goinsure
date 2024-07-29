import { Eye } from "iconsax-react";
import React, { useEffect } from "react";
import HistoryViewModal from "../../../Common/UI/Modal/HistoryViewModal";
import CustomPagination from "../../../Common/UI/CustomPagination/Index";
const formatDateTime = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
};
const ManualUpdatesTable = ({
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
  useEffect(() => {
    setCurrentPage(1);
  }, [limit]);
  return (
    <>
      <table className="table mb-3">
        <thead>
          <tr>
            {/* <th className="text-center">#</th> */}
            <th className="text-uppercase">ID</th>
            <th className="text-uppercase">UPDATED AT</th>
            <th className="text-uppercase">HISTORABLE TABLE</th>
            <th className="text-uppercase">ACTION TYPE</th>
            <th className="text-uppercase">DONE BY</th>
            <th className="text-uppercase text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {historyDataForSingleContact?.data?.length !== 0 ? (
            historyDataForSingleContact?.data?.map((res, i) => {
              return (
                <tr key={i}>
                  {/* <td className="text-center">{i + 1}</td> */}
                  <td>{res.autoGenrateId}</td>
                  <td>{formatDateTime(res.updatedAt)}</td>
                  <td>{res.historTable}</td>
                  <td>{res.actionType}</td>
                  <td>{res?.userId?.name}</td>
                  <td className="text-center">
                    <span
                      className={`d-block text-center view-btn `}
                      data-bs-toggle={"modal"}
                      data-bs-target={"#updateView"}
                      style={{
                        pointerEvents: "auto",
                      }}
                    >
                      <HistoryViewModal
                        res={res}
                        getUserdata={getUserdata}
                        getSingleContactNotesDetailData={
                          getSingleContactNotesDetailData
                        }
                        getSingleContactPolicyData={getSingleContactPolicyData}
                        getAllHistoryData={getAllHistoryData}
                        getFileData={getFileData}
                      />
                    </span>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={17} className="text-center bg-secondary text-light">
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <CustomPagination
        totalCount={historyDataForSingleContact?.pagination?.totalItems}
        limit={limit}
        setLimit={setLimit}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default ManualUpdatesTable;
