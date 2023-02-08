import React, { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";

interface ToggleProps {
  buttonColor?: string;
  onColor?: string;
  offColor?: string;
  width?: number;
  height?: number;
  buttonWidth?: number;
  buttonHeight?: number;
  isEnabledResponse?: boolean;
  onChange?: (value: boolean) => void;
  isEnabledDefault?: boolean;
  isLoading?: boolean;
}

export const Toggle: React.FC<ToggleProps> = ({
  buttonColor,
  onColor,
  offColor,
  width,
  height,
  buttonWidth,
  buttonHeight,
  isEnabledResponse,
  onChange,
  isEnabledDefault = true,
  isLoading = false,
}) => {
  const [isEnabledLocal, setIsEnabledLocal] = useState(isEnabledDefault);

  useEffect(() => {
    if (isEnabledResponse !== undefined) {
      if (isEnabledResponse !== isEnabledLocal && isLoading) {
        setIsEnabledLocal(isEnabledLocal);
      } else {
        setIsEnabledLocal(isEnabledResponse);
      }
    }
  }, [isEnabledResponse, isEnabledLocal, isLoading]);

  return (
    <Switch
      checked={isEnabledLocal}
      onChange={(value) => {
        setIsEnabledLocal(value);

        onChange && onChange(value);
      }}
      className={`relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
      style={{
        width: width || "74px",
        height: height || "38px",
        backgroundColor: isEnabledLocal
          ? onColor || "#34C759"
          : offColor || "#DDDDE1",
      }}
      dir="ltr"
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={`pointer-events-none inline-block transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
        style={{
          backgroundColor: buttonColor || "white",
          width: buttonWidth || "34px",
          height: buttonHeight || "34px",
          transform: isEnabledLocal
            ? `translateX(${
                width && buttonWidth ? width - buttonWidth - 4 : 36
              }px)`
            : "translateX(0)",
        }}
      />
    </Switch>
  );
};
