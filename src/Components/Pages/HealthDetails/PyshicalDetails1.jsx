import React, { useEffect } from "react";
import { Input, SelectPicker } from "rsuite";
const calculateBMI = (weight, heightInInches) => {
  if (heightInInches === 0) return 0;
  return (weight / (heightInInches * heightInInches)) * 703;
};
const PyshicalDetails1 = ({ healthData, setHealthData }) => {
  const convertFtToInches = (feet) => feet * 12;
  const convertInchesToFt = (inches) => inches / 12;
  useEffect(() => {
    const bmi = calculateBMI(
      healthData.weightInPound,
      healthData.heightInInches
    );
    setHealthData((prevData) => ({ ...prevData, bmi }));
  }, [
    healthData.weightInPound,
    healthData.heightInInches,
    healthData.heightInft,
  ]);
  return (
    <>
      <div className="physical-details-wrap">
        <div className="physical-title">
          <h3 className="m-0">Physical details</h3>
        </div>
        <div className="physical-form">
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">Height in Feet </label>
                  <Input
                    id="heightInft"
                    name="heightInft"
                    placeholder="Enter Height in feet"
                    value={healthData?.heightInft}
                    onChange={(value) => {
                      const heightInInches = convertFtToInches(value);
                      setHealthData({
                        ...healthData,
                        heightInft: value,
                        heightInInches: heightInInches.toFixed(2),
                      });
                      // setHealthData({ ...healthData, heightInft: value });
                    }}
                  />
                  {/* <SelectPicker
                    className="select-toggle-in"
                    id="height_feet"
                    data={data}
                    searchable={false}
                    placeholder="7"
                  /> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">Height in inches </label>
                  <Input
                    id="heightInInches"
                    type="number"
                    name="heightInInches"
                    placeholder="Enter Height in feet"
                    value={healthData?.heightInInches}
                    onChange={(value) => {
                      const heightInft = convertInchesToFt(value);
                      setHealthData({
                        ...healthData,
                        heightInft: heightInft.toFixed(2),
                        heightInInches: value,
                      });
                      // setHealthData({ ...healthData, heightInInches: value });
                    }}
                  />
                  {/* <SelectPicker
                    className="select-toggle-in"
                    id="height_inches"
                    data={data}
                    searchable={false}
                    placeholder="7"
                  /> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">Weight in pounds </label>
                  <Input
                    className="form-control"
                    type="number"
                    name="weightInPound"
                    id="weightInPound"
                    placeholder="Enter Weight in pounds"
                    value={healthData?.weightInPound}
                    onChange={(value) => {
                      setHealthData({ ...healthData, weightInPound: value });
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">
                    BMI<span>(Normal Weight)</span>
                  </label>
                  <Input
                    className="form-control"
                    type="number"
                    name="bmi"
                    id="bmi"
                    value={healthData?.bmi.toFixed(2)}
                    // disabled
                    readOnly
                    placeholder="18.7"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PyshicalDetails1;
