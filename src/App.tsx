import React from "react";

import "./app.css";
import { RangeDatePicker } from "./components";

const App: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-full flex justify-center items-center">
        <RangeDatePicker />
      </div>
    </div>
  );
};

export default App;
