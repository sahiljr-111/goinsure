import { useState } from "react";
import CustomDrawer from "../../../Common/UI/CustomDrawer/index.jsx";
import CustomButton from "../../../Common/UI/CustomButton/index.jsx";
import { Col, FlexboxGrid } from "rsuite";
import { Add, CallCalling, CloseSquare } from "iconsax-react";
import CommonInput from "../../../Common/UI/CustomInput/index.jsx";

const Calling = ({ open, onClose }) => {
  const [dialedNumber, setDialedNumber] = useState("");

  const handleClick = value => {
    setDialedNumber(dialedNumber + value);
  };

  const handleRemove = () => {
    setDialedNumber(dialedNumber.slice(0, -1));
  };

  const callButtons = [
    { src: '../../../../../public/Images/addcall.svg', alt: 'Add Call', label: 'Add Call' },
    { src: '../../../../../public/Images/mute.svg', alt: 'Mute', label: 'Mute' },
    { src: '../../../../../public/Images/keypad.svg', alt: 'Keypad', label: 'Keypad' },
  ];

  return (

    <CustomDrawer
      open={open}
      onClose={onClose}
      className="d-flex align-items-center dailepad-main"
    >
      <FlexboxGrid
        className="d-flex align-items-center text-center h-100"
        style={{
          width: "100%",
          margin: "0 auto",
        }}
      >
        <FlexboxGrid.Item style={{ marginBottom: "10px" }} colspan={24}>
          {/* <Col xs={24}>
            <CommonInput
              inputWrapperClassName="border-0"
              value={dialedNumber}
              readOnly
              wrapperClassName="border-0"
              style={{
                textAlign: "center",
                fontSize: "32px",
                padding: "10px",
                border: "none",
                outline: "none"
              }}
            />
          </Col> */}
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
          {/* <Col
            xs={24}
            className="d-flex align-items-center  justify-content-end h-full "
          >
            <CloseSquare
              size="32"
              color="#000000"
              onClick={handleRemove}
              className="ml-auto"
            />
          </Col> */}
          {/* {buttons.map((button, index) => (
            <Col key={index} xs={8} className="p-2">
              <CustomButton
                style={{
                  color: "black",
                  background: "#F9FAFB",
                  borderColor: "#EAECF0",
                  fontSize: "20px",
                  height: "60px"
                }}
                appearance="primary"
                block
                onClick={() => handleClick(button.value)}
              >
                {button.value}
                <div style={{ fontSize: "14px", marginTop: "5px" }}>
                  {button.text}
                </div>
              </CustomButton>
            </Col>
          ))} */}
          <Col xs={24} className="mt-4">
            <div className="row justify-content-between align-items-center call-bottom-main-box">
              {callButtons.map((button, index) => (
                <div className="col-4" key={index}>
                  <div className="d-flex justify-content-center">
                    <div className="call-bottom-box">
                      <img src={button.src} alt={button.alt} />
                    </div>
                  </div>
                  <p>{button.label}</p>
                </div>
              ))}
            </div>
            <CustomButton
              isFullWidth
              className="d-flex gap-3 h-[50px] border-0 rounded-4"
              style={{ backgroundColor: "#F23B3B", color: "white" }}
            >
              {/* <CallCalling size="28" color="#ffffff" /> */}

              <img
                className="callcut-icons"
                src="../../../../../public/Images/callcut.svg"
                alt=""
                onClick={() => setOpenComposedMail(!openComposedMail)}
              />
            </CustomButton>
          </Col>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </CustomDrawer>
  );
};

export default Calling;
