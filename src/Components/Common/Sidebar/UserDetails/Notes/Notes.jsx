import { Add } from "iconsax-react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Input, List, Message, useToaster } from "rsuite";
import {
  createNotesforSingleContact,
  getSingleContactNotesData,
} from "../../../../../Redux/Actions/NotesAction";
import moment from "moment";

const Notes = ({
  notesDataForSingleContact,
  setNotesDataForSingleContact,
  userDetailData,
  setNotesCurrentPage,
  notesCurrentPage,
  setNotesLimit,
  notesLimit,
}) => {
  const [addOpen, setAddOpen] = useState(false);
  const [validation, setValidation] = useState(false);
  const dispatch = useDispatch();
  const toaster = useToaster();
  const [noteData, setNoteData] = useState({
    contactId: "",
    userId: "",
    description: "",
  });

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setNoteData((prevData) => ({
      ...prevData,
      contactId: userDetailData?.data?._id,
      userId: userId,
    }));
  }, [userDetailData]);

  const handleOpen = (e) => {
    e.preventDefault();
    setAddOpen((prev) => !prev);
    setValidation(false); // Reset validation state when toggling the form
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidation(true);

    if (noteData.description && noteData.userId && noteData.contactId) {
      dispatch(createNotesforSingleContact(noteData)).then((res) => {
        if (res.success === true) {
          toaster.push(
            <Message type="success" closable>
              <p className="fs-6">{res.message}</p>
            </Message>,
            { placement: "topEnd", duration: 2000 }
          );
          fetchSingleContactNotesData();
          setAddOpen(false);
          setValidation(false);
        }
      });
    }
  };

  const fetchSingleContactNotesData = () => {
    dispatch(
      getSingleContactNotesData(
        userDetailData?.data?._id,
        notesCurrentPage,
        notesLimit + 3
      )
    ).then((res) => {
      if (res.success) {
        setNotesDataForSingleContact(res);
      }
    });
  };

  const handleShowMore = (e) => {
    e.preventDefault();
    setNotesLimit((prev) => prev + 3);
    fetchSingleContactNotesData();
  };

  return (
    <>
      <div className="gsw-notes-head d-flex flex-wrap align-items-center justify-content-between">
        <h6 className="mb-0">Notes</h6>
        <a
          href="#"
          className="text-decoration-none add-btn d-flex flex-wrap align-items-center justify-content-between"
          onClick={handleOpen}
        >
          <Add size="16" color="#42707F" variant="Outline" />
          <span className="d-inline-block flex-grow-1">Add</span>
        </a>
      </div>
      {addOpen && (
        <div className="addnote-divbox">
          <div className="form-group">
            <Input
              as="textarea"
              placeholder="Enter description"
              className={`form-control ${validation &&
                !noteData.description &&
                "border border-danger"}`}
              id="description"
              name="description"
              value={noteData.description}
              onChange={(value) => {
                setNoteData((prevData) => ({
                  ...prevData,
                  description: value,
                }));
              }}
            />
          </div>
          <div className="form-btns d-flex gap-3">
            <Button
              onClick={handleOpen}
              className="form-cancel btn w-100 flex-grow-1"
            >
              Cancel
            </Button>
            <Button
              className="form-Save btn w-100 flex-grow-1"
              onClick={handleSubmit}
            >
              Save
            </Button>
          </div>
        </div>
      )}
      <List className="gsw-notes-list list-unstyled p-0 d-flex flex-column mb-0">
        {notesDataForSingleContact?.data?.length > 0
          ? notesDataForSingleContact.data.map((res, i) => {
              const formattedDate = moment(res.createdAt).format(
                "DD MMM, YYYY hh:mm A"
              );
              return (
                <List.Item key={i}>
                  <div className="gsw-notes-list-head d-flex align-items-center justify-content-between mb-2">
                    <h6 className="mb-0">{res.userId.name}</h6>
                    <span className="d-inline-block">{formattedDate}</span>
                  </div>
                  <div className="gsw-notes-list-ctn">
                    <p className="mb-0">{res.description}</p>
                  </div>
                </List.Item>
              );
            })
          : "No Notes Found"}
      </List>
      {notesDataForSingleContact?.data?.length >= notesLimit && (
        <a href="#" className="notes-showmore" onClick={handleShowMore}>
          Show More
        </a>
      )}
    </>
  );
};

export default Notes;
