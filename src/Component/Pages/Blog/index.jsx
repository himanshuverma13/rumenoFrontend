import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Common/Navbar";
import Footer from "../../Common/Footer";
import { Link } from "react-router-dom";
import moment from "moment";
import ResponsiveNavbar from "../../Common/Navbar/navMob";
import { Helmet } from "react-helmet";
import { UserContext } from "../../Common/Modal/logusecont";
import blgimg1 from "../../../assets/img/OurProduct/GreenHouseMat2.jpg";
import blgimg2 from "../../../assets/img/OurProduct/farm-floor.jpg";
import KeysWords from "../../Common/apiData/keyWords";
import axios from "axios";

const Blog = () => {
  const blogdata = [
    {
      id: 1,
      img: blgimg1,
      heading:
        "Know All About Mycotoxicosis Disease and its Management inPoultry",
      content:
        " Mycotoxicosis in poultry is a disease caused by toxins frommold-infected feed. Effective management is crucial for poultryhealth. mold-infected feed. Effective management is crucial forpoultry health. mold-infected feed. Effective management iscrucial for poultry health.",
      title1: "Animal",
      title2: "Animal",
      title3: "blog",
      title4: "Farmer",
      bottomcontent: "Rumeno Animal Care",
    },
    {
      id: 2,
      img: blgimg2,
      heading:
        " Management inPoultry Know All About Mycotoxicosis Disease and its",
      content:
        " Mycotoxicosis in poultry is a disease caused by toxins frommold-infected feed. Effective management is crucial for poultryhealth. mold-infected feed. Effective management is crucial forpoultry health. mold-infected feed. Effective management iscrucial for poultry health.",
      title1: "Animal",
      title2: "Animal",
      title3: "blog",
      title4: "Farmer",
      bottomcontent: "Rumeno Animal Care",
    },
  ];

  const apiUrl = process.env.REACT_APP_API_ADMIN;
  const getMidCookies = JSON.parse(localStorage.getItem("loginDetails") ?? "[]");
  const { setCart, cart, setSizevalue } = useContext(UserContext);
  const [blogs, setBlogs] = useState([]);
  var Value;
  useEffect(() => {
    fetchItems()
  }, []);
  const fetchItems = async () => {
    try {
      const response = await axios.get(`${apiUrl}/get_all_blog`);
      setBlogs(response.data.blog);
      console.log('response.data.blog: ', response.data.blog);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog-Rumeno</title>
        <link rel="canonical" href="https://www.rumeno.in/blog" />
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
        <Navbar size={cart?.length} />
      </div>
      <div className="mob-nav">
        <ResponsiveNavbar size={cart?.length} />
      </div>
      <section className="container-fluid service-bg overflow-hidden">
        <div
          className="section-header text-center mx-auto mb-3 pt-5"
          data-wow-delay="0.1s"
        >
          <div
            className="d-flex justify-content-center pt-5 mt-lg-5"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="mx-2">
              <div className="services-line-largeleft"></div>
              <div className="services-line-smallleft"></div>
            </div>
            <span className="label-title">Blog</span>
            <div className="mx-2">
              <div className="services-line-largeright"></div>
              <div className="services-line-smallright"></div>
            </div>
          </div>
        </div>
        {blogdata?.map((item, index) => (
          <div className="row justify-content-center my-3" key={index}>
            <div
              className=" blog-card col-lg-10 py-2 align-items-center shadow bg-white"
            >
              <img
                className=" me-3 rounded w-100 "
                src={item.img}
                alt="loading"
                // width={150}
                height={300}
              />
              <div className="flex-grow-1 my-2">
                <Link className="text-decoration-none" to={`/blog/${item._id}`}>
                  <h3 className="mb-3 ">{item.heading}</h3>
                </Link>

                <div className="text-muted mb-3">{item.content}</div>
                <ul className="list-unstyled d-flex mb-0">
                  <li className="me-3 fw-bold text-primary blog-keywords">{item?.title1} </li>
                  <li className="me-3 fw-bold text-primary ">{item?.title2} </li>
                  <li className="me-3 fw-bold text-primary ">{item?.title3}</li>
                  <li className="me-3 fw-bold text-primary ">{item?.title4} </li>
                </ul>
                <ul className="list-unstyled d-flex mt-3">
                  <li>
                    <span className="text-danger">
                      {moment(item.createdAt).format('DD/MM/YYYY')}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
};

export default Blog;
