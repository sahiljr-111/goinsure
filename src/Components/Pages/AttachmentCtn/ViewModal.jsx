import React from "react";
import { Modal } from "rsuite";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import * as XLSX from "xlsx";
import ViewDocument from "../../../assets/images/view-document.jpg";

const serverurl = import.meta.env.VITE_API_BASEURL;

const ViewModal = ({ open, handleViewClose, fileOpen }) => {
  const isImage = (file) => {
    const fileExtension = file.name
      .split(".")
      .pop()
      .toLowerCase();
    return ["jpg", "jpeg", "png", "tif"].includes(fileExtension);
  };

  const isPDF = (file) => {
    const fileExtension = file.name
      .split(".")
      .pop()
      .toLowerCase();
    return fileExtension === "pdf";
  };

  const isExcel = (file) => {
    const fileExtension = file.name
      .split(".")
      .pop()
      .toLowerCase();
    return ["xlsx", "csv"].includes(fileExtension);
  };

  const renderExcel = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet);
      // Handle the JSON data from Excel here
    };
    reader.readAsArrayBuffer(file);
  };

  const fileURL = fileOpen ? `${serverurl}/${fileOpen.name}` : ViewDocument;

  return (
    <Modal className="gsw-globel-modal" open={open} onClose={handleViewClose}>
      <Modal.Header className="border-0 p-4 pb-3">
        <Modal.Title className="modal-title">View Document</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4 pt-0 m-0">
        <div className="viewDoc-card border rounded-4">
          <div className="rounded-4 position-relative viewDoc-img overflow-hidden">
            {fileOpen ? (
              isImage(fileOpen) ? (
                <img src={fileURL} className="objectFit-img" alt="doc img" />
              ) : isPDF(fileOpen) ? (
                <Worker
                  workerUrl={`https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js`}
                >
                  <Viewer fileUrl={fileURL} />
                </Worker>
              ) : isExcel(fileOpen) ? (
                renderExcel(fileOpen)
              ) : (
                <p>Unsupported file type</p>
              )
            ) : (
              <img src={ViewDocument} className="objectFit-img" alt="doc img" />
            )}
          </div>
          <div className="d-flex align-items-center flex-row viewDoc-ctn">
            <div className="flex-grow-1">
              <h6>
                {fileOpen ? fileOpen.name : "Lorem ipsum dolor sit amet,"}
              </h6>
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
