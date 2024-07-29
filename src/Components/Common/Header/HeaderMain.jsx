import React, { useEffect, useState } from "react";
import { Form, Button, List, Avatar } from "rsuite";
import {
  ArrowRight2,
  SearchNormal1,
  NotificationBing,
  Headphone,
  Sun1,
  ArrowDown2,
} from "iconsax-react";
import { useDispatch } from "react-redux";
import { globalSearchData } from "../../../Redux/Actions/HistoryAction";

const HeaderMain = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearchChange = async (value) => {
    setSearchTerm(value);
    if (value) {
      dispatch(globalSearchData(value)).then((res) => {
        if (res.success === true) {
          setResults(res.data);
        }
      });
    } else {
      setResults([]);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return "th"; // covers 4th to 20th
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const formatDateTime = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    const hours = date.getHours() % 12 || 12;
    const minutes = date
      .getMinutes()
      .toString()
      .padStart(2, "0");
    const seconds = date
      .getSeconds()
      .toString()
      .padStart(2, "0");
    const ampm = date.getHours() >= 12 ? "PM" : "AM";

    return `${day}${getOrdinalSuffix(
      day
    )}  ${month}  ${hours}:${minutes}:${seconds} ${ampm}`;
  };
  return (
    <div className="gw-head-titleuser-wrap d-flex align-items-center flex-wrap justify-content-between px-4">
      <a
        href="#"
        className="gw-humburger transition-ease d-none position-absolute text-decoration-none"
      >
        <ArrowRight2 color="#fff" variant="Outline" size={20} />
      </a>
      <div className="gw-headtitlebar d-flex align-items-center justify-content-center flex-grow-1">
        <Form>
          <Form.Group controlId="" className="form-group mb-0 w-100 d-flex">
            <Form.Control
              className="rounded-3 search-control"
              placeholder="Global search"
              name="globalsearch"
              value={searchTerm}
              onChange={(value) => handleSearchChange(value)}
            />
            <Button className="search-btn-cont">
              <SearchNormal1 color="#667085" variant="Outline" size={16} />
            </Button>
          </Form.Group>
          <div>
            {/* Render search results here */}
            {results?.contacts?.map((result, index) => (
              <div key={index}>{result.name}</div>
            ))}
          </div>
        </Form>
      </div>
      <div className="gw-head-notificationuser">
        <List className="gw-notificationuser-list d-flex flex-wrap align-items-center p-0 m-0 gap-3 gap-lg-4 ">
          <List.Item>{formatDateTime(dateTime)}</List.Item>
          <List.Item className="nav-item gw-head-dropdown p-0">
            <a className="nav-link position-relative" href="#">
              <Headphone color="#667085" variant="Outline" />
            </a>
          </List.Item>
          <List.Item className="nav-item gw-head-dropdown p-0">
            <a className="nav-link position-relative" href="#">
              <Sun1 color="#667085" variant="Outline" />
            </a>
          </List.Item>
          <List.Item className="nav-item gw-head-dropdown p-0">
            <a className="nav-link position-relative" href="#">
              <NotificationBing color="#667085" variant="Outline" />
            </a>
          </List.Item>
          <List.Item className="nav-item headuser_dropdown gw-head-dropdown p-0 userprofile_dropdown ps-4">
            <div className="d-flex gap-2 align-items-center">
              <Avatar
                circle
                src="https://i.pravatar.cc/150?u=git@rsutiejs.com"
              />
              <ArrowDown2 size="16" color="#667085" variant="Outline" />
            </div>
          </List.Item>
        </List>
      </div>
    </div>
  );
};

export default HeaderMain;
