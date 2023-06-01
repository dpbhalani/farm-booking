import React from "react";
import UserProfile from "../profile/Profile";
import Contact from "../authentication/ContactUs";
import StarterPage from "./StartPage";
import Category from "./Category";
import FarmViewApp from "../productGrid/App";

const Home = () => {
  return (
    <>
      <StarterPage />
      <Category />
      <FarmViewApp />
      <Contact />
      <UserProfile />
    </>
  );
};

export default Home;
