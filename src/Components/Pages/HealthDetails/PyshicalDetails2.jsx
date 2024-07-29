import React from "react";
import { SelectPicker } from "rsuite";
const data = [
  { label: "Yes", value: true },
  { label: "No", value: false },
].map((item) => ({ label: item.label, value: item.value }));
const data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => ({
  label: item,
  value: item,
}));
const PyshicalDetails2 = ({ healthData, setHealthData }) => {
  return (
    <>
      <div className="physical-details-wrap mt-4 other-details-wrap">
        <div className="physical-title">
          <h3 className="m-0">Physical details</h3>
        </div>
        <div className="physical-form">
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">
                    Have you used tobacco in last 2 yrs?{" "}
                  </label>
                  <SelectPicker
                    className="select-toggle-in"
                    id="tobacco"
                    data={data}
                    searchable={false}
                    placeholder="Select any"
                    value={healthData.isTobaccoUser}
                    onChange={(value) => {
                      setHealthData({ ...healthData, isTobaccoUser: value });
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">
                    Do you use a CPAP machine?
                  </label>
                  <SelectPicker
                    className="select-toggle-in"
                    id="CPAP_machine"
                    data={data}
                    searchable={false}
                    placeholder="Select any"
                    value={healthData.isCPAPMachineUser}
                    onChange={(value) => {
                      setHealthData({
                        ...healthData,
                        isCPAPMachineUser: value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">Do you have Diabetes? </label>
                  <SelectPicker
                    className="select-toggle-in"
                    id="diabetes"
                    data={data}
                    searchable={false}
                    placeholder="Select any"
                    value={healthData.isDiabetes}
                    onChange={(value) => {
                      setHealthData({
                        ...healthData,
                        isDiabetes: value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">Are you on Oxygen?</label>
                  <SelectPicker
                    className="select-toggle-in"
                    id="oxygen"
                    data={data}
                    searchable={false}
                    placeholder="Select any"
                    value={healthData.isOxygen}
                    onChange={(value) => {
                      setHealthData({
                        ...healthData,
                        isOxygen: value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">
                    How many medications are you managing?
                  </label>
                  <SelectPicker
                    className="select-toggle-in"
                    id="medications"
                    data={data1}
                    searchable={false}
                    placeholder="Select any"
                    value={healthData.medicationsManageing}
                    onChange={(value) => {
                      setHealthData({
                        ...healthData,
                        medicationsManageing: value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">
                    Are you Married or have a Caretaker ?
                  </label>
                  <SelectPicker
                    className="select-toggle-in"
                    id="caretaker"
                    data={data}
                    searchable={false}
                    placeholder="Select any"
                    value={healthData.isMarried}
                    onChange={(value) => {
                      setHealthData({
                        ...healthData,
                        isMarried: value,
                      });
                    }}
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

export default PyshicalDetails2;
