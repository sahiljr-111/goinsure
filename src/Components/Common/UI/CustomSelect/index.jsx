import { Filter, Setting2 } from "iconsax-react";
import { InputGroup, SelectPicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const CommonSelect = ({
  label,
  labelClass,
  wrapperClassName,
  placeholder,
  value,
  onChange,
  options,
  inputWrapperClassName,
  searchable,
  children,
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
        {/* Add Select component for the dropdown */}
        <Setting2 size="25" className="setting-icons d-none" color="#667085"/>
        <Filter size="25" className="filter-icons d-none ms-2"  color="#7A8499" variant="Outline" /> 
        <SelectPicker
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          searchable={searchable}
          data={options} // Pass options to the Select component
          {...props}
        />
      </InputGroup>
      {children}
    </div>
  );
};

export default CommonSelect;
