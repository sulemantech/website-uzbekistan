import { useState } from "react";
import Header from "./components/Header";
import Video from "./components/video";

function App() {
  return (
    <>
      <div className="font-SairaCondensed"><Header/></div>
      <div className="w-full flex justify-center items-center"><Video/></div>
    </>
  );
}

export default App;
