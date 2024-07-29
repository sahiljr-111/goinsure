import React, { useEffect, useState } from "react";
import moment from "moment-timezone";
import { ImportCurve, Eye, Edit2, Trash } from "iconsax-react";
import { Button, Uploader, useToaster, Message } from "rsuite";
import { useDispatch } from "react-redux";
import {
  createPolicyFileforSingleContact,
  deleteSinglePolicyDetailFile,
  getSingleContactPolicyFileData,
  updatePolicyDetailFile,
} from "../../../Redux/Actions/PolicyDetailFileAction";
import ViewModal from "../../../Components/Common/Contacts/ViewModal";
import DeleteModal from "../../../Components/Common/DeleteModal/DeleteModal";
import EditModal from "../../../Components/Pages/AttachmentCtn/EditModal";

const serverurl = import.meta.env.VITE_API_BASEURL;
const AttachmentsCtn = ({
  userDetailData,
  setUserDetailData,
  getFileData,
  policyDetailFileData,
  setPolicyDetailFileData,
}) => {
  const userTimezone = moment.tz.guess();
  const dispatch = useDispatch();
  const [viewOpen, setViewOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [fileOpen, setFileOpen] = useState(null);
  const [deleteId, setDeleteId] = useState();
  const [updateFileName, setUpdateFileName] = useState("");
  const [singleData, setSingleData] = useState({});
  const [fileList, setFileList] = useState([]);
  const toaster = useToaster();

  const handleEditOpen = (val) => {
    setEditOpen(true);
    setUpdateFileName(val.fileName);
    setSingleData(val);
  };
  const handleEditClose = () => {
    setUpdateFileName("");
    setEditOpen(false);
  };

  const handleDeleteOpen = (id) => {
    setDeleteOpen(true);
    setDeleteId(id);
  };
  const handleDeleteClose = () => setDeleteOpen(false);
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteSinglePolicyDetailFile(deleteId)).then((res) => {
      if (res.success === true) {
        toaster.push(
          <Message type={"success"} closable>
            <p className="fs-6">{res.message}</p>
          </Message>,
          { placement: "topEnd", duration: 2000 }
        );
        getFileData(userDetailData?.data?._id);
        setDeleteOpen(false);
      }
    });
  };
  const handleChange = async (newFileList) => {
    if (newFileList.length === 0) return;
    const file = newFileList[0].blobFile;
    const validExtensions = [
      "jpg",
      "jpeg",
      "png",
      "tif",
      "pdf",
      "docx",
      "csv",
      "xlsx",
    ];
    const maxSize = 5 * 1024 * 1024; // 5 MB
    if (!file) {
      return;
    }

    const fileExtension = file.name
      .split(".")
      .pop()
      .toLowerCase();
    if (!validExtensions.includes(fileExtension)) {
      toaster.push(
        <Message type="error" closable>
          <p className="fs-6">
            Invalid file type. Only JPG, PNG, TIF, JPEG, PDF, DOCX, and CSV
            files are allowed.
          </p>
        </Message>,
        { placement: "topEnd", duration: 4000 }
      );
      setFileList([]);
      return;
    }

    if (file.size > maxSize) {
      toaster.push(
        <Message type="error" closable>
          <p className="fs-6">Field to upload,File Size exceeds 5 MB .</p>
        </Message>,
        { placement: "topEnd", duration: 4000 }
      );
      setFileList([]);
      return;
    }

    const formData = new FormData();
    formData.append("upload", file);
    formData.append("contactId", userDetailData?.data?._id);

    dispatch(createPolicyFileforSingleContact(formData)).then((res) => {
      if (res.success) {
        toaster.push(
          <Message type="success" closable>
            <p className="fs-6">File Uploaded successfully</p>
          </Message>,
          { placement: "topEnd", duration: 2000 }
        );
        getFileData(userDetailData?.data?._id);
        setFileList([]); // Clear the file list after a successful upload
      }
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updatePolicyDetailFile(singleData._id, { fileName: updateFileName })
    ).then((res) => {
      if (res.success) {
        toaster.push(
          <Message type="success" closable>
            <p className="fs-6">{res.message}</p>
          </Message>,
          { placement: "topEnd", duration: 2000 }
        );
        getFileData(userDetailData?.data?._id);
        setEditOpen(false);
      }
    });
  };

  useEffect(() => {
    getFileData(userDetailData?.data?._id);
  }, [userDetailData]);

  return (
    <div className="row">
      <div className="col-lg-6 col-md-12">
        <div className="gsw-globel-table policy-table">
          <div className="table-responsive scrollbar">
            <table className="table mb-3">
              <thead>
                <tr>
                  <th className="text-center">#</th>
                  <th className="text-uppercase ">ATTACHMENT</th>
                  <th className="text-uppercase">Uploaded at</th>
                  <th className="text-uppercase">Action</th>
                </tr>
              </thead>
              <tbody>
                {policyDetailFileData.length !== 0 ? (
                  policyDetailFileData.map((res, i) => {
                    const formattedDate = moment(res.date)
                      .tz(userTimezone)
                      .format("YYYY-MM-DD HH:mm:ss");
                    return (
                      <tr key={i}>
                        <td className="text-center">{i + 1}</td>
                        <td
                          onClick={() => {
                            setViewOpen(true);
                            setFileOpen(res.image);
                          }}
                        >
                          {res.fileName}
                        </td>
                        <td>{formattedDate}</td>
                        <td>
                          <div
                            className="btn-group action-btn gap-3"
                            role="group"
                            aria-label="action"
                          >
                            <a
                              href={`${serverurl}${res.image}`}
                              download={`${serverurl}${res.image}`}
                              className="btn position-relative"
                              target="_blank"
                            >
                              <ImportCurve size="16" color="#344054" />
                            </a>
                            <Button
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#viewDoc"
                              className="btn position-relative"
                              onClick={() => {
                                setViewOpen(true);
                                setFileOpen(res.image);
                              }}
                            >
                              <Eye size="16" color="#344054" />
                            </Button>
                            <Button
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#editFile"
                              className="btn position-relative"
                              onClick={() => handleEditOpen(res)}
                            >
                              <Edit2 size="16" color="#344054" />
                            </Button>
                            <Button
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#deleteFile"
                              className="btn position-relative"
                              onClick={() => handleDeleteOpen(res._id)}
                            >
                              <Trash size="16" color="#344054" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td
                      colSpan={17}
                      className="text-center bg-secondary text-light"
                    >
                      No Data Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-12">
        <div className="policy-upload-wrap position-relative">
          <Uploader
            action=""
            onChange={handleChange}
            fileList={fileList}
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
      <ViewModal
        open={viewOpen}
        handleViewClose={() => setViewOpen(false)}
        fileOpen={fileOpen}
      />
      <DeleteModal
        open={deleteOpen}
        handleDeleteClose={handleDeleteClose}
        onclick={(e) => handleDelete(e)}
      />
      <EditModal
        open={editOpen}
        handleEditClose={handleEditClose}
        singleData={singleData}
        handleUpdate={handleUpdate}
        updateFileName={updateFileName}
        setUpdateFileName={setUpdateFileName}
      />
    </div>
  );
};

export default AttachmentsCtn;

// const handleDownload = (fileName) => {
//   const link = document.createElement("a");
//   link.href = `${serverurl}${fileName}`;
//   link.setAttribute("target", "_blank");
//   link.style.display = "none";
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };

{
  /* <Button
                              type="button"
                              className="btn position-relative"
                              onClick={() => handleDownload(res.image)}
                            >
                              <ImportCurve size="16" color="#344054" />
                            </Button> */
}
