import React, { useContext, useState } from "react";
import CustomButton from "../../../Common/UI/CustomButton/index.jsx";
import { Col, FlexboxGrid, Drawer } from "rsuite";
import { InfoCircle } from "iconsax-react";
import { ModelName } from "../../../../context/callingModelContext.jsx";

function MergingTwoCalls() {
  const [openComposedMail, setOpenComposedMail] = useState(false);
  const { setModelName } = useContext(ModelName);
  const handleOpenKeyPedModel = () => {
    setModelName("callKeypad");
  };

  const handleOpenCallListModel = () => {
    setModelName("callList");
  };
  const callButtons = [
    {
      src: "../../../../../public/Images/addcall.svg",
      alt: "Icon 4",
      label: "Add call",
      onClick: handleOpenCallListModel,
    },
    {
      src: "../../../../../public/Images/mute.svg",
      alt: "Icon 5",
      label: "Mute",
    },
    {
      src: "../../../../../public/Images/keypad.svg",
      alt: "Icon 6",
      label: "Keypad",
      onClick: handleOpenKeyPedModel,
    },
    {
      src: "../../../../../public/Images/hold-call.svg",
      alt: "Icon 2",
      label: "Hold Call",
    },
  ];

  const phoneNumbers = [
    { number: "1 (234) 567-8900", id: 1 },
    { number: "1 (234) 567-8901", id: 2 },
    { number: "1 (234) 567-8902", id: 3 },
  ];

  return (
    <>
      <FlexboxGrid
        className="d-flex align-items-end text-center h-100"
        style={{
          width: "100%",
          margin: "0 auto",
        }}
      >
        <FlexboxGrid.Item colspan={24} justify="end">
          <div>
            <div className="mb-5">
              <div className="d-flex justify-content-center align-items-center gap-2">
                <h5 className="conference-and-info">Conference Call</h5>
                <InfoCircle size="32" color="#595959" variant="Outline" />
              </div>
              <p className="call-time">05:30</p>
            </div>
            {phoneNumbers.map((phone, index) => (
              <div
                key={phone.id}
                className="d-flex justify-content-center align-items-center gap-3 callnumber-callicon"
              >
                <h3 className="mobile-number mb-0">{phone.number}</h3>
                <CustomButton
                  isFullWidth
                  className="d-flex justify-content-center align-items-center callcut-round"
                  style={{ backgroundColor: "#F23B3B", color: "white" }}
                >
                  <img src="/Images/callcut.svg" alt="End Call" />
                </CustomButton>
              </div>
            ))}
          </div>

          <Col xs={24} className="mt-5">
            <div className="row justify-content-center align-items-center call-bottom-main-box mt-0">
              {callButtons.map((button, index) => (
                <div className="col-4 mt-4" key={index}>
                  <div className="d-flex justify-content-center">
                    <div className="call-bottom-box" onClick={button.onClick}>
                      <img src={button.src} alt={button.alt} />
                    </div>
                  </div>
                  <p>{button.label}</p>
                </div>
              ))}
            </div>
            <CustomButton
              isFullWidth
              className="d-flex gap-3 h-[50px] border-0 rounded-4 mb-4"
              style={{ backgroundColor: "#F23B3B", color: "white" }}
              onClick={() => setOpenComposedMail(!openComposedMail)}
            >
              <img
                className="callcut-icons"
                src="/Images/callcut.svg"
                alt="End Call"
              />
            </CustomButton>
          </Col>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </>
  );
}

export default MergingTwoCalls;
