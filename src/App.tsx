import React from "react";

import "./app.css";
import { TextTrimmer } from "./components";

const App: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen overflow-hidden">
      <div
        className="w-[134px] mx-auto flex justify-center items-center text-[15px]"
        dir="rtl"
      >
        <TextTrimmer
          textInput="الرحمة في حياة الرسول صلى الله عليه وسلم"
          linesNumber={2}
        />
      </div>
    </div>
  );
};

export default App;
