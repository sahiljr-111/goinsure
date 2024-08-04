import React, { useEffect, useState, useRef } from 'react'
import { FaUserCog } from 'react-icons/fa';
import { MdOutlineLock, MdOutlineLockOpen, MdWifiCalling3 } from 'react-icons/md';
import { RiGlobalLine } from 'react-icons/ri';
import { Button, Badge, Form, DateRangePicker, Input, SelectPicker } from 'rsuite';
import CustomPagination from '../../Components/Common/UI/CustomPagination/Index';
import { Add, SearchNormal1 } from 'iconsax-react';
import { AvatarGroup, Avatar } from 'rsuite';
import { LuEye, LuLock, LuMail, LuPenLine, LuTrash2 } from 'react-icons/lu';
import { Modal, Toggle } from 'rsuite';
import Banner from "../../assets/images/delete-icon.png"
import { IoMdTimer } from 'react-icons/io';
import { Col, Row } from 'react-bootstrap';
import { TbFlag3Filled } from 'react-icons/tb';
import Chart from 'chart.js/auto';

const Setting = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const [subTab, setSubTab] = useState(1);
  const [subCallTab, setSubCallTab] = useState(1);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [userCommonListData, setUserCommonListData] = useState([]);
  const [addRoleModel, setAddRoleModel] = useState(false);
  const [twillioModel, setTwillioModel] = useState(false);
  const [addNewNumber, setaddNewNumber] = useState(false);
  const [callsetting, setCallSetting] = useState('');
  const [callpriority, setCallpriority] = useState('');
  const [purchaseNumber, setPurchaseNumber] = useState('');
  const [viewNumberModel, setViewNumberModel] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userChart, setViewUserChart] = useState(false);
  const max = 4;
  const data = ['USA', 'Bryan', 'Linda', 'Nancy', 'Lloyd', 'Alice', 'Julia', 'Albert'].map(
    item => ({ label: item, value: item })
  );
  const numberData = ['+123478264', '+123478264', '+123478264', '+123478264', '+123478264', '+123478264', '+123478264', '+123478264'].map(
    item => ({ label: item, value: item })
  );
  const users = [
    { avatar: 'https://i.pravatar.cc/150?u=1', name: 'John Doe' },
    { avatar: 'https://i.pravatar.cc/150?u=2', name: 'Tom Doe' },
    { avatar: 'https://i.pravatar.cc/150?u=3', name: 'Jerry Doe' },
    { avatar: 'https://i.pravatar.cc/150?u=4', name: 'Lily Doe' },
    { avatar: 'https://i.pravatar.cc/150?u=5', name: 'Lucy Doe' },
    { avatar: 'https://i.pravatar.cc/150?u=6', name: 'Mike Doe' },
    { avatar: 'https://i.pravatar.cc/150?u=7', name: 'Jane Doe' },
    { avatar: 'https://i.pravatar.cc/150?u=8', name: 'Kate Doe' },
    { avatar: 'https://i.pravatar.cc/150?u=9', name: 'Jack Doe' },
    { avatar: 'https://i.pravatar.cc/150?u=10', name: 'Rose Doe' }
  ];

  return (
    <section className="gw-content-body transition-ease position-relative">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 gw-body-col-12">
            <div className="d-flex justify-content-between flex-wrap" style={{ height: '90vh' }}>
              <div className="gsw-globel-tab flex-grow-1">
                <div className="settings defult-page-frame h-100">
                  <div className='setting-menus pt-2 border-bottom' style={{ background: '#f9fafb' }} >
                    <div className="taskSubHeader d-flex justify-content-start align-items-center gap-2">
                      <Button
                        className={`taskCurrentMenu ${currentTab === 1 &&
                          "active"}`}
                        onClick={() => setCurrentTab(1)}
                      >
                        <FaUserCog size={20} className='mx-1' /> User Settings
                      </Button>
                      <Button
                        className={`taskCurrentMenu ${currentTab === 2 &&
                          "active"}`}
                        onClick={() => setCurrentTab(2)}
                      >
                        <MdWifiCalling3 size={20} className='mx-1' /> Call Settings
                      </Button>
                      <Button
                        className={`taskCurrentMenu ${currentTab === 3 &&
                          "active"}`}
                        onClick={() => setCurrentTab(3)}
                      >
                        <RiGlobalLine size={20} className='mx-1' /> Site Settings
                      </Button>
                    </div>
                  </div>
                  <div className='setting-menus border-bottom'>
                    {currentTab == 1 ? (
                      <div className='d-flex justify-content-between'>
                        <div className="haead-sub-menu my-2 mx-2 d-flex justify-content-start align-items-center gap-2">
                          <Button
                            className={`taskCurrentMenu ${subTab === 1 &&
                              "active"}`}
                            onClick={() => setSubTab(1)}
                          >
                            Current User Setting
                          </Button>
                          <Button
                            className={`taskCurrentMenu ${subTab === 2 &&
                              "active"}`}
                            onClick={() => setSubTab(2)}
                          >
                            Roles
                          </Button>
                          <Button
                            className={`taskCurrentMenu ${subTab === 3 &&
                              "active"}`}
                            onClick={() => setSubTab(3)}
                          >
                            Users
                          </Button>
                          <Button
                            className={`taskCurrentMenu ${subTab === 4 &&
                              "active"}`}
                            onClick={() => setSubTab(4)}
                          >
                            Contact Health Conditions
                          </Button>
                        </div>
                        {currentTab === 1 && subTab !== 1 &&
                          <Button
                            onClick={() => setAddRoleModel(true)}
                            className="btn my-2 mx-2"
                            startIcon={<Add size="16" color="#fff" variant="Outline" />}
                          >
                            New Role
                          </Button>
                        }

                      </div>
                    ) : currentTab == 2 ? (
                      <div className='d-flex justify-content-between'>
                        <div className="haead-sub-menu my-2 mx-2 d-flex justify-content-start align-items-center gap-2">
                          <Button
                            className={`taskCurrentMenu ${subCallTab === 1 &&
                              "active"}`}
                            onClick={() => setSubCallTab(1)}
                          >
                            Current Call Setting
                          </Button>
                          <Button
                            className={`taskCurrentMenu ${subCallTab === 2 &&
                              "active"}`}
                            onClick={() => setSubCallTab(2)}
                          >
                            Speed Dial Numbers
                          </Button>
                          <Button
                            className={`taskCurrentMenu ${subCallTab === 3 &&
                              "active"}`}
                            onClick={() => setSubCallTab(3)}
                          >
                            Call Priority
                          </Button>
                          <Button
                            className={`taskCurrentMenu ${subCallTab === 4 &&
                              "active"}`}
                            onClick={() => setSubCallTab(4)}
                          >
                            Purchase Number
                          </Button>
                          <Button
                            className={`taskCurrentMenu ${subCallTab === 5 &&
                              "active"}`}
                            onClick={() => setSubCallTab(5)}
                          >
                            Phone Number
                          </Button>
                        </div>
                        {currentTab === 2 && subCallTab === 5 && phoneNumber === "phoneNumber" &&
                          <Button
                            onClick=""
                            className="btn my-2 mx-2"
                          >
                            Purchase Number
                          </Button>
                        }
                      </div>
                    ) : (
                      <div className="haead-sub-menu my-2 mx-2 d-flex justify-content-start align-items-center gap-2">
                      </div>
                    )}
                  </div>
                  <div className="user-statistics">
                    {currentTab === 1 && subTab === 1 ? (
                      <React.Fragment>
                        <div className="border-bottom py-2 px-2">
                          <div className='d-flex align-items-center gap-3'>
                            <span className='fw-bold fs-6'>Default Limits </span>
                            <div>
                              <div className="d-flex justify-content-between gap-4">
                                <div>
                                  <span className='me-2'>Manage limit</span>
                                  <Badge className='py-2 px-2' style={{ background: '#FAF8FF', border: '1px solid #9065ff', color: '#5716ff' }} content="1232" />
                                </div>
                                <div>
                                  <span className='me-2'>Call Limit</span>
                                  <Badge className='py-2 px-2' style={{ background: '#F6FFF9', border: '1px solid #bde0c9', color: 'green' }} content="1232" />
                                </div>
                                <div>
                                  <span className='me-2'>Mail Limit</span>
                                  <Badge className='py-2 px-2' style={{ background: '#F8FcFF', border: '1px solid #cce9fc', color: '#1682ff' }} content="1232" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='user-statistics-table py-2 px-2'>
                          <h4>User Wise Limits</h4>
                          <div className="gsw-globel-table">
                            <div className="table-responsive mb-3 scrollbar">
                              <table className="table-box-main">
                                <thead>
                                  <tr>
                                    <th className="text-uppercase">#</th>
                                    <th className="text-uppercase">USER NAME</th>
                                    <th className="text-uppercase">MESSAGE LIMIT</th>
                                    <th className="text-uppercase">CALL LIMIT</th>
                                    <th className="text-uppercase">MAIL LIMIT</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>Cameron Williamson</td>
                                    <td><Badge className='py-2 px-2' style={{ background: '#FAF8FF', border: '1px solid #9065ff', color: '#5716ff' }} content="1232" /></td>
                                    <td><Badge className='py-2 px-2' style={{ background: '#F6FFF9', border: '1px solid #bde0c9', color: 'green' }} content="1232" /></td>
                                    <td><Badge className='py-2 px-2' style={{ background: '#F8FcFF', border: '1px solid #cce9fc', color: '#1682ff' }} content="1232" /></td>
                                  </tr>
                                  <tr>
                                    <td>1</td>
                                    <td>Cameron Williamson</td>
                                    <td><Badge className='py-2 px-2' style={{ background: '#FAF8FF', border: '1px solid #9065ff', color: '#5716ff' }} content="1232" /></td>
                                    <td><Badge className='py-2 px-2' style={{ background: '#F6FFF9', border: '1px solid #bde0c9', color: 'green' }} content="1232" /></td>
                                    <td><Badge className='py-2 px-2' style={{ background: '#F8FcFF', border: '1px solid #cce9fc', color: '#1682ff' }} content="1232" /></td>
                                  </tr>
                                  <tr>
                                    <td>1</td>
                                    <td>Cameron Williamson</td>
                                    <td><Badge className='py-2 px-2' style={{ background: '#FAF8FF', border: '1px solid #9065ff', color: '#5716ff' }} content="1232" /></td>
                                    <td><Badge className='py-2 px-2' style={{ background: '#F6FFF9', border: '1px solid #bde0c9', color: 'green' }} content="1232" /></td>
                                    <td><Badge className='py-2 px-2' style={{ background: '#F8FcFF', border: '1px solid #cce9fc', color: '#1682ff' }} content="1232" /></td>
                                  </tr>
                                  <tr>
                                    <td>1</td>
                                    <td>Cameron Williamson</td>
                                    <td><Badge className='py-2 px-2' style={{ background: '#FAF8FF', border: '1px solid #9065ff', color: '#5716ff' }} content="1232" /></td>
                                    <td><Badge className='py-2 px-2' style={{ background: '#F6FFF9', border: '1px solid #bde0c9', color: 'green' }} content="1232" /></td>
                                    <td><Badge className='py-2 px-2' style={{ background: '#F8FcFF', border: '1px solid #cce9fc', color: '#1682ff' }} content="1232" /></td>
                                  </tr>
                                </tbody>
                              </table>
                              <CustomPagination
                                totalCount={userCommonListData?.pagination?.totalItems}
                                limit={limit}
                                setLimit={setLimit}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                              />
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    ) : currentTab === 1 && subTab === 2 ? (
                      <div className='user-statistics-table py-2 px-2'>
                        <div className="gsw-globel-table">
                          <div className="table-responsive mb-3 scrollbar">
                            <table className="table-box-main">
                              <thead>
                                <tr>
                                  <th className="text-uppercase">#</th>
                                  <th className="text-uppercase">Role</th>
                                  <th className="text-uppercase">status</th>
                                  <th className="text-uppercase">Users</th>
                                  <th className="text-uppercase">Crated At</th>
                                  <th className="text-uppercase">Crated By</th>
                                  <th className="text-uppercase">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Agent</td>
                                  <td><Badge className='py-2 px-3 rounded-pill' style={{ background: '#F6FFF9', border: '1px solid #bde0c9', color: 'green' }} content="Active" /></td>
                                  <td>
                                    <AvatarGroup stack>
                                      {users
                                        .filter((user, i) => i < max)
                                        .map(user => (
                                          <Avatar bordered circle key={user.name} src={user.avatar} alt={user.name} />
                                        ))}
                                      <Avatar bordered circle style={{ background: '#111' }}>
                                        +{users.length - max}
                                      </Avatar>
                                    </AvatarGroup>
                                  </td>
                                  <td>2023-07-28 / 14:57:55</td>
                                  <td>John Doe</td>
                                  <td>
                                    <span className='border-end px-2'><LuEye size={18} /></span>
                                    <span className='border-end px-2'><LuPenLine size={18} /></span>
                                    <span className='px-2'><LuTrash2 size={18} /></span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>Foremen</td>
                                  <td><Badge className='py-2 px-3 rounded-pill' style={{ background: '#F6FFF9', border: '1px solid #bde0c9', color: 'green' }} content="Active" /></td>
                                  <td>
                                    <AvatarGroup stack>
                                      {users
                                        .filter((user, i) => i < max)
                                        .map(user => (
                                          <Avatar bordered circle key={user.name} src={user.avatar} alt={user.name} />
                                        ))}
                                      <Avatar bordered circle style={{ background: '#111' }}>
                                        +{users.length - max}
                                      </Avatar>
                                    </AvatarGroup>
                                  </td>
                                  <td>2023-07-28 / 14:57:55</td>
                                  <td>John Doe</td>
                                  <td>
                                    <span className='border-end px-2'><LuEye size={18} /></span>
                                    <span className='border-end px-2'><LuPenLine size={18} /></span>
                                    <span className='px-2'><LuTrash2 size={18} /></span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>Team Lead</td>
                                  <td><Badge className='py-2 px-3 rounded-pill' style={{ background: '#F6FFF9', border: '1px solid #bde0c9', color: 'green' }} content="Active" /></td>
                                  <td>
                                    <AvatarGroup stack>
                                      {users
                                        .filter((user, i) => i < max)
                                        .map(user => (
                                          <Avatar bordered circle key={user.name} src={user.avatar} alt={user.name} />
                                        ))}
                                      <Avatar bordered circle style={{ background: '#111' }}>
                                        +{users.length - max}
                                      </Avatar>
                                    </AvatarGroup>
                                  </td>
                                  <td>2023-07-28 / 14:57:55</td>
                                  <td>John Doe</td>
                                  <td>
                                    <span className='border-end px-2'><LuEye size={18} /></span>
                                    <span className='border-end px-2'><LuPenLine size={18} /></span>
                                    <span className='px-2'><LuTrash2 size={18} /></span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td>Accountant</td>
                                  <td><Badge className='py-2 px-3 rounded-pill' style={{ background: '#F6FFF9', border: '1px solid #bde0c9', color: 'green' }} content="Active" /></td>
                                  <td>
                                    <AvatarGroup stack>
                                      {users
                                        .filter((user, i) => i < max)
                                        .map(user => (
                                          <Avatar bordered circle key={user.name} src={user.avatar} alt={user.name} />
                                        ))}
                                      <Avatar bordered circle style={{ background: '#111' }}>
                                        +{users.length - max}
                                      </Avatar>
                                    </AvatarGroup>
                                  </td>
                                  <td>2023-07-28 / 14:57:55</td>
                                  <td>John Doe</td>
                                  <td>
                                    <span className='border-end px-2'><LuEye size={18} /></span>
                                    <span className='border-end px-2'><LuPenLine size={18} /></span>
                                    <span className='px-2'><LuTrash2 size={18} /></span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <CustomPagination
                              totalCount={userCommonListData?.pagination?.totalItems}
                              limit={limit}
                              setLimit={setLimit}
                              currentPage={currentPage}
                              setCurrentPage={setCurrentPage}
                            />

                          </div>
                        </div>
                      </div>
                    ) : currentTab === 1 && subTab === 3 ? (
                      <div className='user-statistics-table py-2 px-2'>
                        <div className="gsw-globel-table">
                          <div className="table-responsive mb-3 scrollbar">
                            <table className="table-box-main">
                              <thead>
                                <tr>
                                  <th className="text-uppercase">#</th>
                                  <th className="text-uppercase">online / offline</th>
                                  <th className="text-uppercase">Name</th>
                                  <th className="text-uppercase">Email</th>
                                  <th className="text-uppercase">Number</th>
                                  <th className="text-uppercase">Role</th>
                                  <th className="text-uppercase">Status</th>
                                  <th className="text-uppercase">Lock / unlock</th>
                                  <th className="text-uppercase">Created At</th>
                                  <th className="text-uppercase">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>
                                    <span className='bg-success rounded-5 mx-1' style={{ display: 'inline-block', height: 10, width: 10 }}></span>
                                    <span className='text-success'>
                                      Active
                                    </span>
                                  </td>
                                  <td>John Doe</td>
                                  <td>johndoe@gmail.com</td>
                                  <td><a href="#" className='text-success text-decoration-underline'>+1 9898989898</a></td>
                                  <td>Agenet</td>
                                  <td><Toggle /></td>
                                  <td><MdOutlineLock size={20} color='red' /><span style={{ color: 'red' }}>Lock</span></td>
                                  <td>2023-07-28 / 14:57:55</td>
                                  <td>
                                    <span className='border-end px-2'><LuEye /></span>
                                    <span className='border-end px-2'><LuPenLine /></span>
                                    <span className='border-end px-2'><LuTrash2 /></span>
                                    <span className='px-2'><LuMail /></span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>
                                    <span className='bg-danger rounded-5 mx-1' style={{ display: 'inline-block', height: 10, width: 10 }}></span>
                                    <span className='text-danger'>
                                      Lass Seen 1h
                                    </span>
                                  </td>
                                  <td>John Doe</td>
                                  <td>johndoe@gmail.com</td>
                                  <td><a href="#" className='text-success text-decoration-underline'>+1 9898989898</a></td>
                                  <td>Agenet</td>
                                  <td><Toggle /></td>
                                  <td><MdOutlineLockOpen size={20} color='green' /><span style={{ color: 'green' }}>Unlock</span></td>
                                  <td>2023-07-28 / 14:57:55</td>
                                  <td>
                                    <span className='border-end px-2'><LuEye /></span>
                                    <span className='border-end px-2'><LuPenLine /></span>
                                    <span className='border-end px-2'><LuTrash2 /></span>
                                    <span className='px-2'><LuMail /></span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>
                                    <span className='bg-danger rounded-5 mx-1' style={{ display: 'inline-block', height: 10, width: 10 }}></span>
                                    <span className='text-danger'>
                                      Lass Seen 2h
                                    </span>
                                  </td>
                                  <td>John Doe</td>
                                  <td>johndoe@gmail.com</td>
                                  <td><a href="#" className='text-success text-decoration-underline'>+1 9898989898</a></td>
                                  <td>Agenet</td>
                                  <td><Toggle checked={true} /></td>
                                  <td><MdOutlineLock size={20} color='red' /><span style={{ color: 'red' }}>Lock</span></td>
                                  <td>2023-07-28 / 14:57:55</td>
                                  <td>
                                    <span className='border-end px-2'><LuEye /></span>
                                    <span className='border-end px-2'><LuPenLine /></span>
                                    <span className='border-end px-2'><LuTrash2 /></span>
                                    <span className='px-2'><LuMail /></span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td>
                                    <span className='bg-success rounded-5 mx-1' style={{ display: 'inline-block', height: 10, width: 10 }}></span>
                                    <span className='text-success'>
                                      Active
                                    </span>
                                  </td>
                                  <td>John Doe</td>
                                  <td>johndoe@gmail.com</td>
                                  <td><a href="#" className='text-success text-decoration-underline'>+1 9898989898</a></td>
                                  <td>Agenet</td>
                                  <td><Toggle checked={true} /></td>
                                  <td><MdOutlineLockOpen size={20} color='green' /><span style={{ color: 'green' }}>Unlock</span></td>
                                  <td>2023-07-28 / 14:57:55</td>
                                  <td>
                                    <span className='border-end px-2'><LuEye /></span>
                                    <span className='border-end px-2'><LuPenLine /></span>
                                    <span className='border-end px-2'><LuTrash2 /></span>
                                    <span className='px-2'><LuMail /></span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <CustomPagination
                              totalCount={userCommonListData?.pagination?.totalItems}
                              limit={limit}
                              setLimit={setLimit}
                              currentPage={currentPage}
                              setCurrentPage={setCurrentPage}
                            />
                          </div>
                        </div>
                      </div>
                    ) : currentTab === 1 && subTab === 4 ? (
                      <div className='user-statistics-table py-2 px-2'>
                        <div className="gsw-globel-table">
                          <div className="table-responsive mb-3 scrollbar">
                            <table className="table-box-main">
                              <thead>
                                <tr>
                                  <th className="text-uppercase">#</th>
                                  <th className="text-uppercase">Health Condition</th>
                                  <th className="text-uppercase">Active In</th>
                                  <th className="text-uppercase">Created At</th>
                                  <th className="text-uppercase">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Diabetes</td>
                                  <td>20 contacts</td>
                                  <td>2023-07-28 / 14:57:55</td>
                                  <td>
                                    <span className='border-end pe-3'><LuPenLine size={20} /></span>
                                    <span className='ps-3'><LuTrash2 size={20} /></span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>Cancer</td>
                                  <td>20 contacts</td>
                                  <td>2023-07-28 / 14:57:55</td>
                                  <td>
                                    <span className='border-end pe-3'><LuPenLine size={20} /></span>
                                    <span className='ps-3'><LuTrash2 size={20} /></span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>Heart Disease</td>
                                  <td>20 contacts</td>
                                  <td>2023-07-28 / 14:57:55</td>
                                  <td>
                                    <span className='border-end pe-3'><LuPenLine size={20} /></span>
                                    <span className='ps-3'><LuTrash2 size={20} /></span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td>Chronic Lung Disease</td>
                                  <td>20 contacts</td>
                                  <td>2023-07-28 / 14:57:55</td>
                                  <td>
                                    <span className='border-end pe-3'><LuPenLine size={20} /></span>
                                    <span className='ps-3'><LuTrash2 size={20} /></span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <CustomPagination
                              totalCount={userCommonListData?.pagination?.totalItems}
                              limit={limit}
                              setLimit={setLimit}
                              currentPage={currentPage}
                              setCurrentPage={setCurrentPage}
                            />
                          </div>
                        </div>
                      </div>
                    ) : currentTab === 2 && subCallTab === 1 ? (
                      <div>
                        {twillioModel && callsetting !== 'current' ? (
                          <div className='twillio-account d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
                            <div className="connect-card shadow border rounded-4 p-5 text-center">
                              <h2>Connect your twillio account</h2>
                              <p className='text-muted'>Enter your Twillio information below to connect account</p>
                              <div className="mt-4">
                                <Form>
                                  <Form.Group
                                    controlId=""
                                    className="form-group mb-0 w-100"
                                  >
                                    <h6 className='mx-2 text-start fw-semibold'>Twillio SID</h6>
                                    <Form.Control
                                      className="rounded-3 py-2 mx-0 my-1 mb-3 mw-100 border "
                                      placeholder="Enter your Twillio SID"
                                      name="globalsearch"
                                    />
                                    <h6 className='mx-2 text-start fw-semibold'>Twillio Key</h6>
                                    <Form.Control
                                      className="rounded-3 py-2 mx-0 my-1 mw-100 border "
                                      placeholder="Enter your Twillio Key"
                                      name="globalsearch"
                                    />
                                  </Form.Group>
                                  <div className="form-btns d-flex gap-3 mt-4">
                                    <Button className="form-Save btn w-100 flex-grow-1 rs-btn rs-btn-default"
                                      onClick={() => setCallSetting('current')}
                                    >
                                      Save
                                    </Button>
                                  </div>
                                </Form>
                              </div>
                            </div>
                          </div>
                        ) : twillioModel && callsetting === 'current' ? (
                          <div className='call-statistics m-3'>
                            <div className="d-flex gap-3 justify-content-between align-items center">
                              <div className="call-times border rounded-4 w-50 p-3 shadow-sm">
                                <div className='border-bottom gap-3 justify-content-between align-items-center d-flex pb-2'>
                                  <div className='d-flex align-items-center gap-3'>
                                    <span className='h-25 ms-3 bg-light border h-100 rounded-circle p-2'>
                                      <IoMdTimer size={40} color='orange' />
                                    </span>
                                    <h3>Call ring notify time</h3>
                                  </div>
                                  <Badge className='d-flex align-items-center px-3 py-3 fs-5' style={{ background: '#F6FFF9', border: '1px solid #bde0c9', color: 'green' }} content="1232" />
                                </div>
                                <div className='pt-3'>
                                  <Row className='d-flex align-items-center my-3'>
                                    <Col sm="2"><Toggle checked={true}></Toggle> <span className='fw-bold'>Mon</span></Col>
                                    <Col sm="5"><DateRangePicker placeholder="Start date" /></Col>
                                    <Col sm="5"><DateRangePicker placeholder="End date" /></Col>
                                  </Row>
                                  <Row className='d-flex align-items-center my-3'>
                                    <Col sm="2"><Toggle checked={true}></Toggle> <span className='fw-bold'>Tue</span></Col>
                                    <Col sm="5"><DateRangePicker placeholder="Start date" /></Col>
                                    <Col sm="5"><DateRangePicker placeholder="End date" /></Col>
                                  </Row>
                                  <Row className='d-flex align-items-center my-3'>
                                    <Col sm="2"><Toggle checked={true}></Toggle> <span className='fw-bold'> Wed</span></Col>
                                    <Col sm="5"><DateRangePicker placeholder="Start date" /></Col>
                                    <Col sm="5"><DateRangePicker placeholder="End date" /></Col>
                                  </Row>
                                  <Row className='d-flex align-items-center my-3'>
                                    <Col sm="2"><Toggle checked={false}></Toggle> <span className='fw-bold'>Thu</span></Col>
                                    <Col sm="5"><DateRangePicker placeholder="Start date" /></Col>
                                    <Col sm="5"><DateRangePicker placeholder="End date" /></Col>
                                  </Row>
                                  <Row className='d-flex align-items-center my-3'>
                                    <Col sm="2"><Toggle checked={false}></Toggle> <span className='fw-bold'>Fri</span></Col>
                                    <Col sm="5"><DateRangePicker placeholder="Start date" /></Col>
                                    <Col sm="5"><DateRangePicker placeholder="End date" /></Col>
                                  </Row>
                                  <Row className='d-flex align-items-center my-3'>
                                    <Col sm="2"><Toggle checked={false}></Toggle> <span className='fw-bold'>Sat</span></Col>
                                    <Col sm="5"><DateRangePicker placeholder="Start date" /></Col>
                                    <Col sm="5"><DateRangePicker placeholder="End date" /></Col>
                                  </Row>
                                  <Row className='d-flex align-items-center my-3'>
                                    <Col sm="2"><Toggle checked={false}></Toggle> <span className='fw-bold'>Sun</span></Col>
                                    <Col sm="5"><DateRangePicker placeholder="Start date" /></Col>
                                    <Col sm="5"><DateRangePicker placeholder="End date" /></Col>
                                  </Row>
                                </div>
                              </div>
                              <div className="call-times rounded-4 w-50 shadow-sm" style={{ background: '#F6F6F6', border: '1px solid gray' }}>
                                <div className="p-4">
                                  <div className='py-2'>
                                    <p className='fw-bold'>Message for new Client who is calling first time</p>
                                    <Input as="textarea" rows={3} placeholder=" Lorem ipsum dolor sit amet consectetur adipisicing elit. In esse provident architecto quidem, ipsam vitae?" />
                                  </div>
                                  <div className='py-2'>
                                    <p className='fw-bold'>Message for Client while waiting</p>
                                    <Input as="textarea" rows={3} placeholder=" Lorem ipsum dolor sit amet consectetur adipisicing elit. In esse provident architecto quidem, ipsam vitae?" />
                                  </div>
                                  <div className='py-2'>
                                    <p className='fw-bold'>Message for Client when call happens on out-of-hours</p>
                                    <Input as="textarea" rows={3} placeholder=" Lorem ipsum dolor sit amet consectetur adipisicing elit. In esse provident architecto quidem, ipsam vitae?" />
                                  </div>
                                  <div className='py-2'>
                                    <p className='fw-bold'>Message for Client if no one is available</p>
                                    <Input as="textarea" rows={3} placeholder=" Lorem ipsum dolor sit amet consectetur adipisicing elit. In esse provident architecto quidem, ipsam vitae?" />
                                  </div>
                                  <div className='py-2'>
                                    <p className='fw-bold'>Message for Client when call happens on closed days</p>
                                    <Input as="textarea" rows={3} placeholder=" Lorem ipsum dolor sit amet consectetur adipisicing elit. In esse provident architecto quidem, ipsam vitae?" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className='user-statistics-table py-2 px-2'>
                            <div className='d-flex align-items-center flex-column w-50 mx-auto'>
                              <img src={Banner} className='mt-5' alt="Banner" width="40%" />
                              <h1 className='my-2'>Connect Your twillio account to use this feature</h1>
                              <Button
                                onClick={() => setTwillioModel(true)}
                                className="btn mt-3 mx-2"
                              >
                                Connect Now
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : currentTab === 2 && subCallTab === 2 ? (
                      <div className='user-statistics-table py-2 px-2'>
                        <div className='d-flex justify-content-between align-items-center'>
                          <h4>Speed Dial Numbers</h4>
                          <Button
                            onClick={() => setaddNewNumber(true)}
                            className="btn my-2 mx-2"
                            startIcon={<Add size="16" color="#fff" variant="Outline" />}
                          >
                            Add New Number
                          </Button>
                        </div>
                        <div className="gsw-globel-table">
                          <div className="table-responsive mb-3 scrollbar">
                            <table className="table-box-main">
                              <thead>
                                <tr>
                                  <th className="text-uppercase">#</th>
                                  <th className="text-uppercase">Name</th>
                                  <th className="text-uppercase">Number</th>
                                  <th className="text-uppercase">Created At</th>
                                  <th className="text-uppercase">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>AIG Care</td>
                                  <td>+1 7845672343</td>
                                  <td>2023-07-28 / 14:57:55</td>
                                  <td>
                                    <span className='border-end pe-3'><LuPenLine size={20} /></span>
                                    <span className='ps-3'><LuTrash2 size={20} /></span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>Foremen</td>
                                  <td>+1 7845672343</td>
                                  <td>2023-07-28 / 14:57:55</td>
                                  <td>
                                    <span className='border-end pe-3'><LuPenLine size={20} /></span>
                                    <span className='ps-3'><LuTrash2 size={20} /></span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>WELLABLE</td>
                                  <td>+1 7845672343</td>
                                  <td>2023-07-28 / 14:57:55</td>
                                  <td>
                                    <span className='border-end pe-3'><LuPenLine size={20} /></span>
                                    <span className='ps-3'><LuTrash2 size={20} /></span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <CustomPagination
                              totalCount={userCommonListData?.pagination?.totalItems}
                              limit={limit}
                              setLimit={setLimit}
                              currentPage={currentPage}
                              setCurrentPage={setCurrentPage}
                            />
                          </div>
                        </div>
                      </div>
                    ) : currentTab === 2 && subCallTab === 3 ? (
                      <div>
                        {twillioModel && callpriority !== 'priority' ? (
                          <div className='twillio-account d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
                            <div className="connect-card shadow border rounded-4 p-5 text-center">
                              <h2>Connect your twillio account</h2>
                              <p className='text-muted'>Enter your Twillio information below to connect account</p>
                              <div className="mt-4">
                                <Form>
                                  <Form.Group
                                    controlId=""
                                    className="form-group mb-0 w-100"
                                  >
                                    <h6 className='mx-2 text-start fw-semibold'>Twillio SID</h6>
                                    <Form.Control
                                      className="rounded-3 py-2 mx-0 my-1 mb-3 mw-100 border "
                                      placeholder="Enter your Twillio SID"
                                      name="globalsearch"
                                    />
                                    <h6 className='mx-2 text-start fw-semibold'>Twillio Key</h6>
                                    <Form.Control
                                      className="rounded-3 py-2 mx-0 my-1 mw-100 border "
                                      placeholder="Enter your Twillio Key"
                                      name="globalsearch"
                                    />
                                  </Form.Group>
                                  <div className="form-btns d-flex gap-3 mt-4">
                                    <Button className="form-Save btn w-100 flex-grow-1 rs-btn rs-btn-default"
                                      onClick={() => setCallpriority('priority')}
                                    >
                                      Save
                                    </Button>
                                  </div>
                                </Form>
                              </div>
                            </div>
                          </div>
                        ) : twillioModel && callpriority === 'priority' ? (
                          <div className='call-statistics'>
                            <div className='user-statistics-table px-3 py-2'>
                              <h4>Agent Call Priority</h4>
                              <div className="gsw-globel-table p-0 py-2">
                                <div className="table-responsive mb-3 scrollbar">
                                  <table className="table-box-main">
                                    <thead>
                                      <tr>
                                        <th className="text-uppercase">#</th>
                                        <th className="text-uppercase">NAME</th>
                                        <th className="text-uppercase">Priority</th>
                                        <th className="text-uppercase">Created At</th>
                                        <th className="text-uppercase">Response Rate</th>
                                        <th className="text-uppercase">Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr onClick={() => setViewUserChart(true)}>
                                        <td>1</td>
                                        <td> John Doe </td>
                                        <td><TbFlag3Filled size={20} color='orange' /><span style={{ color: 'orange', margin: '0px 2px' }}>Urgent</span></td>
                                        <td>2023-07-28 / 14:57:55</td>
                                        <td><a href="" className='text-decoration-underline text-black'>View response analytics</a></td>
                                        <td>
                                          <span className='border-end pe-3'><LuPenLine size={20} /></span>
                                          <span className='ps-3'><LuTrash2 size={20} /></span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td> John Doe </td>
                                        <td><TbFlag3Filled size={20} color='red' /><span style={{ color: 'red', margin: '0px 2px' }}>High</span></td>
                                        <td>2023-07-28 / 14:57:55</td>
                                        <td><a href="" className='text-decoration-underline text-black'>View response analytics</a></td>
                                        <td>
                                          <span className='border-end pe-3'><LuPenLine size={20} /></span>
                                          <span className='ps-3'><LuTrash2 size={20} /></span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <td> John Doe </td>
                                        <td><TbFlag3Filled size={20} color='green' /><span style={{ color: 'green', margin: '0px 2px' }}>Medium</span></td>
                                        <td>2023-07-28 / 14:57:55</td>
                                        <td><a href="" className='text-decoration-underline text-black'>View response analytics</a></td>
                                        <td>
                                          <span className='border-end pe-3'><LuPenLine size={20} /></span>
                                          <span className='ps-3'><LuTrash2 size={20} /></span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <td> John Doe </td>
                                        <td><TbFlag3Filled size={20} color='#42707f' /><span style={{ color: '#42707f', margin: '0px 2px' }}>Medium</span></td>
                                        <td>2023-07-28 / 14:57:55</td>
                                        <td><a href="" className='text-decoration-underline text-black'>View response analytics</a></td>
                                        <td>
                                          <span className='border-end pe-3'><LuPenLine size={20} /></span>
                                          <span className='ps-3'><LuTrash2 size={20} /></span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>4</td>
                                        <td> John Doe </td>
                                        <td><TbFlag3Filled size={20} color='black' /><span style={{ color: 'black', margin: '0px 2px' }}>None</span></td>
                                        <td>2023-07-28 / 14:57:55</td>
                                        <td><a href="" className='text-decoration-underline text-black'>View response analytics</a></td>
                                        <td>
                                          <span className='border-end pe-3'><LuPenLine size={20} /></span>
                                          <span className='ps-3'><LuTrash2 size={20} /></span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className='user-statistics-table py-2 px-2'>
                            <div className='d-flex align-items-center flex-column w-50 mx-auto'>
                              <img src={Banner} className='mt-5' alt="Banner" width="40%" />
                              <h1 className='my-2'>Connect Your twillio account to use this feature</h1>
                              <Button
                                onClick={() => setTwillioModel(true)}
                                className="btn mt-3 mx-2"
                              >
                                Connect Now
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : currentTab === 2 && subCallTab === 4 ? (
                      <div>
                        {twillioModel && purchaseNumber !== 'purchase' ? (
                          <div className='twillio-account d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
                            <div className="connect-card shadow border rounded-4 p-5 text-center">
                              <h2>Connect your twillio account</h2>
                              <p className='text-muted'>Enter your Twillio information below to connect account</p>
                              <div className="mt-4">
                                <Form>
                                  <Form.Group
                                    controlId=""
                                    className="form-group mb-0 w-100"
                                  >
                                    <h6 className='mx-2 text-start fw-semibold'>Twillio SID</h6>
                                    <Form.Control
                                      className="rounded-3 py-2 mx-0 my-1 mb-3 mw-100 border "
                                      placeholder="Enter your Twillio SID"
                                      name="globalsearch"
                                    />
                                    <h6 className='mx-2 text-start fw-semibold'>Twillio Key</h6>
                                    <Form.Control
                                      className="rounded-3 py-2 mx-0 my-1 mw-100 border "
                                      placeholder="Enter your Twillio Key"
                                      name="globalsearch"
                                    />
                                  </Form.Group>
                                  <div className="form-btns d-flex gap-3 mt-4">
                                    <Button className="form-Save btn w-100 flex-grow-1 rs-btn rs-btn-default"
                                      onClick={() => setPurchaseNumber('purchase')}
                                    >
                                      Save
                                    </Button>
                                  </div>
                                </Form>
                              </div>
                            </div>
                          </div>
                        ) : twillioModel && purchaseNumber === 'purchase' ? (
                          <div className='twillio-account d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
                            <div className="connect-card shadow border rounded-4 px-4 pb-4 text-center" style={{ width: '500px' }}>
                              <div className="mt-4">
                                <Form>
                                  <Form.Group
                                    controlId=""
                                    className="form-group mb-0 w-100"
                                  >
                                    <h6 className='mx-2 text-start fw-semibold'>Choose Country</h6>
                                    <SelectPicker
                                      data={data}
                                      searchable={false}
                                      style={{ width: 224 }}
                                      value={data.value}
                                      placeholder="USA"
                                    />
                                    <h6 className='mx-2 pt-3 text-start fw-semibold'>Choose Number</h6>
                                    <SelectPicker
                                      data={numberData}
                                      searchable={false}
                                      style={{ width: 224 }}
                                      value={data.value}
                                      placeholder="+ 786756765"
                                    />
                                  </Form.Group>
                                  <div className="form-btns d-flex gap-3 mt-4">
                                    <Button className="form-Save btn w-100 flex-grow-1 rs-btn rs-btn-default"
                                      onClick={() => setViewNumberModel(true)}
                                    >
                                      Purchase Now
                                    </Button>
                                  </div>
                                </Form>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className='user-statistics-table py-2 px-2'>
                            <div className='d-flex align-items-center flex-column w-50 mx-auto'>
                              <img src={Banner} className='mt-5' alt="Banner" width="40%" />
                              <h1 className='my-2'>Connect Your twillio account to use this feature</h1>
                              <Button
                                onClick={() => setTwillioModel(true)}
                                className="btn mt-3 mx-2"
                              >
                                Connect Now
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : currentTab === 2 && subCallTab === 5 ? (
                      <div>
                        {twillioModel && phoneNumber !== 'phoneNumber' ? (
                          <div className='twillio-account d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
                            <div className="connect-card shadow border rounded-4 p-5 text-center">
                              <h2>Connect your twillio account</h2>
                              <p className='text-muted'>Enter your Twillio information below to connect account</p>
                              <div className="mt-4">
                                <Form>
                                  <Form.Group
                                    controlId=""
                                    className="form-group mb-0 w-100"
                                  >
                                    <h6 className='mx-2 text-start fw-semibold'>Twillio SID</h6>
                                    <Form.Control
                                      className="rounded-3 py-2 mx-0 my-1 mb-3 mw-100 border "
                                      placeholder="Enter your Twillio SID"
                                      name="globalsearch"
                                    />
                                    <h6 className='mx-2 text-start fw-semibold'>Twillio Key</h6>
                                    <Form.Control
                                      className="rounded-3 py-2 mx-0 my-1 mw-100 border "
                                      placeholder="Enter your Twillio Key"
                                      name="globalsearch"
                                    />
                                  </Form.Group>
                                  <div className="form-btns d-flex gap-3 mt-4">
                                    <Button className="form-Save btn w-100 flex-grow-1 rs-btn rs-btn-default"
                                      onClick={() => setPhoneNumber('phoneNumber')}
                                    >
                                      Save
                                    </Button>
                                  </div>
                                </Form>
                              </div>
                            </div>
                          </div>
                        ) : twillioModel && phoneNumber === 'phoneNumber' ? (
                          <div className='call-statistics'>
                            <div className='user-statistics-table px-3 py-2'>
                              <h4>Agent Call Priority</h4>
                              <div className="gsw-globel-table p-0 py-2">
                                <div className="table-responsive mb-3 scrollbar">
                                  <table className="table-box-main">
                                    <thead>
                                      <tr>
                                        <th className="text-uppercase">#</th>
                                        <th className="text-uppercase">Status</th>
                                        <th className="text-uppercase">Number</th>
                                        <th className="text-uppercase">State</th>
                                        <th className="text-uppercase">Priority</th>
                                        <th className="text-uppercase">Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td> John Doe </td>
                                        <td><Badge className='py-2 px-3 rounded-pill' style={{ background: '#F6FFF9', border: '1px solid #bde0c9', color: 'green' }} content="Active" /></td>
                                        <td>+7856450978</td>
                                        <td>Arkansas</td>
                                        <td><TbFlag3Filled size={20} color='orange' /><span style={{ color: 'orange', margin: '0px 2px' }}>Urgent</span></td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td> John Doe </td>
                                        <td><Badge className='py-2 px-3 rounded-pill' style={{ background: '#F6FFF9', border: '1px solid #bde0c9', color: 'green' }} content="Active" /></td>
                                        <td>+7856450978</td>
                                        <td>Califonia</td>
                                        <td><TbFlag3Filled size={20} color='red' /><span style={{ color: 'red', margin: '0px 2px' }}>High</span></td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <td> John Doe </td>
                                        <td><Badge className='py-2 px-3 rounded-pill' style={{ background: '#F6FFF9', border: '1px solid #bde0c9', color: 'green' }} content="Active" /></td>
                                        <td>+7856450978</td>
                                        <td>Colorado</td>
                                        <td><TbFlag3Filled size={20} color='green' /><span style={{ color: 'green', margin: '0px 2px' }}>Medium</span></td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <td> John Doe </td>
                                        <td><Badge className='py-2 px-3 rounded-pill' style={{ background: '#F6FFF9', border: '1px solid #bde0c9', color: 'green' }} content="Active" /></td>
                                        <td>+7856450978</td>
                                        <td>Connecticut</td>
                                        <td><TbFlag3Filled size={20} color='#42707f' /><span style={{ color: '#42707f', margin: '0px 2px' }}>Medium</span></td>
                                      </tr>
                                      <tr>
                                        <td>4</td>
                                        <td> John Doe </td>
                                        <td><Badge className='py-2 px-3 rounded-pill' style={{ background: '#F6FFF9', border: '1px solid #bde0c9', color: 'green' }} content="Active" /></td>
                                        <td>+7856450978</td>
                                        <td>Massachusetts</td>
                                        <td><TbFlag3Filled size={20} color='black' /><span style={{ color: 'black', margin: '0px 2px' }}>None</span></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className='user-statistics-table py-2 px-2'>
                            <div className='d-flex align-items-center flex-column w-50 mx-auto'>
                              <img src={Banner} className='mt-5' alt="Banner" width="40%" />
                              <h1 className='my-2'>Connect Your twillio account to use this feature</h1>
                              <Button
                                onClick={() => setTwillioModel(true)}
                                className="btn mt-3 mx-2"
                              >
                                Connect Now
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {addRoleModel &&
        <Modal open={addRoleModel}
          className="role-model d-flex justify-content-center align-items-center w-auto"
          onClose={() => setAddRoleModel(false)}
        >
          <Modal.Header>
            <Modal.Title className='border-bottom pb-3'>New Role</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className='mx-2'>Role Name</p>
            <Form>
              <Form.Group
                controlId=""
                className="form-group mb-0 w-100 d-flex"
              >
                <Form.Control
                  className="rounded-3 py-2 mx-0 my-1 border "
                  placeholder="Enter Role"
                  name="globalsearch"
                />
              </Form.Group>
              <div className='mt-3 d-flex justify-content-between align-items-center'>
                <b>Features</b>
                <Toggle color="#FFFFF"></Toggle>
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <b>contract creation</b>
                <Toggle color="#FFFFF"></Toggle>
              </div>
              <div className="form-btns d-flex gap-3 mt-4">
                <Button
                  className="form-cancel btn w-100 flex-grow-1 rs-btn rs-btn-default"
                  onClick={() => setAddRoleModel(false)}
                >
                  Cancel
                </Button>
                <Button className="form-Save btn w-100 flex-grow-1 rs-btn rs-btn-default">
                  Save
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      }

      {userChart && (
        <Modal open={userChart}
          className="role-model d-flex justify-content-center align-items-center w-auto"
          id='user-chart'
          onClose={() => setViewUserChart(false)}
        >
          <Modal.Header>
            <Modal.Title className='border-bottom pb-3'>John Doe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="chart-section p-3">
              <BarChartCard />
              <p className="text-center pt-3">Total recieve call</p>
            </div>
          </Modal.Body>
        </Modal>
      )}

      {viewNumberModel && (
        <Modal open={viewNumberModel}
          className="role-model d-flex justify-content-center align-items-center w-auto"
          onClose={() => setViewNumberModel(false)}
        >
          <Modal.Header>
            <Modal.Title className='border-bottom pb-3'>Confirm</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>Are you sure want to purchase this number ?</h2>
            <div className="form-btns d-flex gap-3 mt-4">
              <Button
                className="form-cancel btn w-100 flex-grow-1 rs-btn rs-btn-default"
                onClick={() => setViewNumberModel(false)}
              >
                Cancel
              </Button>
              <Button className="form-Save btn w-100 flex-grow-1 rs-btn rs-btn-default">
                Save
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      )}

      {addNewNumber && (
        <Modal open={addNewNumber}
          className="role-model d-flex justify-content-center align-items-center w-auto"
          onClose={() => setaddNewNumber(false)}
        >
          <Modal.Header>
            <Modal.Title className='border-bottom pb-3'>Save Number</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                controlId=""
                className="form-group mb-0 w-100"
              >
                <h6 className='mx-2 text-start fw-semibold'>Name</h6>
                <Form.Control
                  className="rounded-3 py-2 mx-0 my-1 mb-3 mw-100 border "
                  placeholder="AIG Care"
                  name="globalsearch"
                />
                <h6 className='mx-2 text-start fw-semibold'>Number</h6>
                <Form.Control
                  className="rounded-3 py-2 mx-0 my-1 mw-100 border "
                  placeholder="+1 6354382956"
                  name="globalsearch"
                />
              </Form.Group>
              <div className="form-btns d-flex gap-3 mt-4">
                <Button
                  className="form-cancel btn w-100 flex-grow-1 rs-btn rs-btn-default"
                  onClick={() => setaddNewNumber(false)}
                >
                  Cancel
                </Button>
                <Button className="form-Save btn w-100 flex-grow-1 rs-btn rs-btn-default">
                  Save
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      )}

    </section>

  )
}

const BarChartCard = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Data for the bar chart
    const data = {
      labels: ['JAN 2024', 'FEB 2024', 'MAR 2024', 'APR 2024', 'MAY 2024', 'JUN 2024', 'JUL 2024', 'AUG 2024', 'SEP 2024', 'OCT 2024', 'NOV 2024', 'DEC 2024',],
      datasets: [
        {
          label: 'Sales',
          backgroundColor: 'lightgreen',
          borderWidth: 0, // Remove the border from the bars
          data: [93, 56, 92, 110, 74, 96, 112, 40, 110, 58, 84, 52],
        },
      ],
    };

    // Options for the bar chart
    const options = {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          // text: 'Sales Report',
          fontSize: 20,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (value, index, values) {
              return value; // Add percentage sign to y-axis values
            }
          }
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
      elements: {
        bar: {
          borderRadius: 10, // Add border radius to the bars
        },
      },
    };

    // Create the chart instance
    const myChart = new Chart(chartRef.current, {
      type: 'bar',
      data: data,
      options: options,
    });

    // Clean up function
    return () => myChart.destroy();
  }, []);

  return <canvas ref={chartRef} />;
};

export default Setting