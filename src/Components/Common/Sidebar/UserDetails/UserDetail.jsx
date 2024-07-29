import React, { useContext, useState } from "react";
import { Button, List, Panel, PanelGroup } from "rsuite";
import UserImage from "../../../../assets/images/user-2.jpg";
import { Edit2, Trash, Sms, CallCalling, MessageText1 } from "iconsax-react";
import DeleteIcon from "../../../../assets/images/delete-icon.png";
import Notes from "./Notes/Notes";
import BasicDetail from "./Notes/BasicDetail";
import DeleteModal from "../../DeleteModal/DeleteModal";
import EditUserDetail from "../../../Pages/Contacts/EditUserDetail";
import { ModelName } from "../../../../context/callingModelContext";

const UserDetail = ({
  openDialPad,
  setOpenDialPad,
  openComposedMail,
  setOpenComposedMail,
  openWithHeader,
  setOpenWithHeader,
  activeInboxTab,
  setActiveInboxTab,
  activeTab,
  setActiveTab,
  userDetailData,
  setUserDetailData,
  policyDataForSingleContact,
  setPolicyDataForSingleContact,
  notesDataForSingleContact,
  setNotesDataForSingleContact,
  setNotesCurrentPage,
  notesCurrentPage,
  setNotesLimit,
  notesLimit,
  getUserdata
}) => {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const handleDeleteOpen = () => setDeleteOpen(true);
  const handleDeleteClose = () => setDeleteOpen(false);
  const { setModelName } = useContext(ModelName);

  const handleOpenPad = () => {
    setOpenDialPad(!openDialPad);
    setModelName("dialingNumberPad");
  };

  const formatDateString = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };
  return (
    <>
      <div className="beneficiary-profile rounded-4 overflow-hidden flex-shrink-0">
        <div className="beneficiary-top-profile">
          <div className="ben-inner-profile d-flex align-items-center justify-content-between">
            <div className="ben-inner-profile-wrap d-flex align-items-center flex-wrap">
              <img src={UserImage} alt="img" className="img-fluid rounded-3" />
              <div className="profile-content">
                <span
                  className={`badge  ${
                    userDetailData?.data?.status === true
                      ? "text-bg-success"
                      : "text-bg-danger"
                  } rounded-pill`}
                >
                  {userDetailData?.data?.status === true
                    ? "Active"
                    : "Inactive"}
                </span>
                {/* <h3>John Doe Calvin</h3> */}
                <h3>
                  {userDetailData?.data?.firstName +
                    " " +
                    userDetailData?.data?.lastName}
                </h3>
              </div>
            </div>
            <div className="profile-setting d-flex align-items-center gap-2">
              <Button
                onClick={() => setOpenWithHeader(true)}
                className="text-decoration-none d-flex align-items-center justify-content-center"
              >
                <Edit2 size="16" color="#42707F" variant="Outline" />
              </Button>
              <Button
                onClick={handleDeleteOpen}
                className="text-decoration-none d-flex align-items-center justify-content-center"
              >
                <Trash size="16" color="#FF2E2E" variant="Outline" />
              </Button>
            </div>
          </div>
          <div className="beneficiary-point mt-4 d-flex align-items-center justify-content-between">
            <List className="p-0 m-0 d-flex align-items-center list-unstyled gap-2">
              <List.Item className="p-0">
                <a
                  href="#"
                  className="point-icon text-decoration-none text-blue d-flex align-items-center justify-content-center"
                  onClick={() => setOpenComposedMail(!openComposedMail)}
                >
                  <Sms size="20" color="#1B84FF" variant="Bold" />
                </a>
              </List.Item>
              <List.Item className="p-0">
                <a
                  href="#"
                  className="point-icon text-decoration-none text-purple d-flex align-items-center justify-content-center"
                  onClick={() => {
                    setActiveInboxTab("SMS"), setActiveTab("3");
                  }}
                >
                  <MessageText1 size="20" color="#874BFF" variant="Bold" />
                </a>
              </List.Item>
              <List.Item className="p-0">
                <a
                  href="#"
                  className="point-icon text-decoration-none text-success d-flex align-items-center justify-content-center"
                  onClick={handleOpenPad}
                >
                  <CallCalling size="20" color="#14AC48" variant="Bold" />
                </a>
              </List.Item>
            </List>
            <List className="p-0 m-0 user-policies-details list-unstyled">
              <List.Item className="p-0">
                Active Policies{" "}
                <span className="d-inline-block">
                  {userDetailData?.policyDetail?.length}
                </span>
              </List.Item>
              <List.Item className="p-0">
                Active Premium{" "}
                <span className="d-inline-block">
                  ${" "}
                  {userDetailData?.policyDetail?.reduce(
                    (accumulator, currentValue) => {
                      return accumulator + +currentValue.policyPremium;
                    },
                    0
                  )}
                </span>
              </List.Item>
            </List>
          </div>
        </div>
        <div className="beneficiary-status">
          <List className="p-0 m-0">
            <List.Item className="d-flex align-items-center justify-content-between">
              <p>Contact status</p>
              <span className="badge text-bg-primary rounded-pill">
                {userDetailData?.data?.contactStatus}
              </span>
            </List.Item>
            <List.Item className="d-flex align-items-center justify-content-between">
              <p>Preferred Mode of Contact</p>
              <span className="badge text-bg-success rounded-pill">
                {userDetailData?.data?.modeOfContact}
              </span>
            </List.Item>
            <List.Item className="d-flex align-items-center justify-content-between">
              <p>Assigned agent</p>
              <span className="badge text-purple rounded-pill">
                {userDetailData?.data?.assignedAgent}
              </span>
            </List.Item>
          </List>
          <PanelGroup
            accordion
            defaultActiveKey={1}
            className="user-details-accordian"
          >
            <Panel
              header="Basic details"
              eventKey={1}
              className="border-0 mt-3 pt-3 border-top"
            >
              <ul className="p-0 m-0">
                <li className="d-flex align-items-center justify-content-between">
                  <p>Full name</p>
                  <span>
                    {" "}
                    {userDetailData?.data?.firstName +
                      " " +
                      userDetailData?.data?.middleName +
                      " " +
                      userDetailData?.data?.lastName}
                  </span>
                </li>
                <li className="d-flex align-items-center justify-content-between">
                  <p>Phone Number</p>
                  <span className="text-success">
                    {userDetailData?.data?.phone}
                  </span>
                </li>
                <li className="d-flex align-items-center justify-content-between">
                  <p>Email</p>
                  <span>{userDetailData?.data?.email}</span>
                </li>
                <li className="d-flex align-items-center justify-content-between">
                  <p>Address</p>
                  <span>{userDetailData?.data?.address}</span>
                </li>
                <li className="d-flex align-items-center justify-content-between">
                  <p>City</p>
                  <span>{userDetailData?.data?.city}</span>
                </li>
                <li className="d-flex align-items-center justify-content-between">
                  <p>State</p>
                  <span>{userDetailData?.data?.state}</span>
                </li>
                <li className="d-flex align-items-center justify-content-between">
                  <p>Zip code</p>
                  <span>{userDetailData?.data?.zipCode}</span>
                </li>
              </ul>
            </Panel>
            <Panel
              header="Additional info"
              eventKey={2}
              className="border-0 mt-3 pt-3 border-top"
            >
              <ul className="p-0 m-0">
                <li className="d-flex align-items-center justify-content-between">
                  <p>Date of Birth</p>
                  <span>
                    {formatDateString(userDetailData?.data?.dateOfBirth)}
                  </span>
                </li>
                <li className="d-flex align-items-center justify-content-between">
                  <p>Age</p>
                  <span className="text-success">
                    {userDetailData?.data?.age} years
                  </span>
                </li>
                <li className="d-flex align-items-center justify-content-between">
                  <p>Gender</p>
                  <span>{userDetailData?.data?.gender}</span>
                </li>
                <li className="d-flex align-items-center justify-content-between">
                  <p>SSN number</p>
                  <span>78739030</span>
                </li>
                <li className="d-flex align-items-center justify-content-between">
                  <p>Height in Ft</p>
                  <span>{userDetailData?.data?.heightInft} ft</span>
                </li>
                <li className="d-flex align-items-center justify-content-between">
                  <p>Height in Inches</p>
                  <span>{userDetailData?.data?.heightInInches} inches</span>
                </li>
                <li className="d-flex align-items-center justify-content-between">
                  <p>weight? Pounds</p>
                  <span>{userDetailData?.data?.weightInPound}</span>
                </li>
              </ul>
            </Panel>
          </PanelGroup>
        </div>
      </div>

      <div className="gsw-notes-wrapper flex-shrink-0 p-3 rounded-4">
        <Notes
          notesDataForSingleContact={notesDataForSingleContact}
          setNotesDataForSingleContact={setNotesDataForSingleContact}
          userDetailData={userDetailData}
          setNotesCurrentPage={setNotesCurrentPage}
          notesCurrentPage={notesCurrentPage}
          setNotesLimit={setNotesLimit}
          notesLimit={notesLimit}
        />
      </div>

      {/* <div className="p-3 rounded-4 userselectstatus-accordion flex-shrink-0">
        <BasicDetail />
      </div> */}
      {/* User Detail modal Start */}
      <EditUserDetail
        open={openWithHeader}
        onclose={() => setOpenWithHeader(false)}
        openWithHeader={openWithHeader}
        setOpenWithHeader={setOpenWithHeader}
        userDetailData={userDetailData}
        setUserDetailData={setUserDetailData}
        type={"NoEdit"}
        getUserdata={getUserdata}
      />
      {/* User Detail modal End */}

      {/* Delete user modal */}
      <DeleteModal open={deleteOpen} handleDeleteClose={handleDeleteClose} />
      {/* Delete user modal End */}
    </>
  );
};

export default UserDetail;
