import React, { useState } from "react";
import { Chainlink, Eye, Edit2, Trash } from "iconsax-react";
import { Button, ButtonToolbar, Message, useToaster } from "rsuite";
import ViewModal from "./ViewUserDetail";
import EditModal from "./EditModal";
import Swal from "sweetalert2";
import DeleteModal from "../../Common/DeleteModal/DeleteModal";
import { useNavigate } from "react-router-dom";
import CustomPagination from "../../Common/UI/CustomPagination/Index";
import EditUserDetail from "./EditUserDetail";
import ViewUserDetail from "./ViewUserDetail";
import { useDispatch } from "react-redux";
import {
  deleteDetailContact,
  getAllCotactDetails,
} from "../../../Redux/Actions/ContactAction";
const ContactDetailsTable = ({
  contactListData,
  setContactListData,
  limit,
  setLimit,
  currentPage,
  setCurrentPage,
}) => {
  const toaster = useToaster();
  const dispatch = useDispatch();
  const [userDetailData, setUserDetailData] = useState({});
  const [deleteId, setDeleteId] = useState();
  const [viewOpen, setViewOpen] = useState(false);
  const handleViewOpen = (val) => {
    setViewOpen(true);
    setUserDetailData(val);
  };
  const handleViewClose = () => setViewOpen(false);

  const [editOpen, setEditOpen] = useState(false);
  // const handleEditOpen = () => setEditOpen(true);
  const handleEditOpen = (val) => {
    setEditOpen(true);
    setUserDetailData(val);
  };
  const handleEditClose = () => setEditOpen(false);

  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteDetailContact(deleteId)).then((res) => {
      if (res.success === true) {
        toaster.push(
          <Message type={"success"} closable>
            <p className="fs-6">{res.message}</p>
          </Message>,
          { placement: "topEnd", duration: 2000 }
        );
        dispatch(getAllCotactDetails({ currentPage, limit })).then(
          (response) => {
            if (response.success === true) {
              setContactListData(response);
            }
          }
        );
        handleDeleteClose();
      }
    });
  };
  const handleDeleteOpen = (id) => {
    setDeleteOpen(true);
    setDeleteId(id);
  };
  const handleDeleteClose = () => setDeleteOpen(false);
  const navigate = useNavigate();
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  return (
    <>
      <table className="table mb-3">
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th className="text-uppercase">Action</th>
            <th className="text-uppercase">Name</th>
            <th className="text-uppercase">Phone number</th>
            <th className="text-uppercase">Email</th>
            <th className="text-uppercase">Address</th>
            <th className="text-uppercase">City</th>
            <th className="text-uppercase">State</th>
            <th className="text-uppercase">Zip Code</th>
            <th className="text-uppercase">Date of Birth</th>
            <th className="text-uppercase">Age</th>
            <th className="text-uppercase">Gender</th>
            <th className="text-uppercase">Height in Ft</th>
            <th className="text-uppercase">Height in Inches</th>
            <th className="text-uppercase">weight in Pounds</th>
          </tr>
        </thead>
        <tbody>
          {contactListData.data?.length !== 0 ? (
            contactListData.data?.map((res, i) => {
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
                        // onClick={handleEditOpen}
                        onClick={() =>
                          navigate("/contact-details", {
                            state: {
                              userData: res,
                              type: "contact",
                              edit: true,
                            },
                          })
                        }
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
                  <td
                    onClick={() =>
                      navigate("/contact-details", {
                        state: { userData: res, type: "contact" },
                      })
                    }
                    className="cursor-pointer"
                  >
                    {res.firstName + " " + res.middleName + " " + res.lastName}
                  </td>
                  <td>{res.phone}</td>
                  <td>{res.email}</td>
                  <td>{res.address}</td>
                  <td>{res.city}</td>
                  <td>{res.state}</td>
                  <td>{res.zipCode}</td>
                  <td>{formatDate(res.dateOfBirth)}</td>
                  <td>{res.age}</td>
                  <td>{res.gender}</td>
                  <td>{res.heightInft}</td>
                  <td>{res.heightInInches}</td>
                  <td>{res.weightInPound}</td>
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
        totalCount={contactListData?.pagination?.totalItems}
        limit={limit}
        setLimit={setLimit}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {/* <ViewModal open={viewOpen} handleViewClose={handleViewClose} /> */}
      <EditUserDetail
        open={editOpen}
        onclose={() => handleEditClose(false)}
        openWithHeader={editOpen}
        setOpenWithHeader={setEditOpen}
        userDetailData={userDetailData}
        setUserDetailData={setUserDetailData}
        type={"Edit"}
        contactListData={contactListData}
        setContactListData={setContactListData}
        limit={limit}
        setLimit={setLimit}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <ViewUserDetail
        open={viewOpen}
        onclose={() => handleViewClose(false)}
        openWithHeader={viewOpen}
        setViewOpen={setViewOpen}
        setEditOpen={setEditOpen}
        userDetailData={userDetailData}
        setUserDetailData={setUserDetailData}
        type={"Edit"}
      />
      {/* <EditModal open={editOpen} handleEditClose={handleEditClose} /> */}
      <DeleteModal
        open={deleteOpen}
        handleDeleteClose={handleDeleteClose}
        onclick={handleDelete}
      />
    </>
  );
};

export default ContactDetailsTable;
