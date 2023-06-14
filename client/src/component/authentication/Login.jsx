import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { Link as NavLink, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/Authcontext";
import ReCapcha from "./reCapcha";

const Login = () => {
  const { signIn } = UserAuth();
  const navigate = useNavigate();
  const toast = useToast();
  const INTIAL_STATE = {
    email: "",
    password: "",
  };
  const [formdata, setFormdata] = useState(INTIAL_STATE);

  const chageHandler = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await signIn(formdata.email, formdata.password);
      toast({
        title: "Login successfully done!",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      navigate("/");
      setFormdata(INTIAL_STATE);
    } catch (err) {
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
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool{" "}
            <Link color={"blue.400"}>booking-features</Link>
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={submitHandler}>
            <Stack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formdata.email}
                  onChange={chageHandler}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={formdata.password}
                  onChange={chageHandler}
                />
              </FormControl>
              <ReCapcha isRequired />
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"} as={NavLink} to="forgot-pass">
                    Forgot password?
                  </Link>
                </Stack>
                <Button
                  type="submit"
                  bg={"gray.800"}
                  color={"white"}
                  _hover={{
                    bg: "gray.500",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
