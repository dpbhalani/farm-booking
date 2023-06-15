
import { createChatBotMessage } from "react-chatbot-kit";
import { DogPicture, LaptopPicture } from "./DogPicture";

const botName = "Farm-Villa";

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName} Agent, How can i help you!`)],

  botName: botName,
  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPicture {...props} />,
    },
    {
      widgetName: "laptopPicture",
      widgetFunc: (props) => <LaptopPicture {...props} />,
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
