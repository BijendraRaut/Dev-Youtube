import React from "react";
import ChatMessage from "./ChatMessage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./utils/chatSlice";
import { generateRandomNames, generateString } from "./utils/helper";
import { useState } from "react";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: generateString(15) + " 🔥",
        })
      );
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div className="ml-2 h-[600px] p-2 w-full border border-black bg-slate-100 rounded-lg  overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((s, i) => (
          <ChatMessage key={i} name={s.name} comment={s.message} />
        ))}
      </div>
      <form
        className="ml-2 p-2 w-full border border-black rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Bijendra Raut",
              message: liveMessage,
            })
          );
          setLiveMessage("");
          console.log(liveMessage);
        }}
      >
        <input
          className="w-72 px-2"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-slate-200">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
