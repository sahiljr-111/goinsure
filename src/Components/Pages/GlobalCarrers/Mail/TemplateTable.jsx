import React, { useState } from "react";
import CustomPagination from "../../../Common/UI/CustomPagination/Index";

const TemplateTable = () => {
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div>
      <h4 className="p-3">All mails</h4>
      <table className="table mb-3">
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th className="text-uppercase">Template name</th>
            <th className="text-uppercase">SENT COUNT</th>
            <th className="text-uppercase">RESPONSE COUNT</th>
            <th className="text-uppercase">CATEGORY</th>
            <th className="text-uppercase">HTML BODY</th>
            <th className="text-uppercase">Created at</th>
            <th className="text-uppercase">Contact Status</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((res, i) => (
            <tr key={i}>
              <td className="text-center">{i + 1}</td>
              <td className="cursur-poi nter">MY template 1</td>
              <td>898</td>
              <td>767 </td>
              <td>Welcome</td>
              <td>Yes</td>
              <td>2024-01-24 10:40:02</td>
              <td>
                <svg
                  width="226"
                  height="8"
                  viewBox="0 0 226 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="226" height="8" rx="4" fill="#E6E7E8" />
                  <rect width="168" height="8" rx="4" fill="#047857" />
                </svg>
                75/100
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <CustomPagination
        totalCount={15}
        limit={limit}
        setLimit={setLimit}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default TemplateTable;
