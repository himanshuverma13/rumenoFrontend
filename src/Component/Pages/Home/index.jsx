import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

// Common Component
import Navbar from "../../Common/Navbar/index";
import About from "../../Common/About";
import Footer from "../../Common/Footer";
import Training from "../../Common/Training";
import FooterTop from "../../Common/CertifiedBox/footer-top";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomeJson from '../../../assets/js/homeScript.json';



// Image
import Prdimg1 from "../../../assets/img/OurProduct/prdaml1.png";
import Prdimg2 from "../../../assets/img/OurProduct/prdaml2.png";
import Prdimg3 from "../../../assets/img/OurProduct/prdaml3.png";
import Prdimg4 from "../../../assets/img/OurProduct/prdaml4.png";
import Prdimg5 from "../../../assets/img/OurProduct/prdaml5.png";
import Prdimg6 from "../../../assets/img/OurProduct/prdaml6.png";
import Prdimg7 from "../../../assets/img/OurProduct/prdaml7.png";
import Prdimg8 from "../../../assets/img/OurProduct/prdaml8.png";
import mobcaroimg1 from "../../../assets/img/home-img/dog.png";
import mobcaroimg2 from "../../../assets/img/home-img/cat.png";
import mobcaroimg3 from "../../../assets/img/home-img/goat.png";
import mobcaroimg4 from "../../../assets/img/home-img/homecaromob2.png";
import mobcaroimg5 from "../../../assets/img/home-img/homecaromob3.png";
import mobcaroimg6 from "../../../assets/img/home-img/hen.png";
import caroimg1 from "../../../assets/img/home-img/homecaro1.jpg";
import caroimg2 from "../../../assets/img/home-img/homecaro2.jpg";
import caroimg3 from "../../../assets/img/home-img/homecaro3.jpg";
import caroimg4 from "../../../assets/img/home-img/homecaro4.jpg";
import caroimg5 from "../../../assets/img/home-img/homecaro5.jpg";
import caroimg6 from "../../../assets/img/home-img/homecaro6.jpg";
import ReactWhatsapp from "react-whatsapp";
import { useContext } from "react";
import { UserContext } from "../../Common/Modal/logusecont";
import { Helmet } from "react-helmet";
import KeysWords from "../../Common/apiData/keyWords";
import Achievment from "../../Common/achievment";
import HomeFaq from "../../Common/faq";



const Home = () => {

  const { t } = useTranslation();
  // //const getLocalPrevCarts = JSON.parse(localStorage.getItem("cart") ?? "[]");
  const { setCart,cart,setSizevalue } = useContext(UserContext);

  const products = [
    { id: 'cow', imgSrc: Prdimg1 },
    { id: 'goat', imgSrc: Prdimg2 },
    { id: 'dog', imgSrc: Prdimg3 },
    { id: 'poultry', imgSrc: Prdimg4 },
    { id: 'fish', imgSrc: Prdimg5 },
    { id: 'horse', imgSrc: Prdimg6 },
    { id: 'pigeon', imgSrc: Prdimg7 },
    { id: 'pig', imgSrc: Prdimg8 },
  ];

  var Value ;
  useEffect(() => {
    // //setCart(getLocalPrevCarts);
    Value = cart?.length;
    if (Value !== 0) {
      setSizevalue(Value)
    }
  }, []);

  const [isDarkBackground, setIsDarkBackground] = useState(false);

  const toggleBackground = () => {
    setIsDarkBackground(!isDarkBackground);
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" name="description" content="Concerned about herd health and production? Powerful animal feed supplements can boost immunity, enhance growth, and reduce waste. Learn More!" />
        <title>Supercharge Your Pet's Health: Animal Feed Supplements | Rumeno</title>
        <link rel="canonical" href="https://www.rumeno.in/home" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": HomeJson["@context"],
            "@type": HomeJson["@type"],
            "mainEntity": HomeJson.mainEntity.map((item, index) => ({
              "@type": item["@type"],
              "name": item.name,
              "acceptedAnswer": {
                "@type": item.acceptedAnswer["@type"],
                "text": item.acceptedAnswer.text
              }
            }))
          })}
        </script>

      </Helmet>
      <ul className="d-none">
        {KeysWords.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <section className="container-fluid overflow-hidden p-0" id="#home">
        <a
          className="d-none"
          href="https://www.amazon.in/Sheep-Goat-Feed/b?ie=UTF8&node=28179044031"
        ></a>
        <a
          className="d-none"
          href="https://www.amazon.in/goat-medicine/s?k=goat+medicine"
        ></a>
        <a
          className="d-none"
          href="https://www.amazon.in/goat-farming-accessories/s?k=goat+farming+accessories"
        ></a>
        <a
          className="d-none"
          href="https://www.amazon.in/cow-farm-equipment/s?k=cow+farm+equipment"
        ></a>
        <a
          className="d-none"
          href="https://www.amazon.in/cow-feed/s?k=cow+feed"
        ></a>
        <a
          className="d-none"
          href="https://www.amazon.in/cattle-medicine/s?k=cattle+medicine"
        ></a>
        <a
          className="d-none"
          href="https://www.indiamart.com/shakyaworldtrade/goat-farming-equipment-and-accessories.html"
        ></a>
        <a
          className="d-none"
          href="https://www.flipkart.com/search?q=goat%20feed&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"
        ></a>
        <a
          className="d-none"
          href="https://www.flipkart.com/search?q=goat%20equipment&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off"
        ></a>
        <a
          className="d-none"
          href="https://www.flipkart.com/search?q=cow%20equipment&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off"
        ></a>

        <div className=" overflow-hidden">
          <Navbar size={cart?.length} />
          <div className="container-fluid header-sect px-0 mx-0">
            <div className="row header-txt ">
              <div className=" video-section">
                <div className="col-lg-10 px-2 py-5 text-center video-content" data-aos="fade-right">
                  <h1 className="">
                    <span className="">{t("v1")}</span>
                  </h1>
                  <p className=" h4">{t("v2")}</p>
                </div>
              </div>
              <Carousel className="header-carousel bg-block black" fade interval={3000} pause={false}>
                <Carousel.Item>
                  <picture>
                    <source className="d-block mx-auto w-100" media="(min-width:320px) and (max-width:645px)" srcSet={mobcaroimg1} />
                    <img className="d-block mx-auto w-100 " src={caroimg5} alt="Rumeno-Veterinary-Product" />
                  </picture>
                </Carousel.Item>
                <Carousel.Item>
                  <picture>
                    <source className="d-block mx-auto w-100" media="(min-width:320px) and (max-width:645px)" srcSet={mobcaroimg2} />
                    <img className="d-block mx-auto w-100 " src={caroimg2} alt="Rumeno-Veterinary-Product" />
                  </picture>
                </Carousel.Item>
                <Carousel.Item>
                  <picture>
                    <source className="d-block mx-auto w-100" media="(min-width:320px) and (max-width:645px)" srcSet={mobcaroimg3} />
                    <img className="d-block mx-auto w-100 " src={caroimg3} alt="Rumeno-Veterinary-Product" />
                  </picture>
                </Carousel.Item>
                <Carousel.Item>
                  <picture>
                    <source className="d-block mx-auto w-100" media="(min-width:320px) and (max-width:645px)" srcSet={mobcaroimg4} />
                    <img className="d-block mx-auto w-100 " src={caroimg4} alt="Rumeno-Veterinary-Product" />
                  </picture>
                </Carousel.Item>
                <Carousel.Item>
                  <picture>
                    <source className="d-block mx-auto w-100" media="(min-width:320px) and (max-width:645px)" srcSet={mobcaroimg5} />
                    <img className="d-block mx-auto w-100 " src={caroimg1} alt="Rumeno-Veterinary-Product" />
                  </picture>
                </Carousel.Item>
                <Carousel.Item>
                  <picture>
                    <source className="d-block mx-auto w-100" media="(min-width:320px) and (max-width:645px)" srcSet={mobcaroimg6} />
                    <img className="d-block mx-auto w-100 " src={caroimg6} alt="Rumeno-Veterinary-Product" />
                  </picture>
                </Carousel.Item>
              </Carousel>
              <a href="#training">
                <div className="training-sect">
                  <button className="btn gradient-custom-2 border-0 text-white btn--shockwave is-active">
                    TRAINING
                  </button>
                </div>
              </a>
              <ReactWhatsapp
                className="whatsapp-sect w-auto px-1"
                number="+91 7355043892"
                message="Hello Rumeno"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-white btn--shockwave is-active"
                />
              </ReactWhatsapp>
              <small className="whatsapp-sects w-auto scroll-text">chat here</small>
            </div>
          </div>
        </div>
        <About />
        <Achievment />
        <div className="container-fluid">
          <div className="text-center px-5">
            <div
              className="d-flex my-3"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <span className="label-title">Our Products According To Species</span>
              <div>
                <div className="about-line-large"></div>
                <div className="about-line-small"></div>
              </div>
            </div>
          </div>

          <div className="row px-5 align-items-end">
            <div className="col-lg-6">
              <div className="section-header text-start mb-3">
                <p>{t("v6")}</p>
              </div>
            </div>
          </div>
          <div className="row px-5">
            {products.map(product => (
              <div
                key={product.id}
                className="col-lg-3"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <div className="card-box my-2 ">
                  <Link to={`/veterinary-products/${product.id}`}>
                    <div className="card1 shadow-2">
                      <img src={product.imgSrc} alt="Rumeno-Veterinary-Product" className="card-img" />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <HomeFaq />
        <Training />
        <FooterTop />
        <Footer />
      </section>
    </>
  );
};
export default Home;
