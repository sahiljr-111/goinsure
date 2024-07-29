import React, { useState } from "react";
import CustomPagination from "../../../Common/UI/CustomPagination/Index";
import CommonSelect from "../../../Common/UI/CustomSelect";
import { Input } from "rsuite";
import DateInput from "../../../Common/UI/DatePicker/DateInput";

const CallTable = () => {
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      {/* <div className="globalSubHeader d-flex justify-content-start align-items-center gap-2">
        <button className="globalCarrerMenu active">ALL</button>
        <button className="globalCarrerMenu">
          Drafts
          <div className="NotificationMark">15</div>
        </button>
        <button className="globalCarrerMenu">Sent</button>
        <button className="globalCarrerMenu">Received</button>
        <button className="globalCarrerMenu">Templates</button>
      </div> */}
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
              placeholder="Email Subject"
            />
          </div>
          <div className="top-input">
            <CommonSelect
              inputWrapperClassName="rounded-3 w-100 outline-0"
              wrapperClassName="rounded-3 w-100 outline-0"
              // options={policies}
              className="w-100 rounded-3 outline-0"
              searchable={false}
              placeholder="Email direction"
            />
          </div>
          <div className="top-input">
            <CommonSelect
              inputWrapperClassName="rounded-3 w-100 outline-0"
              wrapperClassName="rounded-3 w-100 outline-0"
              // options={policies}
              className="w-100 rounded-3 outline-0"
              searchable={false}
              placeholder="Mail type"
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
              <th className="text-uppercase">STATUS</th>
              <th className="text-uppercase">AFTER CALL STATUS</th>
              <th className="text-uppercase">DURATION</th>
              <th className="text-uppercase">START TIME</th>
              <th className="text-uppercase">END TIME</th>
              <th className="text-uppercase">VOICE MAIL</th>
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
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 8L10 6"
                      stroke="#14AC48"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7 12C3 12 3 13.79 3 16V17C3 19.76 3 22 8 22H16C20 22 21 19.76 21 17V16C21 13.79 21 12 17 12C16 12 15.72 12.21 15.2 12.6L14.18 13.68C13 14.94 11 14.94 9.81 13.68L8.8 12.6C8.28 12.21 8 12 7 12Z"
                      stroke="#14AC48"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5 11.9991V7.99906C5 5.98906 5 4.32906 8 4.03906"
                      stroke="#14AC48"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19 11.9991V7.99906C19 5.98906 19 4.32906 16 4.03906"
                      stroke="#14AC48"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </td>
                <td>John Doe</td>
                <td>
                  <div className="d-flex justify-content-start">
                    <div className="tag-success">Completed</div>
                  </div>
                </td>
                <td>SALE</td>
                <td>1m 48s</td>
                <td>2024-01-24 10:40:02</td>
                <td>2024-01-24 10:41:54</td>
                <td>
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2797_24161)">
                      <path
                        d="M10.5 0C4.97723 0 0.5 4.47715 0.5 10C0.5 15.5229 4.97723 20 10.5 20C16.0228 20 20.5 15.5229 20.5 10C20.5 4.47715 16.0228 0 10.5 0ZM13.9563 10.5301L8.95625 13.6551C8.85508 13.7182 8.74004 13.75 8.625 13.75C8.52078 13.75 8.41641 13.7241 8.32195 13.6716C8.12328 13.5614 8 13.3523 8 13.125V6.875C8 6.64766 8.12328 6.43859 8.32195 6.32844C8.52063 6.21766 8.76355 6.22437 8.95625 6.34492L13.9563 9.46992C14.1389 9.58437 14.25 9.78457 14.25 10C14.25 10.2154 14.1389 10.4157 13.9563 10.5301Z"
                        fill="#343434"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2797_24161">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
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
    </>
  );
};

export default CallTable;
