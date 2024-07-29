import React from "react";
import { Button, DatePicker, Drawer, Input, SelectPicker } from "rsuite";

const PolicyNumberDetails = ({
  open,
  onClose,
  openWithPolicy,
  setOpenWithPolicy,
}) => {
  return (
    <>
      <Drawer open={open} onClose={onClose}>
        <Drawer.Header>
          <Drawer.Title>Go Insurewise Life Insurance</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body className="no-scrollbar">
          {/* Preview List Beneficiaries */}
          <div className="review-filed-data">
            <table className="table main-data">
              <tbody>
                <tr>
                  <th>Carrier</th>
                  <td>Wellable</td>
                </tr>
                <tr>
                  <th>Product</th>
                  <td>Life Insurance</td>
                </tr>
                <tr>
                  <th>Product Type</th>
                  <td>Level</td>
                </tr>
                <tr>
                  <th>Policy number</th>
                  <td>GR00GWF0152623</td>
                </tr>
                <tr>
                  <th>Policy Status</th>
                  <td>
                    <span className="badge text-bg-warning rounded-pill">
                      Pending
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>Policy Reason</th>
                  <td> Pending First Premium</td>
                </tr>
                <tr>
                  <th>Benefit Amount</th>
                  <td> $200000</td>
                </tr>
                <tr>
                  <th>Policy Premium</th>
                  <td>$35.89</td>
                </tr>
                <tr>
                  <th>Policy Effective Date</th>
                  <td>03/30/2020</td>
                </tr>
                <tr>
                  <th>Paid To Date</th>
                  <td>03/30/2024</td>
                </tr>
                <tr>
                  <th>Sale date</th>
                  <td>03/30/1960</td>
                </tr>
                <tr>
                  <th>Past Due</th>
                  <td>0 days</td>
                </tr>
                <tr>
                  <th>Days Before Premium</th>
                  <td>323 days</td>
                </tr>
              </tbody>
            </table>
            <hr />
            <h4>1. Beneficiary details</h4>
            <table className="table main-data">
              <tbody>
                <tr>
                  <th>Full name</th>
                  <td>John Doe Calvin</td>
                </tr>
                <tr>
                  <th>Middle name</th>
                  <td>John Doe Calvin</td>
                </tr>
                <tr>
                  <th>Last Name</th>
                  <td>Doe</td>
                </tr>
                <tr>
                  <th>Percentage</th>
                  <td>70.5%</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>john.calvin@gmail.com</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>9898909090</td>
                </tr>
              </tbody>
            </table>
            <hr />
            <h4>2. Beneficiary details</h4>
            <table className="table main-data">
              <tbody>
                <tr>
                  <th>Full name</th>
                  <td>John Doe Calvin</td>
                </tr>
                <tr>
                  <th>Middle name</th>
                  <td>John Doe Calvin</td>
                </tr>
                <tr>
                  <th>Last Name</th>
                  <td>Doe</td>
                </tr>
                <tr>
                  <th>Percentage</th>
                  <td>70.5%</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>john.calvin@gmail.com</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>9898909090</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Preview List Beneficiaries End  */}
        </Drawer.Body>
        <Drawer.Actions className="drawer-footer">
          <div className="form-btns d-flex gap-3">
            <Button
              className="form-cancel btn w-100 flex-grow-1 rs-btn rs-btn-default"
              onClick={() => setOpenWithPolicy(false)}
            >
              Cancel
            </Button>
            <Button className="form-Save btn w-100 flex-grow-1 rs-btn rs-btn-default">
              Confirm
            </Button>
          </div>
        </Drawer.Actions>
      </Drawer>
    </>
  );
};

export default PolicyNumberDetails;
