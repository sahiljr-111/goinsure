import { Eye } from "iconsax-react";
import React from "react";
import { useDispatch } from "react-redux";
import {
  Modal,
  Button,
  ButtonToolbar,
  Placeholder,
  Message,
  useToaster,
} from "rsuite";
import { updatePolicyDetailFile } from "../../../../Redux/Actions/PolicyDetailFileAction";
import { updateDetailContact } from "../../../../Redux/Actions/ContactAction";
import { updateNotesforSingleContact } from "../../../../Redux/Actions/NotesAction";
import { updatePolicyDetailforSingleContact } from "../../../../Redux/Actions/PolicyDetailAction";

function HistoryViewModal({
  res,
  getUserdata,
  getSingleContactNotesDetailData,
  getSingleContactPolicyData,
  getAllHistoryData,
  getFileData,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const toaster = useToaster();
  const handleRestore = (val) => {
    const updatedField = {
      [val.fieldName]: val.oldValue,
    };
    if (res.historTable === "Policy Detail Files") {
      dispatch(updatePolicyDetailFile(val.tableId, updatedField)).then(
        (response) => {
          if (response.success === true) {
            getFileData(res.contactId);
            getAllHistoryData();
            handleClose();
            toaster.push(
              <Message type={"success"} closable>
                <p className="fs-6">Data restore is successfully.</p>
              </Message>,
              { placement: "topEnd", duration: 2000 }
            );
          }
        }
      );
    }
    if (res.historTable === "Contact Details") {
      dispatch(updateDetailContact(val.tableId, updatedField)).then(
        (response) => {
          if (response.success === true) {
            getUserdata(res.contactId);
            getAllHistoryData();
            handleClose();
            toaster.push(
              <Message type={"success"} closable>
                <p className="fs-6">Data restore is successfully.</p>
              </Message>,
              { placement: "topEnd", duration: 2000 }
            );
          }
        }
      );
    }
    if (res.historTable === "Notes Details") {
      dispatch(updateNotesforSingleContact(val.tableId, updatedField)).then(
        (response) => {
          if (response.success === true) {
            getSingleContactNotesDetailData(res.contactId);
            getAllHistoryData();
            handleClose();
            toaster.push(
              <Message type={"success"} closable>
                <p className="fs-6">Data restore is successfully.</p>
              </Message>,
              { placement: "topEnd", duration: 2000 }
            );
          }
        }
      );
    }
    if (res.historTable === "Policy Details") {
      dispatch(
        updatePolicyDetailforSingleContact(val.tableId, updatedField)
      ).then((response) => {
        if (response.success === true) {
          getSingleContactPolicyData(res.contactId);
          getAllHistoryData();
          handleClose();
          toaster.push(
            <Message type={"success"} closable>
              <p className="fs-6">Data restore is successfully.</p>
            </Message>,
            { placement: "topEnd", duration: 2000 }
          );
        }
      });
    }
  };
  return (
    <>
      <ButtonToolbar className="d-flex justify-content-center">
        <Eye onClick={handleOpen} size="16" color="#344054" variant="Outline" />
      </ButtonToolbar>

      <Modal className="view-modal" centered open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title className="text-start">
            Updated at -2024-01-28 22:46:43
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="gsw-globel-table call-logs-table p-0">
            <div className="table-responsive mb-3 scrollbar">
              <table className="table mb-3">
                <thead>
                  <tr>
                    <th className="text-uppercase">Field name</th>
                    <th className="text-uppercase">Old value</th>
                    <th className="text-uppercase">New value</th>
                    <th className="text-uppercase">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {res?.store?.map((row, index) => {
                    console.log(res);
                    return (
                      <tr key={index}>
                        <td>{row.fieldName}</td>
                        <td>
                          {row.oldValue === true || row.oldValue === false
                            ? row.oldValue.toString()
                            : row.oldValue}
                        </td>
                        <td>
                          {row.newValue === true || row.newValue === false
                            ? row.newValue.toString()
                            : row.newValue}
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn bg-transparent text-dark"
                            onClick={() => {
                              handleRestore(row);
                            }}
                            disabled={
                              res.actionType === "Create" ? true : false
                            }
                          >
                            Restore
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default HistoryViewModal;
