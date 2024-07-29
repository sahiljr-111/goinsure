import React, { useContext } from "react";
import { Button, ButtonToolbar } from "rsuite";
import { Add, Sms, MessageText1, CallCalling } from "iconsax-react";
import PolicyNumberDetails from "../../../Components/Pages/PolicyDetails/PolicyNumberDetails";
import DialPad from "../../../Components/Pages/Inbox/DialPad/index.jsx";
import CustomButton from "../../../Components/Common/UI/CustomButton/index.jsx";
import cs from "classnames";
import CallLogs from "./CallLogs/index.jsx";
import InboxAll from "./InboxAll/index.jsx";
import ComposedMail from "../../../Components/Pages/Inbox/ComposedMail/index.jsx";
import Mails from "../../../Components/Pages/Inbox/Mails/index.jsx";
import SMS from "./Sms/SMS.jsx";
import { ModelName } from "../../../context/callingModelContext.jsx";

const InboxCtn = ({
  openDialPad,
  setOpenDialPad,
  openComposedMail,
  setOpenComposedMail,
  activeInboxTab,
  setActiveInboxTab,
}) => {
  const [openWithHeader, setOpenWithHeader] = React.useState(false);

  const [openWithPolicy, setOpenWithPolicy] = React.useState(false);

  const handleClickSubTab = (selectedTab) => (e) => {
    setActiveInboxTab(selectedTab);
  };

  const { setModelName } = useContext(ModelName);

  const handleOpenPad = () => {
    setOpenDialPad(!openDialPad);
    setModelName("dialingNumberPad");
  };

  return (
    <>
      <div className="gsw-globel-filter d-flex justify-content-center justify-content-lg-between align-items-center">
        <ButtonToolbar className="gsw-globel-filter-btn">
          <CustomButton
            className={cs({ ["active"]: activeInboxTab === "All" })}
            onClick={handleClickSubTab("All")}
          >
            All | 4
          </CustomButton>
          <CustomButton
            className={cs({ ["active"]: activeInboxTab === "Mails" })}
            onClick={handleClickSubTab("Mails")}
            startIcon={<Sms size="16" color="#0C2536" variant="Bulk" />}
          >
            Mails | 7
          </CustomButton>
          <CustomButton 
            className={cs({ ["active"]: activeInboxTab === "SMS" })}
            onClick={handleClickSubTab("SMS")}
            startIcon={
              <MessageText1 size="16" color="#0C2536" variant="Bulk" />
            }
          >
            SMS | 10
          </CustomButton>
          <CustomButton
            className={cs({ ["active"]: activeInboxTab === "Call Logs" })}
            onClick={handleClickSubTab("Call Logs")}
            startIcon={<CallCalling size="16" color="#0C2536" variant="Bulk" />}
          >
            Call Logs | 20
          </CustomButton>
        </ButtonToolbar>
        <div className="d-flex align-items-center gsw-filter-search">
          {/* <Form>
            <Form.Group controlId="" className="form-group mb-0 w-100 d-flex">
              <Form.Control
                className="rounded-3 search-control"
                placeholder="Search"
                name="Search"
              />
              <Button className="search-btn-cont">
                <SearchNormal1 color="#667085" variant="Outline" size={16} />
              </Button>
            </Form.Group>
          </Form> */}
          <Button
            //onClick={addpolicyOpen}
            onClick={() => setOpenWithHeader(true)}
            className="btn"
            startIcon={<CallCalling size="16" color="#fff" variant="Bulk" />}
          ></Button>
          <Button
            onClick={handleOpenPad}
            className="btn bg-transparent text-dark"
          >
            Dail new Number
          </Button>
          <Button
            //onClick={addpolicyOpen}
            onClick={() => setOpenComposedMail(true)}
            className="btn"
            startIcon={<Add size="16" color="#fff" variant="Outline" />}
          >
            Compose Mail
          </Button>
        </div>
      </div>
      <div className="gsw-globel-table callLogs-tbale">
        {activeInboxTab === "All" && <InboxAll />}
        {activeInboxTab === "Mails" && (
          <Mails
            openComposedMail={openComposedMail}
            setOpenComposedMail={setOpenComposedMail}
          />
        )}
        {activeInboxTab === "SMS" && <SMS />}
        {activeInboxTab === "Call Logs" && <CallLogs />}
      </div>
      {/* Add Policy Modal box start */}
      <DialPad
        open={openDialPad}
        onClose={() => setOpenDialPad(false)}
        openWithHeader={openDialPad}
        setOpenWithHeader={setOpenDialPad}
        openDialPad={openDialPad}
        setOpenDialPad={setOpenDialPad}
      />
      <ComposedMail
        open={openComposedMail}
        onClose={() => setOpenComposedMail(false)}
        openWithHeader={openComposedMail}
        setOpenWithHeader={setOpenComposedMail}
      />
      {/* Add Policy Modal box End */}
      {/* Preview List Beneficiaries */}
      <PolicyNumberDetails
        open={openWithPolicy}
        onClose={() => setOpenWithPolicy(false)}
        openWithPolicy={openWithPolicy}
        setOpenWithPolicy={setOpenWithPolicy}
      />
      {/* Preview List Beneficiaries End  */}
    </>
  );
};

export default InboxCtn;
