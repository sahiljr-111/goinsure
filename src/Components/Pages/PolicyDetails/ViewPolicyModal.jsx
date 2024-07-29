import React, { useEffect, useState } from "react";
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
import { CloudFog } from "iconsax-react";
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
  { value: "Verify", label: true },
  { value: "Not Verify", label: false },
].map((item) => ({ label: item.value, value: item.label }));
const assignAgentData = [
  "Jones 1",
  "Jones 2",
  "Jones 3",
  "Jones 4",
  "Jones 5",
].map((item) => ({ label: item, value: item }));

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

const ViewPolicyModal = ({
  open,
  handleViewClose,
  setEditOpen,
  setViewOpen,
  policyData,
  policyDataForSingleContact,
  setPolicyDataForSingleContact,
  limit,
  setLimit,
  currentPage,
  setCurrentPage,
}) => {
  const toaster = useToaster();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [addPolicyDetailData, setAddPolicyDetailData] = useState({
    carrier: "",
    product: "",
    productType: "",
    policyNumber: "",
    policyStatus: "",
    policyReason: "",
    benefitAmount: "",
    policyPremium: "",
    policyEffectiveDate: "",
    paidToDate: "",
    saleDate: "",
    pastDue: 0,
    assignedAgent: "",
    daysBeforePremium: 0,
    contactId: "",
    isVerified: false,
    beneficiaries: [],
  });
  const hundleSubmit = (e) => {
    e.preventDefault();
    setEditOpen(true);
    setViewOpen(false);
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

  // Set initial policy data including beneficiaries when policyData changes
  useEffect(() => {
    if (policyData) {
      setAddPolicyDetailData({
        carrier: policyData?.carrier || "",
        product: policyData?.product || "",
        productType: policyData?.productType || "",
        policyNumber: policyData?.policyNumber || "",
        policyStatus: policyData?.policyStatus || "",
        policyReason: policyData?.policyReason || "",
        benefitAmount: policyData?.benefitAmount || "",
        policyPremium: policyData?.policyPremium || "",
        policyEffectiveDate: policyData?.policyEffectiveDate || "",
        paidToDate: policyData?.paidToDate || "",
        saleDate: policyData?.saleDate || "",
        pastDue: policyData?.pastDue || 0,
        assignedAgent: policyData?.assignedAgent || "",
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
      <Drawer open={open} onClose={handleViewClose}>
        <Drawer.Header>
          <Drawer.Title>Go Insurewise Life Insurance</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body className="no-scrollbar">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">Carrier</label>
                <SelectPicker
                  className="select-toggle-in"
                  id="Select Carrier"
                  data={carrierData}
                  value={addPolicyDetailData.carrier}
                  searchable={false}
                  placeholder="Carrier"
                  disabled={true}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">Product</label>
                <SelectPicker
                  className="select-toggle-in"
                  id="Product"
                  data={ProductData}
                  value={addPolicyDetailData.product}
                  searchable={false}
                  placeholder="Select Product"
                  disabled={true}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">Product Type</label>
                <SelectPicker
                  className="select-toggle-in"
                  id="product_type"
                  data={ProductTypeData}
                  value={addPolicyDetailData.productType}
                  searchable={false}
                  placeholder="Select Product Type"
                  disabled={true}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">Policy number</label>
                <Input
                  type="text"
                  placeholder="Enter Policy Number"
                  id="policyNumberF"
                  name="policyNumberF"
                  value={addPolicyDetailData?.policyNumber}
                  disabled={true}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">Assign Agent</label>
                <SelectPicker
                  className="select-toggle-in"
                  id="product_type"
                  data={assignAgentData}
                  cleanable={false}
                  value={addPolicyDetailData.assignedAgent}
                  searchable={false}
                  placeholder="Level"
                  disabled={true}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">Verify Status</label>
                <SelectPicker
                  className="select-toggle-in"
                  id="product_type"
                  data={VerifiedData}
                  value={addPolicyDetailData.isVerified}
                  searchable={false}
                  placeholder="Level"
                  disabled={true}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label className="form-label">Policy Status</label>
                <SelectPicker
                  className="select-toggle-in"
                  id="policy_status"
                  data={policyStatusData}
                  value={addPolicyDetailData.policyStatus}
                  searchable={false}
                  placeholder="Select Policy Status"
                  disabled={true}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label className="form-label">Policy Reason</label>
                <SelectPicker
                  className="select-toggle-in"
                  id="policy_reason"
                  data={policyReasonData}
                  value={addPolicyDetailData.policyReason}
                  searchable={false}
                  placeholder="Pending First Premium"
                  disabled={true}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">Benefit Amount</label>
                <Input
                  type="number"
                  placeholder="$200000"
                  id="benefitAmount"
                  name="benefitAmount"
                  className="form-control"
                  value={addPolicyDetailData?.benefitAmount}
                  disabled={true}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">Policy Premium</label>
                <Input
                  type="number"
                  placeholder="$200000"
                  id="policyPremium"
                  name="policyPremium"
                  className="form-control"
                  value={addPolicyDetailData?.policyPremium}
                  disabled={true}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">Policy Effective Date</label>
                <DatePicker
                  name="policyEffectiveDate"
                  oneTap
                  format="dd-MM-yyyy"
                  value={new Date(addPolicyDetailData?.policyEffectiveDate)}
                  disabled={true}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">Paid To Date</label>
                <DatePicker
                  name="paidToDate"
                  oneTap
                  format="dd-MM-yyyy"
                  value={new Date(addPolicyDetailData?.paidToDate)}
                  disabled={true}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label className="form-label">Sale date</label>
                <DatePicker
                  name="saleDate"
                  oneTap
                  format="dd-MM-yyyy"
                  value={new Date(addPolicyDetailData?.saleDate)}
                  disabled={true}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">Past Due</label>
                <Input
                  type="text"
                  placeholder="0 days"
                  id="pastDue"
                  name="pastDue"
                  value={addPolicyDetailData?.pastDue}
                  className="form-control"
                  disabled={true}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">Days Before Premium</label>
                <Input
                  type="text"
                  placeholder="323 days"
                  id="daysBeforePremium"
                  name="daysBeforePremium"
                  value={addPolicyDetailData?.daysBeforePremium}
                  className="form-control"
                  disabled={true}
                />
              </div>
            </div>
          </div>
          <div className="add-beneficiary-btns d-flex align-items-center justify-content-between flex-wrap">
            <h3>Policy Beneficiaries </h3>
            {/* <button onClick={addBeneficiary} className="add-ben-btn btn">
              Add Beneficiary
            </button> */}
          </div>

          {/* Add Beneficiaries Box  */}
          {addPolicyDetailData.beneficiaries.map((beneficiary, index) => (
            <BeneficiaryList
              key={index}
              index={index}
              beneficiary={beneficiary}
              onDelete={deleteBeneficiary}
              onBeneficiaryChange={handleBeneficiaryChange}
              type={"View"}
            />
          ))}
          {/* End Beneficiaries Box  */}
        </Drawer.Body>
        <Drawer.Actions className="drawer-footer">
          <div className="form-btns d-flex gap-3">
            <Button
              className="form-cancel btn w-100 flex-grow-1 rs-btn rs-btn-default"
              onClick={() => handleViewClose(false)}
            >
              Cancel
            </Button>
            <Button
              className="form-Save btn w-100 flex-grow-1 rs-btn rs-btn-default"
              onClick={(e) => hundleSubmit(e)}
            >
              Edit
            </Button>
          </div>
        </Drawer.Actions>
      </Drawer>
    </>
  );
};

export default ViewPolicyModal;
