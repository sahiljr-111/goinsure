import React from "react";
import {
  Modal,
  Input,
  Toggle,
  Button,
  ButtonToolbar,
  Placeholder,
} from "rsuite";

const EditModal = ({ open, handleEditClose }) => {
  return (
    <>
      <Modal className="gsw-globel-modal" open={open} onClose={handleEditClose}>
        <Modal.Header className="border-0 p-4 pb-3">
          <Modal.Title className="modal-title">Rename File</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4 pt-0 m-0">
          <form action="">
            <div className="form-group mb-0">
              <label for="" className="form-label">
                File name
              </label>
              <Input
                type="email"
                className="form-control"
                placeholder="PassportABC"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <div className="form-btns d-flex gap-3">
            <Button
              onClick={handleEditClose}
              className="form-cancel btn w-100 flex-grow-1"
            >
              Cancel
            </Button>
            <Button className="form-Save btn w-100 flex-grow-1">Save</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditModal;
