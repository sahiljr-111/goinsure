import React, { useState } from "react";
import { Modal } from "rsuite";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { GrDrag } from "react-icons/gr";
import { FaPlus } from "react-icons/fa6";
import { PhotoshopPicker } from "react-color";
import { IoMdCloseCircle } from "react-icons/io";
import { PiWarningCircleFill } from "react-icons/pi";

const checkboxes = [
  "Actions",
  "Month",
  "Contact Status",
  "Phone Number",
  "First Name",
  "Middle Name",
  "Last Name",
  "Email Address",
  "DOB",
  "Age",
  "State",
  "Address",
  "City",
  "Zip",
  "Gender",
  "Policy Number",
  "FPW",
  "Paid To Date",
];

const listData = [
  { id: 10, comment: "Month" },
  { id: 20, comment: "State" },
  { id: 30, comment: "Address" },
  { id: 40, comment: "City" },
  { id: 50, comment: "Zip" },
  { id: 60, comment: "Gender" },
  { id: 70, comment: "Policy Number" },
  { id: 80, comment: "Paid To Date" },
];

const AddCustMenuModal = ({ open, setOpen }) => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [comments, setComments] = useState(listData);
  const [color, setColor] = useState("#D76A26");
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [colorList, setColorList] = useState([]);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleModlaClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (color) => {
    setColor(color.hex);
  };

  const handleRemoveColor = (id) => {
    const newColorList = colorList.filter((res, index) => index !== id);
    setColorList(newColorList);
  };

  const handleAcceptColor = () => {
    setColorList([...colorList, color]);
    setDisplayColorPicker(false);
  };

  const dragEnded = (param) => {
    const { source, destination } = param;
    let _arr = [...comments];
    //extracting the source item from the list
    const _item = _arr.splice(source.index, 1)[0];
    //inserting it at the destination index.
    _arr.splice(destination.index, 0, _item);
    setComments(_arr);
  };

  return (
    <Modal
      className="view-modal call-contact-modal edit-modal"
      centered
      size={"md"}
      open={open}
      onClose={handleClose}
    >
      <Modal.Body>
        <div className="d-flex gap-2">
          <div className="w-25 gap-3 edit-modal-checkbox scrollBarHidden">
            {checkboxes.map((checkbox, id) => (
              <div
                key={id}
                className="d-flex align-items-center gap-3 checkBoxListModal"
              >
                <input
                  className="form-check-input checkbox-table"
                  type="checkbox"
                  id={id}
                  value={checkbox}
                />
                <label className="form-check-label mb-0" htmlFor={id}>
                  {checkbox}
                </label>
              </div>
            ))}
          </div>
          <div className="w-75">
            <div className="Green-tag d-flex text-xl modal_tag align-items-center mb-2">
              <PiWarningCircleFill className="d-block" />
              "Drag up and down column names to change column order."
            </div>
            <DragDropContext onDragEnd={dragEnded}>
              <Droppable droppableId="comments-wrapper" type="card  ">
                {(provided, snapshot) => (
                  <ul
                    className="comments scrollBarHidden"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {comments.map((_comment, index) => {
                      return (
                        <Draggable
                          draggableId={`comment-${_comment.id}`}
                          index={index}
                          key={_comment.id}
                        >
                          {(_provided, _snapshot) => {
                            return (
                              <li
                                ref={_provided.innerRef}
                                className={
                                  "comment card p-2 my-2 " +
                                  +(_snapshot.isDragging ? "hovering" : "")
                                }
                                {..._provided.draggableProps}
                              >
                                <div className="d-flex align-items-center gap-2">
                                  <span {..._provided.dragHandleProps}>
                                    <GrDrag color="black" className="d-block" />
                                  </span>
                                  <small className="ml-2 text-dark">
                                    {_comment.comment}
                                  </small>
                                </div>
                              </li>
                            );
                          }}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
            <h6>Row highlight color (optional)</h6>
            <div className="ps-1 d-flex align-items-center gap-4">
              <div className="position-relative">
                <div className="colorPickerRow">
                  <div onClick={handleClick} className="color-box">
                    <div className="label">
                      <FaPlus />
                    </div>
                  </div>
                </div>
                {displayColorPicker ? (
                  <div
                    className="position-absolute z-2"
                    style={{ bottom: "100%" }}
                  >
                    <div
                      style={{
                        position: "fixed",
                        bottom: "0px",
                        left: "0px",
                      }}
                      onClick={handleModlaClose}
                    />
                    <PhotoshopPicker
                      color={color}
                      onChange={handleChange}
                      onAccept={handleAcceptColor}
                      onCancel={() => setDisplayColorPicker(false)}
                    />
                  </div>
                ) : null}
              </div>
              <div className="d-flex align-content-center gap-2">
                {colorList.map((res, index) => (
                  <div
                    key={index}
                    className="colorSelectedBox"
                    style={{
                      background: res,
                    }}
                  >
                    <IoMdCloseCircle
                      onClick={() => handleRemoveColor(index)}
                      className="closeIcon"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="">
        <div className="d-flex align-items-center gap-3">
          <button className="button-outline" onClick={handleClose}>
            Save & Done
          </button>
          <button className="button-fill">Save</button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default AddCustMenuModal;
