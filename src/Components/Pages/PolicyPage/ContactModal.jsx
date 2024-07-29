import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Modal } from "rsuite";
import { PiWarningCircleFill } from "react-icons/pi";

import { RiDragMove2Fill } from "react-icons/ri";

const checkboxes = [
  "Contact Status",
  "Phone Number",
  "First Name",
  "Last Name",
  "Paid To Date",
  "App Status",
];

const listData = [
  { id: 10, comment: "Contact Status" },
  { id: 20, comment: "Phone Number" },
  { id: 30, comment: "First Name" },
  { id: 40, comment: "Last Name" },
  { id: 50, comment: "App Status" },
];

const ContactModal = ({ open, setOpen }) => {
  const [comments, setComments] = useState(listData);
  const handleClose = () => {
    setOpen(false);
  };

  const dragEnded = (param) => {
    const { source, destination } = param;
    let _arr = [...comments];
    const _item = _arr.splice(source.index, 1)[0];
    _arr.splice(destination.index, 0, _item);
    setComments(_arr);
  };
  return (
    <>
      <Modal
        className="view-modal call-contact-modal edit-modal"
        centered
        size={"sm"}
        open={open}
        onClose={handleClose}
      >
        <Modal.Body>
          <div className="d-flex gap-2">
            <div className=" gap-3 edit-modal-checkbox scrollBarHidden">
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
                "Drag  up and down column names to change column order."
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
                                  <div className="d-flex align-items-center justify-content-between gap-2">
                                    <small className="ml-2 text-dark">
                                      {_comment.comment}
                                    </small>
                                    <span {..._provided.dragHandleProps}>
                                      <RiDragMove2Fill
                                        color="black"
                                        className="d-block"
                                      />
                                    </span>
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
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="">
          <div className="d-flex align-items-center gap-3">
            <button className="button-fill">Done</button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactModal;
