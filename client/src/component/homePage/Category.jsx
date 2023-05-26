import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Skeleton,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const Category = () => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{
      base: "0",
      lg: "12",
    }}
    py={{
      base: "0",
      lg: "12",
    }}
  >
    <Stack
      direction={{
        base: "column-reverse",
        lg: "row",
      }}
      spacing={{
        base: "0",
        lg: "20",
      }}
    >
      <Box
        width={{
          lg: "sm",
        }}
        transform={{
          base: "translateY(-50%)",
          lg: "none",
        }}
        bg={{
          base: useColorModeValue("red.50", "gray.700"),
          lg: "transparent",
        }}
        mx={{
          base: "6",
          md: "8",
          lg: "0",
        }}
        px={{
          base: "6",
          md: "8",
          lg: "0",
        }}
        py={{
          base: "6",
          md: "8",
          lg: "12",
        }}
      >
        <Stack
          spacing={{
            base: "8",
            lg: "10",
          }}
        >
          <Stack
            spacing={{
              base: "2",
              lg: "4",
            }}
          >
            <Heading size="xl">Enjoy Your Life</Heading>
            <Heading size="md" fontWeight="normal">
              Enjoy your Summer with our best Farm..
            </Heading>
          </Stack>
          <HStack spacing="3">
            <Link fontWeight="bold" fontSize="lg">
              Explore now
            </Link>
            <Icon as={FaArrowRight} />
          </HStack>
        </Stack>
      </Box>
      <Flex flex="1" overflow="hidden">
        <Image
          src="https://images.pexels.com/photos/279857/pexels-photo-279857.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Lovely Image"
          fallback={<Skeleton />}
          maxH="450px"
          minW="300px"
          objectFit="cover"
          flex="1"
        />
        <Image
          display={{
            base: "none",
            sm: "initial",
          }}
          src="https://images.pexels.com/photos/1755925/pexels-photo-1755925.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Lovely Image"
          fallback={<Skeleton />}
          maxH="450px"
          objectFit="cover"
        />
      </Flex>
    </Stack>
  </Box>
);

export default Category;
