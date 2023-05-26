import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";
import Home from "./component/homePage/Home";
import Login from "./component/authentication/Login";
import SingUp from "./component/authentication/SignUp";
import ForgotPassword from "./component/authentication/ResetPassword";
import Contact from "./component/authentication/ContactUs";
import NotFound from "./component/page-not-found/404";
import UserProfile from "./component/profile/Profile";
import Protect from "./protectRoute/Protect";
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
        <Route
          path="/contact-us"
          element={
            <Protect>
              <Contact />
            </Protect>
          }
        />
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
