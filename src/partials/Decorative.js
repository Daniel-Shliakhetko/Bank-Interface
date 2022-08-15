import React from "react";
import { Icon } from "./Icon";

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
export const IconButton = (props) => {
  const buttonClass = `rounded-full border-cyan border-8 p-4`;
  const { button } = props;
  const icon = button.icon;
  return (
    <div className="flex flex-col">
      <button
        className={buttonClass}
        onClick={button.onClick ? button.onClick : () => {}}
      >
        <Icon icon={icon.name} size={icon.size} color={icon.color} />
      </button>
      <span className="text-[#bbb] text-center mt-4">{button.label}</span>
    </div>
  );
};
