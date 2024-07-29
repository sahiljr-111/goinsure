import React, { useState } from "react";
import { Chainlink, Eye, Edit2, Trash } from "iconsax-react";
import { Button, ButtonToolbar } from "rsuite";
import ViewModal from "./ViewModal";
import EditModal from "./EditModal";
import Swal from "sweetalert2";
import DeleteModal from "../../Common/DeleteModal/DeleteModal";
const PolicyDetailData = [
  {
    Id: 1,
    firstName: "Sayog",
    middleName: "Donga",
    lastName: "Jayantibhai",
    phone: "9016722188",
    email: "sayog@gmail.com",
    address: "surat",
    city: 1000,
    state: 100000,
    zipCode: 395006,
    dateOfBirth: "01/01/2021",
    age: 22,
    gender: "male",
    heightInft: 56,
    heightInInches: 19,
    weightInPound: 14,
  },
];
const ContactDetailsTable = ({ openWithPolicy, setOpenWithPolicy }) => {
  const [viewOpen, setViewOpen] = useState(false);
  const handleViewOpen = () => setViewOpen(true);
  const handleViewClose = () => setViewOpen(false);

  const [editOpen, setEditOpen] = useState(false);
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const handleDeleteOpen = () => setDeleteOpen(true);
  const handleDeleteClose = () => setDeleteOpen(false);

  return (
    <>
      <table className="table mb-3">
        <thead>
          <tr>
            <th className="text-center">#</th>
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
          {PolicyDetailData?.length !== 0 ? (
            PolicyDetailData?.map((res, i) => {
              return (
                <tr key={i}>
                  <td className="text-center">{res.Id}</td>
                  <td>
                    {res.firstName + " " + res.middleName + " " + res.lastName}
                  </td>
                  <td>{res.phone}</td>
                  <td>{res.email}</td>
                  <td>{res.address}</td>
                  <td>${res.city}</td>
                  <td>${res.state}</td>
                  <td>{res.zipCode}</td>
                  <td>{res.dateOfBirth}</td>
                  <td>{res.age}</td>
                  <td>{res.gender}</td>
                  <td>{res.heightInft}</td>
                  <td>{res.heightInInches}</td>
                  <td>{res.weightInPound}</td>

                  <td>
                    <ButtonToolbar className="btn-group action-btn gap-3">
                      <Button
                        className="btn position-relative"
                        onClick={handleViewOpen}
                      >
                        <Eye size="16" color="#344054" variant="Outline" />
                      </Button>
                      <Button
                        className="btn position-relative"
                        onClick={handleEditOpen}
                      >
                        <Edit2 size="16" color="#344054" variant="Outline" />
                      </Button>
                      <Button
                        className="btn position-relative"
                        onClick={handleDeleteOpen}
                      >
                        <Trash size="16" color="#344054" variant="Outline" />
                      </Button>
                    </ButtonToolbar>
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
      <ViewModal open={viewOpen} handleViewClose={handleViewClose} />
      <EditModal open={editOpen} handleEditClose={handleEditClose} />
      <DeleteModal open={deleteOpen} handleDeleteClose={handleDeleteClose} />
    </>
  );
};

export default ContactDetailsTable;
