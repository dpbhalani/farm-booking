import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./component/layout/navbar";
import Footer from "./component/layout/footer";
import Home from "./component/home/home";
import Login from "./component/authentication/login";
import SingUp from "./component/authentication/signup";
import ForgotPassword from "./component/authentication/resetPassword";
import Contact from "./component/authentication/contactUs";
import NotFound from "./component/page-not-found/404";
import UserProfile from "./component/profile/profile";
// import FarmView from "./component/farm-ui/farmview";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SingUp />} />
        <Route path="/login/forgot-pass" element={<ForgotPassword />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/login/profile" element={<UserProfile />} />
        {/* <Route path="/farmiew" element={<FarmView />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {location.pathname !== "/login" &&
      location.pathname !== "/register" &&
      location.pathname !== "/login/forgot-pass" &&
      location.pathname !== "" ? (
        <Footer />
      ) : (
        ""
      )}
    </>
  );
}

export default App;
