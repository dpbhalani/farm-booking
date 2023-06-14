import { Button, Modal, ModalContent, ModalBody } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import App from "./chatBot";
import { useDisclosure } from "@chakra-ui/react";

const ChatBot = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "85%",
          left: "92%",
          zIndex: 250,
        }}
      >
        <Button
          style={{
            backgroundColor: "var(--chakra-colors-gray-400)",
            width: "100px",
            height: "100px",
            borderRadius: "100px",
          }}
          onClick={onOpen}
        >
          <ChatIcon
            style={{
              width: "40px",
              height: "40px",
            }}
          />
        </Button>
      </div>

      <Modal isOpen={isOpen} onClose={onClose} style={{}}>
        <ModalContent>
          <div
            style={{
              width: "fitContent",
              position: "fixed",
              top: "30%",
              left: "82%",
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
