import React from "react";
import { UserAuth } from "../context/Authcontext";
import { Navigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const Protect = ({ children }) => {
  const { user } = UserAuth();
  const toast = useToast();

  if (!user) {
    toast({
        title: "You are not able to access this page first you have to login and after that you access this page",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default Protect;
