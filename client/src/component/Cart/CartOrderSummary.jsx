import React from "react";
import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { formatPrice } from "./PriceTag";
import { useToast } from "@chakra-ui/react";
import { Link as NavLink, useNavigate } from "react-router-dom";

const OrderSummaryItem = (props) => {
  const { label, value, children } = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

function BasicUsage() {
  const INTIAL_STATE = {
    coupen: "",
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formdata, setFormdata] = React.useState(INTIAL_STATE);

  const navigate = useNavigate();
  const toast = useToast();

  const chageHandler = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      onClose();
      setFormdata(INTIAL_STATE);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <OrderSummaryItem>
        <Link textDecor="underline" onClick={onOpen}>
          Add coupon code
        </Link>
      </OrderSummaryItem>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
                Apply Your Coupen Here!!
              </Heading>
              <Text
                fontSize={{ base: "sm", sm: "md" }}
                color={useColorModeValue("gray.800", "gray.400")}
              >
                You&apos;ll get an email with a coupen status
              </Text>
              <form onSubmit={submitHandler}>
                <FormControl id="coupen">
                  <Input
                    placeholder="A8D5GkDRbcS48dFG"
                    name="coupen"
                    type="text"
                    onChange={chageHandler}
                    value={formdata.coupen}
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
                    style={{ marginTop: "3%" }}
                  >
                    Apply Coupen
                  </Button>
                </Stack>
              </form>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="gray"
              mr={3}
              onClick={onClose}
              style={{ marginLeft: "5%" }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export const CartOrderSummary = () => {
  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Order Summary</Heading>
      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal" value={formatPrice(597)} />
        <OrderSummaryItem label="Shipping + Tax">
          <Link href="#" textDecor="underline">
            Calculate shipping
          </Link>
        </OrderSummaryItem>
        <OrderSummaryItem label="Apply Your Coupon Here">
          <BasicUsage />
        </OrderSummaryItem>

        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {formatPrice(597)}
          </Text>
        </Flex>
      </Stack>
      <Button
        colorScheme="gray"
        size="lg"
        fontSize="md"
        as={NavLink}
        to={"/payment"}
        rightIcon={<FaArrowRight />}
      >
        Checkout
      </Button>
    </Stack>
  );
};
