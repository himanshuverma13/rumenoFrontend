
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import Navbar from "../../Common/Navbar/index";
import Footer from "../../Common/Footer";
import ProductSidebar from "./productSidebar";
import Roadmap1 from "../../../assets/img/OurProduct/rumeno-roadmap.png";
import Roadmap3 from "../../../assets/img/roadmap_mobile.mp4";
import ResponsiveNavbar from "../../Common/Navbar/navMob";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { UserContext } from "../../Common/Modal/logusecont";
import axios from "axios";
import { Helmet } from "react-helmet";
import KeysWords from "../../Common/apiData/keyWords";
import Cookies from "js-cookie";


const Products = () => {
  const { setSizevalue, cartdata, UidData, cart, setCart, setiteamdata, iteamdata } = useContext(UserContext);
  const apiUrl = process.env.REACT_APP_API;
  //const getLocalPrevCarts = JSON.parse(localStorage.getItem("cart") ?? "[]");
  const getMidCookies = JSON.parse(localStorage.getItem("loginDetails") ?? "[]");

  var Value = '';

  // useEffect(() => {
  //   if (Array.isArray(getLocalPrevCarts)) {
  //     //setCart(getLocalPrevCarts);
  //   } else {
  //     setCart([]);
  //   }
  // }, [setCart]);
  useEffect(() => {
    Value = cart?.length;
    if (Value !== 0) {
      setSizevalue(Value)
    }
  }, [cart]);


  const handleClick = (item) => {

    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === parseInt(product.id)) {
        isPresent = true;
      }
    });
    if (isPresent) {
      toast.warn("Item is already added to your cart", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
      localStorage.setItem("cart", JSON.stringify([...cart, { id: item.id, amount: 1, price: item.priceText, img: item.img, name: item.name, uID: UidData }]));

    setCart([...cart, { id: item.id, amount: 1, price: item.priceText, img: item.img, name: item.name, uID: UidData }]);
    const itemdatra = { id: item.id, amount: 1, price: item.priceText, img: item.img, name: item.name, uID: UidData }
    setiteamdata(itemdatra)


    toast.success("Item is added to your cart", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  };


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" name="description" content="Support animal health naturally! Explore Rumeno's innovative veterinary products for all your pet's needs. Shop Now
" />
        <title>Rumeno Veterinary Products: Trusted by Vets, Loved by Pets
        </title>
        <link rel="canonical" href="https://www.rumeno.in/veterinary-products" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.rumeno.in/home"
              },{
                "@type": "ListItem",
                "position": 2,
                "name": "Veterinary products",
                "item": "https://www.rumeno.in/veterinary-products"
              }]
            }
          `}
        </script>
      </Helmet>
      <ul className="d-none">
        {KeysWords.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <a className="d-none" href="https://www.amazon.in/Sheep-Goat-Feed/b?ie=UTF8&node=28179044031"></a>
      <a className="d-none" href="https://www.amazon.in/goat-medicine/s?k=goat+medicine"></a>
      <a className="d-none" href="https://www.amazon.in/goat-farming-accessories/s?k=goat+farming+accessories"></a>
      <a className="d-none" href="https://www.amazon.in/cow-farm-equipment/s?k=cow+farm+equipment"></a>
      <a className="d-none" href="https://www.amazon.in/cow-feed/s?k=cow+feed"></a>
      <a className="d-none" href="https://www.amazon.in/cattle-medicine/s?k=cattle+medicine"></a>
      <a className="d-none" href="https://www.indiamart.com/shakyaworldtrade/goat-farming-equipment-and-accessories.html"></a>
      <a className="d-none" href="https://www.flipkart.com/search?q=goat%20feed&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"></a>
      <a className="d-none" href="https://www.flipkart.com/search?q=goat%20equipment&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off"></a>
      <a className="d-none" href="https://www.flipkart.com/search?q=cow%20equipment&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off"></a>
      <div className="desk-nav">
        <Navbar
          size={cart?.length}
        // carts={cart}
        // setCarts={setCart}
        // handleChange={handleChange}
        // item={item}
        // value={Value}
        // cookies={setCookie}
        />
      </div>
      <div className="mob-nav">
        <ResponsiveNavbar
          size={cart?.length}
        // cart={cart}
        // setCart={setCart}
        // handleChange={handleChange}
        />
      </div>
      {/* <div className="our-product-img">
        <img
          src={Roadmap1}
          alt="Loading"
          className="w-100  pt-5 vh-100 object-fit-fill"
        />
        <video
          autoPlay={true}
          loop={true}
          muted
          className="w-100  pt-5 vh-100 "
          src={Roadmap3}
        ></video>
      </div> */}
      <div className="container-fluid abt-sect pt-5 pb-3 overflow-hidden">
        <div className="d-flex justify-content-center pt-5">
          <div className="mx-2 pt-5">
            <div className="services-line-largeleft"></div>
            <div className="services-line-smallleft"></div>
          </div>
          <span className="label-title pt-5 text-center">Veterinary Products</span>
          <div className="mx-2 pt-5">
            <div className="services-line-largeright"></div>
            <div className="services-line-smallright"></div>
          </div>
        </div>
        <ProductSidebar handleClick={handleClick} />
      </div>
      <Footer />
    </>
  );
};

export default Products;