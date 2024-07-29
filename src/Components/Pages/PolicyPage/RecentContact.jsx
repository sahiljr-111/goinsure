import React, { useState } from "react";
import CustomPagination from "../../Common/UI/CustomPagination/Index";
import { Button, ButtonToolbar } from "rsuite";
import { Edit2, Eye, Trash } from "iconsax-react";

const RecentContact = () => {
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <div className="gsw-globel-table">
        <div className="table-responsive mb-3 scrollbar">
          <table className="table-box-main text-center">
            <thead>
              <tr>
                <th>Created Date</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
                <th>Contact Status</th>
                <th>App Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((res) => (
                <tr>
                  <td className="active">15 Mar 2024</td>
                  <td className="active">John</td>
                  <td className="active">Smith</td>
                  <td className="active">+425-7879899</td>
                  <td className="active">
                    <div className="Yellow-tag">New</div>
                  </td>
                  <td className="active">
                    <div className="Green-tag">Approved</div>
                  </td>
                  <td className="active">
                    <ButtonToolbar className="btn-group action-btn gap-3">
                      <Button className="btn position-relative">
                        <Eye size="16" color="#344054" variant="Outline" />
                      </Button>
                      <Button className="btn position-relative">
                        <Edit2 size="16" color="#344054" variant="Outline" />
                      </Button>
                      <Button className="btn position-relative">
                        <Trash size="16" color="#344054" variant="Outline" />
                      </Button>
                    </ButtonToolbar>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <CustomPagination
            totalCount={50}
            limit={limit}
            setLimit={setLimit}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        {/* <Index /> */}
      </div>
    </>
  );
};

export default RecentContact;
