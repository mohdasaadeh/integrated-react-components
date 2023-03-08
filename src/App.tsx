import React from "react";

import "./app.css";
import { Carousel } from "./components";

const App: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen overflow-hidden">
      <div className="w-full px-6 flex justify-center items-center">
        <Carousel />
      </div>
    </div>
  );
};

export default App;
