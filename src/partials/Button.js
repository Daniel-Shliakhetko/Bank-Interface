import React from "react";

export const Button = (props) => {
  const { className, content, textColor, color, onClick, unactive } = props;
  const defaultClass =
    "rounded-md uppercase py-2 px-10 whitespace-nowrap bg-" + (color || "cyan") + " text-"+(textColor || "white")+" " + className;
  const classNameButton = unactive
    ? defaultClass + " opacity-60 cursor-default text-black"
    : defaultClass;

  return unactive ? (
    <button className={classNameButton} disabled>
      {content}
    </button>
  ) : (
    <button className={classNameButton} onClick={onClick}>
      {content}
    </button>
  );
};
