import React, { useContext, useEffect, useState } from "react";
import { Tabs, Avatar, List } from "rsuite";
import {
  DocumentText,
  AttachCircle,
  ShieldSecurity,
  HeartTick,
  ArrowRotateLeft,
  Sms,
  CallCalling,
  MessageText1,
  User,
  ArrowRight2,
} from "iconsax-react";
import PolicyDetail from "./PolicyDetail/PolicyDetail";
import AttachmentsCtn from "./AttachmentsCtn/AttachmentsCtn";
import InboxCtn from "./InboxCtn/InboxCtn";
import PolicyTrackerCtn from "./PolicyTrackerCtn/PolicyTrackerCtn";
import HistoryCtn from "./HistoryCtn/HistoryCtn";
import HealthDetailsCtn from "./HealthDetailsCtn/HealthDetailsCtn";
import UserDetail from "../../Components/Common/Sidebar/UserDetails/UserDetail";
import { ModelName } from "../../context/callingModelContext";
import MinimizeScreen from "../../Components/Common/Dashbord/Calldailog/MinimizeScreen";
import IncomingCall from "../../Components/Common/Dashbord/Calldailog/IncomingCall";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSingleContactPolicyDetailData } from "../../Redux/Actions/PolicyDetailAction";
import { singleDetailContact } from "../../Redux/Actions/ContactAction";
import { getSingleContactNotesData } from "../../Redux/Actions/NotesAction";
import { getSingleContactPolicyFileData } from "../../Redux/Actions/PolicyDetailFileAction";

const Dashboard = () => {
  const location = useLocation();
  const [userOpen, setUserOpen] = useState(false);
  const [userDetailData, setUserDetailData] = React.useState({});
  const [
    policyDataForSingleContact,
    setPolicyDataForSingleContact,
  ] = React.useState([]);
  const [
    notesDataForSingleContact,
    setNotesDataForSingleContact,
  ] = React.useState([]);
  const [openDialPad, setOpenDialPad] = React.useState(false);
  const [openComposedMail, setOpenComposedMail] = React.useState(false);
  const [openWithHeader, setOpenWithHeader] = React.useState(false);
  const [activeInboxTab, setActiveInboxTab] = React.useState("All");
  const [activeTab, setActiveTab] = useState("1"); // default active tab
  const [activePolicyTab, setActivePolicyTab] = useState("All"); // default active tab
  const { setModelName, modelName } = useContext(ModelName);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [policyDetailFileData, setPolicyDetailFileData] = useState([]);
  const [notesCurrentPage, setNotesCurrentPage] = useState(1);
  const [notesLimit, setNotesLimit] = useState(3);
  const dispatch = useDispatch();

  const handleSelect = (eventKey) => {
    setActiveTab(eventKey);
  };

  const hundleOpen = (e) => {
    e.preventDefault();
    if (userOpen === true) {
      setUserOpen(false);
    } else {
      setUserOpen(true);
    }
  };
  const handleOpenPad = () => {
    setOpenDialPad(!openDialPad);
    setModelName("dialingNumberPad");
  };
  const getSingleContactPolicyData = (id) => {
    dispatch(
      getSingleContactPolicyDetailData(id, currentPage, limit, activePolicyTab)
    ).then((res) => {
      setPolicyDataForSingleContact(res);
    });
  };
  const getSingleContactNotesDetailData = (id) => {
    dispatch(getSingleContactNotesData(id, notesCurrentPage, notesLimit)).then(
      (res) => {
        setNotesDataForSingleContact(res);
      }
    );
  };
  const getUserdata = (id) => {
    dispatch(singleDetailContact(id)).then((res) => {
      if (res.success === true) {
        setUserDetailData(res);
      }
    });
  };
  const getFileData = (id) => {
    dispatch(getSingleContactPolicyFileData(id)).then((res) => {
      if (res.success === true) {
        setPolicyDetailFileData(res.data);
      }
    });
  };
  useEffect(() => {
    if (location?.state?.type === "contact") {
      setUserOpen(true);
      getUserdata(location?.state?.userData._id);
      getSingleContactNotesDetailData(location?.state?.userData._id);
      getSingleContactPolicyData(location?.state?.userData._id);
      getFileData(location?.state?.userData._id);
      if (location?.state?.edit === true) {
        setOpenWithHeader(true);
      }
    }
  }, [location, currentPage, limit, notesLimit, activePolicyTab]);
  return (
    <>
      <section className="gw-content-body transition-ease position-relative">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 gw-body-col-12">
              <div
                className={`gsw-user-details-click gsw-userinfo-click position-fixed top-50 ${
                  userOpen === true ? "active" : ""
                }`}
              >
                <User
                  size="24"
                  color="#fff"
                  variant="Outline"
                  onClick={hundleOpen}
                />
                <ArrowRight2
                  size="20"
                  color="#fff"
                  variant="Outline"
                  className="arrowright-svg"
                  onClick={hundleOpen}
                />
              </div>

              <div className="d-flex justify-content-between flex-wrap">
                {/* User Details Sidebar start */}
                <div
                  className={`gsw-user-details-wrapper scrollbar d-flex flex-column ${
                    userOpen === true ? "active" : ""
                  }`}
                >
                  <UserDetail
                    openDialPad={openDialPad}
                    setOpenDialPad={setOpenDialPad}
                    openComposedMail={openComposedMail}
                    setOpenComposedMail={setOpenComposedMail}
                    openWithHeader={openWithHeader}
                    setOpenWithHeader={setOpenWithHeader}
                    activeInboxTab={activeInboxTab}
                    setActiveInboxTab={setActiveInboxTab}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    userDetailData={userDetailData}
                    setUserDetailData={setUserDetailData}
                    policyDataForSingleContact={policyDataForSingleContact}
                    setPolicyDataForSingleContact={
                      setPolicyDataForSingleContact
                    }
                    notesDataForSingleContact={notesDataForSingleContact}
                    setNotesDataForSingleContact={setNotesDataForSingleContact}
                    setNotesCurrentPage={setNotesCurrentPage}
                    notesCurrentPage={notesCurrentPage}
                    setNotesLimit={setNotesLimit}
                    notesLimit={notesLimit}
                    getUserdata={getUserdata}
                  />
                </div>
                {/* User Details Sidebar End */}

                <div className="gsw-globel-tab flex-grow-1">
                  <div className="defult-page-frame h-100">
                    <div className="gsw-tabheader-right position-absolute end-0 z-1 d-flex align-items-center gap-3">
                      <div className="gsw-header-authorinfo d-flex align-items-center gap-2">
                        <Avatar src="https://i.pravatar.cc/150?u=2" circle />
                        <div className="gsw-authorinfo-namemail">
                          <p
                            className="gsw-userinfo-click"
                            onClick={hundleOpen}
                          >
                            {userDetailData?.data?.firstName +
                              " " +
                              userDetailData?.data?.lastName}
                          </p>
                          <span>{userDetailData?.data?.email}</span>
                        </div>
                      </div>
                      <div className="beneficiary-point m-0">
                        <List className="p-0 m-0 gap-2 d-flex align-items-center list-unstyled">
                          <List.Item className="p-0">
                            <a
                              href="#"
                              className="point-icon text-decoration-none text-blue d-flex align-items-center justify-content-center"
                              onClick={() =>
                                setOpenComposedMail(!openComposedMail)
                              }
                            >
                              <Sms size="16" color="#1B84FF" variant="Bold" />
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
                              <MessageText1
                                size="16"
                                color="#874BFF"
                                variant="Bold"
                              />
                            </a>
                          </List.Item>
                          <List.Item className="p-0">
                            <a
                              href="#"
                              className="point-icon text-decoration-none text-success d-flex align-items-center justify-content-center"
                              onClick={handleOpenPad}
                            >
                              <CallCalling
                                size="16"
                                color="#14AC48"
                                variant="Bold"
                              />
                            </a>
                          </List.Item>
                        </List>
                      </div>
                    </div>
                    <Tabs
                      activeKey={activeTab}
                      onSelect={handleSelect}
                      appearance="subtle"
                      className="gw-pagetabs gap-0"
                    >
                      <Tabs.Tab
                        eventKey="1"
                        title="Policy details"
                        icon={<DocumentText size="20" variant="Bold" />}
                      >
                        <PolicyDetail
                          policyDataForSingleContact={
                            policyDataForSingleContact
                          }
                          getSingleContactPolicyData={
                            getSingleContactPolicyData
                          }
                          userDetailData={userDetailData}
                          setUserDetailData={setUserDetailData}
                          getUserdata={getUserdata}
                          limit={limit}
                          setLimit={setLimit}
                          currentPage={currentPage}
                          setCurrentPage={setCurrentPage}
                          activePolicyTab={activePolicyTab}
                          setActivePolicyTab={setActivePolicyTab}
                        />
                      </Tabs.Tab>
                      <Tabs.Tab
                        eventKey="2"
                        title="Attachments"
                        icon={<AttachCircle size="20" variant="Bold" />}
                      >
                        <AttachmentsCtn
                          userDetailData={userDetailData}
                          setUserDetailData={setUserDetailData}
                          getFileData={getFileData}
                          policyDetailFileData={policyDetailFileData}
                          setPolicyDetailFileData={setPolicyDetailFileData}

                        />
                      </Tabs.Tab>
                      <Tabs.Tab
                        eventKey="3"
                        title="Inbox"
                        icon={<Sms size="20" variant="Bold" />}
                      >
                        <InboxCtn
                          openDialPad={openDialPad}
                          setOpenDialPad={setOpenDialPad}
                          openComposedMail={openComposedMail}
                          setOpenComposedMail={setOpenComposedMail}
                          activeInboxTab={activeInboxTab}
                          setActiveInboxTab={setActiveInboxTab}
                        />
                      </Tabs.Tab>
                      <Tabs.Tab
                        eventKey="4"
                        title="Policy Tracker"
                        icon={<ShieldSecurity size="20" variant="Bold" />}
                      >
                        <PolicyTrackerCtn />
                      </Tabs.Tab>
                      <Tabs.Tab
                        eventKey="5"
                        title="History"
                        icon={<ArrowRotateLeft size="20" variant="Bold" />}
                      >
                        <HistoryCtn
                          userDetailData={userDetailData}
                          setUserDetailData={setUserDetailData}
                          activeTab={activeTab}
                          setActiveTab={setActiveTab}
                          getUserdata={getUserdata}
                          getSingleContactNotesDetailData={
                            getSingleContactNotesDetailData
                          }
                          getSingleContactPolicyData={
                            getSingleContactPolicyData
                          }
                          getFileData={getFileData}
                        />
                      </Tabs.Tab>
                      <Tabs.Tab
                        eventKey="6"
                        title="Health details"
                        icon={<HeartTick size="20" variant="Bold" />}
                      >
                        <HealthDetailsCtn
                          userDetailData={userDetailData}
                          setUserDetailData={setUserDetailData}
                        />
                      </Tabs.Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {modelName === "minimizeModel" && (
        <div className="minimize-screen-position">
          <MinimizeScreen setOpenDialPad={setOpenDialPad} />
        </div>
      )}
      {modelName === "incomingCall" && <IncomingCall />}
    </>
  );
};

export default Dashboard;
