import React from "react";
import { toggleMenu } from "./utils/appSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-12 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          alt="hamburger"
        />
        <a href="/">
          <img
            className="h-12 mx-1"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
            alt="logo"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 rounded-l-full border outline-none border-gray-400 p-1 mt-2 mb-3"
          type="text"
        />
        <button className="border border-gray-400 rounded-r-full p-1 bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-10 rounded-full"
          src="https://mbassets.b-cdn.net/cdni/avtar-u/1678328911_044416400.jpg?w=500&q=50"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
