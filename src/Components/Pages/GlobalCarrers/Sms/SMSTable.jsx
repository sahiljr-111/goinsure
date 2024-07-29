import React, { useState } from "react";
import CustomPagination from "../../../Common/UI/CustomPagination/Index";
import CommonSelect from "../../../Common/UI/CustomSelect";
import { Input } from "rsuite";
import DateInput from "../../../Common/UI/DatePicker/DateInput";

const SMSTable = () => {
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <div className="globalSubHeader d-flex justify-content-start align-items-center gap-2">
        <button className="globalCarrerMenu active">ALL</button>
        <button className="globalCarrerMenu">
          Sent
          <div className="NotificationMark">15</div>
        </button>
        <button className="globalCarrerMenu">Received</button>
        <button className="globalCarrerMenu">Templates</button>
        <button className="globalCarrerMenu">Failed Sms</button>
      </div>
      <div className="filterByName row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Name</label>
            <Input
              type="text"
              placeholder="Enter Name"
              id="Name"
              name="Name"
              className="form-control"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Policy Number</label>
            <Input
              type="text"
              placeholder="Enter Policy Number"
              id="PolicyNumber"
              name="PolicyNumber"
              className="form-control"
            />
          </div>
        </div>
      </div>
      <div className="filterByName">
        <div className="d-flex align-items-center gap-3 input-main-box">
          <div className="form-label d-block">Filterby</div>
          <div className="top-input">
            <CommonSelect
              inputWrapperClassName="rounded-3 w-100 outline-0"
              wrapperClassName="rounded-3 w-100 outline-0"
              className="w-100 rounded-3 outline-0"
              searchable={false}
              cleanable={false}
              placeholder="Contact status"
            />
          </div>
          <div className="top-input">
            <CommonSelect
              inputWrapperClassName="rounded-3 w-100 outline-0"
              wrapperClassName="rounded-3 w-100 outline-0"
              // options={policies}
              className="w-100 rounded-3 outline-0"
              searchable={false}
              placeholder="SMS Template"
            />
          </div>
          <div className="top-input">
            <CommonSelect
              inputWrapperClassName="rounded-3 w-100 outline-0"
              wrapperClassName="rounded-3 w-100 outline-0"
              // options={policies}
              className="w-100 rounded-3 outline-0"
              searchable={false}
              placeholder="SMS direction"
            />
          </div> 
          <div className="time-lable top-input">
            <DateInput placeholder="From - 24 mar,2024" />
          </div>
          <div className="time-lable top-input">
            <DateInput placeholder="To - 28 mar,2024" />
          </div>
        </div>
      </div>
      <div>
        <h4 className="p-3">All SMS</h4>
        <table className="table mb-3">
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th className="text-uppercase">DIRECTION</th>
              <th className="text-uppercase">USER NAME</th>
              <th className="text-uppercase">Message body</th>
              <th className="text-uppercase">Template name</th>
              <th className="text-uppercase">Contact status</th>
              <th className="text-uppercase">Time</th>
              <th className="text-uppercase">Status</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((res, i) => (
              <tr key={i}>
                <td className="text-center">{i + 1}</td>
                <td className="cursur-pointer">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2V8L14 6"
                      stroke="#14AC48"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 8L10 6"
                      stroke="#14AC48"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 12C3 12 3 13.79 3 16V17C3 19.76 3 22 8 22H16C20 22 21 19.76 21 17V16C21 13.79 21 12 17 12C16 12 15.72 12.21 15.2 12.6L14.18 13.68C13 14.94 11 14.94 9.81 13.68L8.8 12.6C8.28 12.21 8 12 7 12Z"
                      stroke="#14AC48"
                      strokeWidth="1.5"
                      stroke-miterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 11.9991V7.99906C5 5.98906 5 4.32906 8 4.03906"
                      stroke="#14AC48"
                      strokeWidth="1.5"
                      stroke-miterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19 11.9991V7.99906C19 5.98906 19 4.32906 16 4.03906"
                      stroke="#14AC48"
                      strokeWidth="1.5"
                      stroke-miterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </td>
                <td>John Doe</td>
                <td>Hey Test subject</td>
                <td>Template 1</td>
                <td>
                  <div className="d-flex justify-content-start">
                    <div className="tag-success">Sale </div>
                  </div>
                </td>
                <td>2024-01-24 10:40:02</td>
                <td>Delivered</td>
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
    </>
  );
};

export default SMSTable;
