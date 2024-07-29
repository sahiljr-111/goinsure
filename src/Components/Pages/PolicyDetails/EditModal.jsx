import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  Button,
  DatePicker,
  Drawer,
  Input,
  Message,
  SelectPicker,
  useToaster,
} from "rsuite";
import BeneficiaryList from "./BeneficiaryList";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getSingleContactPolicyDetailData,
  updatePolicyDetailforSingleContact,
} from "../../../Redux/Actions/PolicyDetailAction";
const carrierData = [
  "American Amicable",
  "AIG",
  "Aflac",
  "Mutual of Omaha",
  "Accendo",
  "Wellabe",
  "GTL",
  "Dental insurance",
].map((item) => ({ label: item, value: item }));
const ProductData = [
  "product 1",
  "product 2",
  "product 3",
  "product 4",
].map((item) => ({ label: item, value: item }));
const ProductTypeData = [
  "Level",
  "Graded",
  "Guaranteed Issue",
  "ROP",
].map((item) => ({ label: item, value: item }));
const VerifiedData = [
  { value: "Verified", label: true },
  { value: "Not Verified", label: false },
].map((item) => ({ label: item.value, value: item.label }));
const assignAgentData = [
  "Jones 1",
  "Jones 2",
  "Jones 3",
  "Jones 4",
  "Jones 5",
].map((item) => ({ label: item, value: item }));
const policyTypeData = ["Life Insurance ", "Medicare"].map((item) => ({
  label: item,
  value: item,
}));

const policyStatusData = [
  "Issued",
  "Active",
  "Not Taken",
  "Terminated",
].map((item) => ({ label: item, value: item }));

const policyReasonData = [
  "Canceled",
  "Lapsed",
  "Paid",
  "Past Due",
  "Pending First Premium",
  "Needs Attention",
  "Death Claim",
].map((item) => ({ label: item, value: item }));

const EditModal = ({
  open,
  handleEditClose,
  setEditOpen,
  policyData,
  policyDataForSingleContact,
  getSingleContactPolicyData,
  limit,
  setLimit,
  currentPage,
  setCurrentPage,
  activePolicyTab,
  setActivePolicyTab,
}) => {
  const toaster = useToaster();
  const [validation, setValidation] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [policyExists, setPolicyExists] = useState(false);
  const [addPolicyDetailData, setAddPolicyDetailData] = useState({
    policyType: null,
    carrier: null,
    product: null,
    productType: null,
    policyNumber: "",
    policyStatus: null,
    policyReason: null,
    benefitAmount: 0,
    policyPremium: 0,
    policyEffectiveDate: "",
    paidToDate: "",
    saleDate: "",
    pastDue: 0,
    daysBeforePremium: 0,
    contactId: "",
    assignedAgent: null,
    isVerified: false,
    beneficiaries: [],
  });
  const checkPolicyNumber = async (policyNumber) => {
    dispatch(findDublicatePolicyNumber(policyNumber)).then((res) => {
      if (res.success === true) {
        setPolicyExists(true);
        toaster.push(
          <Message type={"error"} closable>
            <p className="fs-6">{res.message}</p>
          </Message>,
          { placement: "topEnd", duration: 2000 }
        );
      }
    });
  };
  const handleChange = (value) => {
    setPolicyExists(false);
    setAddPolicyDetailData({
      ...addPolicyDetailData,
      policyNumber: value,
    });
    // setValidation(true);
  };

  const handleBlur = () => {
    if (addPolicyDetailData.policyNumber) {
      checkPolicyNumber(addPolicyDetailData.policyNumber);
    }
  };
  const hundleSubmit = (e) => {
    e.preventDefault();
    setValidation(true);
    const totalPercentage = addPolicyDetailData.beneficiaries.reduce(
      (sum, ben) => sum + parseFloat(ben.percentage || 0),
      0
    );
    if (totalPercentage > 100) {
      toaster.push(
        <Message type={"error"} closable>
          <p className="fs-6">Total percentage cannot exceed 100%</p>
        </Message>,
        { placement: "topEnd", duration: 2000 }
      );
    } else {
      if (validateBeneficiaries()) {
        if (!policyExists) {
          if (
            addPolicyDetailData.policyType !== null &&
            addPolicyDetailData.carrier !== null &&
            addPolicyDetailData.product !== null &&
            addPolicyDetailData.productType !== null &&
            addPolicyDetailData.policyNumber !== "" &&
            addPolicyDetailData.policyStatus !== null &&
            addPolicyDetailData.policyReason !== null &&
            addPolicyDetailData.benefitAmount !== 0 &&
            addPolicyDetailData.policyPremium !== 0 &&
            addPolicyDetailData.policyEffectiveDate !== "" &&
            addPolicyDetailData.paidToDate !== "" &&
            addPolicyDetailData.saleDate !== "" &&
            addPolicyDetailData.pastDue !== 0 &&
            addPolicyDetailData.assignedAgent !== null &&
            addPolicyDetailData.daysBeforePremium !== 0
          ) {
            dispatch(
              updatePolicyDetailforSingleContact(
                policyData._id,
                addPolicyDetailData
              )
            )
              .then((res) => {
                if (res.success === true) {
                  toaster.push(
                    <Message type={"success"} closable>
                      <p className="fs-6">{res.message}</p>
                    </Message>,
                    { placement: "topEnd", duration: 2000 }
                  );
                  getSingleContactPolicyData(policyData?.contactId);
                  setEditOpen(false);
                  setValidation(false);
                } else {
                  toaster.push(
                    <Message type={"warning"} closable>
                      <p className="fs-6">{res.message}</p>
                    </Message>,
                    { placement: "topEnd", duration: 2000 }
                  );
                }
              })
              .catch((err) => {
                toaster.push(
                  <Message type={"success"} closable>
                    <p className="fs-6">Server is not Responding.</p>
                  </Message>,
                  { placement: "topEnd", duration: 2000 }
                );
              });
          }
        }
      }
    }
  };
  // Add a new empty beneficiary
  const addBeneficiary = () => {
    setAddPolicyDetailData((prevState) => ({
      ...prevState,
      beneficiaries: [
        ...prevState.beneficiaries,
        {
          firstName: "",
          middleName: "",
          lastName: "",
          percentage: "",
          email: "",
          phone: "",
        },
      ],
    }));
  };

  // Delete a beneficiary by index
  const deleteBeneficiary = (index) => {
    setAddPolicyDetailData((prevState) => ({
      ...prevState,
      beneficiaries: prevState.beneficiaries.filter((_, i) => i !== index),
    }));
  };

  // Handle changes to a beneficiary's details
  const handleBeneficiaryChange = (index, field, value) => {
    setAddPolicyDetailData((prevState) => {
      const newBeneficiaries = [...prevState.beneficiaries];
      newBeneficiaries[index] = { ...newBeneficiaries[index], [field]: value };

      // Validate total percentage
      const totalPercentage = newBeneficiaries.reduce(
        (sum, ben) => sum + parseFloat(ben.percentage || 0),
        0
      );
      if (totalPercentage > 100) {
        toaster.push(
          <Message type={"error"} closable>
            <p className="fs-6">Total percentage cannot exceed 100%</p>
          </Message>,
          { placement: "topEnd", duration: 2000 }
        );
      }

      return { ...prevState, beneficiaries: newBeneficiaries };
    });
  };
  const validateBeneficiaries = () => {
    const { beneficiaries } = addPolicyDetailData;
    if (beneficiaries.length === 1 && beneficiaries[0].percentage !== "100") {
      toaster.push(
        <Message type="error" closable>
          <p className="fs-6">
            If there is only one beneficiary, the percentage must be 100.
          </p>
        </Message>,
        { placement: "topEnd", duration: 2000 }
      );
      return false;
    }
    return true;
  };

  const handleChange1 = (value, name, maxLength) => {
    const valueStr = value.toString();
    if (valueStr.length <= maxLength) {
      setAddPolicyDetailData({
        ...addPolicyDetailData,
        [name]: value, // Dynamically update the state based on the input name
      });
    } else {
      // Display an error message
      toaster.push(
        <Message type="error" closable>
          <p className="fs-6">
            {name} cannot exceed {maxLength} digits.
          </p>
        </Message>,
        { placement: "topEnd", duration: 2000 }
      );
    }
  };
  // Set initial policy data including beneficiaries when policyData changes
  useEffect(() => {
    if (policyData) {
      setAddPolicyDetailData({
        policyType: policyData?.policyType || null,
        carrier: policyData?.carrier || null,
        product: policyData?.product || null,
        productType: policyData?.productType || null,
        policyNumber: policyData?.policyNumber || "",
        policyStatus: policyData?.policyStatus || null,
        policyReason: policyData?.policyReason || null,
        benefitAmount: policyData?.benefitAmount || 0,
        policyPremium: policyData?.policyPremium || 0,
        policyEffectiveDate: policyData?.policyEffectiveDate || "",
        paidToDate: policyData?.paidToDate || "",
        saleDate: policyData?.saleDate || "",
        pastDue: policyData?.pastDue || 0,
        assignedAgent: policyData?.assignedAgent || null,
        daysBeforePremium: policyData?.daysBeforePremium || 0,
        contactId: policyData?.contactId || "",
        isVerified: policyData?.isVerified || false,
        beneficiaries: policyData?.beneficiaries || [],
      });
    }
  }, [policyData]);
  // Update contactId when userDetailData changes
  useEffect(() => {
    if (policyData) {
      setAddPolicyDetailData((prevState) => ({
        ...prevState,
        contactId: policyData?.contactId || "",
      }));
    }
  }, [policyData]);

  return (
    <>
      <Drawer open={open} onClose={handleEditClose}>
        <Drawer.Header>
          <Drawer.Title>Go Insurewise Life Insurance</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body className="no-scrollbar">
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label className="form-label">Policy Type</label>
                <SelectPicker
                  className={`select-toggle-in ${validation &&
                    addPolicyDetailData.policyType === null &&
                    "border border-danger"}`}
                  id="policy_status"
                  value={addPolicyDetailData.policyType}
                  data={policyTypeData}
                  searchable={false}
                  placeholder="Select Policy Type"
                  onChange={(target) => {
                    setAddPolicyDetailData({
                      ...addPolicyDetailData,
                      policyType: target,
                    });
                  }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">Carrier</label>
                <SelectPicker
                  className={`select-toggle-in ${validation &&
                    addPolicyDetailData.carrier === null &&
                    "border border-danger"}`}
                  id="Select Carrier"
                  data={carrierData}
                  value={addPolicyDetailData.carrier}
                  searchable={false}
                  placeholder="Carrier"
                  onChange={(target) => {
                    setAddPolicyDetailData({
                      ...addPolicyDetailData,
                      carrier: target,
                    });
                  }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">Product</label>
                <SelectPicker
                  className={`select-toggle-in ${validation &&
                    addPolicyDetailData.product === null &&
                    "border border-danger"}`}
                  id="Product"
                  data={ProductData}
                  value={addPolicyDetailData.product}
                  searchable={false}
                  placeholder="Select Product"
                  onChange={(target) => {
                    setAddPolicyDetailData({
                      ...addPolicyDetailData,
                      product: target,
                    });
                  }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">Product Type</label>
                <SelectPicker
                  className={`select-toggle-in ${validation &&
                    addPolicyDetailData.productType === null &&
                    "border border-danger"}`}
                  id="product_type"
                  data={ProductTypeData}
                  value={addPolicyDetailData.productType}
                  searchable={false}
                  placeholder="Select Product Type"
                  onChange={(target) => {
                    setAddPolicyDetailData({
                      ...addPolicyDetailData,
                      productType: target,
                    });
                  }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">Policy number</label>
                <Input
                  type="text"
                  placeholder="Enter Policy Number"
                  id="policyNumber"
                  name="policyNumber"
                  value={addPolicyDetailData.policyNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-control ${validation &&
                    addPolicyDetailData.policyNumber === "" &&
                    "border border-danger"} ${policyExists &&
                    "border border-danger"}`}
                />
                {policyExists && (
                  <div className="text-danger">
                    Policy number already exists
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">Assign Agent</label>
                <SelectPicker
                  className={`select-toggle-in ${validation &&
                    addPolicyDetailData.assignedAgent === null &&
                    "border border-danger"}`}
                  id="product_type"
                  data={assignAgentData}
                  value={addPolicyDetailData.assignedAgent}
                  searchable={false}
                  placeholder="Level"
                  onChange={(target) => {
                    setAddPolicyDetailData({
                      ...addPolicyDetailData,
                      assignedAgent: target,
                    });
                  }}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">Verify Status</label>
                <SelectPicker
                  className={`select-toggle-in ${validation &&
                    addPolicyDetailData.isVerified === "" &&
                    "border border-danger"}`}
                  id="product_type"
                  data={VerifiedData}
                  value={addPolicyDetailData.isVerified}
                  searchable={false}
                  placeholder="Level"
                  onChange={(target) => {
                    setAddPolicyDetailData({
                      ...addPolicyDetailData,
                      isVerified: target,
                    });
                  }}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label className="form-label">Policy Status</label>
                <SelectPicker
                  className={`select-toggle-in ${validation &&
                    addPolicyDetailData.policyStatus === null &&
                    "border border-danger"}`}
                  id="policy_status"
                  data={policyStatusData}
                  value={addPolicyDetailData.policyStatus}
                  searchable={false}
                  placeholder="Select Policy Status"
                  onChange={(target) => {
                    setAddPolicyDetailData({
                      ...addPolicyDetailData,
                      policyStatus: target,
                    });
                  }}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label className="form-label">Policy Reason</label>
                <SelectPicker
                  className={`select-toggle-in ${validation &&
                    addPolicyDetailData.policyReason === null &&
                    "border border-danger"}`}
                  id="policy_reason"
                  data={policyReasonData}
                  value={addPolicyDetailData.policyReason}
                  searchable={false}
                  placeholder="Select Policy Reason"
                  onChange={(target) => {
                    setAddPolicyDetailData({
                      ...addPolicyDetailData,
                      policyReason: target,
                    });
                  }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">Benefit Amount</label>
                <Input
                  type="number"
                  placeholder="Enter Benefit Amount"
                  id="benefitAmount"
                  name="benefitAmount"
                  className={`form-control ${validation &&
                    addPolicyDetailData.benefitAmount === 0 &&
                    "border border-danger"}`}
                  value={addPolicyDetailData.benefitAmount}
                  onChange={(value) => handleChange1(value, "benefitAmount", 7)} // Pass name and maximum length
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">Policy Premium</label>
                <Input
                  type="number"
                  placeholder="Enter Policy Premium"
                  id="policyPremium"
                  name="policyPremium"
                  className={`form-control ${validation &&
                    addPolicyDetailData.policyPremium === 0 &&
                    "border border-danger"}`}
                  value={addPolicyDetailData.policyPremium}
                  onChange={(value) => handleChange1(value, "policyPremium", 4)} // Pass name and maximum length
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">Policy Effective Date</label>
                <DatePicker
                  format="dd-MM-yyyy"
                  name="policyEffectiveDate"
                  className={` ${validation &&
                    addPolicyDetailData.policyEffectiveDate === "" &&
                    "border border-danger"}`}
                  oneTap
                  value={new Date(addPolicyDetailData?.policyEffectiveDate)}
                  onChange={(target) => {
                    setAddPolicyDetailData({
                      ...addPolicyDetailData,
                      policyEffectiveDate: target,
                    });
                  }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">Paid To Date</label>
                <DatePicker
                  name="paidToDate"
                  format="dd-MM-yyyy"
                  className={` ${validation &&
                    addPolicyDetailData.paidToDate === "" &&
                    "border border-danger"}`}
                  oneTap
                  value={new Date(addPolicyDetailData?.paidToDate)}
                  onChange={(date) => {
                    const currentDate = moment(); // Get the current date
                    const selectedDate = moment(date); // Convert selected date to moment object

                    const pastDueDays = currentDate.diff(selectedDate, "days"); // Calculate the difference in days

                    setAddPolicyDetailData({
                      ...addPolicyDetailData,
                      paidToDate: date,
                      pastDue: pastDueDays, // Set the pastDue value
                    });
                  }}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label className="form-label">Sale date</label>
                <DatePicker
                  name="saleDate"
                  format="dd-MM-yyyy"
                  className={` ${validation &&
                    addPolicyDetailData.saleDate === "" &&
                    "border border-danger"}`}
                  oneTap
                  value={new Date(addPolicyDetailData?.saleDate)}
                  onChange={(date) => {
                    const currentDate = moment(); // Get the current date
                    const selectedDate = moment(date); // Convert selected date to moment object

                    const pastDueDays = currentDate.diff(selectedDate, "days"); // Calculate the difference in days

                    setAddPolicyDetailData({
                      ...addPolicyDetailData,
                      saleDate: date,
                      daysBeforePremium: pastDueDays, // Set the daysBeforePremium value
                    });
                  }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">Past Due</label>
                <Input
                  type="number"
                  placeholder="Enter Past Due date"
                  id="pastDue"
                  name="pastDue"
                  value={addPolicyDetailData.pastDue}
                  className={`form-control ${validation &&
                    addPolicyDetailData.pastDue === 0 &&
                    "border border-danger"}`}
                  disabled={true}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">Days Before Premium</label>
                <Input
                  type="number"
                  placeholder="Enter Days Before Premium"
                  id="daysBeforePremium"
                  name="daysBeforePremium"
                  value={addPolicyDetailData.daysBeforePremium}
                  className={`form-control ${validation &&
                    addPolicyDetailData.daysBeforePremium === 0 &&
                    "border border-danger"}`}
                  disabled={true}
                />
              </div>
            </div>
          </div>
          <div className="add-beneficiary-btns d-flex align-items-center justify-content-between flex-wrap">
            <h3>Policy Beneficiaries </h3>
            <button onClick={addBeneficiary} className="add-ben-btn btn">
              Add Beneficiary
            </button>
          </div>

          {/* Add Beneficiaries Box  */}
          {addPolicyDetailData.beneficiaries.map((beneficiary, index) => (
            <BeneficiaryList
              key={index}
              index={index}
              beneficiary={beneficiary}
              onDelete={deleteBeneficiary}
              onBeneficiaryChange={handleBeneficiaryChange}
              addPolicyDetailData={addPolicyDetailData}
              validation={validation}
              setValidation={setValidation}
            />
          ))}
          {/* End Beneficiaries Box  */}
        </Drawer.Body>
        <Drawer.Actions className="drawer-footer">
          <div className="form-btns d-flex gap-3">
            <Button
              className="form-cancel btn w-100 flex-grow-1 rs-btn rs-btn-default"
              onClick={() => {
                handleEditClose(false);
                setValidation(false);
              }}
            >
              Cancel
            </Button>
            <Button
              className="form-Save btn w-100 flex-grow-1 rs-btn rs-btn-default"
              onClick={(e) => hundleSubmit(e)}
            >
              Confirm
            </Button>
          </div>
        </Drawer.Actions>
      </Drawer>
    </>
  );
};

export default EditModal;
