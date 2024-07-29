import React, { useState } from "react";
import CommonSelect from "../../Components/Common/UI/CustomSelect";
import { CiFilter } from "react-icons/ci";
import LineChart from "../../Components/Common/Report/LineChart";
import RecentContact from "../../Components/Pages/PolicyPage/RecentContact";
import ContactModal from "../../Components/Pages/PolicyPage/ContactModal";
import "./PolicyPage.css";
const yearData = ["By Year", "By Month"].map((res) => ({
  label: res,
  value: res,
}));

const PolicyPage = () => {
  const [userOpen, setUserOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const hundleOpen = (e) => {
    e.preventDefault();
    setUserOpen(!userOpen);
  };
  const hadleModalOpen = () => setContactModalOpen(true);
  return (
    <>
      <section className="gw-content-body transition-ease position-relative">
        <div className="container-fluid">
          <div className="row">
            {/* <div className="col-md-12 gw-body-col-12">
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
            </div> */}
            <div className="d-flex justify-content-between flex-wrap">
              {/* User Details Sidebar start */}
              <div
                className={`gsw-user-details-wrapper scrollbar d-flex flex-column ${
                  userOpen === true ? "active" : ""
                }`}
              >
                {/* <UserDetail
                    openDialPad={openDialPad}
                    setOpenDialPad={setOpenDialPad}
                    openComposedMail={openComposedMail}
                    setOpenComposedMail={setOpenComposedMail}
                    activeInboxTab={activeInboxTab}
                    setActiveInboxTab={setActiveInboxTab}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  /> */}
              </div>
              {/* User Details Sidebar End */}
              <div className="gsw-globel-tab flex-grow-1 h-100">
                <div className="defult-page-frame">
                  <div className="card border-0 bg-transparent box-main-card overflow-hidden">
                    <div className="card-header">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Policy Ledger & Performance</h5>
                        <div className="d-flex justify-content-end align-items-center gap-2">
                          <CommonSelect
                            placeholder={"By Year"}
                            searchable={false}
                            data={yearData}
                            className="min-w-200"
                            cleanable={false}
                          />
                          <button
                            // onClick={handleAddFilter}
                            className="button-fill d-flex align-items-center justify-content-center gap-2 flter-btn"
                          >
                            <CiFilter size="25" color="#FFF" />
                            Filter
                          </button>
                        </div>
                      </div>

                      {/* <div className="d-flex align-items-center gap-3 input-main-box">
                        <div className="top-input">
                          <CommonSelect
                            inputWrapperClassName="rounded-3 w-100 outline-0"
                            wrapperClassName="rounded-3 w-100 outline-0"
                            data={data}
                            className="w-100 rounded-3 outline-0"
                            searchable={false}
                            cleanable={false}
                            placeholder="Report type"
                            onChange={handleReportChange}
                            value={selectedReport}
                          />
                        </div>
                        <div className="top-input">
                          <CommonSelect
                            inputWrapperClassName="rounded-3 w-100 outline-0"
                            wrapperClassName="rounded-3 w-100 outline-0"
                            // options={policies}
                            className="w-100 rounded-3 outline-0"
                            searchable={false}
                            placeholder="Type of Date"
                          />
                        </div>
                        <div className="time-lable top-input">
                          <DateInput />
                        </div>
                        <div className="time-lable top-input">
                          <DateInput />
                        </div>
                        <div className="top-input">
                          <CommonSelect
                            inputWrapperClassName="rounded-3 w-100 outline-0"
                            wrapperClassName="rounded-3 w-100 outline-0"
                            // options={policies}
                            className="w-100 rounded-3 outline-0"
                            searchable={false}
                            placeholder="Carrier"
                          />
                        </div>
                        <div className="top-input">
                          <CommonSelect
                            inputWrapperClassName="rounded-3 w-100 outline-0"
                            wrapperClassName="rounded-3 w-100 outline-0"
                            // options={policies}
                            className="w-100 rounded-3 outline-0"
                            searchable={false}
                            placeholder="Product"
                          />
                        </div>
                        <div className="top-input">
                          <CommonSelect
                            inputWrapperClassName="rounded-3 w-100 outline-0"
                            wrapperClassName="rounded-3 w-100 outline-0"
                            // options={policies}
                            className="w-100 rounded-3 outline-0"
                            searchable={false}
                            placeholder="Product Type"
                          />
                        </div>
                      </div> */}
                    </div>
                    <div className="d-flex justify-content-between  align-items-center policyCardGroup">
                      <div className="policyCard">
                        <div>
                          <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="48"
                              height="48"
                              rx="12"
                              fill="#FFFBEB"
                            />
                            <path
                              d="M18.73 31.7C19.55 30.82 20.8 30.89 21.52 31.85L22.53 33.2C23.34 34.27 24.65 34.27 25.46 33.2L26.47 31.85C27.19 30.89 28.44 30.82 29.26 31.7C31.04 33.6 32.49 32.97 32.49 30.31V19.04C32.5 15.01 31.56 14 27.78 14H20.22C16.44 14 15.5 15.01 15.5 19.04V30.3C15.5 32.97 16.96 33.59 18.73 31.7Z"
                              stroke="#B0921B"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M20 19H28"
                              stroke="#B0921B"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M21 23H27"
                              stroke="#B0921B"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <h4 className="policyCardTitle">
                          Submitted Applications
                        </h4>
                        <p className="PolicyNumber">546</p>
                      </div>
                      <div className="policyCard">
                        <div>
                          <svg
                            width="49"
                            height="48"
                            viewBox="0 0 49 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.800781"
                              width="48"
                              height="48"
                              rx="12"
                              fill="#EFF6FF"
                            />
                            <path
                              d="M14.3008 14V31C14.3008 32.66 15.6408 34 17.3008 34H34.3008"
                              stroke="#1E7CF2"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17.3008 29L21.8908 23.64C22.6508 22.76 24.0008 22.7 24.8208 23.53L25.7708 24.48C26.5908 25.3 27.9408 25.25 28.7008 24.37L33.3008 19"
                              stroke="#1E7CF2"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <h4 className="policyCardTitle">Submitted Revenue</h4>
                        <p className="PolicyNumber">$ 54872.35</p>
                      </div>
                      <div className="policyCard">
                        <div>
                          <svg
                            width="49"
                            height="48"
                            viewBox="0 0 49 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.601562"
                              width="48"
                              height="48"
                              rx="12"
                              fill="#FDF2F8"
                            />
                            <path
                              d="M23.0917 14.2296L18.1017 16.0996C16.9517 16.5296 16.0117 17.8896 16.0117 19.1196V26.5496C16.0117 27.7296 16.7917 29.2796 17.7417 29.9896L22.0417 33.1996C23.4517 34.2596 25.7717 34.2596 27.1817 33.1996L31.4817 29.9896C32.4317 29.2796 33.2117 27.7296 33.2117 26.5496V19.1196C33.2117 17.8896 32.2717 16.5296 31.1217 16.0996L26.1317 14.2296C25.2817 13.9196 23.9217 13.9196 23.0917 14.2296Z"
                              stroke="#EE4CA5"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M24.6016 27.5C26.8107 27.5 28.6016 25.7091 28.6016 23.5C28.6016 21.2909 26.8107 19.5 24.6016 19.5C22.3924 19.5 20.6016 21.2909 20.6016 23.5C20.6016 25.7091 22.3924 27.5 24.6016 27.5Z"
                              stroke="#EE4CA5"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M24.8516 22.25V23.18C24.8516 23.53 24.6716 23.86 24.3616 24.04L23.6016 24.5"
                              stroke="#EE4CA5"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <h4 className="policyCardTitle">3 Months Retention</h4>
                        <p className="PolicyNumber">65.584%</p>
                      </div>
                      <div className="policyCard">
                        <div>
                          <svg
                            width="49"
                            height="48"
                            viewBox="0 0 49 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.398438"
                              width="48"
                              height="48"
                              rx="12"
                              fill="#F8FAFC"
                            />
                            <g clipPath="url(#clip0_2393_14421)">
                              <path
                                d="M24.8774 35.4761C22.0561 35.4704 19.3358 34.4256 17.2361 32.5414C15.1363 30.6572 13.8041 28.0655 13.4941 25.2614C13.466 25.0044 13.5408 24.7469 13.7023 24.545C13.8637 24.3432 14.0986 24.2137 14.3554 24.1847C14.3928 24.181 14.4272 24.1796 14.4609 24.1796C14.702 24.1762 14.9356 24.2635 15.1155 24.4241C15.2954 24.5848 15.4083 24.8071 15.4321 25.0471C15.6901 27.3739 16.7955 29.5243 18.5376 31.0881C20.2796 32.652 22.5363 33.5199 24.8774 33.5264C25.2344 33.5262 25.5911 33.5063 25.946 33.4667C27.8184 33.2598 29.5875 32.5023 31.0294 31.2899C32.4714 30.0775 33.5214 28.4648 34.0466 26.6556C34.5719 24.8464 34.5489 22.9221 33.9805 21.1261C33.412 19.33 32.3237 17.7428 30.8532 16.5653C29.1754 15.2074 27.0812 14.4686 24.9228 14.4731C24.5653 14.4731 24.208 14.4931 23.8527 14.5328C22.217 14.707 20.655 15.3046 19.3208 16.2667C17.9865 17.2288 16.9262 18.5221 16.2443 20.019C16.1658 20.188 16.0407 20.3311 15.8837 20.4315C15.7268 20.5319 15.5444 20.5855 15.3581 20.5859C15.1945 20.5858 15.0336 20.5446 14.8902 20.466C14.7467 20.3874 14.6254 20.274 14.5372 20.1362C14.4491 19.9984 14.3971 19.8407 14.3859 19.6775C14.3747 19.5143 14.4048 19.3509 14.4733 19.2024C15.2945 17.3993 16.5716 15.8414 18.1787 14.6825C19.7857 13.5237 21.6672 12.8039 23.6374 12.5941C24.0635 12.5472 24.4919 12.5236 24.9206 12.5234C27.7419 12.529 30.4624 13.5736 32.5623 15.4579C34.6623 17.3421 35.9945 19.9339 36.3046 22.7382C36.6355 25.7623 35.7534 28.7942 33.8519 31.1689C31.9504 33.5436 29.1846 35.0671 26.1613 35.4054C25.7349 35.4523 25.3063 35.4759 24.8774 35.4761Z"
                                fill="#38BDF8"
                              />
                              <path
                                d="M15.3535 20.5869C15.1191 20.5872 14.8925 20.5028 14.7153 20.3493C14.5381 20.1959 14.4222 19.9836 14.3889 19.7516L13.8111 15.772C13.7925 15.6453 13.7991 15.5161 13.8305 15.392C13.862 15.2678 13.9176 15.1511 13.9942 15.0485C14.0708 14.9458 14.1669 14.8593 14.277 14.7939C14.3871 14.7284 14.509 14.6854 14.6358 14.6671C14.6816 14.6606 14.7279 14.6573 14.7742 14.6572C15.009 14.6558 15.2363 14.7397 15.4139 14.8931C15.5916 15.0466 15.7075 15.2594 15.7403 15.4918L16.1629 18.3977L18.7696 17.7283C19.0198 17.6646 19.2851 17.7028 19.5072 17.8345C19.7293 17.9661 19.8901 18.1805 19.9544 18.4306C20.0187 18.6806 19.9812 18.946 19.8501 19.1684C19.719 19.3909 19.5051 19.5523 19.2552 19.6172L15.596 20.5565C15.5167 20.5767 15.4353 20.5869 15.3535 20.5869Z"
                                fill="#38BDF8"
                              />
                              <path
                                d="M28.6499 27.9751C28.4287 27.9746 28.2143 27.8993 28.0412 27.7616L24.2912 24.7616C24.1769 24.6705 24.0846 24.5546 24.0213 24.4228C23.958 24.2909 23.9254 24.1465 23.9258 24.0002V18.0002C23.9258 17.7417 24.0285 17.4937 24.2113 17.3109C24.3941 17.1281 24.6421 17.0254 24.9006 17.0254C25.1592 17.0254 25.4071 17.1281 25.59 17.3109C25.7728 17.4937 25.8755 17.7417 25.8755 18.0002V23.5319L29.26 26.2389C29.4179 26.3651 29.5326 26.5373 29.5883 26.7316C29.644 26.9259 29.6379 27.1327 29.5709 27.3234C29.5039 27.5141 29.3792 27.6793 29.2142 27.796C29.0492 27.9128 28.852 27.9754 28.6499 27.9751Z"
                                fill="#38BDF8"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_2393_14421">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="translate(12.8984 12)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <h4 className="policyCardTitle">Yesterday</h4>
                        <p className="PolicyNumber">Coming soon...</p>
                      </div>
                      <div className="policyCard">
                        <div>
                          <svg
                            width="49"
                            height="48"
                            viewBox="0 0 49 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.199219"
                              width="48"
                              height="48"
                              rx="12"
                              fill="#F2FCFF"
                            />
                            <path
                              d="M24.1992 27C25.8561 27 27.1992 25.6569 27.1992 24C27.1992 22.3431 25.8561 21 24.1992 21C22.5424 21 21.1992 22.3431 21.1992 24C21.1992 25.6569 22.5424 27 24.1992 27Z"
                              stroke="#42707F"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14.1992 24.8804V23.1204C14.1992 22.0804 15.0492 21.2204 16.0992 21.2204C17.9092 21.2204 18.6492 19.9404 17.7392 18.3704C17.2192 17.4704 17.5292 16.3004 18.4392 15.7804L20.1692 14.7904C20.9592 14.3204 21.9792 14.6004 22.4492 15.3904L22.5592 15.5804C23.4592 17.1504 24.9392 17.1504 25.8492 15.5804L25.9592 15.3904C26.4292 14.6004 27.4492 14.3204 28.2392 14.7904L29.9692 15.7804C30.8792 16.3004 31.1892 17.4704 30.6692 18.3704C29.7592 19.9404 30.4992 21.2204 32.3092 21.2204C33.3492 21.2204 34.2092 22.0704 34.2092 23.1204V24.8804C34.2092 25.9204 33.3592 26.7804 32.3092 26.7804C30.4992 26.7804 29.7592 28.0604 30.6692 29.6304C31.1892 30.5404 30.8792 31.7004 29.9692 32.2204L28.2392 33.2104C27.4492 33.6804 26.4292 33.4004 25.9592 32.6104L25.8492 32.4204C24.9492 30.8504 23.4692 30.8504 22.5592 32.4204L22.4492 32.6104C21.9792 33.4004 20.9592 33.6804 20.1692 33.2104L18.4392 32.2204C17.5292 31.7004 17.2192 30.5304 17.7392 29.6304C18.6492 28.0604 17.9092 26.7804 16.0992 26.7804C15.0492 26.7804 14.1992 25.9204 14.1992 24.8804Z"
                              stroke="#42707F"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <h4 className="policyCardTitle">WTD Breakdown</h4>
                        <p className="PolicyNumber">Coming soon...</p>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="chart-page max-h-400">
                        <LineChart />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="defult-page-frame mt-3">
                  <div className="card border-0 bg-transparent box-main-card overflow-hidden">
                    <div className="card-header bg-light">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-end align-items-center gap-2">
                          <CommonSelect
                            placeholder={"Parameters"}
                            searchable={false}
                            data={yearData}
                            className="min-w-200"
                            cleanable={false}
                          />
                          <CommonSelect
                            placeholder={"Agent"}
                            searchable={false}
                            data={yearData}
                            className="min-w-200"
                            cleanable={false}
                          />
                          <CommonSelect
                            placeholder={"Select Type"}
                            searchable={false}
                            data={yearData}
                            className="min-w-200"
                            cleanable={false}
                          />
                        </div>
                        <div className="d-flex justify-content-end align-items-center gap-2">
                          <CommonSelect
                            placeholder={"Record"}
                            searchable={false}
                            data={yearData}
                            className="min-w-200"
                            cleanable={false}
                          />
                          <button
                            onClick={hadleModalOpen}
                            className="button-fill d-flex align-items-center justify-content-center gap-2 flter-btn"
                          >
                            Recorder
                          </button>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center my-2">
                        <h5 className="mb-0">Most Recent Contacts</h5>
                      </div>
                    </div>
                    <div className="card-body">
                      <RecentContact />
                    </div>
                    <div className="card-header bg-light">
                      <div className="d-flex justify-content-between align-items-center my-2">
                        <h5 className="mb-0">Active Policies</h5>
                      </div>
                    </div>
                    <div className="card-body">
                      <RecentContact />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ContactModal open={contactModalOpen} setOpen={setContactModalOpen} />
        </div>
      </section>
    </>
  );
};

export default PolicyPage;
