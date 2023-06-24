import React from "react";
import { Button, Modal, ModalContent, ModalBody } from "@chakra-ui/react";
import { ChatIcon, CloseIcon } from "@chakra-ui/icons";
import App from "./chatBot";
import { useDisclosure } from "@chakra-ui/react";

const ChatBot = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: "0%",
          right: "0%",
          zIndex: 250,
        }}
      >
        <Button
          style={{
            backgroundColor: "var(--chakra-colors-gray-400)",
            width: "80px",
            height: "80px",
            borderRadius: "100px",
          }}
          onClick={onOpen}
        >
          {isOpen ? (
            <CloseIcon
              style={{
                width: "30px",
                height: "30px",
              }}
            />
          ) : (
            <ChatIcon
              style={{
                width: "40px",
                height: "40px",
              }}
            />
          )}
        </Button>
      </div>

      <Modal isOpen={isOpen} onClose={onClose} style={{}}>
        <ModalContent>
          <div
            style={{
              width: "fitContent",
              position: "fixed",
              right: "0%",
              bottom: "9%",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <ModalBody>
              <App />
            </ModalBody>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChatBot;
