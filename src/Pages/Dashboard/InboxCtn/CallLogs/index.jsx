import React from "react";
import CustomTable from "../../../../Components/Common/UI/CustomTable/index.jsx";
import { CallOutgoing, PlayCircle } from "iconsax-react";
import {
  Filter,
  ArrowRotateLeft,
  RefreshCircle,
  Setting2,
  Eye,
} from "iconsax-react";
import { Input, SelectPicker, Button, DatePicker } from "rsuite";

const CallLogs = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "id",
      },
      {
        Header: "DIRECTION",
        accessor: "direction",
      },
      {
        Header: "USER NAME",
        accessor: "userName",
      },
      {
        Header: "STATUS",
        accessor: "status",
      },
      {
        Header: "AFTER CALL STATUS",
        accessor: "afterCallStatus",
      },
      {
        Header: "DURATION",
        accessor: "duration",
      },
      {
        Header: "START TIME",
        accessor: "startTime",
      },
      {
        Header: "END TIME",
        accessor: "endTime",
      },
      {
        Header: "VOICE MAIL",
        accessor: "voiceMail",
      },
    ],
    []
  );

  const dummyData = (
    id,
    userName,
    status,
    afterCallStatus,
    duration,
    startTime,
    endTime
  ) => {
    return {
      id,
      direction: (
        <div className="d-flex justify-content-center">
          <CallOutgoing size="20" color="#14AC48" />
        </div>
      ),
      userName,
      status: (
        <>
          <span className="badge text-bg-success">Completed</span>
        </>
      ),
      afterCallStatus,
      duration,
      startTime,
      endTime,
      voiceMail: (
        <div className="d-flex justify-content-center">
          <PlayCircle size="20" color="#000" />
        </div>
      ),
    };
  };

  const data = React.useMemo(
    () => [
      dummyData(
        1,
        "John Doe",
        "Completed",
        "SALE",
        "1m 48s",
        "2024-01-24 10:40:02",
        "2024-01-24 10:41:54"
      ),
      dummyData(
        1,
        "John Doe",
        "Completed",
        "SALE",
        "1m 48s",
        "2024-01-24 10:40:02",
        "2024-01-24 10:41:54"
      ),
      dummyData(
        1,
        "John Doe",
        "Completed",
        "SALE",
        "1m 48s",
        "2024-01-24 10:40:02",
        "2024-01-24 10:41:54"
      ),
      dummyData(
        1,
        "John Doe",
        "Completed",
        "SALE",
        "1m 48s",
        "2024-01-24 10:40:02",
        "2024-01-24 10:41:54"
      ),
      dummyData(
        1,
        "John Doe",
        "Completed",
        "SALE",
        "1m 48s",
        "2024-01-24 10:40:02",
        "2024-01-24 10:41:54"
      ),
      dummyData(
        1,
        "John Doe",
        "Completed",
        "SALE",
        "1m 48s",
        "2024-01-24 10:40:02",
        "2024-01-24 10:41:54"
      ),
      dummyData(
        1,
        "John Doe",
        "Completed",
        "SALE",
        "1m 48s",
        "2024-01-24 10:40:02",
        "2024-01-24 10:41:54"
      ),
      dummyData(
        1,
        "John Doe",
        "Completed",
        "SALE",
        "1m 48s",
        "2024-01-24 10:40:02",
        "2024-01-24 10:41:54"
      ),
      dummyData(
        2,
        "Jane Smith",
        "Pending",
        "REFUND",
        "2m 20s",
        "2024-01-25 11:30:00",
        "2024-01-25 11:32:20"
      ),
      dummyData(
        3,
        "Alice Johnson",
        "In Progress",
        "SALE",
        "3m 15s",
        "2024-01-26 09:20:10",
        "2024-01-26 09:23:25"
      ),
      dummyData(
        4,
        "Bob Brown",
        "Cancelled",
        "REFUND",
        "0m 45s",
        "2024-01-27 14:10:05",
        "2024-01-27 14:10:50"
      ),
      dummyData(
        5,
        "Charlie Davis",
        "Completed",
        "SALE",
        "1m 30s",
        "2024-01-28 08:40:00",
        "2024-01-28 08:41:30"
      ),
    ],
    []
  );

  return (
    <>
      <div className="time-filter d-flex align-items-center justify-content-between flex-wrap gap-2">
        <div className="d-flex align-items-center calls-status-list flex-wrap policy-tracker-list">
          <h5 className="m-0">Filter by</h5>
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
              placeholder="Call Status"
            />
          </div>
          <div className="form-group">
            <SelectPicker
              className="select-toggle-in"
              id="policy_status"
              placeholder="Direction"
            />
          </div>
        </div>
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
      <div className="callLogs-tbale callLogs-tbale-mian">
        <CustomTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default CallLogs;
