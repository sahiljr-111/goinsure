import React, { useState } from 'react';
import CustomButton from "../../../Common/UI/CustomButton/index.jsx";
import { Col, FlexboxGrid, Drawer } from "rsuite";

function CallingDialedNumber() {
    const [open, setOpen] = useState(true); // Assuming the drawer is initially open
    const [openComposedMail, setOpenComposedMail] = useState(false);

    const callButtons = [
        { src: "../../../../../public/Images/swap-call.svg", alt: "Icon 1", label: "Swap Call" },
        { src: "../../../../../public/Images/hold-call.svg", alt: "Icon 2", label: "Hold Call" },
        { src: "../../../../../public/Images/keypad.svg", alt: "Icon 3", label: "Merge Call" },
        { src: "../../../../../public/Images/addcall.svg", alt: "Icon 4", label: "Add call" },
        { src: "../../../../../public/Images/mute.svg", alt: "Icon 5", label: "Mute" },
        { src: "../../../../../public/Images/keypad.svg", alt: "Icon 6", label: "Keypad" }
    ];

    return (
        <>
            <FlexboxGrid
                className="d-flex align-items-center text-center h-100 mt-4 px-4"
                style={{
                    width: "100%",
                    margin: "0 auto",
                }}
            >
                <FlexboxGrid.Item style={{ marginBottom: "10px" }} colspan={24}>
                    <p className="calling-text">On Hold (02:00)</p>
                    <h3 className="mobile-number">1 (234) 567-8900</h3>
                </FlexboxGrid.Item>

                <FlexboxGrid.Item style={{ marginBottom: "10px" }} colspan={24}>
                    <p className="calling-text">Ringing...</p>
                    <h3 className="mobile-number">1 (234) 567-8900</h3>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={24} justify="end">
                    <Col xs={24} className="mt-4">
                        <div className="row justify-content-center align-items-center call-bottom-main-box mt-0">
                            {callButtons.map((button, index) => (
                                <div className="col-4 mt-5" key={index}>
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
                            className="d-flex gap-3 h-[50px] border-0 rounded-4 mb-5"
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
