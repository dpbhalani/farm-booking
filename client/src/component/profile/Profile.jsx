import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Avatar,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";

const UserProfile = () => {
  const INTIAL_STATE = {
    name: "",
    email: "",
    password: "",
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

  const cancelHandler = (e) => {
    e.preventDefault();
    console.log(formdata);
    setFormdata(INTIAL_STATE);
  };

  return (
    <form onSubmit={submitHandler}>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
            Edit Your Profile
          </Heading>
          <FormControl id="userName">
            <FormLabel>Your Profile</FormLabel>
            <Stack direction={["column", "row"]} spacing={6}>
              <Center>
                <Avatar size="xl" src="https://bit.ly/sage-adebayo"></Avatar>
              </Center>
              <Center w="full">
                <Button w="full">Change Profile</Button>
              </Center>
            </Stack>
          </FormControl>
          <FormControl id="userName" isRequired>
            <FormLabel>User name</FormLabel>
            <Input
              placeholder="UserName"
              name="name"
              onChange={chageHandler}
              value={formdata.name}
              _placeholder={{ color: "gray.500" }}
              type="text"
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: "gray.500" }}
              type="email"
              name="email"
              onChange={chageHandler}
              value={formdata.email}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="password"
              _placeholder={{ color: "gray.500" }}
              type="password"
              name="password"
              onChange={chageHandler}
              value={formdata.password}
            />
          </FormControl>
          <Stack spacing={6} direction={["column", "row"]}>
            <Button
              //   type="submit"
              onClick={cancelHandler}
              bg={"gray.800"}
              color={"white"}
              w="full"
              _hover={{
                bg: "gray.500",
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              bg={"gray"}
              color={"white"}
              w="full"
              _hover={{
                bg: "gray.500",
              }}
            >
              Update
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </form>
  );
};

export default UserProfile;
