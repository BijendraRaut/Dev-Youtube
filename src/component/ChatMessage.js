import React from "react";

const ChatMessage = ({ name, comment }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-10 rounded-full"
        src="https://mbassets.b-cdn.net/cdni/avtar-u/1678328911_044416400.jpg?w=500&q=50"
        alt="user"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{comment}</span>
    </div>
  );
};

export default ChatMessage;
