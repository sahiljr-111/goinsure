import React from 'react';
import { InputGroup } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

const CommonTextarea = ({
    label,
    labelClass,
    wrapperClassName,
    placeholder,
    value,
    onChange,
    inputWrapperClassName,
    height = '460px',
    children,
    ...props
}) => {
    return (
        <div className={wrapperClassName}>
            {label && (
                <label style={{ minWidth: '90px' }} className={labelClass}>
                    {label}
                </label>
            )}
            <InputGroup className={inputWrapperClassName}>
                <textarea
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    style={{ height }}
                    className="form-control"
                    {...props}
                ></textarea>
            </InputGroup>
            {children}
        </div>
    );
};

export default CommonTextarea;
