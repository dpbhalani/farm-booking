import React from "react";
import UserProfile from "../profile/Profile";
import Contact from "../authentication/ContactUs";
import StarterPage from "./StartPage";
import Category from "./Category";

const Home = () => {
  return (
    <>
      <StarterPage />
      <Category />
      <Contact />
      <UserProfile />
    </>
  );
};

export default Home;
