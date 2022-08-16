import React from "react";
import { AppTitle } from "../partials/Titles";
import { Divider } from "../partials/Decorative";
import { Button } from "../partials/Button";
import { useNavigate } from "react-router-dom";
import { Icon } from "../partials/Icon";
import { Form } from "../partials/Form";

const inputs = [
  {
    name: "email",
    placeholder: "Email",
    type: "email",
    className: "w-full md:w-1/2",
  },
  {
    name: "password",
    placeholder: "Password",
    type: "password",
    className: "w-full md:w-1/2",
  },
];

export const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="px-12 w-full">
      <AppTitle />
      <Divider />
      <Form inputs={inputs} />
      <div className="flex justify-between items-center mb-6">
        <Icon icon="loop" size="4rem" color="cyan" />
        <Button
          className="w-1/2"
          content="Sign In"
          color="cyan"
          onClick={() => {
            alert("Successfully Signed In");
            navigate("/");
          }}
          unactive={false}
        />
        <Icon icon="gear" size="4rem" color="cyan" />
      </div>
      <Button
        className="w-full"
        content="create an account"
        color="dark-cornflower"
      />
    </div>
  );
};
