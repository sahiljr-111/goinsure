import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonToolbar,
  Form,
  Dropdown,
  Message,
  useToaster,
} from "rsuite";
import { Add, SearchNormal1, More } from "iconsax-react";
import cs from "classnames";
import AddPolicy from "../../Components/Pages/PolicyDetails/AddPolicy";
import PolicyNumberDetails from "../../Components/Pages/PolicyDetails/PolicyNumberDetails";
import AddContactDetails from "../../Components/Pages/Contacts/AddContactDetails";
import { useDispatch } from "react-redux";
import { getAllCotactDetails } from "../../Redux/Actions/ContactAction";
import ContactDetailsTable from "../../Components/Pages/Contacts/ContactDetailsTable";

const Contacts = () => {
  const [openWithHeader, setOpenWithHeader] = React.useState(false);
  const [openWithContact, setOpenWithContact] = React.useState(false);
  const [openWithPolicy, setOpenWithPolicy] = React.useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [contactListData, setContactListData] = useState([]);
  const [limit, setLimit] = useState(10);
  const toaster = useToaster();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCotactDetails({ currentPage, limit }))
      .then((res) => {
        if (res.success === true) {
          setContactListData(res);
        } else {
          toaster.push(
            <Message type={"error"} closable>
              <p className="fs-6">{res.message}</p>
            </Message>,
            { placement: "topEnd", duration: 2000 }
          );
        }
      })
      .catch((err) => {
        toaster.push(
          <Message type={"error"} closable>
            <p className="fs-6">{res.message}</p>
          </Message>,
          { placement: "topEnd", duration: 2000 }
        );
      });
  }, [currentPage, limit]);
  useEffect(() => {
    setCurrentPage(1);
  }, [limit]);
  return (
    <>
      <div className="gsw-globel-filter d-flex justify-content-center justify-content-lg-between align-items-end">
        <div className="d-flex align-items-end gsw-filter-search">
          <Form className="h-100">
            <Form.Group controlId="" className="form-group mb-0 w-100 d-flex">
              <Form.Control
                className="rounded-3 search-control py-2 px-2"
                placeholder="Search"
                name="Search"
              />
              <Button className="search-btn-cont">
                <SearchNormal1 color="#667085" variant="Outline" size={16} />
              </Button>
            </Form.Group>
          </Form>
          {/* <Button
            //onClick={addpolicyOpen}
            onClick={() => setOpenWithContact(true)}
            className="btn"
            startIcon={<Add size="16" color="#fff" variant="Outline" />}
          >
            Add Contacts
          </Button> */}
          <button
            onClick={() => setOpenWithContact(true)}
            className="button-fill d-flex align-items-center justify-content-center gap-2 fs-6 py-2 px-2 min-w-150 w-auto leading-17 text-14 m-0"
          >
            <Add size="14" color="#fff" variant="Outline" /> Add Contacts
          </button>
          <Dropdown
            className="exportmenu-line h-100"
            toggleClassName="h-100 px-2"
            title=""
            icon={<More size="16" color="#343434" variant="Outline" />}
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
          <ContactDetailsTable
            contactListData={contactListData}
            setContactListData={setContactListData}
            limit={limit}
            setLimit={setLimit}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      {/* Preview List Beneficiaries */}
      <PolicyNumberDetails
        open={openWithPolicy}
        onClose={() => setOpenWithPolicy(false)}
        openWithPolicy={openWithPolicy}
        setOpenWithPolicy={setOpenWithPolicy}
      />
      {/* Preview List Beneficiaries End  */}
      {/* Add User Detail*/}
      <AddContactDetails
        open={openWithContact}
        onclose={() => setOpenWithContact(false)}
        openWithHeader={openWithContact}
        setOpenWithHeader={setOpenWithContact}
        contactListData={contactListData}
        setContactListData={setContactListData}
        currentPage={currentPage}
        limit={limit}
      />
      {/* Add User Detail*/}
    </>
  );
};

export default Contacts;
