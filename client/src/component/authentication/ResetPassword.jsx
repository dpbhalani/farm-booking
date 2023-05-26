import React, { useState } from "react";
import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { UserAuth } from "../../context/Authcontext";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const { resetPassword } = UserAuth();
  const navigate = useNavigate();
  const toast = useToast();
  const INTIAL_STATE = {
    email: "",
  };
  const [formdata, setFormdata] = useState(INTIAL_STATE);

  const chageHandler = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(formdata.email);
      toast({
        title: "Reset Password mail sended!",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      navigate("/login");
      setFormdata(INTIAL_STATE);
    } catch (err) {
      console.log(err.message);
      toast({
        title: err.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
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
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Forgot your password?
        </Heading>
        <Text
          fontSize={{ base: "sm", sm: "md" }}
          color={useColorModeValue("gray.800", "gray.400")}
        >
          You&apos;ll get an email with a reset link
        </Text>
        <form onSubmit={submitHandler}>
          <FormControl id="email">
            <Input
              placeholder="your-email@example.com"
              name="email"
              type="email"
              onChange={chageHandler}
              value={formdata.email}
              _placeholder={{ color: "gray.500" }}
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              type="submit"
              bg={"gray.800"}
              color={"white"}
              _hover={{
                bg: "gray.500",
              }}
            >
              Request Reset
            </Button>
          </Stack>
        </form>
      </Stack>
    </Flex>
  );
};

export default ForgotPassword;
