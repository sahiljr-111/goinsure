import React from 'react';
import { DateRangePicker } from 'rsuite';

function DatePickerInput() {
    return (
        <>
            <label className='d-block text-start'>Call Back Date</label>
            <DateRangePicker />
        </>
    );
}

export default DatePickerInput;
