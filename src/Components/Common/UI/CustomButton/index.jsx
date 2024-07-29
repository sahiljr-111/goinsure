// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button } from "rsuite";
import { Icon } from "iconsax-react"; // Import the Icon component from iconsax-react
import cs from "classnames";

// eslint-disable-next-line react/prop-types
const CustomButton = ({
  children,
  loading,
  disabled,
  className,
  isFullWidth,
  appearance,
  ...props
}) => {
  return (
    <Button
      disabled={loading || disabled}
      className={cs("btn position-relative", {
        ["w-100"]: isFullWidth,
        [className]: className
      })}
      appearance={appearance}
      {...props}
    >
      {loading && (
        <>
          <Icon name="loading" spin />
        </>
      )}
      {children}
    </Button>
  );
};

export default CustomButton;
