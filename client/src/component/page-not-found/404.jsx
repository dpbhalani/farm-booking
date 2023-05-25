import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link as NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <Box textAlign="center" py={234} px={100} >
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, gray.400, gray.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} color={"gray.800"} mb={2}>
        Page Not Found
      </Text>
      <Text color={"gray.500"} mb={6}>
        The page you're looking for does not seem to exist
      </Text>

      <Button
         as={NavLink}
         to="/"
        // colorScheme=""
        bgGradient="linear(to-r, gray.400, gray.500, gray.600)"
        color="white"
        variant="solid"
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFound;
