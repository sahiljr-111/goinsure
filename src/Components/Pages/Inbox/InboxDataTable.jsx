import { Edit2, Eye } from "iconsax-react";
import React from "react";
import { Button, ButtonToolbar } from "rsuite";

const PolicyDetailData = [
  {
    Id: 1,
    Verify: true,
    PolicyNumber: "Sale John john@quickwayinfosystems.in Austin Henriod",
    PolicyType: "+919265******",
    Carrier: "AIG",
    Product: "AIG Life",
    ProductType: "Level",
    Premium: 1000,
    BenefitAmount: 100000,
    EffectiveDate: "01/01/2021",
    PaidToDate: "01/01/2021",
    AppStatus: true,
    PolicyStatus: "Active",
    PolicyReason: true,
    PastDue: 19,
    DaysBeforePremium: 14,
    Action: "View",
  },
  {
    Id: 2,
    Verify: false,
    PolicyNumber: "Sale John john@quickwayinfosystems.in Austin Henriod",
    PolicyType: "+919265******",
    Carrier: "AIG",
    Product: "AIG Life",
    ProductType: "Level2",
    Premium: 1000,
    BenefitAmount: 100000,
    EffectiveDate: "01/01/2021",
    PaidToDate: "01/01/2021",
    AppStatus: true,
    PolicyStatus: "InActive",
    PolicyReason: true,
    PastDue: 18,
    DaysBeforePremium: 24,
    Action: "View",
  },
  {
    Id: 3,
    Verify: true,
    PolicyNumber: "Sale John john@quickwayinfosystems.in Austin Henriod",
    PolicyType: "+919265******",
    Carrier: "AIG",
    Product: "AIG Life",
    ProductType: "Level3",
    Premium: 1000,
    BenefitAmount: 100000,
    EffectiveDate: "01/01/2021",
    PaidToDate: "01/01/2021",
    AppStatus: true,
    PolicyStatus: "Active",
    PolicyReason: true,
    PastDue: 21,
    DaysBeforePremium: 10,
    Action: "View",
  },
  {
    Id: 4,
    Verify: false,
    PolicyNumber: "Sale John john@quickwayinfosystems.in Austin Henriod",
    PolicyType: "+919265******",
    Carrier: "AIG",
    Product: "AIG Life",
    ProductType: "Level4",
    Premium: 1000,
    BenefitAmount: 100000,
    EffectiveDate: "01/01/2021",
    PaidToDate: "01/01/2021",
    AppStatus: true,
    PolicyStatus: "Future",
    PolicyReason: true,
    PastDue: 20,
    DaysBeforePremium: 26,
    Action: "View",
  },
];
const InboxDataTable = ({ openWithPolicy, setOpenWithPolicyss }) => {
  return (
    <>
      {" "}
      <table className="table mb-3">
        <thead>
          <tr>
            <th className="text-center">Mails</th>
            <th className="text-uppercase text-center">SMS</th>
            <th className="text-uppercase">CALL LOGS</th>
          </tr>
        </thead>
        <tbody>
          {PolicyDetailData?.length !== 0 ? (
            PolicyDetailData?.map((res, i) => {
              return (
                <tr key={i}>
                  <td className="text-center">{res.Id}</td>
                  <td className="text-center">{res.PolicyNumber}</td>
                  <td>
                    {res.PolicyType}
                    {/* <a href="#" onClick={() => setOpenWithPolicy(true)}></a> */}
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
    </>
  );
};

export default InboxDataTable;
