import React from "react";

import "./app.css";
import { TextTrimmer } from "./components";

const App: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen overflow-hidden">
      <div
        className="w-[300px] mx-auto px-6 flex justify-center items-center"
        dir="rtl"
      >
        <TextTrimmer
          textInput="نحن نود شراء العديد من الادوات المنزلية والتًي ستساعدنا في الكثير من الأشياء"
          linesNumber={1}
        />
      </div>
    </div>
  );
};

export default App;
