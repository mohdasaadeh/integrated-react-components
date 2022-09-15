import React, { useState } from "react";

import { AreaChart, MyDatePicker, DateTypeSelector } from "./";

export const ChartWithPicker: React.FC = () => {
  const [dateType, setDateType] = useState<"Years" | "Months" | "Days">(
    "Months"
  );
  const [startingDate, setStartingDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="w-full overflow-hidden max-h-full">
      <div className="flex justify-end items-center">
        <div className="flex justify-center items-center">
          <p className="mr-2">Starting Date</p>
          <MyDatePicker date={startingDate} setDate={setStartingDate} />
        </div>
        <div className="flex justify-center items-center">
          <p className="mx-2">End Date</p>
          <MyDatePicker date={endDate} setDate={setEndDate} />
        </div>
      </div>
      <div className="mt-6">
        <DateTypeSelector setDateType={setDateType} />
      </div>
      <div className="mt-10">
        <AreaChart
          dateType={dateType}
          startingDate={startingDate}
          endDate={endDate}
        />
      </div>
    </div>
  );
};
