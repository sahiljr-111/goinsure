import React, { useState } from "react";
import { Chainlink, Eye, Edit2, Trash } from "iconsax-react";
import { Button, ButtonToolbar, useToaster, Message } from "rsuite";
import ViewModal from "./ViewPolicyModal";
import EditModal from "./EditModal";
import Swal from "sweetalert2";
import DeleteModal from "../../Common/DeleteModal/DeleteModal";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getSingleContactPolicyDetailData,
  deleteSinglePolicyDetail,
} from "../../../Redux/Actions/PolicyDetailAction";
import CustomPagination from "../../Common/UI/CustomPagination/Index";
import ViewPolicyModal from "./ViewPolicyModal";

const PolicyDetailsTable = ({
  openWithPolicy,
  setOpenWithPolicy,
  policyDataForSingleContact,
  getSingleContactPolicyData,
  limit,
  setLimit,
  currentPage,
  setCurrentPage,
  userDetailData,
  activePolicyTab,
  setActivePolicyTab,
  getUserdata,
}) => {
  const toaster = useToaster();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deleteId, setDeleteId] = useState();

  const [viewOpen, setViewOpen] = useState(false);
  // const handleViewOpen = () => setViewOpen(true);

  const handleViewOpen = (policy) => {
    setSelectedPolicy(policy);
    setViewOpen(true);
  };
  const handleViewClose = () => setViewOpen(false);

  const [editOpen, setEditOpen] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const handleEditOpen = (policy) => {
    setSelectedPolicy(policy);
    setEditOpen(true);
  };
  const handleEditClose = () => setEditOpen(false);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const handleDeleteOpen = (id) => {
    setDeleteOpen(true);
    setDeleteId(id);
  };
  const handleDeleteClose = () => setDeleteOpen(false);

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteSinglePolicyDetail(deleteId)).then((res) => {
      if (res.success === true) {
        toaster.push(
          <Message type={"success"} closable>
            <p className="fs-6">{res.message}</p>
          </Message>,
          { placement: "topEnd", duration: 2000 }
        );
        getUserdata(userDetailData?.data?._id);
        getSingleContactPolicyData(userDetailData?.data?._id);
        setDeleteOpen(false);
      }
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };
  return (
    <>
      <table className="table mb-3">
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th className="text-uppercase">Action</th>
            <th className="text-uppercase text-center">Verified</th>
            <th className="text-uppercase">Policy number</th>
            <th className="text-uppercase">Policy Type</th>
            <th className="text-uppercase">Carrier</th>
            <th className="text-uppercase">Product</th>
            <th className="text-uppercase">Product Type</th>
            <th className="text-uppercase">Premium</th>
            <th className="text-uppercase">Benefit Amount</th>
            <th className="text-uppercase">Effective Date</th>
            <th className="text-uppercase">Paid To Date</th>
            <th className="text-uppercase">App. Status</th>
            <th className="text-uppercase">Policy Status</th>
            <th className="text-uppercase">Policy Reason</th>
            <th className="text-uppercase">Past due</th>
            <th className="text-uppercase">Days Before Premium</th>
            <th className="text-uppercase">Create Date</th>
            <th className="text-uppercase">Update Date</th>
          </tr>
        </thead>
        <tbody>
          {policyDataForSingleContact?.data?.length !== 0 ? (
            policyDataForSingleContact?.data?.map((res, i) => {
              return (
                <tr key={i}>
                  <td className="text-center">{i + 1}</td>
                  <td>
                    <ButtonToolbar className="btn-group action-btn gap-3">
                      <Button
                        className="btn position-relative"
                        onClick={() => handleViewOpen(res)}
                      >
                        <Eye size="16" color="#344054" variant="Outline" />
                      </Button>
                      <Button
                        className="btn position-relative"
                        onClick={() => handleEditOpen(res)}
                      >
                        <Edit2 size="16" color="#344054" variant="Outline" />
                      </Button>
                      <Button
                        className="btn position-relative"
                        onClick={() => handleDeleteOpen(res._id)}
                      >
                        <Trash size="16" color="#344054" variant="Outline" />
                      </Button>
                    </ButtonToolbar>
                  </td>
                  <td className="text-center">
                    {res.isVerified === true ? (
                      <img src="../../../../public/Images/verify.svg" alt="" />
                    ) : (
                      "-"
                    )}
                  </td>
                  <td onClick={() => handleViewOpen(res)}>
                    {res.policyNumber}
                  </td>
                  <td>{res.policyType}</td>
                  <td>{res.carrier}</td>
                  <td>{res.product}</td>
                  <td>{res.productType}</td>
                  <td>${res.policyPremium}</td>
                  <td>${res.benefitAmount}</td>
                  <td>{formatDate(res.policyEffectiveDate)}</td>
                  <td>{formatDate(res.paidToDate)}</td>
                  <td>{res.AppStatus === true ? "Approved" : "Pending"}</td>
                  <td>
                    <span
                      className={` ${
                        res.policyStatus === "Active"
                          ? "badge text-bg-success fw-normal"
                          : res.policyStatus === "InActive"
                          ? "badge text-bg-danger fw-normal"
                          : "badge text-bg-warning fw-normal"
                      }`}
                    >
                      {res.policyStatus}
                    </span>
                  </td>
                  <td>{res.policyReason}</td>
                  <td>{res.pastDue} days</td>
                  <td>{res.daysBeforePremium} days</td>
                  <td>{formatDateTime(res.createdAt)}</td>
                  <td>{formatDateTime(res.updatedAt)}</td>
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
      <CustomPagination
        totalCount={policyDataForSingleContact?.pagination?.totalItems}
        limit={limit}
        setLimit={setLimit}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <ViewPolicyModal
        open={viewOpen}
        handleViewClose={handleViewClose}
        setEditOpen={setEditOpen}
        setViewOpen={setViewOpen}
        policyData={selectedPolicy}
        policyDataForSingleContact={policyDataForSingleContact}
        getSingleContactPolicyData={getSingleContactPolicyData}
        limit={limit}
        setLimit={setLimit}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <EditModal
        open={editOpen}
        handleEditClose={handleEditClose}
        setEditOpen={setEditOpen}
        policyData={selectedPolicy}
        policyDataForSingleContact={policyDataForSingleContact}
        getSingleContactPolicyData={getSingleContactPolicyData}
        limit={limit}
        setLimit={setLimit}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        activePolicyTab={activePolicyTab}
        setActivePolicyTab={setActivePolicyTab}
      />
      <DeleteModal
        open={deleteOpen}
        handleDeleteClose={handleDeleteClose}
        onclick={(e) => handleDelete(e)}
      />
    </>
  );
};

export default PolicyDetailsTable;
