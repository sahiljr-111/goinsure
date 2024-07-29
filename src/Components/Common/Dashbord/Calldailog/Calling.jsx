import { useContext, useState } from "react";
import CustomDrawer from "../../UI/CustomDrawer";
import CustomButton from "../../UI/CustomButton";
import { Col, FlexboxGrid } from "rsuite";
import { ModelName } from "../../../../context/callingModelContext";
import CallContactModal from "./CallContactModal";

const Calling = ({ open, onClose }) => {
  const { setModelName } = useContext(ModelName);

  const handleClickCall = () => {
    setModelName("callList");
  };
  const handleClickKeyped = () => {
    setModelName("callKeypad");
  };

  const callButtons = [
    {
      src: "/Images/addcall.svg",
      alt: "Add Call",
      label: "Add Call",
      onClick: handleClickCall,
    },
    { src: "/Images/mute.svg", alt: "Mute", label: "Mute" },
    {
      src: "/Images/keypad.svg",
      alt: "Keypad",
      label: "Keypad",
      onClick: handleClickKeyped,
    },
  ];

  return (
    <FlexboxGrid
      className="d-flex align-items-end text-center h-100"
      style={{
        width: "100%",
        margin: "0 auto",
      }}
    >
      <FlexboxGrid.Item style={{ marginBottom: "10px" }} colspan={24}>
        <p className="calling-text">Calling...</p>
        <h3 className="mobile-number">1 (234) 567-8900</h3>
        <CustomButton
          className="location-text"
          style={{
            backgroundColor: "transparent",
            color: "#007AFF",
            border: "none",
            margin: "auto",
          }}
        >
          Salt lake city, UT
        </CustomButton>
      </FlexboxGrid.Item>

      <FlexboxGrid.Item colspan={24} justify="end">
        <Col xs={24} className="mt-4">
          <div className="row justify-content-center align-items-center call-bottom-main-box mt-0 mb-4">

            <div className="col-4">
              <div className="d-flex justify-content-center">
                <div className="call-bottom-box">
                  <img src='../../../../../public/Images/hold-call.svg' alt="" />
                </div>
              </div>
              <p>Hold Call</p>
            </div>

          </div>
          <div className="row justify-content-between align-items-center call-bottom-main-box mt-0">
            {callButtons.map((button, index) => (
              <div className="col-4" key={index}>
                <div className="d-flex justify-content-center">
                  <div className="call-bottom-box" onClick={button.onClick}>
                    <img src={button.src} alt={button.alt} />
                  </div>
                </div>
                <p>{button.label}</p>
              </div>
            ))}
          </div>
          <CallContactModal />  
        </Col>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

export default Calling;
