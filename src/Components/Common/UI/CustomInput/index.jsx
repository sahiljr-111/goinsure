import { SearchNormal1 } from "iconsax-react";
import { Input, InputGroup } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const CommonInput = ({
  label,
  labelClass,
  wrapperClassName,
  placeholder,
  value,
  onChange,
  children,
  inputWrapperClassName,
  ...props
}) => {
  return (
    <div className={wrapperClassName}>
      {label && (
        <label style={{ minWidth: "90px" }} className={labelClass}>
          {label}
        </label>
      )}
      <InputGroup className={inputWrapperClassName}>
        <SearchNormal1 size="25" className="search-input-icon d-none" color="#667085" />
        <Input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...props}
        />
        <img className="d-none me-2 microphone" src="../../../../../public/Images/microphone.svg" alt="" />
      </InputGroup>
      {children}
    </div>
  );
};

export default CommonInput;
