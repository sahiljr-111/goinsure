import { useContext, useState } from "react";
import CustomDrawer from "../../../Common/UI/CustomDrawer/index.jsx";
import CustomButton from "../../../Common/UI/CustomButton/index.jsx";
import CommonInput from "../../../Common/UI/CustomInput/index.jsx";
import Calling from "../../../Common/Dashbord/Calldailog/Calling.jsx";
import CallList from "../../../Common/Dashbord/Calldailog/CallList.jsx";
import DialingNumber from "../../../Common/Dashbord/Calldailog/DialingNumber.jsx";
import CallingDialedNumber from "../../../Common/Dashbord/Calldailog/CallingDialedNumber.jsx";
import MergingTwoCalls from "../../../Common/Dashbord/Calldailog/MergingTwoCalls.jsx";
import DialinigNumberPad from "../../../Common/Dashbord/Calldailog/dialinigNumberPad.jsx";
import { ModelName } from "../../../../context/callingModelContext.jsx";
import MinimizeScreen from "../../../Common/Dashbord/Calldailog/MinimizeScreen.jsx";

const DialPad = ({ open, onClose, setOpenDialPad, openDialPad }) => {
  const { modelName, setModelName } = useContext(ModelName);

  return (
    <>
      <CustomDrawer
        open={open}
        onClose={onClose}
        className="dailepad-main position-relative"
      >
        {modelName === "dialingNumberPad" && <DialinigNumberPad />}
        {/* Merging Two Calls Start */}

        {modelName === "mergingTwoCalls" && <MergingTwoCalls />}

        {/* Merging Two Calls End */}
        {/* Calling Dialed Number Start */}

        {modelName === "callingDialedNumber" && <CallingDialedNumber />}
        {/* Calling Dialed Number End */}
        {/* Dialing Number Start */}

        {modelName === "callKeypad" && <DialingNumber />}

        {/* Dialing Number End */}
        {/* Calling Section Start */}

        {modelName === "calling" && <Calling />}

        {/* Calling Section End */}
        {/* Clicking on add call start */}

        {modelName === "callList" && <CallList />}

        {/* Clicking on add call end */}

        <div
          className="minus-btn"
          onClick={() => {
            setModelName("minimizeModel");
            setOpenDialPad(false);
          }}
        >
          <img src="../../../../../public/Images/minus.svg" alt="" />
        </div>
      </CustomDrawer>
     
      {/* {modelName === "minimizeModel" && (
        
      )} */}
    </>
  );
};

export default DialPad;
