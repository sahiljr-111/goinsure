import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Input, Modal, TagPicker, Uploader } from "rsuite";
import CustomTagPicker from "./CustomTagPicker";
import DateInput from "../../../Common/UI/DatePicker/DateInput";

const TaskCreateMoodal = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
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
              <span className=" border-bottom border-dark fw-bolder">
                + Add Description
              </span>
            </div>
            <div>
              <DateInput placeholder="Due Date"  />
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
                >
                  <div>
                    <span className="file-icon"></span>
                    <h5>Click here to select files to upload</h5>
                    <p>
                      or drag and drop <span>Up to 20MB</span>
                    </p>
                  </div>
                </Uploader>
              </div>
            </div>
            <div className="form-group">
              <span className=" border-bottom border-dark fw-bolder">
                + Add comments
              </span>
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
