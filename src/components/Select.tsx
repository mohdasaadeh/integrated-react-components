import { Select as AntdSelect } from "antd";
import React from "react";

const { Option } = AntdSelect;

interface SelectProps {
  options: string[];
  defaultValue: string;
  handleChange?: (value: string) => void;
  style?: { [key: string]: string | number };
}

export const Select: React.FC<SelectProps> = ({
  options,
  defaultValue,
  handleChange,
  style,
}) => {
  const renderOptions = () =>
    options.map((option) => (
      <Option key={option} value={option}>
        {option}
      </Option>
    ));

  return (
    <>
      <AntdSelect
        defaultValue={defaultValue}
        style={style}
        onChange={handleChange}
        bordered={false}
      >
        {renderOptions()}
      </AntdSelect>
    </>
  );
};
