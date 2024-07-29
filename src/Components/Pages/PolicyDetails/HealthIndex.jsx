import React from "react";

const HealthIndex = () => {
  return (
    <>
      <div className="physical-details-wrap health-index-wrap">
        <div className="physical-title">
          <h3 className="m-0">Health Index</h3>
        </div>
        <div className="physical-form">
          <div className="customHealthBox d-flex justify-content-between align-items-center mb-0 px-2">
            <h5 className="mb-0">Underweight</h5>
            <p className="mb-0">BMI below 18.5</p>
          </div>
          <svg
            width="149"
            height="66"
            viewBox="0 0 149 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H131.954L148.448 32.6586L131.954 65.977H0L14.1851 32.6586L0 0Z"
              fill="#4F89C1"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default HealthIndex;
