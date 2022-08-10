import React from "react";

export const Divider = () => {
  return <hr className="w-full mt-4 mb-8 max-w-12 h-0.5 bg-cyan border-none" />;
};

export const ThreeDots = (props) => {
  return (
    <div className="flex space-y-1 flex-col">
      <div className="rounded-full h-2 w-2 bg-cyan"></div>
      <div className="rounded-full h-2 w-2 bg-cyan"></div>
      <div className="rounded-full h-2 w-2 bg-cyan"></div>
    </div>
  );
};
export const BackArrow = (props) => {
  return (
    <div className="pt-4 flex h-12 flex-col">
      <div className="rounded-full h-1.5 w-6 bg-cyan rotate-[-45deg]"></div>
      <div className="rounded-full h-1.5 w-6 bg-cyan translate-y-2 rotate-45"></div>
    </div>
  );
};
