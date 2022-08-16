import "../App.scss";
import React from "react";

export const AppTitle = () => {
  return (
    <h1 className="uppercase text-6xl text-cyan text-center py-12">m-bank</h1>
  );
};

export const SectionTitle = (props) => {
  const { className } = props;
  const titleClass = "uppercase text-lg text-cyan py-4 " + className;
  return <h2 className={titleClass}>{props.content}</h2>;
};
