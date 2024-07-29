import React from "react";
import { Sidebar, Sidenav, Navbar, Nav, useToaster, Message } from "rsuite";
import Logo from "../../../assets/images/logo.png";
import LogoIcon from "../../../assets/images/logo-icon.png";
import {
  Home2,
  Notification,
  Setting2,
  Calendar1,
  LogoutCurve,
  ArrowSwapHorizontal,
  User,
  DocumentText1,
} from "iconsax-react";
import { useDispatch } from "react-redux";
import { logoutAdmin } from "../../../Redux/Actions/AdminLoginAction";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaBriefcase } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";

const headerStyles = {
  height: 60,
  overflow: "hidden",
};
const NavToggle = ({ expand, onChange }) => {
  const dispatch = useDispatch();
  const toaster = useToaster();
  const navigate = useNavigate();
  const hundleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutAdmin()).then((res) => {
      if (res.success === true) {
        navigate("/");
        toaster.push(
          <Message type={"success"} closable>
            <p className="fs-6">{res.message}</p>
          </Message>,
          { placement: "topEnd", duration: 2000 }
        );
      } else {
        toaster.push(
          <Message type={"error"} closable>
            <p className="fs-6">{res.message}</p>
          </Message>,
          { placement: "topEnd", duration: 2000 }
        );
      }
    });
  };
  return (
    <Navbar appearance="subtle" className="nav-toggle gw-logout-navbar">
      <Nav className="logout-btn">
        <Nav.Item
          eventKey="1"
          active
          icon={<LogoutCurve className="rs-icon" variant="Outline" />}
          onClick={(e) => hundleLogout(e)}
        >
          Logout
        </Nav.Item>
      </Nav>
      <Nav className="gw-pinsidebar">
        <Nav.Item onClick={onChange}>
          {expand ? (
            <ArrowSwapHorizontal color="#fff" variant="Outline" />
          ) : (
            <ArrowSwapHorizontal color="#fff" variant="Outline" />
          )}
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};
const SidebarMain = ({ expand, setExpand }) => {
  const navigate = useNavigate();
  return (
    <Sidebar
      className={`gw-sidebar${!expand ? " active" : ""}`}
      style={{ display: "flex", flexDirection: "column" }}
      width={expand ? 256 : 60}
      collapsible
    >
      <Sidenav.Header>
        <div style={headerStyles} className="gw-logo-site">
          <img src={Logo} alt="GoinsureWise" className="desktop-logo" />
          <img src={LogoIcon} alt="GoinsureWise" className="toggle-logo" />
        </div>
      </Sidenav.Header>
      <Sidenav
        className="scrollbar position-relative navslidebar-div"
        expanded={expand}
        appearance="subtle"
      >
        <Sidenav.Body>
          <h5 className="mb-2 text-uppercase ps-3">Main</h5>
          <Nav>
            <Nav.Item
              eventKey="1"
              icon={<Home2 className="rs-icon" variant="Outline" />}
              as={Link}
              to={"/contact-details"}
            >
              Dashboard
            </Nav.Item>
            <Nav.Item
              eventKey="2"
              icon={<User className="rs-icon" variant="Outline" />}
              onClick={() => navigate("/contacts")}
            >
              Contact
            </Nav.Item>
            <Nav.Item
              eventKey="3"
              icon={<Notification className="rs-icon" variant="Outline" />}
            >
              Notification
            </Nav.Item>
            <Nav.Menu
              eventKey="4"
              trigger="hover"
              title="Settings"
              icon={<Setting2 className="rs-icon" variant="Outline" />}
              placement="rightStart"
            >
              <Nav.Item eventKey="4-1">Earnings</Nav.Item>
              <Nav.Item eventKey="4-2">Refunds</Nav.Item>
              <Nav.Item eventKey="4-3">Declines</Nav.Item>
              <Nav.Item eventKey="4-4">Payouts</Nav.Item>
            </Nav.Menu>
            <Nav.Menu
              eventKey="5"
              trigger="hover"
              title="Schedules"
              icon={<Calendar1 className="rs-icon" variant="Outline" />}
              placement="rightStart"
            >
              <Nav.Item eventKey="5-1">Applications</Nav.Item>
              <Nav.Item eventKey="5-2">Websites</Nav.Item>
              <Nav.Item eventKey="5-3">Channels</Nav.Item>
              <Nav.Item eventKey="5-4">Tags</Nav.Item>
              <Nav.Item eventKey="5-5">Versions</Nav.Item>
            </Nav.Menu>
            <Nav.Menu
              eventKey="6"
              trigger="hover"
              title="Report"
              icon={<DocumentText1 className="rs-icon" variant="Outline" />}
              placement="rightStart"
            >
              <Nav.Item eventKey="6-1" to="/report" as={Link}>
                Global Report
              </Nav.Item>
              <Nav.Item
                eventKey="6-2"
                to="/policy-ledger-performance"
                className="text-black"
                as={Link}
              >
                Report Ledger
              </Nav.Item>
            </Nav.Menu>
            <Nav.Item
              eventKey="7"
              icon={<FaBriefcase className="rs-icon" variant="Outline" />}
              as={Link}
              to={"/carrier"}
            >
              Carrier
            </Nav.Item>
            <Nav.Item
              eventKey="8"
              icon={<CiGlobe className="rs-icon" variant="Outline" />}
              as={Link}
              to={"/global-communication"}
            >
              Global Communication
            </Nav.Item>
            <Nav.Item
              eventKey="9"
              icon={<CiGlobe className="rs-icon" variant="Outline" />}
              as={Link}
              to={"/history"}
            >
              History
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
      <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
    </Sidebar>
  );
};

export default SidebarMain;
