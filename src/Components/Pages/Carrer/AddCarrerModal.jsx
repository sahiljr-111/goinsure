import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Input, Modal, Uploader } from "rsuite";

const AddCarrerModal = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  return (
    <>
      <Modal
        className="view-modal call-contact-modal edit-modal"
        centered
        size={"md"}
        open={open}
        onClose={handleClose}
      >
        <Modal.Body>
          <div className="modalHeading">
            <h2 className="m-0">Add Carrier</h2>
            <button onClick={handleClose} className="rounded-circle p-0">
              <IoIosCloseCircleOutline className="d-block" size={40} />
            </button>
          </div>
          <form className="px-2 py-3">
            <div className="form-group">
              <label className="form-label">Carrier name</label>
              <Input
                type="text"
                placeholder="Enter Carrier name"
                id="firstName"
                className="form-control border"
                name="firstName"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Carrier URL</label>
              <Input
                type="text"
                placeholder="Enter Carrier URL"
                id="firstName"
                className="form-control border"
                name="firstName"
              />
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
            <div className="d-flex align-items-center gap-3">
              <button className="button-outline" onClick={handleClose}>
                Cancel
              </button>
              <button className="button-fill">Save</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddCarrerModal;
