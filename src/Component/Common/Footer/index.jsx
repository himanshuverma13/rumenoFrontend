import React from "react";

// Third party Fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationCrosshairs,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

// Third party i18next
import { useTranslation } from "react-i18next";

// Image
import logo from "../../../assets/img/Logo/newlogo.png";
import { NavLink } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container-fluid footer pt-5 bg-block">

        <div className="row py-4 text-light">
          <div
            className="col-lg-3 text-center"
            data-aos="zoom-in-down"
            data-aos-duration="2000"
          >
            <img className="footer-img" src={logo} alt="Rumeno-Veterinary-Product" />

          </div>

          <div className="col-lg-2 pt-4">
            <div className="d-flex justify-content-center pb-2">
              <h5 className="">Pages</h5>
            </div>
            <div className="d-flex justify-content-center">
              <ul className="list-unstyled footer-li text-center">
                <li>
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    exact="true"
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/blog" className="footer-page">
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    to="/veterinary-products"
                  >
                    Products
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/contact-us" className="footer-page">
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    exact="true"
                    to="/privacypolicy"
                  >
                    Privacy Policy
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 pt-4 text-center text-lg-start">
            <h5 className="pb-2 text-center">Address</h5>
            <ul className="list-unstyled">
              <li>
                <FontAwesomeIcon
                  icon={faLocationCrosshairs}
                  className="me-2"
                // style={{ color: "white" }}
                />
                {t("v301")}
              </li>

              <li  >
                <a className="text-decoration-none text-white" rel="noreferrer" href="https://mail.google.com" target="_blank">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="me-2"
                    style={{ color: "white" }}
                  />
                  rumeno.farmotech@gmail.com
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white" rel="noreferrer" href="tel:+91 7355043892">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="me-2"
                    style={{ color: "white" }}
                  />
                  +91 7355043892
                </a>
              </li>
            </ul>

          </div>
          <div className="col-lg-4 pt-4">
            <div className="text-center">
              <h5>About Company</h5>
              <p className="footer-text pt-3">{t("v303")}</p>
            </div>

            <div>
              <ul className="list-unstyled d-flex justify-content-center footer-li">
                <li>
                  <a href="https://www.facebook.com/RumenoFarmotech/" rel="noreferrer" target="_blank">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="mx-2 fs-3"
                      style={{ color: "white" }}
                    />
                  </a>
                </li>

                <li>
                  <ReactWhatsapp
                    className="bg-transparent border-0"
                    number="+91 7355043892"
                    message="Hello World"
                  >
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className="mx-2 fs-3"
                      style={{ color: "white" }}

                    /></ReactWhatsapp>
                </li>
                <li>
                  <a href="https://www.youtube.com/@RumenoFarmotech-bg5y" rel="noreferrer" target="_blank">
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="mx-2 fs-3"
                      style={{ color: "white" }}
                    />
                  </a>
                </li>

                <li>
                  <a href="https://www.instagram.com/rumenofarmotech/" rel="noreferrer" target="_blank">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="mx-2 fs-3"
                      style={{ color: "white" }}
                    />
                  </a>
                </li>
                <li className="lh-1">
                  <a href="https://www.tradeindia.com/rumeno-36048586/product-services.html" rel="noreferrer" target="_blank">
                    <svg version="1.0" className="rounded mx-1"
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
                </li>
                <li className="lh-1">
                  <a href="https://www.indiamart.com/rumeno-lucknow/?pid=2854059774012&c_id=62&mid=&pn=Pro%20Lac%20Power%20Calf%20Milk%20Replacer" rel="noreferrer" target="_blank">
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
                </li>
              </ul>
            </div>

          </div>

        </div>
        <hr className="text-white m-0" />
        <div id="copyright" className="text-white text-center py-3 mx-4 ">
          &copy; 2022 - {new Date().getFullYear()}{" "}
          <a href="https://www.rumeno.in/" target="_blank" rel="noreferrer">https://www.rumeno.in</a> -
          All Rights Reserved.

        </div>


      </div>
    </>
  );
};

export default Footer;
