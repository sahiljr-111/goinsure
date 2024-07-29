import React, { useState } from "react";
import { IoMailSharp } from "react-icons/io5";
import { BiSolidMessageAltDetail, BiSolidPhoneCall } from "react-icons/bi";
import "./GlobalCarrers.css";
import MailTable from "../../Components/Pages/GlobalCarrers/Mail/MailTable";
import SMSTable from "../../Components/Pages/GlobalCarrers/Sms/SMSTable";
import CallTable from "../../Components/Pages/GlobalCarrers/Call/CallTable";

const GlobalCarrers = () => {
  const [currentTab, setCurrentTab] = useState(2);
  return (
    <>
      <section className="gw-content-body transition-ease position-relative">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 gw-body-col-12">
              <div className="d-flex justify-content-between flex-wrap">
                <div className="gsw-globel-tab flex-grow-1">
                  <div className="defult-page-frame h-100">
                    <div className="card border-0 bg-transparent box-main-card overflow-hidden rounded-4">
                      <div className="GLobalMainHeader d-flex justify-content-between align-items-center">
                        <div className="w-50 d-flex align-items-center gap-2">
                          <button
                            onClick={() => setCurrentTab(1)}
                            className={`gvHeaderSelector rounded-3 ${
                              currentTab === 1 ? "active" : ""
                            }`}
                          >
                            All | 4
                          </button>
                          <button
                            onClick={() => setCurrentTab(2)}
                            className={`gvHeaderSelector rounded-3 ${
                              currentTab === 2 ? "active" : ""
                            }`}
                          >
                            <IoMailSharp size={16} /> Mail | 7
                          </button>
                          <button
                            onClick={() => setCurrentTab(3)}
                            className={`gvHeaderSelector rounded-3 ${
                              currentTab === 3 ? "active" : ""
                            }`}
                          >
                            <BiSolidMessageAltDetail size={16} /> SMS | 10
                          </button>
                          <button
                            onClick={() => setCurrentTab(4)}
                            className={`gvHeaderSelector rounded-3 ${
                              currentTab === 4 ? "active" : ""
                            }`}
                          >
                            <BiSolidPhoneCall size={16} /> Call Logs | 20
                          </button>
                        </div>
                        <div className="w-50 d-flex justify-content-end align-items-center gap-2">
                          <button className="button-outline d-flex align-items-center justify-content-center gap-2 flter-btn text-12">
                            Dial new number
                          </button>
                          <button className="button-fill d-flex align-items-center justify-content-center gap-2 flter-btn text-12">
                            Compose Mail
                          </button>
                        </div>
                      </div>
                      {currentTab === 2 ? (
                        <MailTable />
                      ) : currentTab === 3 ? (
                        <SMSTable  />
                      ) : currentTab === 4 ? (
                        <CallTable />
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GlobalCarrers;
