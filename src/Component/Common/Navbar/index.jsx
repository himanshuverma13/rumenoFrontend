import React, { useEffect, useState, useContext } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";
// import Modal from 'react-modal';
import { UserContext } from "../Modal/logusecont";
// import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";


// Third party Fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleMinus,
  faCirclePlus,
  faLanguage,
  faLocationDot,
  faPhone,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons";

// Third party i18next
import { useTranslation } from "react-i18next";

// Common Component
import Login from "../../Common/Modal/Login";
import Registration from "../../Common/Modal/Registion";

// Image
import logo from "../../../assets/img/Logo/lv-bgr.png";
import SendOtp from "../Modal/otp";
import axios from "axios";
import { toast } from "react-toastify";
import logstatus from "../../../assets/img/Logo/navstatus - Copy.png";
import FarmerDetails from "../Modal/FarmerFarmDtl";
import TranslateButton from "../translate/translate";
import SearchBar from "./navsearch";
import { navDropdown } from "../navCloseResp/navDropdown";

const Navbar = ({ size }) => {
  const { search } = useParams();
  const { t } = useTranslation();
  const {
    loggedInUser,
    setCartdata,
    UidData,
    setamountData,
    cart,
    setCart,
    setLoggedInUser,
    cartdata,
    setiteamdata,
    iteamdata,
    setSelectedAnimal,
    farmDtl,
  } = useContext(UserContext);
  const getMidCookies = JSON.parse(localStorage.getItem("loginDetails") ?? "[]");

  const [lgShow, setLgShow] = useState(false);
  const [showSelect, setShowSelect] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showFarmModal, setshowFarmModal] = useState(false);
  const [showRegistrationModal, setShowRegistrtionModal] = useState(false);
  const [showOtp, setShowOpt] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSltAnmlModal = () => {
    setIsModalOpen(true);
    console.log(farmDtl)
  };
  const closeSltAnmlModal = () => {
    setIsModalOpen(false);
  };

  var totalAmount = 0;
  var totalPrice = 0;

  useEffect(() => {
    fetchItems()
    setCartdata(cart);

    return() => {
      console.log("check if cart remove ")
    }
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/cart/${getMidCookies?.uID}`);
      setCart(response.data)
      
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };


  const toggleSelect = () => {
    setShowSelect(!showSelect);
  };




  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openFarmModal = () => {
    setshowFarmModal(true);
    console.log(farmDtl)
  };

  const closeFarmModal = () => {
    setshowFarmModal(false);
    setIsModalOpen(true);
  };

  const openRegistration = () => {
    setShowRegistrtionModal(true);
    setShowModal(false);
  };

  const closeRegistrationModal = () => {
    setShowRegistrtionModal(false);
  };

  const OpenSendOtp = () => {
    setShowOpt(true);
    setShowModal(false);
  };
  const CloseSendOtp = () => {
    setShowOpt(false);
  };



  const handleRemoves = async (id) => {
    try {
      const RemoveCartData = { id: id, uid: UidData };
      const response = await axios.delete(`${process.env.REACT_APP_API}/cart/${id}?uid=${UidData}`,
        {
          headers: {
            'Authorization': `${getMidCookies.token}`
          }
        });
      if (response.data == "success") {
        fetchItems()
        toast.success("Add to cart is Remove Successfull", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        const arr = cart.filter((item) => item.id !== id);
        // setCart(arr);
      } else {
        toast.error("Add to cart is Remove Failed", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      toast.error("Add to cart is not Remove", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    // handleRemoveCart(id)
  };

  const navigate = useNavigate();


  const handleLogout = () => {
    Cookies.remove("loggedInUser");
    localStorage.removeItem("localPreviousCart");
    localStorage.removeItem("loginDetails");
    localStorage.removeItem("cart");
    Cookies.remove("cart");
    Cookies.remove("loginUserData");
    setLoggedInUser(null);
    setCart(0);
    navigate("/home");
    navDropdown()
  };

  const handleChange = async (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });

    const tempArr = [...cart];

    var latestamount = parseInt(tempArr[ind].amount);
    latestamount += d;

    // Ensure the amount does not go below 1
    if (latestamount < 1) {
      latestamount = 1;
    }

    tempArr[ind].amount = latestamount;
    // setCart(tempArr);
    var amountdataupdata = tempArr[ind];

    // Api ------------
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/cart`, amountdataupdata, {
          headers: {
            'Authorization': `${getMidCookies.token}`
          }
        });
        console.log('response: ', response);
        fetchItems()
      toast.success("Quantity update successfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    } catch (error) {
      console.error("quantity update not is working", error);
    }
  };


  const handleAnmlValue = (value) => {
    localStorage.setItem("SelectedAnimal", JSON.stringify(value));
  };

  return (
    <>
      <div className="container-fluid sect-topbar position-absolute">
        <div className="row">

          <div id="topbar" className="col-sm-12 d-flex align-items-center px-0">
            <div className="container-fluid">
              <div className="contact-info row justify-content-between px-0">

                <div className="col-sm-3 px-4 d-flex cnt align-items-center">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="me-2"
                    style={{ color: "#f5f5f5" }}
                  />
                  <span className="text-white">{t("v301")}</span>
                </div>

                <div className="col-sm-3 px-3  d-flex cnt justify-content-center align-items-center">
                  <a className="text-decoration-none text-white" rel="noreferrer" href="https://mail.google.com" target="_blank">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="me-2"
                      style={{ color: "white" }}
                    />
                    rumeno.farmotech@gmail.com
                  </a>
                </div>
                <div className="col-sm-2 px-sm-5 px-lg-2 d-flex cnt justify-content-end align-items-center">

                  <FontAwesomeIcon
                    icon={faClock}
                    className="me-2"
                    style={{ color: "#fafcff" }}
                  />
                  <span className="text-white  ">
                    {" "}
                    {t("v302")} 9:00am - 8:00pm
                  </span>
                </div>
                <div className="col-lg-2 col-sm-1 px-2 d-flex cnt align-items-center justify-content-center">
                  <a className="text-decoration-none text-white" rel="noreferrer" href="tel:+91 7355043892">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="me-2"
                      style={{ color: "white" }}
                    />
                    +91 7355043892
                  </a>
                </div>
                <div className="col-sm-2  px-2   align-items-center  nav-lang-switch h-100 my-auto  justify-content-lg-start  justify-content-sm-center">
                  <FontAwesomeIcon
                    type="button"
                    onClick={toggleSelect}
                    className="nav-lang-switch-icons m-0 h4 text-white"
                    icon={faLanguage}
                  />
                  {showSelect && (
                    <TranslateButton />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div
            id="header"
            className="col-sm-12 navbar navbar-expand-lg navbar-light fixed-top"
          >
            <NavLink className="logo navbar-brand" to="/home">
              <img className="ps-4 logo img-fluid" src={logo} alt="Loading"  width="100" height="24"/>
            </NavLink>
            <button
              className="navbar-toggler bg-secondary"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav w-100 justify-content-evenly bg-transparent">

                <li className="nav-item">
                  <NavLink
                    className="nav-link px-2"
                    activeclassname="active"
                    exact="true"
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <NavLink
                      className="nav-head px-2"
                    >
                      Veterinary-Products
                    </NavLink>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li className="">
                        <NavLink
                          className="nav-link px-0 justify-content-center"
                          activeclassname="active"
                          to="/veterinary-products"
                        >
                          Veterinary-Products
                        </NavLink>
                      </li>
                      <li className="">
                        <NavLink
                          className="nav-link px-0 justify-content-center"
                          activeclassname="active"
                          to="/veterinary-products/goat-feed-supplements"
                        >
                          Goat Feed Supplements
                        </NavLink>
                      </li>


                      <li className="text-center">
                        <NavLink
                          className="nav-link px-0 justify-content-center"
                          activeclassname="active"
                          to="/veterinary-products/cattle-feed-supplements"
                        >
                          Cattle Feed Supplements
                        </NavLink>
                      </li>
                      <li className="text-center">
                        <NavLink
                          className="nav-link px-0 justify-content-center"
                          activeclassname="active"
                          to="/veterinary-products/poultry-feed-supplements"
                        >
                          Poultry Feed Supplements
                        </NavLink>
                      </li>
                      <li className="">
                        <NavLink
                          className="nav-link px-0 justify-content-center"
                          activeclassname="active"
                          to="/veterinary-products/dog-feed-supplements"
                        >
                          Dog Feed Supplements
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <NavLink
                      className="nav-head px-2"
                    >
                      Veterinary-Services
                    </NavLink>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li className="">
                        <NavLink
                          className="nav-link px-0 justify-content-center"
                          activeclassname="active"
                          to="/veterinary-services"
                        >
                          Veterinary-Services
                        </NavLink>
                      </li>
                      <li className="">
                        <NavLink
                          className="nav-link px-0 justify-content-center"
                          activeclassname="active"
                          to="/goat-farming-consultant"
                        >
                          Goat Farming Consultant
                        </NavLink>
                      </li>

                      <li className="text-center">
                        <NavLink
                          className="nav-link px-0 justify-content-center"
                          activeclassname="active"
                          to="/dairy-consultant"
                        >
                          Dairy Consultant
                        </NavLink>
                      </li>
                    </ul>
                  </div>


                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link px-2"
                    activeclassname="active"
                    to="/blog"
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link px-2"
                    activeclassname="active"
                    to="/contact-us"
                  >
                    Contact-Us
                  </NavLink>
                </li>
                <li>
                  <SearchBar defaultSearchText={search} />
                </li>
                {/* <li className="nav-item" id="admin">
                  <button className="btn btn-success w-100 my-2">Admin</button>
                </li> */}
                <li className="nav-item">
                  <Link
                    id="login"
                    className="px-2"
                    onClick={() => setLgShow(true)}
                  >
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      style={{ color: "#f0f2f5" }}
                    />
                    <span className="badge-cart">{size?size:0}</span>
                  </Link>
                </li>
                <li>
                  {loggedInUser ? (
                    <>
                      {farmDtl ? (
                        <>
                          <button
                            typeof="button"
                            onClick={openSltAnmlModal}
                            className="btn border-0 text-white  gradient-custom-2 my-2 w-100 custom-btn btn-11"
                          >
                            Farm Data
                          </button>
                          <Modal
                            show={isModalOpen}
                            onHide={closeSltAnmlModal}
                            size="sm"
                          >
                            <Modal.Header>Select Animal</Modal.Header>
                            <Modal.Body>
                              <div className="my-2 text-center">
                                <NavLink to="/FrmAftLog">
                                  <button
                                    value="goat"
                                    onClick={() => handleAnmlValue("goat")}
                                    className="btn btn-primary w-75"
                                  >
                                    Goat
                                  </button>
                                </NavLink>
                              </div>
                              <div className="my-2 text-center">
                                <NavLink to="/FrmAftLog">
                                  <button
                                    value="sheep"
                                    onClick={() => handleAnmlValue("sheep")}
                                    className="btn btn-primary w-75"
                                  >
                                    Sheep
                                  </button>
                                </NavLink>
                              </div>
                              <div className="my-2 text-center">
                                <NavLink to="/FrmAftLog">
                                  <button
                                    value="cow"
                                    onClick={() => handleAnmlValue("cow")}
                                    className="btn btn-primary w-75"
                                  >
                                    Cow
                                  </button>
                                </NavLink>
                              </div>
                              <div className="my-2 text-center">
                                <NavLink to="/FrmAftLog">
                                  <button
                                    value="buffalo"
                                    onClick={() => handleAnmlValue("buffalo")}
                                    className="btn btn-primary w-75"
                                  >
                                    Buffalo
                                  </button>
                                </NavLink>
                              </div>
                            </Modal.Body>
                            <Modal.Footer>
                              <button
                                className="btn btn-secondary"
                                onClick={closeSltAnmlModal}
                              >
                                Close
                              </button>
                            </Modal.Footer>
                          </Modal>
                        </>
                      ) : (
                        <>
                          <button
                            typeof="button"
                            onClick={openFarmModal}
                            className="btn border-0 text-white  gradient-custom-2 my-2 w-100 custom-btn btn-11"
                          >
                            Farm Data
                          </button>
                          <FarmerDetails
                            showFarmModal={showFarmModal}
                            closeFarmModal={closeFarmModal}
                          />
                        </>
                      )}
                      <Modal
                        show={isModalOpen}
                        onHide={closeSltAnmlModal}
                        size="sm"
                      >
                        <Modal.Header>Select Animal</Modal.Header>
                        <Modal.Body>
                          <div className="my-2 text-center">
                            <NavLink to="/FrmAftLog">
                              <button
                                value="goat"
                                onClick={() => handleAnmlValue("goat")}
                                className="btn btn-primary w-75"
                              >
                                Goat
                              </button>
                            </NavLink>
                          </div>
                          <div className="my-2 text-center">
                            <NavLink to="/FrmAftLog">
                              <button
                                value="sheep"
                                onClick={() => handleAnmlValue("sheep")}
                                className="btn btn-primary w-75"
                              >
                                Sheep
                              </button>
                            </NavLink>
                          </div>
                          <div className="my-2 text-center">
                            <NavLink to="/FrmAftLog">
                              <button
                                value="cow"
                                onClick={() => handleAnmlValue("cow")}
                                className="btn btn-primary w-75"
                              >
                                Cow
                              </button>
                            </NavLink>
                          </div>
                          <div className="my-2 text-center">
                            <NavLink to="/FrmAftLog">
                              <button
                                value="buffalo"
                                onClick={() => handleAnmlValue("buffalo")}
                                className="btn btn-primary w-75"
                              >
                                Buffalo
                              </button>
                            </NavLink>
                          </div>
                        </Modal.Body>
                        <Modal.Footer>
                          <button
                            className="btn btn-secondary"
                            onClick={closeSltAnmlModal}
                          >
                            Close
                          </button>
                        </Modal.Footer>
                      </Modal>
                    </>
                  ) : (
                    null
                  )}
                </li>
                <li className="nav-item logo-width logo-width" id="cart">
                  <div className="d-flex justify-content-center">
                    {loggedInUser ? (
                      <div className="dropdown">
                        <a
                          className="p-0  justify-content-end "
                          href="#"
                          id="dropdownMenuLink"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <img src={logstatus} className="w-75" alt="" />
                        </a>
                        <ul
                          className="dropdown-menu login-dropdown"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <li className="d-flex align-items-center justify-content-center my-2">
                            <img
                              src={logstatus}
                              className="nav-log-status mx-2"
                              alt=""
                            />
                            <h5
                              typeof="button"
                              className="text-danger fw-bolder m-0 p-1 text-uppercase"
                            >
                              {loggedInUser}
                            </h5>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item justify-content-center"
                              to="/veterinary-products"
                            >
                              Veterinary Products
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item justify-content-center"
                              to="/contact-us"
                            >
                              Contact-Us
                            </Link>
                          </li>
                          <hr />
                          <li className="px-4">
                            <button
                              className="btn border-0 text-white  gradient-custom-2 my-2 w-100 custom-btn btn-11"
                              onClick={handleLogout}
                            >
                              Logout
                            </button>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <button
                        className="btn border-0 text-white  gradient-custom-2 my-2 w-100 custom-btn btn-11"
                        onClick={openModal}
                      >
                        Login
                      </button>
                    )}
                  </div>

                  <Login
                    showModal={showModal}
                    closeModal={closeModal}
                    openRegistrationModal={openRegistration}
                    OpenSendOtpModal={OpenSendOtp}
                  // handleAddtoCartApi={handleAddtoCartApi}
                  />
                  <Registration
                    showModal={showRegistrationModal}
                    closeModal={closeRegistrationModal}
                  />
                  <SendOtp showModal={showOtp} closeModal={CloseSendOtp} />
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      {/* model-for-cart */}
      <Modal
        className="cart-model-sect"
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Shopping Cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="cart-model-body">
          {!size == 0
            ? (
              <>
                {cart?.map((item) => {
                  totalAmount += item.amount * item.price;
                  const datat = totalAmount;
                  setamountData(datat);
                  totalPrice = item.price * item.amount;

                  return (
                    <div className="row mb-4 cart-model" key={item.id}>
                      <div className="col-sm-3 cart-model-img text-center">
                        <img className="mx-3" src={item.img} alt="Loading" />
                      </div>
                      <div className="col-sm-3 d-flex align-items-center justify-content-center">
                        <h4 className="text-trun">{item.name}</h4>
                      </div>
                      <div className="col-sm-6  d-flex align-items-center justify-content-around ">
                        <FontAwesomeIcon
                          icon={faCirclePlus}
                          type="button"
                          className="text-primary h4 m-0"
                          onClick={() => handleChange(item, +1)}
                        />
                        <h6 className="m-0">{item.amount}</h6>
                        {/* <h6 className="m-0">{cookies.amount}</h6> */}
                        <FontAwesomeIcon
                          icon={faCircleMinus}
                          type="button"
                          className="text-primary h4 m-0"
                          onClick={() => handleChange(item, -1)}
                        />
                        <div>{totalPrice} Rs /-</div>
                        <FontAwesomeIcon
                          type="button"
                          className="text-danger"
                          icon={faTrash}
                          onClick={() => handleRemoves(item.id)}
                        />
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <div>
                  <div>
                    <h3 className="shopping-empty">Your Basket is Empty</h3>
                  </div>
                  <div className="shopping-empt-icon">
                    <h5>
                      <FontAwesomeIcon icon={faCartShopping} />
                    </h5>
                  </div>
                </div>
              </>
            )}
        </Modal.Body>

        {!size == 0 ? (
          <>
            <div className="row border-top border-bottom justify-content-end mx-5 py-1">
              <div className="col-sm-12 d-flex align-items-center justify-content-between">
                <h4 className="mx-2">TOTAL</h4>
                <h4 className="mx-2">Rs /- {totalAmount}</h4>
              </div>
            </div>
            <div className="justify-content-end d-flex px-5 cart-model">
              <Link to="/transaction" className="w-100 text-end">
                <button className="btn gradient-custom-2 border-0 text-white my-3">
                  PAYMENT
                </button>
              </Link>
            </div>
          </>
        ) : null}
      </Modal>
    </>
  );
};

export default Navbar;
