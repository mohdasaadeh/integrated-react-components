import React from "react";
import type { MenuProps } from "antd";

import "./app.css";
import { Dropdown, Select, Table } from "./components";

const App: React.FC = () => {
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    console.log("click", e);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const columnHeaders = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const rows = [
    {
      header: "New",
      data: ["closed", "open", "closed", "open", "closed", "open"],
    },
    {
      header: "Subscriptions",
      data: ["closed", "open", "closed", "open", "closed", "open"],
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="border rounded-md shadow-sm my-4">
        <Dropdown
          items={[
            {
              label: "1st menu item",
              key: "1",
            },
            {
              label: "2nd menu item",
              key: "2",
            },
          ]}
          handleMenuClick={handleMenuClick}
          buttonType="text"
          buttonTextStyle="text-green-900 font-bold"
        />
      </div>
      <div className="border rounded-sm shadow-sm my-4">
        <Select
          options={["Days", "Months", "Years"]}
          defaultValue="Days"
          handleChange={handleChange}
          style={{ width: 120 }}
        />
      </div>
      <div className="w-full">
        <Table columnHeaders={columnHeaders} rows={rows} />
      </div>
    </div>
  );
};

export default App;
