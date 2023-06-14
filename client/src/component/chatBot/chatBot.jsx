import React from "react";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

const App = () => {
  const saveMessages = (messages, HTMLString) => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem("chat_messages"));
    return messages;
  };

  return (
    <div className="App">
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageHistory={loadMessages()}
        messageParser={MessageParser}
        saveMessages={saveMessages}
      />
    </div>
  );
};

export default App;
