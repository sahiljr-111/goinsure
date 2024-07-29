import { ArrowForward } from 'iconsax-react';
import React from 'react';

function ReplayBtn(props) {
    return (
        <>
            <button className="btn" type="button">
                {props.btntext}  <ArrowForward color="#000" style={{padding: "3px" }}/>
            </button>
        </>
    );
}

export default ReplayBtn;
