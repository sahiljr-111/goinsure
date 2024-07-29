import { CallCalling, MessageText1, Sms } from "iconsax-react";
import React, { useEffect, useState } from "react";
import UserImage from "../../../assets/images/user-2.jpg";
import moment from "moment";
import {
  Button,
  DatePicker,
  Drawer,
  Input,
  List,
  Message,
  SelectPicker,
  useToaster,
} from "rsuite";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getAllCotactDetails,
  updateDetailContact,
} from "../../../Redux/Actions/ContactAction";

const ContactStatusData = [
  "New",
  "Sale",
  "SC Bad Time",
  "SC Decision Maker",
  "SC Finalise",
  "SC Call Dropped",
  "NI Price",
  "NI Current Coverage",
  "NI Trust",
  "NI Bad Transfer",
  "Transfer Hangup",
  "DQ Health",
  "DQ Payment",
  "DNC",
].map((item) => ({ label: item, value: item }));

const modeOfContactData = ["Email", "Call", "SMS"].map((item) => ({
  label: item,
  value: item,
}));

const assignAgentData = [
  "Jones 1",
  "Jones 2",
  "Jones 3",
  "Jones 4",
  "Jones 5",
].map((item) => ({ label: item, value: item }));

const genderItem = ["Male", "Female", "Other"].map((item) => ({
  label: item,
  value: item,
}));

const ViewUserDetail = ({
  open,
  onclose,
  openWithHeader,
  setViewOpen,
  setEditOpen,
  userDetailData,
  setUserDetailData,
  type,
}) => {
  const toaster = useToaster();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [validation, setValidation] = useState(false);
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
    contactStatus: "",
    modeOfContact: "",
    assignedAgent: "",
  });

  const hundleSubmit = (e) => {
    e.preventDefault();
    setEditOpen(true);
    setViewOpen(false);
  };
  // const [activeField, setActiveField] = useState(null);
  useEffect(() => {
    setContactData({
      firstName: userDetailData?.data?.firstName,
      middleName: userDetailData?.data?.middleName,
      lastName: userDetailData?.data?.lastName,
      phone: userDetailData?.data?.phone,
      email: userDetailData?.data?.email,
      address: userDetailData?.data?.address,
      city: userDetailData?.data?.city,
      state: userDetailData?.data?.state,
      zipCode: userDetailData?.data?.zipCode,
      dateOfBirth: userDetailData?.data?.dateOfBirth,
      age: userDetailData?.data?.age,
      gender: userDetailData?.data?.gender,
      heightInft: userDetailData?.data?.heightInft,
      heightInInches: userDetailData?.data?.heightInInches,
      weightInPound: userDetailData?.data?.weightInPound,
      contactStatus: userDetailData?.data?.contactStatus,
      modeOfContact: userDetailData?.data?.modeOfContact,
      assignedAgent: userDetailData?.data?.assignedAgent,
    });
  }, [userDetailData]);
  return (
    <>
      <Drawer open={open} onClose={onclose}>
        <Drawer.Header>
          <Drawer.Title>Go Insurewise Life Insurance</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body className="no-scrollbar">
          <div className="beneficiary-profile">
            {type === "NoEdit" && (
              <div className="beneficiary-top-profile">
                <div className="ben-inner-profile d-flex align-items-center justify-content-between">
                  <div className="ben-inner-profile-wrap d-flex align-items-center flex-wrap ">
                    <img src={UserImage} alt="img" className="img-fluid" />
                    <div className="profile-content">
                      <span>
                        {userDetailData?.data?.status === true
                          ? "Active"
                          : "Inactive"}
                      </span>
                      <h3>
                        {userDetailData?.data?.firstName +
                          " " +
                          userDetailData?.data?.lastName}
                      </h3>
                    </div>
                  </div>
                  <a href="#" className="delete-profile"></a>
                </div>
                <div className="beneficiary-point d-flex align-items-center justify-content-between">
                  <List className="p-0 m-0 d-flex align-items-center list-unstyled gap-2">
                    <List.Item className="p-0">
                      <a
                        href="#"
                        className="point-icon text-decoration-none text-blue d-flex align-items-center justify-content-center"
                      >
                        <Sms size="20" color="#1B84FF" variant="Bold" />
                      </a>
                    </List.Item>
                    <List.Item className="p-0">
                      <a
                        href="#"
                        className="point-icon text-decoration-none text-success d-flex align-items-center justify-content-center"
                      >
                        <CallCalling size="20" color="#14AC48" variant="Bold" />
                      </a>
                    </List.Item>
                    <List.Item className="p-0">
                      <a
                        href="#"
                        className="point-icon text-decoration-none text-purple d-flex align-items-center justify-content-center"
                      >
                        <MessageText1
                          size="20"
                          color="#874BFF"
                          variant="Bold"
                        />
                      </a>
                    </List.Item>
                  </List>
                  <List className="p-0 m-0 user-policies-details list-unstyled">
                    <List.Item className="p-0">
                      Active Policies <span className="d-inline-block">2</span>
                    </List.Item>
                    <List.Item className="p-0">
                      Active Premium{" "}
                      <span className="d-inline-block">$ 740</span>
                    </List.Item>
                  </List>
                </div>
              </div>
            )}

            <div className="beneficiary-status">
              <ul className="p-0 m-0">
                <li className="d-flex align-items-center justify-content-between">
                  <p>Contact status</p>
                  <SelectPicker
                    className={`select-toggle-in ${validation &&
                      contactData.contactStatus === null &&
                      "border border-danger"}`}
                    data={ContactStatusData}
                    value={contactData.contactStatus}
                    searchable={false}
                    placeholder="Select contact"
                    disabled
                    // onChange={(target) => {
                    //   setContactData({
                    //     ...contactData,
                    //     contactStatus: target,
                    //   });
                    // }}
                  />
                </li>
                <li className="d-flex align-items-center justify-content-between">
                  <p>Preferred Mode of Contact</p>
                  <SelectPicker
                    className={`select-toggle-in ${validation &&
                      contactData.modeOfContact === null &&
                      "border border-danger"}`}
                    data={modeOfContactData}
                    value={contactData.modeOfContact}
                    searchable={false}
                    placeholder="Selectes Mode"
                    disabled
                    // onChange={(target) => {
                    //   setContactData({
                    //     ...contactData,
                    //     modeOfContact: target,
                    //   });
                    // }}
                  />
                </li>
                <li className="d-flex align-items-center justify-content-between">
                  <p>Assigned agent</p>
                  <SelectPicker
                    className={`select-toggle-in ${validation &&
                      contactData.assignedAgent === null &&
                      "border border-danger"}`}
                    placement="bottomEnd"
                    data={assignAgentData}
                    value={contactData.assignedAgent}
                    searchable={false}
                    placeholder="Select Agent"
                    disabled
                    // onChange={(target) => {
                    //   setContactData({
                    //     ...contactData,
                    //     assignedAgent: target,
                    //   });
                    // }}
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
                      placeholder="Enter First Name"
                      id="firstName"
                      className={`form-control ${validation &&
                        contactData?.firstName === "" &&
                        "border border-danger"}`}
                      name="firstName"
                      value={contactData?.firstName}
                      disabled
                      // onChange={(target) => {
                      //   setContactData({
                      //     ...contactData,
                      //     firstName: target,
                      //   });
                      // }}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="form-label">Middle Name</label>
                    <Input
                      type="text"
                      placeholder="Enter Middle Name"
                      id="middleName"
                      className={`form-control ${validation &&
                        contactData?.middleName === "" &&
                        "border border-danger"}`}
                      name="middleName"
                      value={contactData?.middleName}
                      disabled
                      // onChange={(target) => {
                      //   setContactData({
                      //     ...contactData,
                      //     middleName: target,
                      //   });
                      // }}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <Input
                      type="text"
                      placeholder="Enter Last Name"
                      id="lastName"
                      className={`form-control ${validation &&
                        contactData?.lastName === "" &&
                        "border border-danger"}`}
                      name="lastName"
                      value={contactData?.lastName}
                      disabled
                      // onChange={(target) => {
                      //   setContactData({
                      //     ...contactData,
                      //     lastName: target,
                      //   });
                      // }}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <Input
                      type="number"
                      placeholder="Enter Phone Number"
                      id="phone"
                      name="phone"
                      value={contactData?.phone}
                      disabled
                      // onChange={(target) => {
                      //   setContactData({
                      //     ...contactData,
                      //     phone: target,
                      //   });
                      // }}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <Input
                      type="email"
                      placeholder="Enter Email"
                      id="email"
                      name="email"
                      value={contactData?.email}
                      disabled
                      // onChange={(target) => {
                      //   setContactData({
                      //     ...contactData,
                      //     email: target,
                      //   });
                      // }}
                      className={`form-control ${validation &&
                        contactData?.email === "" &&
                        "border border-danger"}`}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="form-label">Address</label>
                    <Input
                      type="text"
                      placeholder="Enter Address"
                      id="address"
                      name="address"
                      value={contactData?.address}
                      disabled
                      // onChange={(target) => {
                      //   setContactData({
                      //     ...contactData,
                      //     address: target,
                      //   });
                      // }}
                      className={`form-control ${validation &&
                        contactData?.address === "" &&
                        "border border-danger"}`}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">City</label>
                    <Input
                      type="text"
                      placeholder="Enter City"
                      id="city"
                      name="city"
                      value={contactData?.city}
                      disabled
                      // onChange={(target) => {
                      //   setContactData({
                      //     ...contactData,
                      //     city: target,
                      //   });
                      // }}
                      className={`form-control ${validation &&
                        contactData?.city === "" &&
                        "border border-danger"}`}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">State</label>
                    <Input
                      type="text"
                      placeholder="Enter State"
                      id="state"
                      name="state"
                      value={contactData?.state}
                      disabled
                      // onChange={(target) => {
                      //   setContactData({
                      //     ...contactData,
                      //     state: target,
                      //   });
                      // }}
                      className={`form-control ${validation &&
                        contactData?.state === "" &&
                        "border border-danger"}`}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="form-label">Zip Code</label>
                    <Input
                      type="text"
                      placeholder="Enter Zip Code"
                      id="zipCode"
                      name="city"
                      value={contactData?.zipCode}
                      disabled
                      // onChange={(target) => {
                      //   setContactData({
                      //     ...contactData,
                      //     zipCode: target,
                      //   });
                      // }}
                      className={`form-control ${validation &&
                        contactData?.zipCode === 0 &&
                        "border border-danger"}`}
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
                      className={`${validation &&
                        contactData.dateOfBirth === "" &&
                        "border border-danger"}`}
                      oneTap
                      value={new Date(contactData?.dateOfBirth)}
                      disabled
                      // onChange={(target) => {
                      //   const calculatedAge = moment().diff(
                      //     moment(target),
                      //     "years"
                      //   );
                      //   setContactData({
                      //     ...contactData,
                      //     dateOfBirth: target,
                      //     age: calculatedAge,
                      //   });
                      // }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Age</label>{" "}
                    <Input
                      type="number"
                      placeholder="Enter Age"
                      id="age"
                      name="age"
                      value={contactData?.age}
                      disabled={true}
                      className={`${validation &&
                        contactData.age === 0 &&
                        "border border-danger"}`}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Gender</label>
                    <SelectPicker
                      className={`select-toggle-in ${validation &&
                        contactData.gender === null &&
                        "border border-danger"}`}
                      data={genderItem}
                      disabled
                      // onChange={(target) => {
                      //   setContactData({
                      //     ...contactData,
                      //     gender: target,
                      //   });
                      // }}
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
                      placeholder="Enter Height in Ft"
                      id="height_in_ft"
                      name="heightInft"
                      value={contactData.heightInft}
                      disabled
                      // onChange={(value) =>
                      //   handleInputChange(value, "heightInft")
                      // }
                      // disabled={activeField === "heightInInches"} // disable when heightInInches is active
                      className={`${validation &&
                        contactData.heightInft === 0 &&
                        "border border-danger"}`}
                    />
                  </div>
                </div>
                {/* <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Height in Inches</label>
                    <Input
                      type="text"
                      placeholder="Enter Height in Inches"
                      id="height_in_inches"
                      name="heightInInches"
                      value={contactData.heightInInches}
                      // onChange={(value) =>
                      //   handleInputChange(value, "heightInInches")
                      // }
                      disabled // disable when heightInft is active
                      className={`${validation &&
                        contactData.heightInInches === 0 &&
                        "border border-danger"}`}
                    />
                  </div>
                </div> */}
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="form-label">weight in Pounds</label>
                    <Input
                      type="text"
                      placeholder="Enter weight in Pounds"
                      id="weight_in_pounds"
                      name="weightInPound"
                      value={contactData?.weightInPound}
                      disabled
                      // onChange={(target) => {
                      //   setContactData({
                      //     ...contactData,
                      //     weightInPound: target,
                      //   });
                      // }}
                      className={`${validation &&
                        contactData.heightInInches === 0 &&
                        "border border-danger"}`}
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

export default ViewUserDetail;
