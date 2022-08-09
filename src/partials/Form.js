import React from "react";

export const Form = (props) => {
  const { inputs } = props;
  return (
    <form className="flex flex-col justify-center items-center space-y-4 mb-8 w-full">
      {inputs.map((input, i) => (
        <Input key={i} input={input} />
      ))}
    </form>
  );
};

const Input = (props) => {
  const { input } = props;
  const className = "rounded-md bg-dark-cornflower text-lg text-center h-8 outline-none " + input.className;
  return (
    <input
      className={className}
      type={input.type}
      name={input.name}
      placeholder={input.placeholder}
    />
  );
};
