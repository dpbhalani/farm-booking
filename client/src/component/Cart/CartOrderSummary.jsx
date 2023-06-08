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
import { Link as NavLink } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

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
  const toast = useToast();
  const INTIAL_STATE = {
    coupon: "",
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formdata, setFormdata] = React.useState(INTIAL_STATE);

  const chageHandler = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      onClose();
      setFormdata(INTIAL_STATE);
      toast({
        title: `Your Coupon ${formdata.coupon} is applied successfully!!`,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } catch (err) {
      onClose();
      toast({
        title: err.message,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
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
                Apply Your Coupon Here!!
              </Heading>
              <Text
                fontSize={{ base: "sm", sm: "md" }}
                color={useColorModeValue("gray.800", "gray.400")}
              >
                You&apos;ll get an email with a coupon status
              </Text>
              <form onSubmit={submitHandler}>
                <FormControl id="coupon">
                  <Input
                    placeholder="A8D5GkDRbcS48dFG"
                    name="coupon"
                    type="text"
                    onChange={chageHandler}
                    value={formdata.coupon}
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
                    Apply Coupon
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
