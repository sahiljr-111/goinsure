import React from "react";
import { CallIncoming, PlayCircle } from "iconsax-react";
import { Avatar } from "rsuite";
import CustomTable from "../../../../Components/Common/UI/CustomTable/index.jsx";

const InboxAll = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "",
        accessor: "avatar",
      },
      {
        Header: "MAILS",
        accessor: "mail",
      },
      {
        Header: "SMS",
        accessor: "sms",
      },
      {
        Header: "CALL LOGS",
        accessor: "callLogs",
      },
    ],
    []
  );

  const dummyData = ( avatar, mail, sms, callLogs) => {
    return {
      avatar: (
        <div className="d-flex justify-content-center align-items-center gap-1">
          <Avatar
            circle
            src={avatar.images}
          />
        </div>
      ),
      mail: (
        <div className="d-flex align-items-center gap-1">
          {/* <Avatar
            circle
            src="https://i.pravatar.cc/150?u=git@rsutiejs.com"
          /> */}
          <span>{mail.name}</span>
          <span className="badge rounded-pill text-bg-primary ">
            {mail.date}
          </span>
          <span className="badge rounded-pill text-bg-success">
            {mail.time}
          </span>
        </div>
      ),
      sms,
      callLogs: (
        <div className="d-flex align-items-center gap-2">
          <CallIncoming size="20" color="#14AC48" />
          <p className="in-call-number">{callLogs}</p>
        </div>
      ),
    };
  };

  const data = React.useMemo(
    () => [
      dummyData(
        {
          images: "https://i.pravatar.cc/150?u=git@rsutiejs.com"
        },
        {
          name: "Reminder on policy GIW23456",
          date: "15 Mar 2024",
          time: "07:36",
        },
        "Sale John john@quickwayinfosystems.in Austin Henriod",
        "+919265******"
      ),

      dummyData(
        {
          images: "https://i.pravatar.cc/150?u=git@rsutiejs.com"
        },
        {
          name: "Reminder on policy GIW23456",
          date: "15 Mar 2024",
          time: "07:36",
        },
        "Sale John john@quickwayinfosystems.in Austin Henriod",
        "+919265******"
      ),

      dummyData(
        {
          images: "https://i.pravatar.cc/150?u=git@rsutiejs.com"
        },
        {
          name: "Reminder on policy GIW23456",
          date: "15 Mar 2024",
          time: "07:36",
        },
        "Sale John john@quickwayinfosystems.in Austin Henriod",
        "+919265******"
      ),

      dummyData(
        {
          images: "https://i.pravatar.cc/150?u=git@rsutiejs.com"
        },
        {
          name: "Reminder on policy GIW23456",
          date: "15 Mar 2024",
          time: "07:36",
        },
        "Sale John john@quickwayinfosystems.in Austin Henriod",
        "+919265******"
      ),

      dummyData(
        {
          images: "https://i.pravatar.cc/150?u=git@rsutiejs.com"
        },
        {
          name: "Reminder on policy GIW23456",
          date: "15 Mar 2024",
          time: "07:36",
        },
        "Sale John john@quickwayinfosystems.in Austin Henriod",
        "+919265******"
      ),

      dummyData(
        {
          images: "https://i.pravatar.cc/150?u=git@rsutiejs.com"
        },
        {
          name: "Reminder on policy GIW23456",
          date: "15 Mar 2024",
          time: "07:36",
        },
        "Sale John john@quickwayinfosystems.in Austin Henriod",
        "+919265******"
      ),

      dummyData(
        {
          images: "https://i.pravatar.cc/150?u=git@rsutiejs.com"
        },
        {
          name: "Reminder on policy GIW23456",
          date: "15 Mar 2024",
          time: "07:36",
        },
        "Sale John john@quickwayinfosystems.in Austin Henriod",
        "+919265******"
      ),

      dummyData(
        {
          avatar: "https://i.pravatar.cc/150?u=git@rsutiejs.com"
        },
        {
          name: "Reminder on policy GIW23456",
          date: "15 Mar 2024",
          time: "07:36",
        },
        "Sale John john@quickwayinfosystems.in Austin Henriod",
        "+919265******"
      ),
    ],
    []
  );

  return (
    <div className="inbox-main-table">
      <CustomTable columns={columns} data={data} />
    </div>
  );
};

export default InboxAll;
