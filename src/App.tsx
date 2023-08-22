import React, { useEffect } from "react";

import "./app.css";
import { Autocomplete } from "./components";

const App: React.FC = () => {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen overflow-hidden"
      onClick={() => console.log("test")}
    >
      <div
        className="w-[300px] h-[60px] mx-auto flex justify-center items-center text-[15px]"
        dir="rtl"
      >
        <Autocomplete
          id="autocomplete"
          options={[{ value: 1, label: "Mohammad" }]}
          label="Autocomplete"
          color="red"
        />
      </div>
    </div>
  );
};

export default App;
