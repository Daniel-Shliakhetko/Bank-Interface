import React from "react";
import { AppTitle } from "./Titles";
import "../App.scss";

export const Loader = (props) => {
  return (
    <div className="bg-space-cadet fixed top-0 left-0 w-full h-screen flex justify-center items-center loading-screen z-50">
      <div className="flex justify-center items-center flex-col w-full lg:w-3/4 p-8">
        <AppTitle />
        <div className="bg-dark-cornflower h-2 w-full">
          <div className="bg-cyan h-full max-w-full progress-bar"></div>
        </div>
        <span className="uppercase text-center mt-4 loading">Loading</span>
      </div>
    </div>
  );
};
