import React, { useState } from "react";
import Index from "../../UI/CustomPagination/Index";
import CommonTableReport from "./CommonTableReport";
import ReportAgent from "../../../../Pages/Report/ReportAgent";
import EditModal from "../EditModal";

function ReportByMonth({ activeTabButton, handleTabClick }) {
  const [open, setOpen] = React.useState(false);
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
      {/* <div className="d-flex justify-content-between align-items-center input-border border-top-0 py-1 px-3">
        <div className="px-2 pb-3">
          <div className="d-flex align-items-center gap-2">
            <h4 className="green-title">Total Annual Premium:-</h4>
            <h4 className="green-title pe-3">USD 120,000</h4>
            <h4 className="green-title">Total Policies Count:</h4>
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
              src="../../../../../public/Images/table.svg"
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
              src="../../../../../public/Images/line-chart.svg"
              width={"18px"}
              alt="Graph"
            />
            <p className="mb-0">Graph</p>
          </button>
        </div>
      </div> */}
      <h2 className="table-subtitle mx-3 pt-4">Report by Month</h2>

      <div className="input-border mx-3 my-3 rounded-4 p-3 report-agent-cards d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-3">
          {data.map((item, index) => (
            <div className="agent-card pe-3" key={index}>
              <p>{item.label}</p>
              <h5>{item.value}</h5>
            </div>
          ))}
        </div>

        <button  onClick={() => setOpen(true)} className="d-flex align-items-center gap-2 edit-btn border-0">
          <img
            src="../../../../../public/Images/edit.png"
            width="16px"
            height="16px"
            alt=""
          />
          <p className="border-bottom mb-0">Edit</p>
        </button>
      </div>

      {/* <div className="gsw-globel-table">
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
                <td className="active">1</td>
                <td className="active">$69.00</td>
                <td className="active">0</td>
                <td className="active">$0.00</td>
                <td className="active">0.00%</td>
                <td className="active">$0.00</td>
                <td className="active p-0">
                  <table className="table-box-main sub-table">
                    <tr>
                      <td>$0.00</td>
                      <td>0.00%</td>
                      <td>0.00%</td>
                    </tr>
                  </table>
                </td>
                <td className="active p-0">
                  <table className="table-box-main sub-table">
                    <tr>
                      <td>$0.00</td>
                      <td>0.00%</td>
                      <td>$0.00</td>
                      <td>00</td>
                      <td>000</td>
                      <td>000</td>
                      <td>000</td>
                      <td>00</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Index />
      </div> */}
      <div className="tab-content">
        {activeTabButton === "tab1" && (
          <div className="tab-pane">
            <CommonTableReport />
          </div>
        )}
        {activeTabButton === "tab2" && (
          <div className="tab-pane">
            <ReportAgent />
          </div>
        )}
      </div>
      <EditModal open={open} setOpen={setOpen} />
    </>
  );
}

export default ReportByMonth;
