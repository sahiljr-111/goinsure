import React, { useEffect, useState } from "react";
import PyshicalDetails1 from "../../../Components/Pages/HealthDetails/PyshicalDetails1";
import PyshicalDetails2 from "../../../Components/Pages/HealthDetails/PyshicalDetails2";
import HealthIndex from "../../../Components/Pages/HealthDetails/HealthIndex";
import { Button, Message, useToaster } from "rsuite";
import { useDispatch } from "react-redux";
import {
  singleDetailContact,
  updateDetailContact,
} from "../../../Redux/Actions/ContactAction";

const calculateBMI = (weight, heightInInches) => {
  if (heightInInches === 0) return 0;
  return (weight / (heightInInches * heightInInches)) * 703;
};
const HealthDetailsCtn = ({ userDetailData, setUserDetailData }) => {
  const toaster = useToaster();
  const dispatch = useDispatch();
  const [healthData, setHealthData] = useState({
    heightInft: 0,
    heightInInches: 0,
    weightInPound: 0,
    bmi: 0,
    isTobaccoUser: null,
    isCPAPMachineUser: null,
    isDiabetes: null,
    medicationsManageing: null,
    isOxygen: null,
    isMarried: null,
  });
  const hundleSubmit = (e) => {
    e.preventDefault();
    const id = userDetailData?.data?._id;
    dispatch(updateDetailContact(id, healthData)).then((res) => {
      if (res.success === true) {
        dispatch(singleDetailContact(id)).then((res) => {
          if (res.success === true) {
            setUserDetailData(res);
          }
        });
        toaster.push(
          <Message type={"success"} closable>
            <p className="fs-6">{res.message}</p>
          </Message>,
          { placement: "topEnd", duration: 2000 }
        );
      }
    });
  };
  useEffect(() => {
    const bmi = calculateBMI(
      userDetailData?.data?.weightInPound,
      userDetailData?.data?.heightInInches
    );
    setHealthData({
      heightInft: userDetailData?.data?.heightInft || 0,
      heightInInches: userDetailData?.data?.heightInInches || 0,
      weightInPound: userDetailData?.data?.weightInPound || 0,
      bmi: bmi || 0,
      isTobaccoUser: userDetailData?.data?.isTobaccoUser,
      isCPAPMachineUser: userDetailData?.data?.isCPAPMachineUser,
      isDiabetes: userDetailData?.data?.isDiabetes,
      medicationsManageing: userDetailData?.data?.medicationsManageing,
      isOxygen: userDetailData?.data?.isOxygen,
      isMarried: userDetailData?.data?.isMarried,
    });
  }, [userDetailData]);
  return (
    <>
      <div className="health-details-wrap">
        <div className="row">
          <div className="col-lg-7 col-md-12">
            <PyshicalDetails1
              healthData={healthData}
              setHealthData={setHealthData}
            />
            <PyshicalDetails2
              healthData={healthData}
              setHealthData={setHealthData}
            />
            <Button
              className="form-Save btn w-100 flex-grow-1 rs-btn rs-btn-default"
              onClick={(e) => hundleSubmit(e)}
            >
              Save
            </Button>
          </div>

          <div className="col-lg-5 col-md-12">
            <HealthIndex
              healthData={healthData}
              setHealthData={setHealthData}
              userDetailData={userDetailData}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthDetailsCtn;

{
  /* <div className="w-100">
              <svg
                height="39"
                fill="none"
                className="w-100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 15L579 15"
                  stroke="#EFF0F1"
                  stroke-width="10"
                  stroke-linecap="round"
                />
                <circle cx="79" cy="15" r="15" fill="#4F89C1" />
                <path
                  d="M78.134 37.5C78.5189 38.1667 79.4811 38.1667 79.866 37.5L86.7942 25.5C87.1791 24.8333 86.698 24 85.9282 24H72.0718C71.302 24 70.8209 24.8333 71.2058 25.5L78.134 37.5Z"
                  fill="#4F89C1"
                />
                <circle cx="221" cy="15" r="15" fill="#25AA49" />
                <path
                  d="M78.134 37.5C78.5189 38.1667 79.4811 38.1667 79.866 37.5L86.7942 25.5C87.1791 24.8333 86.698 24 85.9282 24H72.0718C71.302 24 70.8209 24.8333 71.2058 25.5L78.134 37.5Z"
                  fill="#4F89C1"
                />
                <circle cx="363" cy="15" r="15" fill="#CEAA29" />
                <circle cx="505" cy="15" r="15" fill="#E28E47" />
              </svg>
            </div> */
}
