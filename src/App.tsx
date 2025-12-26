import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";



function App() {
  return (
    <>
      <div className="bg-[#101014] w-full h-screen flex justify-center ">
        <Navbar />
      </div>
      <div>
        <button onClick={() => {}} className="bg-blue-300">
          Discord
        </button>
      </div>
    </>
  );
}

export default App;
