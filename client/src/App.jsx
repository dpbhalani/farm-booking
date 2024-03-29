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
import Pricing from "./component/pricing/price";
import FarmViewApp from "./component/dataShowCard/App";
import CartApp from "./component/Cart/App";
import ProductDetail from "./component/productDetail/productDetail";
import SiteDetailBar from "./component/siteDetail/siteDetailViewer";
import FarmAddForm from "./component/admin/adminForm/farmAdd";
import ChatBot from "./component/chatBot/ChatBoxModel";
import ChatDrawer from "./component/chatBot/chatDrawer";

// import FarmView from "./component/farm-ui/farmview";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <ChatBot />
      <ChatDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SingUp />} />
        <Route path="/login/forgot-pass" element={<ForgotPassword />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/explore-farm" element={<FarmViewApp />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/cart" element={<CartApp />} />
        <Route path="/payment" element={<Home />} />
        <Route path="/site-detail" element={<SiteDetailBar />} />
        <Route path="/admin-farm-add" element={<FarmAddForm />} />
        <Route
          path="/contact-us"
          element={
            <Protect>
              <Contact />
            </Protect>
          }
        />
        <Route path="/login/profile" element={<UserProfile />} />
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
