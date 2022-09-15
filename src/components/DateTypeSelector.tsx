import React, { useRef } from "react";

interface DateTypeSelector {
  setDateType: Function;
}

export const DateTypeSelector: React.FC<DateTypeSelector> = ({
  setDateType,
}) => {
  const selectorRef = useRef<HTMLSelectElement>(null);

  const handleSelection = () => {
    if (selectorRef.current) {
      const selector = selectorRef.current;

      setDateType(selector.options[selector.selectedIndex].text);
    }
  };

  return (
    <div className="flex justify-end items-center">
      <select
        ref={selectorRef}
        onClick={() => handleSelection()}
        defaultValue="months"
      >
        <option value="days">Days</option>
        <option value="months">Months</option>
        <option value="years">Years</option>
      </select>
    </div>
  );
};
