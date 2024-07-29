import React, { useState } from "react";
import HeroTable from "./HeroTable";
import TemplateTable from "./TemplateTable";
import AddTemplate from "./AddTemplate";

const MailTable = () => {
  const [currentTab, setCurrentTab] = useState(1);
  return (
    <>
      <div className="globalSubHeader d-flex justify-content-start align-items-center gap-2">
        <button
          onClick={() => setCurrentTab(1)}
          className={`globalCarrerMenu ${currentTab === 1 ? "active" : ""}`}
        >
          ALL
        </button>
        <button
          onClick={() => setCurrentTab(2)}
          className={`globalCarrerMenu ${currentTab === 2 ? "active" : ""}`}
        >
          Drafts
          <div className="NotificationMark">15</div>
        </button>
        <button
          onClick={() => setCurrentTab(3)}
          className={`globalCarrerMenu ${currentTab === 3 ? "active" : ""}`}
        >
          Sent
        </button>
        <button
          onClick={() => setCurrentTab(4)}
          className={`globalCarrerMenu ${currentTab === 4 ? "active" : ""}`}
        >
          Received
        </button>
        <button
          onClick={() => setCurrentTab(5)}
          className={`globalCarrerMenu ${currentTab === 5 ? "active" : ""}`}
        >
          Templates
        </button>
      </div>
      {/* <HeroTable /> */}
      <TemplateTable />
      <AddTemplate />
    </>
  );
};

export default MailTable;
