import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Button, DatePicker, Input, Modal, Panel, SelectPicker, Uploader } from "rsuite";
import CustomTagPicker from "./CustomTagPicker";
import DateInput from "../../../Common/UI/DatePicker/DateInput";
import { TbFlag3Filled } from "react-icons/tb";
import { IoLinkSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { LuSendHorizonal } from "react-icons/lu";

const TaskCreateMoodal = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [description, setDescription] = useState(false);
  const [comments, setComments] = useState(false);
  const handleUpload = (fileList) => {
    const filesArray = Array.from(fileList).map(file => ({
      name: file.name,
      url: URL.createObjectURL(file.blobFile)
    }));
    setUploadedFiles(filesArray);
  };

  const handleRemove = (index) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(newFiles);
  };

  const priority = [
    {
      label: "Normal",
      value: "Normal",
    },
    {
      label: "Urgent",
      value: "Urgent",
    },
    {
      label: "High",
      value: "High",
    },
    {
      label: "Low",
      value: "Low",
    },
  ]
  return (
    <>
      <Modal
        className="view-modal call-contact-modal edit-modal"
        // className=" edit-modal"
        centered
        size={"md"}
        open={open}
        onClose={handleClose}
      >
        <Modal.Body>
          <div className="modalHeading">
            <h2 className="m-0 fs-5">Add Carrier</h2>
            <button
              onClick={handleClose}
              className="rounded-circle p-0  bg-transparent"
            >
              <IoIosCloseCircleOutline className="d-block" size={24} />
            </button>
          </div>
          <hr className="my-2 border-top-2 border-dark" />
          <div className="px-2 py-3">
            <div className="form-group">
              <label className="form-label">Task Name</label>
              <Input
                type="text"
                placeholder="Task name or title or  “/” for task list"
                id="firstName"
                className="form-control border"
                name="firstName"
              />
            </div>
            <div className="form-group">
              <span className=" border-bottom border-dark fw-bolder" onClick={() => setDescription(true)}>
                + Add Description
              </span>
              {description && (
                <Input
                  as="textarea"
                  placeholder="lorem impsum dolor sit amet"
                  id="description"
                  className="form-control border my-2"
                  name="firstName"
                  rows="4"
                />
              )}
            </div>
            <div className="d-flex justify-content-between">
              <div className="gap-3 d-flex">
                <DatePicker placeholder="Due Date" />
                <SelectPicker data={priority} searchable={false} placeholder="Priority" />
                <Button className="w-50"> Time to do </Button>
              </div>
              <div className="d-flex">
                <IoLinkSharp />
                <FaBell />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Assign</label>
              <CustomTagPicker />
            </div>
            <div>
              <label className="form-label">Carrier Logo</label>
              <div className="policy-upload-wrap position-relative carrerImageUpload">
                <Uploader
                  action=""
                  fileListVisible={false}
                  draggable
                  autoUpload={false}
                  onChange={handleUpload}
                >
                  <div>
                    <span className="file-icon"></span>
                    <h5>Click here to select files to upload</h5>
                    <p>
                      or drag and drop <span>Up to 20MB</span>
                    </p>
                  </div>
                </Uploader>
                {uploadedFiles.length > 0 && (
                  <Panel header="Uploaded Files">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="d-flex align-items-start p-2 justify-content-between mb-4 border rounded-3">
                        {/* <Icon icon="file-o" style={{ marginRight: 10 }} /> */}
                        <div className="d-flex align-items-center gap-2">
                          <img src={file.url} alt={file.name} className="rounded-2" style={{ maxWidth: '50px', height: '50px' }} />
                          <p>{file.name}</p>
                        </div>
                        <Button onClick={() => handleRemove(index)} appearance="link" color="red">
                          <IoIosCloseCircleOutline className="d-block" size={24} />
                        </Button>
                      </div>
                    ))}
                  </Panel>
                )}
              </div>
            </div>
            <div className="form-group">
              {!comments ? (
                <span className=" border-bottom border-dark fw-bolder" onClick={() => setComments(true)}>
                  + Add comments
                </span>
              ) : (
                <React.Fragment>
                  <h6>Comments</h6>
                  <div className="comment-wrapper my-2">
                    <div className="d-flex align-items-center gap-2">
                      <img src="" className="rounded-circle border" alt="*prifile" height={20} width={20} />
                      <span className="fw-bold">Tyler Hunt</span>
                    </div>
                    <Input
                      as="input"
                      placeholder="lorem impsum dolor sit amet"
                      id="description"
                      disabled
                      className="form-control border my-2 mx-4"
                      name="firstName"
                      rows="4" />
                    <div className="d-flex align-items-center gap-2">
                      <img src="" className="rounded-circle border" alt="*prifile" height={20} width={20} />
                      <span className="fw-bold">Austin Henroid</span>
                    </div>
                    <Input
                      as="input"
                      placeholder="lorem impsum dolor sit amet"
                      id="description"
                      disabled
                      className="form-control border my-2 ms-4"
                      name="firstName"
                      rows="4" />
                  </div>
                  <div className="comment-writer d-flex align-items-center gap-2" >
                    <Input
                      as="input"
                      placeholder="Type commnet"
                      id="description"
                      className="form-control border my-2 w-100"
                      name="firstName"
                      rows="4"
                    />
                    <Button className="button-fill" style={{ width: '50px', height: '40px' }}>
                      <LuSendHorizonal color="white" /> send
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </div>
            <div className="d-flex align-items-center gap-3">
              <button className="button-outline" onClick={handleClose}>
                Cancel
              </button>
              <button className="button-fill">Save</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TaskCreateMoodal;
