import React from "react";
import { Modal } from "rsuite";
import ViewDocument from "../../../assets/images/view-document.jpg";
import DocIcon from "../../../assets/images/docicon.png";
const serverurl = import.meta.env.VITE_API_BASEURL;

const ViewModal = ({ open, handleViewClose, fileOpen }) => {
  const fileURL = fileOpen ? `${serverurl}${fileOpen}` : ViewDocument;
  const fileExtension = fileOpen
    ? fileOpen
        .split(".")
        .pop()
        .toLowerCase()
    : "";

  return (
    <Modal
      overflow={true}
      className="gsw-globel-modal"
      open={open}
      onClose={handleViewClose}
    >
      <Modal.Header className="border-0 p-4 pb-3">
        <Modal.Title className="modal-title">View Document</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4 pt-0 m-0">
        <div className="viewDoc-card border rounded-4">
          <div className="rounded-4 position-relative viewDoc-img overflow-hidden">
            {fileExtension === "pdf" ? (
              <iframe
                src={fileURL}
                className="objectFit-img"
                title="PDF Document"
              ></iframe>
            ) : (
              <img src={fileURL} className="objectFit-img" alt="doc img" />
            )}
          </div>
          <div className="d-flex align-items-center flex-row viewDoc-ctn">
            <div className="flex-shrink-0">
              <img src={DocIcon} alt="doc" />
            </div>
            <div className="flex-grow-1">
              <h6>{fileOpen ? fileOpen : "Lorem ipsum dolor sit amet,"}</h6>
              <p className="mb-0">
                {fileOpen
                  ? `${(fileOpen.size / 1024).toFixed(2)} KB`
                  : "1 Page . 1.8 MB . PDF"}
              </p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ViewModal;
