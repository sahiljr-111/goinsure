import React from "react";
import { Avatar, Tag, TagPicker } from "rsuite";

const firstNames = ["John", "Jane", "Alice", "Bob"].map((res) => ({
  label: res,
  value: res,
}));

const renderMenuItem = (label, item) => {
  return (
    <div className="d-flex align-items-center gap-2">
      <Avatar size="xs" className="rounded-circle" />
      <span>{label}</span>
    </div>
  );
};

const renderValue = (values, items, tags) => {
  return values.map((tag, index) => (
    <Tag    
      key={index}
      // closable
      className="py-0 taskCreationTag"
      size="lg"
    >
      <Avatar size="xs" className="rounded-circle" /> {tag}
    </Tag>
  ));
};

const CustomTagPicker = () => {
  return (
    <TagPicker
      cleanable={false}
      data={firstNames}
      type="text"
      placeholder="Enter Carrier URL"
      id="firstName"
      className="border w-100"
      name="firstName"
      renderMenuItem={renderMenuItem}
      renderValue={renderValue}
    />
  );
};

export default CustomTagPicker;
