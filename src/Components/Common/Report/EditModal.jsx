import React from "react";
import { Modal, ButtonToolbar } from "rsuite";

function EditModal({ open, setOpen }) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (value, name) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const checkboxes = [
    {
      id: "input1",
      value: "submittedApplication",
      label: "Submitted Application",
    },
    { id: "input2", value: "submittedAP", label: "Submitted. AP" },
    { id: "input3", value: "Placed Policies ", label: "Placed Policies " },
    { id: "input4", value: "Placed AP ", label: "Placed AP " },
    { id: "input5", value: "Placement %", label: "Placement %" },
    { id: "input6", value: "Avg. AP", label: "Avg. AP" },
    { id: "input7", value: "Retention (3m) ", label: " Retention (3m) " },
    { id: "input8", value: "Placed Policy Type", label: "Placed Policy Type" },
    // Add more checkboxes as needed
  ];

  return (
    <>
      {/* <ButtonToolbar className="d-flex justify-content-center">
        <button 
          className="d-flex align-items-center gap-3 edit-btn"
          onClick={handleOpen}
        >
          <img
            src="../../../../../public/Images/edit.png"
            width="16px"
            height="16px"
            alt=""
          />
          Edit
        </button>
      </ButtonToolbar> */}

      <Modal
        className="view-modal call-contact-modal edit-modal"
        centered
        open={open}
        onClose={handleClose}
      >
        <Modal.Body>
          <div className="d-flex flex-wrap align-items-center gap-3 edit-modal-checkbox w-100">
            {checkboxes.map((checkbox) => (
              <div
                key={checkbox.id}
                className="d-flex align-items-center gap-3"
              >
                <input
                  className="form-check-input checkbox-table"
                  type="checkbox"
                  id={checkbox.id}
                  value={checkbox.value}
                />
                <label className="form-check-label mb-0" htmlFor={checkbox.id}>
                  {checkbox.label}
                </label>
              </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer className="">
          <div className="d-flex align-items-center gap-3">
            <button className="button-outline" onClick={handleClose}>
              Cancel
            </button>
            <button className="button-fill">Save</button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;
