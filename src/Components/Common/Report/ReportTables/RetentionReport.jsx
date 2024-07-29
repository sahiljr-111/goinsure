import React, { useState } from "react";
import CommonTableReport from "./CommonTableReport";
import RetentionReportChart from "./RetentionReportChart"
import EditModal from "../EditModal";

function RetentionReport({ activeTabButton, handleTabClick }) {
  const data = [
    {
      month: "2002 January",
      placedAP: "$2,483.88",
      missedFirstPremium: "$2,483.88",
      month2: "$2,483.88",
      month3: "$2,483.88",
      month4: "$2,483.88",
      month5: "$2,483.88",
      month6: "$2,483.88",
      month7: "$2,483.88",
      month8: "$2,483.88",
      month9: "$2,483.88",
      month9Percent: "$2,483.88",
      month10: "$2,483.88",
      month11: "$2,483.88",
      month12: "$2,483.88",
      month12Percent: "$2,483.88",
    },
    {
      month: "2002 January",
      placedAP: "$2,483.88",
      missedFirstPremium: "$2,483.88",
      month2: "$2,483.88",
      month3: "$2,483.88",
      month4: "$2,483.88",
      month5: "$2,483.88",
      month6: "$2,483.88",
      month7: "$2,483.88",
      month8: "$2,483.88",
      month9: "$2,483.88",
      month9Percent: "$2,483.88",
      month10: "$2,483.88",
      month11: "$2,483.88",
      month12: "$2,483.88",
      month12Percent: "$2,483.88",
    },
    {
      month: "2002 January",
      placedAP: "$2,483.88",
      missedFirstPremium: "$2,483.88",
      month2: "$2,483.88",
      month3: "$2,483.88",
      month4: "$2,483.88",
      month5: "$2,483.88",
      month6: "$2,483.88",
      month7: "$2,483.88",
      month8: "$2,483.88",
      month9: "$2,483.88",
      month9Percent: "$2,483.88",
      month10: "$2,483.88",
      month11: "$2,483.88",
      month12: "$2,483.88",
      month12Percent: "$2,483.88",
    },
    {
      month: "2002 January",
      placedAP: "$2,483.88",
      missedFirstPremium: "$2,483.88",
      month2: "$2,483.88",
      month3: "$2,483.88",
      month4: "$2,483.88",
      month5: "$2,483.88",
      month6: "$2,483.88",
      month7: "$2,483.88",
      month8: "$2,483.88",
      month9: "$2,483.88",
      month9Percent: "$2,483.88",
      month10: "$2,483.88",
      month11: "$2,483.88",
      month12: "$2,483.88",
      month12Percent: "$2,483.88",
    },
    {
      month: "2002 January",
      placedAP: "$2,483.88",
      missedFirstPremium: "$2,483.88",
      month2: "$2,483.88",
      month3: "$2,483.88",
      month4: "$2,483.88",
      month5: "$2,483.88",
      month6: "$2,483.88",
      month7: "$2,483.88",
      month8: "$2,483.88",
      month9: "$2,483.88",
      month9Percent: "$2,483.88",
      month10: "$2,483.88",
      month11: "$2,483.88",
      month12: "$2,483.88",
      month12Percent: "$2,483.88",
    },
    {
      month: "2002 January",
      placedAP: "$2,483.88",
      missedFirstPremium: "$2,483.88",
      month2: "$2,483.88",
      month3: "$2,483.88",
      month4: "$2,483.88",
      month5: "$2,483.88",
      month6: "$2,483.88",
      month7: "$2,483.88",
      month8: "$2,483.88",
      month9: "$2,483.88",
      month9Percent: "$2,483.88",
      month10: "$2,483.88",
      month11: "$2,483.88",
      month12: "$2,483.88",
      month12Percent: "$2,483.88",
    },
  ];

  const report = [
    { label: "Submitted Application", value: "200" },
    { label: "Placed Policies", value: "100" },
    { label: "Submitted. AP", value: "$120000" },
    { label: "Placed AP", value: "$60000" },
    { label: "Placement %", value: "50%" },
    { label: "Avg. AP", value: "600" },
    { label: "Retention (3month)", value: "75" },
    { label: "Placed Policy Type", value: "Level, Graded, ROP, Guaranteed" },
  ];
  const [open, setOpen] = React.useState(false);
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
      <h2 className="table-subtitle mx-3 pt-4">Retention report</h2>

      <div className="input-border mx-3 my-3 rounded-4 p-3 report-agent-cards d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-3">
          {report.map((item, index) => (
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
      {/* <div className="gsw-globel-table retention-repor-table">
        <div className="table-responsive mb-3 scrollbar">
          <table className="table-box-main">
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
                <th>Month</th>
                <th>Placed AP</th>
                <th>Missed First Premium</th>
                <th>2 Month</th>
                <th>3 Month</th>
                <th>4 Month</th>
                <th>5 Month</th>
                <th>6 Month</th>
                <th>7 Month</th>
                <th>8 Month</th>
                <th>9 Month</th>
                <th>9% Month</th>
                <th>10 Month</th>
                <th>11 Month</th>
                <th>12 Month</th>
                <th>12% Month</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="w-100px active">
                    <input
                      className="form-check-input checkbox-table"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                  </td>
                  <td>{item.month}</td>
                  <td>{item.placedAP}</td>
                  <td>{item.missedFirstPremium}</td>
                  <td>{item.month2}</td>
                  <td>{item.month3}</td>
                  <td>{item.month4}</td>
                  <td>{item.month5}</td>
                  <td>{item.month6}</td>
                  <td>{item.month7}</td>
                  <td>{item.month8}</td>
                  <td>{item.month9}</td>
                  <td>{item.month9Percent}</td>
                  <td>{item.month10}</td>
                  <td>{item.month11}</td>
                  <td>{item.month12}</td>
                  <td>{item.month12Percent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
       {activeTabButton === "tab1" && (
          <div className="tab-pane">
            <CommonTableReport />
          </div>
        )}
        {activeTabButton === "tab2" && (
          <div className="tab-pane">
            <RetentionReportChart />
          </div>
        )}
         <EditModal open={open} setOpen={setOpen} />
    </>
  );
}

export default RetentionReport;
