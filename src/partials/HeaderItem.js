import React from "react";

export const HeaderItem = (props) => {
  return (
    <li>
      <a className='text-cyan' href={props.navItem.slug}>{props.navItem.name}</a>
    </li>
  );
};
