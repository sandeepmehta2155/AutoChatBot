import React, { useContext } from "react";
import ChatBot from "bongga-react-simple-chatbot";
import { chatBotContext } from "./Bot";

const Container = () => {
  const steps = useContext(chatBotContext);

  return (
    <div className="Container">
      <ChatBot
        headerTitle="Bot by Sandeep"
        speechSynthesis={{ enable: true, lang: "en" }}
        steps={steps}
      />
    </div>
  );
};

export default Container;
