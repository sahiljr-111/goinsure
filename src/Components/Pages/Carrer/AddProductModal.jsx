import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Input, Modal, Uploader } from "rsuite";
import CommonSelect from "../../Common/UI/CustomSelect";

const AddProductModal = ({ open, setOpen }) => {
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
            <h2 className="m-0">Add Product</h2>
            <button onClick={handleClose} className="rounded-circle p-0">
              <IoIosCloseCircleOutline className="d-block" size={40} />
            </button>
          </div>
          <form className="px-2 py-3">
            <div className="form-group">
              <label className="form-label">Carrier</label>
              <CommonSelect
                type="text"
                placeholder="Select Carrier"
                id="Carrier"
                className="w-100 rounded-3 outline-0"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Product name</label>
              <Input
                type="text"
                placeholder="Product"
                id="firstName"
                className="form-control border"
                name="firstName"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Product name</label>
              <Input
                type="text"
                placeholder="Enter Product name"
                id="firstName"
                className="form-control border"
                name="firstName"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Product name</label>
              <Input
                type="text"
                placeholder="Enter Product name"
                id="firstName"
                className="form-control border"
                name="firstName"
              />
            </div>
            <div className="form-group">
              <span className=" border-bottom border-dark ">+Add More</span>
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

export default AddProductModal;
