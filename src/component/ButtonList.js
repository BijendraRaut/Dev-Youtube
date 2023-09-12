import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "News",
  "Space",
];
const ButtonList = () => {
  return (
    <div>
      {list.map((item, index) => (
        <Button name={item} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
