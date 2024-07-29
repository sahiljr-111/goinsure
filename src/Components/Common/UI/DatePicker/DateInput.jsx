import React from "react";
import { DatePicker } from "rsuite";

const DateInput = ({ ...props }) => {
  return (
    <>
      <label className="d-block text-start">Call Back Date</label>
      <DatePicker {...props} />
    </>
  );
};

export default DateInput;
