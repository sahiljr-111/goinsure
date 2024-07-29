import React, { useContext } from "react";
import CustomButton from "../../UI/CustomButton";
import { Call } from "iconsax-react";
import { ModelName } from "../../../../context/callingModelContext";

function IncomingCall() {
    const { setModelName } = useContext(ModelName);
  return (
    <>
      <div className="incoming-call-box">
        <div className="d-flex align-items-center gap-3 mb-3">
          <div className="incoming-call-image">
            <img src="../../../../../public/Images/user-2.jpg" alt="user" />
          </div>
          <div>
            <p className="incoming-call-text">Incoming Call</p>
            <h3 className="incoming-call-user">John Doe Calvin</h3>
            <p className="incoming-call-number">+91592624262</p>
          </div>
        </div>
        <div className="d-flex align-items-center gap-3">
          <CustomButton
            isFullWidth
            className="d-flex gap-3 border-0 rounded-4"
            style={{ backgroundColor: "#F23B3B", color: "white" }}
          >
            <img
              className="callcut-icons"
              src="/Images/callcut.svg"
              alt=""
              onClick={() => setModelName("")}
            />
            Decline
          </CustomButton>
          <CustomButton
            isFullWidth
            className="d-flex gap-3 border-0 rounded-4"
            style={{ backgroundColor: "#4CAF50", color: "white" }}
            // onClick={handleClickCall}
          >
            <Call size="28" color="#ffffff" variant="Bold" />
            Answer
          </CustomButton>
        </div>
      </div>
    </>
  );
    return (
        <>
            {/* <div className="incoming-call-box">
                <div className='d-flex align-items-center gap-3 mb-3'>
                    <div className='incoming-call-image'>
                        <img src="../../../../../public/Images/user-2.jpg" alt="user" />
                    </div>
                    <div>
                        <p className='incoming-call-text'>Incoming Call</p>
                        <h3 className='incoming-call-user'>John Doe Calvin</h3>
                        <p className='incoming-call-number'>+91592624262</p>
                    </div>
                </div>
                <div className='d-flex align-items-center gap-3'>

                    <CustomButton
                        isFullWidth
                        className="d-flex gap-3 border-0 rounded-4"
                        style={{ backgroundColor: "#F23B3B", color: "white" }}
                    >
                        <img
                            className="callcut-icons"
                            src="/Images/callcut.svg"
                            alt=""
                        />
                        Decline
                    </CustomButton>  
                    <CustomButton
                        isFullWidth
                        className="d-flex gap-3 border-0 rounded-4"
                        style={{ backgroundColor: "#4CAF50", color: "white" }}
                    >
                        <Call size="28" color="#ffffff"  variant="Bold"/>
                        Answer
                    </CustomButton>
                </div>
            </div> */}
        </>
    );
}

export default IncomingCall;
