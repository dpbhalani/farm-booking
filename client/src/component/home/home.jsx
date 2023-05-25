import React from "react";
import UserProfile from "../profile/profile";
import Contact from "../authentication/contactUs";
import StarterPage from "./firstPage";

const Home = () => {
  return (
    <>
      <StarterPage />
      <Contact />
      <UserProfile />
    </>
  );
};

export default Home;
