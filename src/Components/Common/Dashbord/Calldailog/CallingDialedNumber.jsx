import React, { useContext, useState } from "react";
import CustomButton from "../../../Common/UI/CustomButton/index.jsx";
import { Col, FlexboxGrid, Drawer } from "rsuite";
import { ModelName } from "../../../../context/callingModelContext.jsx";

function CallingDialedNumber() {
  const [openComposedMail, setOpenComposedMail] = useState(false);
  const { setModelName } = useContext(ModelName);
  const handleOpenMergeModel = () => {
    setModelName("mergingTwoCalls");
  };
  const handleOpenKeyPedModel = () => {
    setModelName("callKeypad");
  };
  const handleOpenCallListModel = () => {
    setModelName("callList");
  };
  const callButtons = [
    {
      src: "../../../../../public/Images/swap-call.svg",
      alt: "Icon 1",
      label: "Swap Call",
    },
    {
      src: "../../../../../public/Images/hold-call.svg",
      alt: "Icon 2",
      label: "Hold Call",
    },
    {
      src: "../../../../../public/Images/merge.svg",
      alt: "Icon 3",
      label: "Merge Call",
      onClick: handleOpenMergeModel,
    },
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
          <div className="mb-4">
            <p className="calling-text">On Hold (02:00)</p>
            <h3 className="mobile-number">1 (234) 567-8900</h3>
          </div>
          <div>
            <p className="calling-text">Ringing...</p>
            <h3 className="mobile-number">1 (234) 567-8900</h3>
          </div>

          <Col xs={24} className="mt-5">
            <div className="row justify-content-center align-items-center call-bottom-main-box mt-0">
              {callButtons.map((button, index) => (
                <div className="col-4 mt-3" key={index}>
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

export default CallingDialedNumber;
