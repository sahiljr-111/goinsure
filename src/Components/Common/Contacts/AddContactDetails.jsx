import { CallCalling, MessageText1, Sms } from "iconsax-react";
import React, { useState } from "react";
import UserImage from "../../../../src/assets/images/user-2.jpg";
import { Button, DatePicker, Drawer, Input, List, SelectPicker } from "rsuite";

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

const genderItem = ["Male", "Female", "Other"].map((item) => ({
  label: item,
  value: item,
}));

const AddContactDetails = ({
  open,
  onclose,
  openWithHeader,
  setOpenWithHeader,
}) => {
  const [contactData, setContactData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    dateOfBirth: "",
    age: "",
    gender: "",
    heightInft: "",
    heightInInches: "",
    weightInPound: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setContactData({ ...contactData, [name]: value });
  };
  return (
    <>
      <Drawer open={open} onClose={onclose}>
        <Drawer.Header>
          <Drawer.Title>Add Contact</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body className="no-scrollbar">
          <div className="beneficiary-profile">
            <div className="beneficiary-status">
              <ul className="p-0 m-0">
                <li className="d-flex align-items-center justify-content-between">
                  <p>Contact status</p>
                  <SelectPicker
                    data={data}
                    searchable={false}
                    placeholder="Sale"
                  />
                </li>
                <li className="d-flex align-items-center justify-content-between">
                  <p>Preferred Mode of Contact</p>
                  <SelectPicker
                    data={data}
                    searchable={false}
                    placeholder="Call"
                  />
                </li>
                <li className="d-flex align-items-center justify-content-between">
                  <p>Assigned agent</p>
                  <SelectPicker
                    placement="bottomEnd"
                    data={data}
                    searchable={true}
                    placeholder="Austin Henroid"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="beneficiary-details-wrap">
            <div className="beneficiary-details-title d-flex align-items-center justify-content-between">
              <h4>Basic details</h4>
            </div>
            <div className="beneficiary-details-form">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="form-label">First Name</label>
                    <Input
                      type="text"
                      placeholder="John"
                      id="firstName"
                      className="form-control"
                      name="firstName"
                      value={contactData?.firstName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="form-label">First Name</label>
                    <Input
                      type="text"
                      placeholder="John"
                      id="middleName"
                      className="form-control"
                      name="middleName"
                      value={contactData?.middleName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="form-label">First Name</label>
                    <Input
                      type="text"
                      placeholder="John"
                      id="lastName"
                      className="form-control"
                      name="lastName"
                      value={contactData?.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <Input
                      type="number"
                      placeholder="9898909090"
                      id="phone"
                      name="phone"
                      value={contactData?.phone}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <Input
                      type="email"
                      placeholder="Johncalvin@gmail.com"
                      id="email"
                      name="email"
                      value={contactData?.email}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="form-label">Address</label>
                    <Input
                      type="text"
                      placeholder="708 hayhurst rd."
                      id="address"
                      name="address"
                      value={contactData?.address}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">City</label>
                    <Input
                      type="text"
                      placeholder="YONCALLA"
                      id="city"
                      name="city"
                      value={contactData?.city}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">State</label>
                    <Input
                      type="text"
                      placeholder="Colorado"
                      id="state"
                      name="state"
                      value={contactData?.state}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="form-label">Zip Code</label>
                    <Input
                      type="text"
                      placeholder="423487"
                      id="zipCode"
                      name="city"
                      value={contactData?.zipCode}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="beneficiary-details-wrap">
            <div className="beneficiary-details-title d-flex align-items-center justify-content-between">
              <h4>Additional info</h4>
            </div>
            <div className="beneficiary-details-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Date of Birth</label>
                    <DatePicker
                      format="dd-MM-yyyy"
                      name="dateOfBirth"
                      value={contactData?.dateOfBirth}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Age</label>
                    <Input
                      type="number"
                      placeholder="64"
                      id="age"
                      name="age"
                      value={contactData?.age}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group w-50">
                    <label className="form-label">Gender</label>
                    <SelectPicker
                      className="select-toggle-in"
                      data={genderItem}
                      onChange={handleChange}
                      searchable={false}
                      placeholder="Male"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Height in Ft </label>
                    <Input
                      type="text"
                      placeholder="6.3"
                      id="height_in_ft"
                      name="heightInft"
                      value={contactData?.heightInft}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Height in Inches</label>
                    <Input
                      type="text"
                      placeholder="75.6"
                      id="height_in_inches"
                      name="heightInInches"
                      value={contactData?.heightInInches}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="form-label">weight in Pounds</label>
                    <Input
                      type="text"
                      placeholder="27.21"
                      id="weight_in_pounds"
                      name="weightInPound"
                      value={contactData?.weightInPound}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Drawer.Body>
        <Drawer.Actions className="drawer-footer">
          <div className="form-btns d-flex gap-3">
            <Button
              className="form-cancel btn w-100 flex-grow-1 rs-btn rs-btn-default"
              onClick={() => setOpenWithHeader(false)}
            >
              Cancel
            </Button>
            <Button className="form-Save btn w-100 flex-grow-1 rs-btn rs-btn-default">
              Save
            </Button>
          </div>
        </Drawer.Actions>
      </Drawer>
    </>
  );
};

export default AddContactDetails;
