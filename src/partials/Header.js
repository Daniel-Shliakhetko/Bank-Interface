import React from "react";
import { useState, useEffect } from "react";
import { HeaderItem } from "./HeaderItem";
import { navItems } from "../data/navigation";
import useWindowSize from "../hooks/useWindowSize";

export const Header = () => {
  const defaultUlClasses =
    "flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 duration-500";
  const showedUlClasses = defaultUlClasses + " ";
  const hiddenUlClasses = defaultUlClasses + " absolute translate-y-[-20em]";
  const [ulClasses, changeHeader] = useState(showedUlClasses);
  const [lastSize, changeLastSize] = useState(0);

  const size = useWindowSize();

  const toggleHeader = () =>
    ulClasses !== showedUlClasses
      ? changeHeader(showedUlClasses)
      : changeHeader(hiddenUlClasses);

  useEffect(() => {
    if (lastSize !== size) {
      changeLastSize(size);
      size.width < 768
        ? changeHeader(hiddenUlClasses)
        : changeHeader(showedUlClasses);
    }
  }, [lastSize, size, hiddenUlClasses, showedUlClasses]);


  return (
    <div className="w-full px-8 pr-16 py-4 flex flex-col md:flex-row md:space-x-12 space-y-4 md:space-y-0 duration-500">
      <a href="/">Banking App</a>
      <ul className={ulClasses}>
        {navItems.map((navItem) => (
          <HeaderItem navItem={navItem} />
        ))}
      </ul>
      <button
        className="absolute top-2 right-8 block md:hidden"
        onClick={toggleHeader}
      >
        <div className="relative bg-white w-8 h-[3px] after:content-[''] after:absolute after:top-0 after:left-0 after:bg-white after:w-8 after:h-[3px] after:translate-y-[0.625rem] before:content-[''] before:absolute before:top-0 before:left-0 before:bg-white before:w-8 before:h-[3px] before:translate-y-[-0.625rem]"></div>
      </button>
    </div>
  );
};
