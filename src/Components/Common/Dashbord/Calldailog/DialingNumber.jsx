import React, { useContext, useState } from "react";
import CustomButton from "../../../Common/UI/CustomButton/index.jsx";
import { Col, FlexboxGrid } from "rsuite";
import { CallCalling, CloseSquare } from "iconsax-react";
import CommonInput from "../../../Common/UI/CustomInput/index.jsx";
import { ModelName } from "../../../../context/callingModelContext.jsx";

function DialingNumber() {
  const [dialedNumber, setDialedNumber] = useState("");
  const { setModelName } = useContext(ModelName);

  const handleOpenModel = () => {
    setModelName("callingDialedNumber");
  };
  const handleClick = (value) => {
    setDialedNumber(dialedNumber + value);
  };

  const handleRemove = () => {
    setDialedNumber(dialedNumber.slice(0, -1));
  };

  const buttons = [
    { value: "1", text: "" },
    { value: "2", text: "ABC" },
    { value: "3", text: "DEF" },
    { value: "4", text: "GHI" },
    { value: "5", text: "JKL" },
    { value: "6", text: "MNO" },
    { value: "7", text: "PQRS" },
    { value: "8", text: "TUV" },
    { value: "9", text: "WXYZ" },
    { value: "*", text: "" },
    { value: "0", text: "" },
    { value: "#", text: "" },
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
        <FlexboxGrid.Item style={{ marginBottom: "10px" }} colspan={24}>
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
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={24} justify="end">
          <Col xs={24}>
            <div className="d-flex justify-content-between align-items-center gap-2 w-100 pb-4">
              <CommonInput
                inputWrapperClassName="border-0 w-100"
                value={dialedNumber}
                readOnly
                wrapperClassName="border-0 w-100 bg-transparent-input"
                style={{
                  textAlign: "center",
                  fontSize: "32px",
                  padding: "10px",
                  border: "none",
                  outline: "none",
                }}
              />
              <div style={{ cursor: "pointer" }} onClick={handleRemove}>
                <img src="../../../../../public/Images/delete.svg" alt="" />
              </div>
            </div>
          </Col>

          {buttons.map((button, index) => (
            <Col key={index} xs={8} className="p-2">
              <CustomButton
                style={{
                  color: "black",
                  background: "#F9FAFB",
                  borderColor: "#EAECF0",
                  fontSize: "20px",
                  height: "60px",
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
          ))}
          <Col xs={24} className="mt-4">
            <CustomButton
              isFullWidth
              className="d-flex gap-3 h-[50px] border-0 mb-4"
              style={{ backgroundColor: "#4CAF50", color: "white" }}
              onClick={handleOpenModel}
            >
              <CallCalling size="28" color="#ffffff" />
              Call
            </CustomButton>
          </Col>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </>
  );
}

export default DialingNumber;
