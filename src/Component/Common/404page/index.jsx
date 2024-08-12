import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const page404 = () => {
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>404-Rumeno</title>
                <link rel="canonical" href="https://www.rumeno.in/*" />
            </Helmet>
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
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-12 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">404</h1>
                </div>

                <div className="contant_box_404">
                  <h3 className="h2">Look like you're lost</h3>

                  <p>the page you are looking for not avaible!</p>

                  <NavLink className="link_404" to="/home">
                    Go to Home
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page404;
