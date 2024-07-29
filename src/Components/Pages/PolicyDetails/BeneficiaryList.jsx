import React, { useState } from "react";
import { Input, Message, toaster } from "rsuite";

const BeneficiaryList = ({
  index,
  beneficiary,
  onDelete,
  onBeneficiaryChange,
  type,
  addPolicyDetailData,
  validation,
  setValidation,
}) => {
  const handleChange = (field, value) => {
    let validatedValue = value;

    // Validation for phone number (10 digits)
    if (field === "phone") {
      validatedValue = value.replace(/\D/g, ""); // Remove non-numeric characters
      if (validatedValue.length > 10) {
        validatedValue = validatedValue.slice(0, 10); // Limit to 10 digits
        toaster.push(
          <Message type="error" closable>
            <p className="fs-6">Phone number cannot exceed 10 digits.</p>
          </Message>,
          { placement: "topEnd", duration: 2000 }
        );
      }
    }
    if (field === "percentage") {
      validatedValue = value.replace(/\D/g, ""); // Remove non-numeric characters
      const percentageValue = parseInt(validatedValue, 10);
      if (percentageValue < 0 || percentageValue > 100) {
        toaster.push(
          <Message type="error" closable>
            <p className="fs-6">Percentage must be between 0 and 100.</p>
          </Message>,
          { placement: "topEnd", duration: 2000 }
        );
        validatedValue = ""; // Reset to empty if invalid
      }
    }
    onBeneficiaryChange(index, field, validatedValue);
  };
  return (
    <>
      <div className="beneficiary-details-wrap">
        <div className="beneficiary-details-title d-flex align-items-center justify-content-between">
          <h4>{index + 1}. Beneficiary details</h4>
          {type !== "View" && (
            <a
              href="#"
              className="delete-benefi"
              onClick={() => onDelete(index)}
            ></a>
          )}
        </div>
        <div className="beneficiary-details-form">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">First Name</label>
                <Input
                  type="text"
                  placeholder="Enter First name"
                  value={beneficiary.firstName}
                  onChange={(value) => handleChange("firstName", value)}
                  id="firstName"
                  name="firstName"
                  className={`form-control ${validation &&
                    addPolicyDetailData.beneficiaries[index].firstName === "" &&
                    "border border-danger"}`}
                  disabled={type === "View" ? true : false}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">Middle name</label>
                <Input
                  type="text"
                  placeholder="Enter Middle name"
                  value={beneficiary.middleName}
                  onChange={(value) => handleChange("middleName", value)}
                  id="middleName"
                  name="middleName"
                  className={`form-control ${validation &&
                    addPolicyDetailData.beneficiaries[index].middleName ===
                      "" &&
                    "border border-danger"}`}
                  disabled={type === "View" ? true : false}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <Input
                  type="text"
                  placeholder="Enter Last Name"
                  value={beneficiary.lastName}
                  onChange={(value) => handleChange("lastName", value)}
                  id="lastName"
                  name="lastName"
                  className={`form-control ${validation &&
                    addPolicyDetailData.beneficiaries[index].lastName === "" &&
                    "border border-danger"}`}
                  disabled={type === "View" ? true : false}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">Percentage</label>
                <Input
                  type="text"
                  placeholder="Enter Percentage"
                  value={beneficiary.percentage}
                  onChange={(value) => handleChange("percentage", value)}
                  id="percentage"
                  name="percentage"
                  className={`form-control ${validation &&
                    addPolicyDetailData.beneficiaries[index].percentage ===
                      "" &&
                    "border border-danger"}`}
                  disabled={type === "View" ? true : false}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label className="form-label">Email</label>
                <Input
                  type="email"
                  placeholder="Enter Email"
                  value={beneficiary.email}
                  onChange={(value) => handleChange("email", value)}
                  id="email"
                  name="email"
                  className={`form-control ${validation &&
                    addPolicyDetailData.beneficiaries[index].email === "" &&
                    "border border-danger"}`}
                  disabled={type === "View" ? true : false}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label className="form-label">Phone</label>
                <Input
                  type="number"
                  placeholder="Enter phone number"
                  value={beneficiary.phone}
                  onChange={(value) => handleChange("phone", value)}
                  id="phone"
                  name="phone"
                  className={`form-control ${validation &&
                    addPolicyDetailData.beneficiaries[index].phone === "" &&
                    "border border-danger"}`}
                  disabled={type === "View" ? true : false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeneficiaryList;
