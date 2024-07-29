import React, { useContext } from "react";
import Draggable from "react-draggable";
import "bootstrap/dist/css/bootstrap.min.css";
import { ModelName } from "../../../../context/callingModelContext";

function MinimizeScreen({ setOpenDialPad }) {
  const { setModelName } = useContext(ModelName);
  return (
    <Draggable>
      <div
        className="minimize-main"
        onClick={() => {
          // setModelName("calling");
          // setOpenDialPad(true);
        }}
      >
        <div className="d-flex align-items-center gap-3">
          <div>
            <h4 className="call_number">+1 801-584-5272</h4>
            <p className="call_time">05:30</p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div className="call-icon-cricle d-flex justify-content-center align-items-center">
              <img
                src="../../../../../public/Images/hold-call-2.svg"
                width={"20px"}
                height={"20px"}
                alt=""
              />
            </div>
            <div className="call-icon-cricle d-flex justify-content-center align-items-center">
              <img
                src="../../../../../public/Images/mute-2.svg"
                width={"18px"}
                height={"18px"}
                alt=""
              />
            </div>
            <div
              onClick={() => setModelName("")}
              className="call-icon-cricle callcut-icon-cricle d-flex justify-content-center align-items-center"
            >
              <img
                src="../../../../../public/Images/callcut-2.svg"
                width={"20px"}
                height={"20px"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
}

export default MinimizeScreen;
