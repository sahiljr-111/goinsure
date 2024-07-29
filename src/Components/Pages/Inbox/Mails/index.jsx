import React, { useState } from "react";
import {
  Avatar,
  Col,
  Grid,
  IconButton,
  InputGroup,
  Input,
  Panel,
  Row,
} from "rsuite";
import { ArrowForward, Clock } from "iconsax-react";
import "rsuite/dist/rsuite.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomButton from "../../../Common/UI/CustomButton/index.jsx";
import CommonSelect from "../../../Common/UI/CustomSelect/index.jsx";
import CommonInput from "../../../Common/UI/CustomInput/index.jsx";
import CustomTable from "../../../Common/UI/CustomTable/index.jsx";
import CustomBadge from "../../../Common/UI/CustomBadge/index.jsx";
import SearchIcon from "@rsuite/icons/Search";

const mailList = [
  {
    image: "",
    subject: "Reminder on policy",
    id: "GIW23456",
    date: "15 Mar 2024",
    time: "07:36",
  },
  {
    image: "",
    subject: "Reminder on policy",
    id: "GIW23456",
    date: "15 Mar 2024",
    time: "07:36",
  },
  {
    image: "",
    subject: "Reminder on policy",
    id: "GIW23456",
    date: "15 Mar 2024",
    time: "07:36",
  },
  {
    image: "",
    subject: "Reminder on policy",
    id: "GIW23456",
    date: "15 Mar 2024",
    time: "07:36",
  },
  {
    image: "",
    subject: "Reminder on policy",
    id: "GIW23456",
    date: "15 Mar 2024",
    time: "07:36",
  },
];

const Mails = ({ openComposedMail, setOpenComposedMail }) => {
  // State for search bar input
  const [searchValue, setSearchValue] = useState("");

  // State for dropdown selection
  const [selectedOption, setSelectedOption] = useState(null);

  // Options for the dropdown menu
  const options = [
    { value: "all-mails", label: "All Mails" },
    { value: "inbox", label: "Inbox" },
    { value: "sent-mails", label: "Sent mails" },
    { value: "draft", label: "Draft" },
  ];

  // Event handler for search bar input change
  const handleSearchChange = (value) => {
    setSearchValue(value);
    // Implement search functionality here if needed
  };

  // Event handler for dropdown selection change
  const handleDropdownChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <Grid fluid>
      <Row gutter={4}>
        <Col xs={8} className="pe-3">
          <div
            className="border border-light rounded-3 overflow-hidden"
            style={{
              boxShadow: "0px 1px 2px 0px #1018280F, 0px 1px 3px 0px #1018281A",
            }}
          >
            <div
              className="d-flex justify-content-between align-items-center gap-2 p-2 "
              style={{
                backgroundColor: "#F9FAFB",
                borderBottom: "1px solid #EAECF0",
              }}
            >
              <CommonInput
                placeholder="Search mails"
                value={searchValue}
                onChange={handleSearchChange}
                wrapperClassName="search-wrapper"
                inputWrapperClassName="search-input search-input-main d-flex align-items-center ps-2"
              />
              <CommonSelect
                placeholder="Select option"
                value={selectedOption}
                onChange={handleDropdownChange}
                options={options}
                inputWrapperClassName="outline-0"
                className="w-100 outline-0"
                wrapperClassName="d-flex align-items-center gap-2 border-0 outline-0 w-150px"
                searchable={false}
              />
            </div>
            <div className="p-2 mails-left-side-card">
              {mailList.map((mail, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-between align-items-center px-1 py-2 border-bottom"
                >
                  <div className="d-flex align-items-center gap-2">
                    <div className="d-flex align-items-center rounded-circle">
                      <div className="mails-user-image">
                        <img
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                          alt="mail"
                        />
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "12px", fontWeight: "500" }}>
                        {mail?.subject}
                      </div>
                      <div style={{ fontSize: "12px", fontWeight: "500" }}>
                        {mail?.id}
                      </div>
                    </div>
                  </div>
                  <div className="text-end d-flex flex-lg-wrap justify-content-end align-items-center gap-2 gap-lg-2">
                    <CustomBadge
                      className="rounded-pill"
                      style={{
                        fontSize: "12px",
                        background: "rgba(27, 132, 255, 5%) ",
                        color: "#1b84ff",
                        fontWeight: "500",
                      }}
                    >
                      {mail?.date}
                    </CustomBadge>

                    <CustomBadge
                      className="rounded-pill"
                      style={{
                        fontSize: "12px",
                        background: "rgba(20, 172, 72, 10%) ",
                        color: "#14AC48",
                        fontWeight: "500",
                      }}
                    >
                      {mail?.time}
                    </CustomBadge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>
        <Col xs={16}>
          <div>
            <Panel
              className="border-dark rounded-3 mb-3 mails-right-side"
              bordered
            >
              <div className="d-flex align-items-center gap-2">
                <div className="ct-user-images">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                    alt="mail"
                  />
                </div>
                <div className="d-flex gap-1">
                  <div className="ps-2">
                    <div
                      className="mb-1"
                      style={{
                        fontSize: "20px",
                        lineHeight: "24.2px",
                        fontWeight: "600",
                      }}
                    >
                      Welcome to GoInsureWise - Your Life Insurance Welcome
                      Kit
                    </div>
                    <div
                      className="mb-1"
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "19.36px",
                        color: "#667085",
                      }}
                    >
                      To: gourav.r@quickwayinfosystems.in
                    </div>
                    <div
                      className="d-flex align-items-center text-nowrap"
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#667085",
                      }}
                    >
                      <Clock color="#667085" className="p-1" />
                      12 Mar, 11:46 AM
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end align-items-center gap-2">
                  <div
                    md={9}
                    className="d-flex justify-content-end align-items-center gap-2 pt-3"
                  >
                    <CustomButton
                      isFullWidth
                      className={
                        "ArrowForward d-flex align-items-center gap-2 w-auto"
                      }
                      style={{ fontSize: "12px", padding: "8px 10px" }}
                    >
                      <svg
                        width="18"
                        height="12"
                        viewBox="0 0 18 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.5 5.25L5.25 1.5M1.5 5.25L5.25 9M1.5 5.25H11.7C13.3802 5.25 14.2202 5.25 14.862 5.57698C15.4265 5.8646 15.8854 6.32354 16.173 6.88803C16.5 7.52976 16.5 8.36984 16.5 10.05V10.125V10.5"
                          stroke="white"
                          stroke-width="1.125"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Replay
                    </CustomButton>
                    <CustomButton
                      className={
                        "bg-white text-dark d-flex align-items-center gap-1 w-auto"
                      }
                      isFullWidth
                      style={{
                        color: "#0000",
                        fontSize: "12px",
                        padding: "8px 10px",
                      }}
                    >
                      Forward
                      <svg
                        width="18"
                        height="12"
                        viewBox="0 0 18 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 5.25L12.75 1.5M16.5 5.25L12.75 9M16.5 5.25H6.3C4.61984 5.25 3.77976 5.25 3.13803 5.57698C2.57354 5.8646 2.1146 6.32354 1.82698 6.88803C1.5 7.52976 1.5 8.36984 1.5 10.05V10.125V10.5"
                          stroke="#344054"
                          stroke-width="1.125"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </CustomButton>
                  </div>
                </div>
              </div>
            </Panel>{" "}
            <div
              className="rounded-3 overflow-hidden mb-3"
              style={{
                border: "1px solid #ddd",
              }}
            >
              <div className="p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-3">
                    <svg
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 5.25L5.25 1.5M1.5 5.25L5.25 9M1.5 5.25H11.7C13.3802 5.25 14.2202 5.25 14.862 5.57698C15.4265 5.8646 15.8854 6.32354 16.173 6.88803C16.5 7.52976 16.5 8.36984 16.5 10.05V10.125V10.5"
                        stroke="#343434"
                        stroke-width="1.125"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <h5 className="mb-0 user-email-text">Johndoe@gmail.com</h5>
                  </div>

                  <div>
                    <img
                      src="../../../../../public/Images/mailOpen.svg"
                      alt=""
                      onClick={() => setOpenComposedMail(!openComposedMail)}
                    />
                  </div>
                </div>

                <div className="my-3 border-bottom pb-4">
                  <label className="mb-2">Template</label>
                  <CommonSelect
                    placeholder="Select template"
                    value={selectedOption}
                    onChange={handleDropdownChange}
                    options={options}
                    inputWrapperClassName="border-0 outline-0"
                    className="w-100 border-0 outline-0"
                    wrapperClassName="d-flex align-items-center gap-2 border-0 outline-0"
                    searchable={false}
                  />
                </div>

                <p
                  className="text-left"
                  style={{
                    color: "#71717A",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  Hey, John
                </p>

                <p
                  className="text-left"
                  style={{
                    color: "#71717A",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p
                  className="text-left"
                  style={{
                    color: "#71717A",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>

                {/* <h5>Policy Details</h5>
                <div
                  className="d-flex justify-content-between align-items-center "
                  style={{ fontSize: "13px" }}
                >
                  <div style={{ color: "#98A2B3" }}>Carrier :-</div>
                  Wellabe
                </div>
                <div
                  className="d-flex justify-content-between align-items-center "
                  style={{ fontSize: "13px" }}
                >
                  <div style={{ color: "#98A2B3" }}>Type of Coverage :-</div>
                  Guaranteed Assurance
                </div>
                <div
                  className="d-flex justify-content-between align-items-center "
                  style={{ fontSize: "13px" }}
                >
                  <div style={{ color: "#98A2B3" }}>Face Value :-</div>$
                </div>
                <div
                  className="d-flex justify-content-between align-items-center "
                  style={{ fontSize: "13px" }}
                >
                  <div style={{ color: "#98A2B3" }}>Premium Amount :-</div>{" "}
                  {"${{Policy-premium}}"}
                </div>
                <div
                  className="d-flex justify-content-between align-items-center "
                  style={{ fontSize: "13px" }}
                >
                  <div style={{ color: "#98A2B3" }}> Effective Date :-</div>
                  01-03-2024
                </div>
                <div
                  className="d-flex justify-content-between align-items-center "
                  style={{ fontSize: "13px" }}
                >
                  <div style={{ color: "#98A2B3" }}>
                    Your Agent’s Information :-
                  </div>{" "}
                  ---
                </div>
                <p
                  className="text-left pt-3"
                  style={{ color: "#98A2B3", fontSize: "13px" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et
                </p> */}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

export default Mails;
