import React from "react";
import {
  Modal,
  Input,
  Toggle,
  Button,
  ButtonToolbar,
  Placeholder,
} from "rsuite";
import DeleteIcon from "../../../assets/images/delete-icon.png";

const DeleteModal = ({ open, handleDeleteClose, onclick }) => {
  return (
    <>
      <Modal
        className="gsw-globel-modal"
        open={open}
        onClose={handleDeleteClose}
      >
        <Modal.Header className="border-0 p-4 pb-3">
          <Modal.Title className="modal-title">Delete File</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4 pt-0 m-0 text-center">
          <img src={DeleteIcon} class="delete" />
          <h3 class="mt-4 mb-0 mx-auto">
            Are you sure you want to delete this certificate?
          </h3>
        </Modal.Body>
        <Modal.Footer>
          <div className="form-btns d-flex gap-3">
            <Button
              onClick={handleDeleteClose}
              className="form-cancel btn w-100 flex-grow-1"
            >
              Cancel
            </Button>
            <Button
              className="form-Save btn w-100 flex-grow-1"
              onClick={onclick}
            >
              Delete
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
