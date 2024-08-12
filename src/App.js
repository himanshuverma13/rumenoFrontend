import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import language from "./Component/language/index";
import Home from "./Component/Pages/Home/index";
import Services from "./Component/Pages/Service";
import ProductPage from "./Component/Pages/Products/index";
import ContactUs from "./Component/Pages/ContactUs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./Component/Common/Modal/logusecont";
import Transaction from "./Component/Pages/Transaction";
import TransactionDetail from "./Component/Pages/Transaction/transactiondetail";
import Error from "./Component/Common/404page/index";
import FrmAftLog from "./Component/Common/AnimalFeedbackForm/selectanimal";
import AnimalDetailTab from "./Component/Common/AnimalFeedbackForm/animaldetailtab";
import PrivacyPolicy from "./Component/Pages/privacyPolicy";
import Blog from "./Component/Pages/Blog";
import ServicesSecond from "./Component/Pages/Service/servicesecond";
import ServicesThird from "./Component/Pages/Service/servicethird";
import BlogContent from "./Component/Pages/Blog/blogContent";
import GoatCategoryPage from "./Component/Pages/Category/goatCategory";
import DogCategoryPage from "./Component/Pages/Category/dogCategory";
import CattleCategoryPage from "./Component/Pages/Category/cattleCategory";
import PoultryCategoryPage from "./Component/Pages/Category/poultryCategory";
import ProductDetail from "./Component/Common/Product/productDetail";
import ThankYouPage from "./Component/Common/thankyou";
import Cookies from "js-cookie";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    let isScrolling = false;

    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;

        setTimeout(() => {
          const header = document.getElementById("header");
          const topbar = document.getElementById("topbar");

          if (header && topbar) {
            const isHeaderScrolled = window.scrollY > 100;
            header.classList.toggle("header-scrolled", isHeaderScrolled);
            topbar.classList.toggle("topbar-scrolled", isHeaderScrolled);
          }

          isScrolling = false;
        }, 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const navbarlinksActive = () => {
      const position = window.scrollY + 200;
      const navbarlinks = document.querySelectorAll("#navbar .scrollto");

      navbarlinks.forEach((navbarlink) => {
        const sectionId = navbarlink.getAttribute("href").substring(1);
        const section = document.getElementById(sectionId);

        if (
          section &&
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          navbarlink.classList.add("active");
        } else {
          navbarlink.classList.remove("active");
        }
      });
    };
    window.scrollTo(0, 0);

    navbarlinksActive();
  }, [location]);

  const checkIfLogin = JSON.parse(
    localStorage.getItem("loginDetails") ?? "null"
  );

  return (
    <>
      <GoogleOAuthProvider clientId="195022670454-9mbfabatk139n9o0hcqcuej3ifv43p3n.apps.googleusercontent.com">
        <ToastContainer />

        <UserProvider>
          <Routes>
            <Route path="/" Component={language} />
            <Route path="/home" Component={Home} />
            <Route path="/veterinary-services" Component={Services} />
            <Route path="/goat-farming-consultant" Component={ServicesSecond} />
            <Route path="/dairy-consultant" Component={ServicesThird} />
            <Route path="/veterinary-products" Component={ProductPage} />
            <Route path="/veterinary-products/:name" Component={ProductPage} />
            <Route
              path="/veterinary-products/:name/:id"
              Component={ProductDetail}
            />
            <Route path="/contact-us" Component={ContactUs} />
            {checkIfLogin ? (
              <>
                <Route path="/transaction" Component={Transaction} />
                <Route path="/transdetail" Component={TransactionDetail} />
                <Route path="/frmaftlog" Component={FrmAftLog} />
                <Route path="/AnimalDetailTab" Component={AnimalDetailTab} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/home" />} />
            )}
            <Route path="/privacypolicy" Component={PrivacyPolicy} />
            <Route path="/blog" Component={Blog} />
            <Route path="/blog/:id" Component={BlogContent} />
            <Route
              path="/veterinary-products/goat-feed-supplements"
              Component={GoatCategoryPage}
            />
            <Route
              path="/veterinary-products/dog-feed-supplements"
              Component={DogCategoryPage}
            />
            <Route
              path="/veterinary-products/cattle-feed-supplements"
              Component={CattleCategoryPage}
            />
            <Route
              path="/veterinary-products/poultry-feed-supplements"
              Component={PoultryCategoryPage}
            />
            <Route path="/thankyoupage" Component={ThankYouPage} />
            <Route path="*" Component={Error} />
          </Routes>
        </UserProvider>
      </GoogleOAuthProvider>
    </>
  );
};

export default App;

//  camel case is used for naming conventions
// route is map with function name controllers
