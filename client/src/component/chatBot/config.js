// in config.js
// import { createChatBotMessage } from "react-chatbot-kit";
import { createChatBotMessage, createCustomMessage } from "react-chatbot-kit";
import CustomMessage from "./customMessage";
import DogPicture from "./DogPicture";

const botName = "Farm-Villa";

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],

  botName: botName,
  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
  state: {
    myCustomProperty: "Bikershorts",
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
};

export default config;
