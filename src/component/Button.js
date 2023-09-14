import React from "react";

const Button = ({ name }) => {
  return (
    <button className="rounded-lg bg-gray-200 p-1 px-2 m-2 ">{name}</button>
  );
};

export default Button;
