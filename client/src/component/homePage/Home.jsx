import React from "react";
import Contact from "../authentication/ContactUs";
import StarterPage from "./StartPage";
import Category from "./Category";
import FarmViewApp from "../dataShowCard/App";
import SiteDetailBar from "../siteDetail/siteDetailViewer";

const Home = () => {
  return (
    <>
      <StarterPage />
      <Category />
      <FarmViewApp />
      <SiteDetailBar />
      <Contact />
    </>
  );
};

export default Home;
