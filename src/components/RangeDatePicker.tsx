import { DatePicker, Space } from "antd";
import React from "react";
import moment from "moment";

import { AutoSelectDatesPanel } from "./AutoSelectDatesPanel";

const { RangePicker } = DatePicker;

interface RangeDatePickerProps {
  datesProp?: Date[];
  setDates?: Function;
}

export const RangeDatePicker: React.FC<RangeDatePickerProps> = ({
  datesProp = [new Date(), new Date()],
  setDates = () => {},
}) => {
  const handleDates = (datesInput: any) =>
    datesInput.map((date: any) => date._d);

  return (
    <Space direction="vertical" size={12}>
      <RangePicker
        defaultValue={[moment(datesProp[0]), moment(datesProp[1])]}
        onChange={(datesInput) => setDates(handleDates(datesInput))}
        bordered={false}
        panelRender={(panelNode) => (
          <div id="test" className="flex justify-center items-start rounded-md">
            <AutoSelectDatesPanel />
            {panelNode}
          </div>
        )}
      />
    </Space>
  );
};
