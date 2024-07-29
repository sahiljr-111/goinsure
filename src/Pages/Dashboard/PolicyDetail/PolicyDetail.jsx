import React, { useState } from "react";
import { Button, ButtonToolbar, Form, Dropdown } from "rsuite";
import { Add, SearchNormal1, More } from "iconsax-react";
import cs from "classnames";
import PolicyDetailsTable from "../../../Components/Pages/PolicyDetails/PolicyDetailsTable";
import AddPolicy from "../../../Components/Pages/PolicyDetails/AddPolicy";
import PolicyNumberDetails from "../../../Components/Pages/PolicyDetails/PolicyNumberDetails";
import CustomButton from "../../../Components/Common/UI/CustomButton/index.jsx";

const PolicyDetail = ({
  policyDataForSingleContact,
  getSingleContactPolicyData,
  userDetailData,
  setUserDetailData,
  getUserdata,
  limit,
  setLimit,
  currentPage,
  setCurrentPage,
  activePolicyTab,
  setActivePolicyTab,
}) => {
  const [openWithHeader, setOpenWithHeader] = React.useState(false);
  const [openWithPolicy, setOpenWithPolicy] = React.useState(false);
  const handleClickSubTab = (selectedTab) => (e) => {
    setActivePolicyTab(selectedTab);
  };
  return (
    <>
      <div className="gsw-globel-filter d-flex justify-content-center justify-content-lg-between align-items-center">
        <ButtonToolbar className="gsw-globel-filter-btn">
          <CustomButton
            className={cs({ ["active"]: activePolicyTab === "All" })}
            onClick={handleClickSubTab("All")}
          >
            All | {policyDataForSingleContact?.counts?.All}
          </CustomButton>
          <CustomButton
            className={cs({ ["active"]: activePolicyTab === "Active" })}
            onClick={handleClickSubTab("Active")}
          >
            Active | {policyDataForSingleContact?.counts?.Active}
          </CustomButton>

          <CustomButton
            className={cs({ ["active"]: activePolicyTab === "Issued" })}
            onClick={handleClickSubTab("Issued")}
          >
            Inactive | {policyDataForSingleContact?.counts?.Issued}
          </CustomButton>
          <CustomButton
            className={cs({ ["active"]: activePolicyTab === "Not Taken" })}
            onClick={handleClickSubTab("Not Taken")}
          >
            At Risk |{policyDataForSingleContact?.counts?.NotTaken}
          </CustomButton>
          <CustomButton
            className={cs({ ["active"]: activePolicyTab === "Terminated" })}
            onClick={handleClickSubTab("Terminated")}
          >
            Termitted |{policyDataForSingleContact?.counts?.Terminated}
          </CustomButton>
        </ButtonToolbar>
        <div className="d-flex align-items-center gsw-filter-search">
          <Form>
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
          </Form>
          <Button
            //onClick={addpolicyOpen}
            onClick={() => setOpenWithHeader(true)}
            className="btn"
            startIcon={<Add size="16" color="#fff" variant="Outline" />}
          >
            Add Policy
          </Button>
          <Dropdown
            className="exportmenu-line"
            title=""
            icon={<More size="20" color="#343434" variant="Outline" />}
            noCaret
            placement="bottomEnd"
          >
            <Dropdown.Item>Export</Dropdown.Item>
            <Dropdown.Item>Custom Data View</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
      <div className="gsw-globel-table">
        <div className="table-responsive mb-3 scrollbar">
          <PolicyDetailsTable
            openWithPolicy={openWithPolicy}
            setOpenWithPolicy={setOpenWithPolicy}
            policyDataForSingleContact={policyDataForSingleContact}
            getSingleContactPolicyData={getSingleContactPolicyData}
            limit={limit}
            setLimit={setLimit}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            userDetailData={userDetailData}
            activePolicyTab={activePolicyTab}
            setActivePolicyTab={setActivePolicyTab}
            getUserdata={getUserdata}
          />
        </div>
      </div>
      {/* Add Policy Modal box start */}
      <AddPolicy
        open={openWithHeader}
        onClose={() => setOpenWithHeader(false)}
        openWithHeader={openWithHeader}
        setOpenWithHeader={setOpenWithHeader}
        policyDataForSingleContact={policyDataForSingleContact}
        getSingleContactPolicyData={getSingleContactPolicyData}
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

export default PolicyDetail;
