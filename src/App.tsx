import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeMain from "./features/home/HomeMain";
import SignUp from "./features/signup/SignUp";
import Login from "./features/login/LoginMain";
import TermsAndConditions from "./features/terms-and-conditions/TermsAndConditions";
import CookiePolicy from "./features/cookie-policy/CookiePolicy";
import PrivacyPolicy from "./features/privacy-policy/PrivacyPolicy";
import Faqs from "./features/faqs/Faqs";
import AboutUs from "./features/about-us/AboutUs";
import ResetPassword from "./features/resetpassword/ResetPassword";
import ForgotPassword from "./features/forgotpassword/ForgotPassword";
import ScrollToTop from "./apputils/ScrollToTop";
import AdminWrapper from "./apputils/AdminWrapper";
import SuperAdminMain from "./features/admin/SuperAdminMain";
import ManageUsersMain from "./features/admin/manageusers/ManageUsersMain";
import CollectionMain from "./features/collection/CollectionMain";
import ProductMain from "./features/product/ProductMain";
import { useImageLoader } from "./apputils/AppHooks";
import WhatsappWidget from "./apputils/WhatsappWidget";
import CartMain from "./features/cart/CartMain";

function App() {
  const queryClient = new QueryClient();

  useImageLoader();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ScrollToTop />
          <WhatsappWidget />

          <Routes>
            <Route index={true} element={<HomeMain />} />
            <Route path={"/"} element={<HomeMain />} />
            <Route path={"/home"} element={<HomeMain />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/faq" element={<Faqs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/collection" element={<CollectionMain />} />
            <Route path="/product/:id" element={<ProductMain />} />
            <Route path="/cart" element={<CartMain />} />
            <Route element={<AdminWrapper />}>
              <Route path="/admin" element={<SuperAdminMain />} />
              <Route path="/admin/users" element={<ManageUsersMain />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
