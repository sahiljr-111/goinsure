import React from "react";
import {
  ReceiptItem,
  Box,
  CalendarRemove,
  Star,
  Activity,
  Crown1,
  Crown,
  Filter,
  ArrowRotateLeft,
} from "iconsax-react";
import { Button, Input, SelectPicker, DatePicker } from "rsuite";
import PolicyTrackerTable from "../../../Components/Pages/PolicyTrackerDetails/PolicyTrackerTable";
import PolicyCard from "../../../Components/Pages/PolicyTrackerDetails/PolicyCard";

const data = [
  "Eugenia",
  "Bryan",
  "Linda",
  "Nancy",
  "Lloyd",
  "Alice",
  "Julia",
  "Albert",
].map((item) => ({ label: item, value: item }));

const PolicyTrackerCtn = () => {
  return (
    <>
      <div className="time-filter d-flex align-items-center justify-content-between flex-wrap gap-2">
        <div className="d-flex align-items-center calls-status-list flex-wrap policy-tracker-list">
          <h5 className="m-0">Payment Date</h5>
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
              data={data}
              searchable={false}
              placeholder="Policy"
            />
          </div>
          <div className="form-group">
            <SelectPicker
              className="select-toggle-in"
              id="policy_status"
              data={data}
              searchable={false}
              placeholder="Policy status"
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
      <div className="d-flex policy-main-wrap gap-3">
        <div className="gsw-globel-table call-logs-table flex-grow-1">
          <div className="table-responsive mb-3 scrollbar">
            <PolicyTrackerTable />
          </div>
        </div>
        <div className="policy-active-wrap scrollbar">
          <PolicyCard
            className={""}
            title={"Policy 1"}
            status={"Active"}
            policyId={"GIW 2345768900"}
            productType={"Level"}
            policyReason={"Current"}
            pastDue={0}
            carrier={"Wellable"}
            policyStatus={"Active"}
            policyPremium={23.45}
            noOfPremiumPaid={10}
          />
          <PolicyCard
            className={"inactive"}
            title={"Policy 2"}
            status={"InActive"}
            policyId={"GIW 2345768900"}
            productType={"Level"}
            policyReason={"Current"}
            pastDue={0}
            carrier={"Wellable"}
            policyStatus={"InActive"}
            policyPremium={23.45}
            noOfPremiumPaid={10}
          />
          <PolicyCard
            className={"atrisk"}
            title={"Policy 3"}
            status={"At Risk"}
            policyId={"GIW 2345768900"}
            productType={"Level"}
            policyReason={"Current"}
            pastDue={0}
            carrier={"Wellable"}
            policyStatus={"Active"}
            policyPremium={23.45}
            noOfPremiumPaid={10}
          />
        </div>
      </div>
    </>
  );
};

export default PolicyTrackerCtn;
