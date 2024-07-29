import {
  Activity,
  Box,
  CalendarRemove,
  Crown,
  Crown1,
  ReceiptItem,
  Star,
} from "iconsax-react";
import React from "react";

const PolicyCard = ({
  className,
  title,
  status,
  policyId,
  productType,
  policyReason,
  pastDue,
  carrier,
  policyStatus,
  policyPremium,
  noOfPremiumPaid,
}) => {
  return (
    <>
      <div className={`policy-box ${className} mb-3`}>
        <div className="policy-titles d-flex align-items-center justify-content-between">
          <div className="policy-titles-inner">
            <h4>{title}</h4>
            <p>{policyId}</p>
          </div>
          <span className="badge text-bg-success fw-normal">{status}</span>
        </div>
        <div className="policy-info-list">
          <ul className="p-0 m-0">
            <li className=" d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center icon-e-wrap">
                <i className="icon-list-box">
                  <Box
                    className=""
                    size="16"
                    color="#737B89"
                    variant="Outline"
                  />
                </i>
                Product type
              </div>
              <span>{productType}</span>
            </li>
            <li className=" d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center icon-e-wrap">
                <i className="icon-list-box">
                  <ReceiptItem
                    className=""
                    size="16"
                    color="#737B89"
                    variant="Outline"
                  />
                </i>
                Policy reason
              </div>
              <span>{policyReason}</span>
            </li>
            <li className=" d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center icon-e-wrap">
                <i className="icon-list-box">
                  <CalendarRemove
                    className=""
                    size="16"
                    color="#737B89"
                    variant="Outline"
                  />
                </i>
                Past Due
              </div>
              <span>{pastDue} days</span>
            </li>
            <li className=" d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center icon-e-wrap">
                <i className="icon-list-box">
                  <Star
                    className=""
                    size="16"
                    color="#737B89"
                    variant="Outline"
                  />
                </i>
                Carrier
              </div>
              <span>{carrier}</span>
            </li>
            <li className=" d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center icon-e-wrap">
                <i className="icon-list-box">
                  <Activity
                    className=""
                    size="16"
                    color="#737B89"
                    variant="Outline"
                  />
                </i>
                Policy status
              </div>
              <span className={`${status === "Active" ? "active" : "active"} `}>
                {policyStatus}
              </span>
            </li>
            <li className=" d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center icon-e-wrap">
                <i className="icon-list-box">
                  <Crown1
                    className=""
                    size="16"
                    color="#737B89"
                    variant="Outline"
                  />
                </i>
                Policy Premium
              </div>
              <span>${policyPremium}</span>
            </li>
            <li className=" d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center icon-e-wrap">
                <i className="icon-list-box">
                  <Crown
                    className=""
                    size="16"
                    color="#737B89"
                    variant="Outline"
                  />
                </i>
                No. of Premium paid
              </div>
              <span>{noOfPremiumPaid}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PolicyCard;
