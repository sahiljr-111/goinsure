import React, { useState } from "react";
import CustomPagination from "../../Components/Common/UI/CustomPagination/Index";
import HistoryViewModal from "../../Components/Common/UI/Modal/HistoryViewModal";
import { useDispatch } from "react-redux";

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
const History = () => {
  const [openTab, setOpenTab] = useState("Manual");
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [
    historyData,
    setHistoryData,
  ] = React.useState({});
  const getAllHistoryData = () => {
    dispatch(getHistoryData(currentPage, limit)).then((res) => {
      setHistoryData(res);
    });
  };

  useEffect(() => {
    getAllHistoryData();
  }, []);

  return (
    <>
      {" "}
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
            {historyData?.data?.length !== 0 ? (
              historyData?.data?.map((res, i) => {
                const isCreateAction = res.actionType === "Create";
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
                        className={`d-block text-center view-btn ${
                          isCreateAction ? "disabled" : ""
                        }`}
                        data-bs-toggle={!isCreateAction ? "modal" : ""}
                        data-bs-target={!isCreateAction ? "#updateView" : ""}
                        style={{
                          pointerEvents: isCreateAction ? "none" : "auto",
                        }}
                      >
                        <HistoryViewModal />
                      </span>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan={17}
                  className="text-center bg-secondary text-light"
                >
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <CustomPagination
          totalCount={10}
          limit={limit}
          setLimit={setLimit}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </>
    </>
  );
};

export default History;
