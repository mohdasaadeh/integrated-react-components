import { MdKeyboardArrowDown } from "react-icons/md";
import type { MenuProps } from "antd";
import { Button, Dropdown as AntdDropdown, Menu, Space } from "antd";
import React from "react";

interface DropdownProps {
  items: { label: string; key: string }[];
  handleMenuClick?: MenuProps["onClick"];
  buttonType?:
    | "link"
    | "text"
    | "ghost"
    | "default"
    | "primary"
    | "dashed"
    | undefined;
  buttonTextStyle?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  items,
  handleMenuClick,
  buttonType = "default",
  buttonTextStyle,
}) => {
  const menu = <Menu onClick={handleMenuClick} items={items} />;

  return (
    <Space wrap>
      <AntdDropdown overlay={menu}>
        <Button type={buttonType}>
          <Space>
            <div className={buttonTextStyle}>Button</div>
            <MdKeyboardArrowDown />
          </Space>
        </Button>
      </AntdDropdown>
    </Space>
  );
};
