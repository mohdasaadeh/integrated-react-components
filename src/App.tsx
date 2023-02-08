import React from "react";

import "./app.css";
import { Toggle } from "./components";

const App: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-full flex justify-center items-center">
        <Toggle isEnabledDefault={true} />
      </div>
    </div>
  );
};

export default App;
