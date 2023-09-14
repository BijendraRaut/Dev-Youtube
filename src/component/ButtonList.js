import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Coding",
  "Gadgets",
  "Gaming",
  "Programming",
  "Songs",
  "Live",
  "New to you",
  "Soccer",
  "Cricket",
  "Recently uploaded",
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
