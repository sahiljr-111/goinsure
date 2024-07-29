import React from "react";
import { Panel, PanelGroup } from "rsuite";

const BasicDetail = () => {
  return (
    <>
      {" "}
      <PanelGroup
        accordion
        defaultActiveKey={1}
        className="user-details-accordian"
      >
        <Panel header="Select States" eventKey={1} className="border-0">
          <ul>
            <li className="active">Failed Transfer</li>
            <li>Call Dropped</li>
            <li>DO NOT CALL</li>
            <li>Left Voice Mail</li>
            <li>SC - No time</li>
            <li>SC - Decision Maker</li>
            <li>SC - Signature</li>
            <li>SC - Dropped Call</li>
            <li>Not available</li>
            <li>NI - Current Coverage</li>
            <li>NI - N/A</li>
            <li>NI - Price</li>
            <li>NI - Lost Contact</li>
            <li>Sale</li>
          </ul>
        </Panel>
      </PanelGroup>
    </>
  );
};

export default BasicDetail;
