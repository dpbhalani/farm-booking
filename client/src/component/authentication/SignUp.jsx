import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link as NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/Authcontext";
import ReCapcha from "./reCapcha";

const SingUp = () => {
  const navigate = useNavigate();
  const { createUser } = UserAuth();
  const toast = useToast();
  const INTIAL_STATE = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [showPassword, setShowPassword] = useState(false);
  const [conShowPassword, setConShowPassword] = useState(false);
  const [formdata, setFormdata] = useState(INTIAL_STATE);

  const chageHandler = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (formdata.password === formdata.confirmPassword) {
        await createUser(formdata.email, formdata.password);
        toast({
          title: "User registration successfully done!",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        navigate("/");
        setFormdata(INTIAL_STATE);
      } else {
        toast({
          title: "Passwords do not match",
          status: "warning",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      }
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
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up for your credentials
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool booking-features
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <form onSubmit={submitHandler}>
              <HStack>
                <Box>
                  <FormControl id="firstName">
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      name="firstname"
                      value={formdata.firstname}
                      onChange={chageHandler}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type="text"
                      name="lastname"
                      value={formdata.lastname}
                      onChange={chageHandler}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formdata.email}
                  onChange={chageHandler}
                  isRequired
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formdata.password}
                    onChange={chageHandler}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="confirmPassword" isRequired>
                <FormLabel>Confirm-Password</FormLabel>
                <InputGroup>
                  <Input
                    type={conShowPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formdata.confirmPassword}
                    onChange={chageHandler}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setConShowPassword(
                          (conShowPassword) => !conShowPassword
                        )
                      }
                    >
                      {conShowPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <ReCapcha />
                <Button
                  type="submit"
                  //   loadingText="Submitting"
                  size="lg"
                  bg={"gray.800"}
                  color={"white"}
                  _hover={{
                    bg: "gray",
                  }}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link color={"blue.400"} as={NavLink} to="/login">
                    Login
                  </Link>
                </Text>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SingUp;
