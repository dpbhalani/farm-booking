import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import { useState } from "react";

const Contact = () => {
  const INTIAL_STATE = {
    name: "",
    email: "",
    message: "",
  };
  const [formdata, setFormdata] = useState(INTIAL_STATE);

  const chageHandler = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formdata);
    setFormdata(INTIAL_STATE);
  };
  return (
    <Container bg="" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="gray.800"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="250px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #E0E1E7" }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}
                      >
                        +91-9624127984
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="250px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #E0E1E7" }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}
                      >
                        farmvillhub@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="250px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #E0E1E7" }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
                      >
                        Surat, India
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "black" }}
                      icon={<MdFacebook size="28px" />}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "black" }}
                      icon={<BsGithub size="28px" />}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "black" }}
                      icon={<BsDiscord size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="gray.200" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <form onSubmit={submitHandler}>
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input
                              type="text"
                              name="name"
                              value={formdata.name}
                              onChange={chageHandler}
                              size="md"
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input
                              type="email"
                              name="email"
                              value={formdata.email}
                              onChange={chageHandler}
                              size="md"
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            name="message"
                            value={formdata.message}
                            onChange={chageHandler}
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            type="submit"
                            variant="solid"
                            bg="gray.800"
                            color="white"
                            _hover={{bg: "gray"}}
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </form>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Contact;
