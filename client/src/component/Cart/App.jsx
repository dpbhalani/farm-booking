import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { CartItem } from "./CartItem";
import { CartOrderSummary } from "./CartOrderSummary";
import { cartData } from "./_data";
import { Link as NavLink } from "react-router-dom";

const CartApp = () => (
  <Box
    maxW={{
      base: "3xl",
      lg: "7xl",
    }}
    mx="auto"
    px={{
      base: "4",
      md: "8",
      lg: "12",
    }}
    py={{
      base: "6",
      md: "8",
      lg: "12",
    }}
  >
    <Stack
      direction={{
        base: "column",
        lg: "row",
      }}
      align={{
        lg: "flex-start",
      }}
      spacing={{
        base: "8",
        md: "16",
      }}
    >
      <Stack
        spacing={{
          base: "8",
          md: "10",
        }}
        flex="2"
      >
        <Heading fontSize="2xl" fontWeight="extrabold">
          Shopping Cart (3 items)
        </Heading>

        <Stack spacing="6">
          {cartData.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
      </Stack>

      <Flex direction="column" align="center" flex="1">
        <CartOrderSummary />
        <HStack mt="6" fontWeight="semibold">
          <p>or</p>
          <Link
            color={mode("gray.500", "gray.200")}
            as={NavLink}
            to={"/explore-farm"}
          >
            Continue shopping
          </Link>
        </HStack>
      </Flex>
    </Stack>
  </Box>
);

export default CartApp;
