

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import Footer from "../../Common/Footer";
import MapComp from "../../Common/Map/map";
import Navbar from "../../Common/Navbar/index";
import ResponsiveNavbar from "../../Common/Navbar/navMob";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../Common/Modal/logusecont";
import { Helmet } from "react-helmet";
import ReactWhatsapp from "react-whatsapp";
import KeysWords from "../../Common/apiData/keyWords";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
const ContactUs = () => {
  const { t } = useTranslation();
  const { setCart,cart,setSizevalue } = useContext(UserContext);

  const {
    handleSubmit,
    register,reset,
    formState: { errors },
  } = useForm();
  const apiUrl = process.env.REACT_APP_API;
  const getMidCookies = JSON.parse(localStorage.getItem("loginDetails") ?? "[]");

  // //const getLocalPrevCarts = JSON.parse(localStorage.getItem("cart") ?? "[]");
  var Value ;
  useEffect(() => {
    // //setCart(getLocalPrevCarts);
    Value = cart?.length;
    if (Value !== 0) {
      setSizevalue(Value)
    }
  }, []);

  const onSubmit = async (data) => {
    try {
      // Make a POST request to your API endpoint
      const response = await axios.post(
        `${apiUrl}/contact_us`,
        data,
        {
          headers: {
            'Authorization': `${getMidCookies.token}`
          }
        }
      );
      // console.log(response.data); // Handle the response as needed
      toast.success("Form Submited Successfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
        reset()
    } catch (error) {
      toast.error("Please Fill Correct Details", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })

      // Handle error, show a message to the user, etc.
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact-Rumeno</title>
        <link rel="canonical" href="https://www.rumeno.in/contact-us" />
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
      <section className="contact-sect container-fluid">
        <div className="row justify-content-center py-5">
          <div className="col-sm-10">
            <div className="contact_inner">
              <div className="row justify-content-between">
                <div className="col-sm-8">
                  <div className="contact_form_inner row justify-content-center">
                    <Form
                      className="contact_field col-sm-7 pt-1 pb-3"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <h3 className="my-2 text-center">Contact Us</h3>
                      <p className="my-3 text-center">
                        Feel Free to contact us any time.
                      </p>
                      <Form.Group >
                        <Form.Control
                          type="text"
                          placeholder="Name"
                          {...register("name", {
                            required: "Name is required",
                          })}
                          isInvalid={errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name && errors.name.message}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group >
                        <Form.Control
                          type="text"
                          placeholder="Email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Invalid email address",
                            },
                          })}
                          isInvalid={errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email && errors.email.message}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group >
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Message"
                          {...register("message", {
                            required: "Message is required",
                          })}
                          isInvalid={errors.message}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.message && errors.message.message}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <button
                        className="contact_form_submit mt-5"
                        type="submit"
                      >
                        Send
                      </button>
                    </Form>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="right_conatct_social_icon d-flex align-items-end justify-content-center">
                    <div className="socil_item_inner d-flex py-2">
                      <a
                        href="https://www.facebook.com/RumenoFarmotech/"
                        target="_blank" className="d-flex align-items-center"
                      >
                        <FontAwesomeIcon
                          className="text-white mx-3 my-0 h3"
                          type="button"
                          icon={faFacebook}
                        />
                      </a>
                      <a
                        href="https://www.instagram.com/rumenofarmotech/"
                        target="_blank" className="d-flex align-items-center"
                      >
                        <FontAwesomeIcon
                          className="text-white mx-3 my-0 h3"
                          type="button"
                          icon={faInstagram}
                        />
                      </a>
                      <ReactWhatsapp
                        className="bg-transparent border-0 d-flex align-items-center"
                        number="+91 7355043892"
                        message="Hello World"
                      >
                        <FontAwesomeIcon
                          className="text-white mx-3 my-0 h3"
                          type="button"
                          icon={faWhatsapp}
                        />
                      </ReactWhatsapp>

                      <a className="" href="https://www.tradeindia.com/rumeno-36048586/product-services.html" rel="noreferrer" target="_blank">
                        <svg version="1.0" className="rounded mx-2"
                          width="30px" height="28px" viewBox="0 0 225.000000 225.000000"
                          preserveAspectRatio="xMidYMid meet">

                          <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
                            fill="#fff" stroke="none">
                            <path d="M0 1125 l0 -1125 1125 0 1125 0 0 1125 0 1125 -1125 0 -1125 0 0
-1125z m1784 659 c3 -9 6 -69 6 -134 0 -114 -1 -118 -22 -124 -30 -8 -292 -8
-312 0 -14 5 -16 27 -16 140 l0 134 169 0 c145 0 170 -2 175 -16z m-846 -206
l3 -128 129 0 c113 0 130 -2 139 -17 14 -28 14 -209 -1 -233 -12 -18 -23 -20
-140 -20 l-128 0 0 -220 0 -221 25 -24 c32 -32 112 -35 170 -5 22 11 45 20 52
20 22 0 33 -47 33 -145 0 -132 4 -130 -245 -130 -158 0 -196 3 -226 17 -89 42
-140 116 -159 229 -5 35 -10 159 -10 275 l0 211 -48 -5 c-69 -6 -73 2 -70 144
l3 119 58 3 57 3 0 117 c0 117 4 135 27 143 7 2 84 2 170 -1 l158 -5 3 -127z
m846 -144 c8 -20 8 -948 0 -968 -5 -14 -30 -16 -175 -16 l-169 0 0 500 0 500
169 0 c145 0 170 -2 175 -16z"/>
                          </g>
                        </svg>
                      </a>

                      <a className="" href="https://www.indiamart.com/rumeno-lucknow/?pid=2854059774012&c_id=62&mid=&pn=Pro%20Lac%20Power%20Calf%20Milk%20Replacer" rel="noreferrer" target="_blank">
                        <svg version="1.0" className=" mx-2"
                          width="30px" height="30px" viewBox="0 0 364.000000 369.000000"
                          preserveAspectRatio="xMidYMid meet">

                          <g transform="translate(0.000000,369.000000) scale(0.100000,-0.100000)"
                            fill="#fff" stroke="none">
                            <path d="M2311 3551 c-67 -51 -108 -89 -116 -109 -16 -36 -55 -65 -84 -60 -12
2 -48 -18 -91 -50 -79 -59 -80 -63 -55 -170 32 -135 117 -252 220 -302 40 -20
66 -24 130 -25 70 0 86 4 134 30 93 51 158 155 182 286 29 162 -41 360 -159
452 -19 15 -40 27 -46 26 -6 0 -58 -36 -115 -78z"/>
                            <path d="M880 3470 c-44 -44 -86 -80 -91 -80 -6 0 -37 -21 -69 -47 -51 -42
-59 -53 -59 -84 -2 -95 60 -204 139 -247 60 -32 150 -28 204 8 47 32 93 100
113 169 37 127 -16 283 -115 339 l-41 23 -81 -81z"/>
                            <path d="M1100 2810 c-263 -33 -489 -109 -670 -228 -428 -279 -543 -787 -293
-1287 82 -162 180 -294 341 -459 94 -96 107 -106 110 -85 1 13 25 373 52 799
36 580 53 786 64 819 9 24 15 45 13 47 -1 1 -70 -52 -152 -119 -474 -386 -459
-375 -482 -366 l-22 8 20 71 c52 189 188 371 372 498 101 70 261 146 376 178
103 29 105 29 117 -35 6 -31 3 -38 -30 -69 -26 -23 -31 -32 -17 -27 28 9 84
-20 121 -61 45 -51 69 -105 163 -364 90 -245 155 -409 238 -597 l49 -112 -2
-218 -3 -218 -48 64 c-97 131 -207 361 -343 723 -43 114 -80 205 -83 202 -3
-3 -22 -337 -43 -742 l-36 -737 21 -18 c44 -35 405 -207 522 -247 136 -47 310
-92 436 -114 110 -19 347 -41 356 -33 8 9 -59 1171 -99 1686 -10 131 -13 150
-24 130 -6 -13 -55 -125 -109 -249 -176 -408 -248 -535 -364 -642 -96 -90 -97
-89 -105 70 -12 252 -8 333 15 367 57 83 150 302 239 560 71 207 118 292 210
386 98 99 165 133 273 138 72 3 84 0 143 -29 119 -59 208 -172 253 -325 33
-111 236 -1313 307 -1815 9 -69 20 -129 24 -133 19 -22 223 107 329 208 216
205 314 489 272 786 -15 100 -75 288 -125 386 -256 510 -854 951 -1528 1128
-217 57 -358 76 -583 80 -110 2 -234 0 -275 -5z"/>
                          </g>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact_info_sec-form">
                <h4 className="text-white py-2">Contact Info</h4>
                <div className="d-flex info_single align-items-center my-4">
                  <a className="text-decoration-none text-white" rel="noreferrer" href="tel:+91 7355043892">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="me-2"
                      style={{ color: "white" }}
                    />
                    +91 7355043892
                  </a>
                </div>
                <div className="d-flex info_single align-items-center my-4">

                  <a className="text-decoration-none text-white d-flex" rel="noreferrer" href="https://mail.google.com" target="_blank">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="me-2"
                      style={{ color: "white" }}
                    />
                    <span>rumeno.farmotech@gmail.com</span>
                  </a>
                </div>
                {/* Rumeno farm  */}
                {/* Rumeno */}
                {/* Veterinary */}
                <div className="d-flex info_single align-items-center my-4">
                  <FontAwesomeIcon
                    className="text-white mx-2 "
                    type="button"
                    icon={faLocationDot}
                  />
                  <span className="text-white">{t("v301")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-sm-12">
            <div className="map_inner mb-4">
              <MapComp />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
