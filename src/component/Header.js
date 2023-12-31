import React, { useEffect, useState } from "react";
import { toggleMenu } from "./utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SUGGESTIONS_API_ } from "./utils/constants";
import { cacheResults } from "./utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SUGGESTIONS_API_ + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  // Function to handle suggestion click
  const handleSuggestionClick = (clickedSuggestion) => {
    setSearchQuery(clickedSuggestion);
    setShowSuggestion(false); // Close the suggestion dropdown
    // You can now perform a search or any other action here with the clicked suggestion.
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
        <div>
          <input
            className="w-1/2 rounded-l-full border outline-none border-gray-400 p-1 mt-2 mb-3"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border border-gray-400 rounded-r-full p-1 bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestion && (
          <div className="absolute shadow-lg border-gray-500 w-96 rounded-r-lg px-5 py-2 bg-white border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="py-2 shadow-sm hover:bg-gray-100"
                  onClick={() => handleSuggestionClick(s)} // Add click handler to each suggestion
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
