import React, { useState, useContext } from "react";
import ViewModal from "../Modal/PopModal";
import ReactStars from "react-rating-stars-component";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../Common/Modal/logusecont";
import Login from "../Modal/Login";
import Registration from "../Modal/Registion";
import SendOtp from "../Modal/otp";
import { toast } from "react-toastify";
import ProudctFeedbackModal from "../Modal/productFeedback";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const ProductItem = ({ item, handleClick }) => {
  const {
    img,
    name,
    priceText,
    description,
    text,
    efficacy,
    suitable,
    tipe,
    Category,
    Weight,
    Instruction,
    Shortdescription,
    efficacy1,
    imgText,
    efficacy2,
  } = item;
  const [showModal, setShowModal] = useState(false);
  const [showfeedback, setshowfeedback] = useState(false);
  // const [quantity, setQuantity] = useState(1);
  const [showRegistrationModal, setShowRegistrtionModal] = useState(false);
  const [showOtp, setShowOpt] = useState(false);
  const getMidCookies = JSON.parse(localStorage.getItem("loginDetails") ?? "[]");

  const ratingChanged = (newRating) => {
    // console.log(newRating);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const openfeedbackModal = () => {
    setshowfeedback(true);
  };

  const closefeedbackModal = () => {
    setshowfeedback(false);
  };

  const openRegistration = () => {
    setShowRegistrtionModal(true);
    setShowLoginModal(false);
  };

  const closeRegistrationModal = () => {
    setShowRegistrtionModal(false);
  };

  const OpenSendOtp = () => {
    setShowOpt(true);
    setShowLoginModal(false);
  };
  const CloseSendOtp = () => {
    setShowOpt(false);
  };

  const [showLoginModal, setShowLoginModal] = useState(false);
  const { loggedInUser } = useContext(UserContext);
  const AddToCart = async () => {
    if (loggedInUser) {
      handleClick(item);
      try {
        let payload = {...{ id: item?.id, price: item?.priceText, img: item?.img[0], name: item?.name },...{amount:1,uid:getMidCookies?.uID}}
        console.log('payload: ', payload);
        const response = await axios.post(`${process.env.REACT_APP_API}/cart`,payload,
          {
            headers: {
              'Authorization': `${getMidCookies.token}`
            }
          });
        
      } catch (error) {
          console.warn(error)
          toast.error(error, {
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
    } else {
      // console.log("login first");
      setShowLoginModal(!showLoginModal);
      toast.warn("Please Login", {
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
  };



  return (
    <div className=" py-1">
      
      <div className="bg-light h-50 rounded text-dark bg-opacity-50 p-2 shadow">
        <div className="row">
          
          <div className="col-sm-4 p-4 product">
          <Link className="text-decoration-none text-dark" to={`/veterinary-products/${item.imgText.replace(/ /g, '-')}/${item.id}`}>
            <img src={img[0]} width={200} height={400} alt={item.imgText} className="w-100" />
          </Link>
          </div>
          <div className="col-sm-8 px-3 lg:px-5 text-center text-lg-start">
            
            <Link className="text-decoration-none text-dark" to={`/veterinary-products/${item.imgText.replace(/ /g, '-')}/${item.id}`}>
              <div className="fs-3">{name}</div>
              </Link>
            <div className="fs-4 mt-2 text-danger">₹ {priceText} /-</div>
            <div className="fs-4 mt-2 "> { Weight } </div>
            <div className="mt-2">{Instruction}</div>
            <div className="lg:d-flex d-block justify-content-between mt-2">
              
              <div>
                <span className="fw-bold my-2 ">Suitable for </span>
                <span>{Category}</span>
                
              </div>
              <div>
                <span className="fw-bold">{efficacy}</span>
                <span>{efficacy1}</span>
                <span>{efficacy2}</span>
                
              </div>
            </div>
            <div className="mt-2 d-flex justify-content-center justify-content-lg-start">
              
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
            </div>
            
              <a className="" target="_blank" href="https://www.youtube.com/@RumenoFarmotech-bg5y">
            <FontAwesomeIcon
              className="mx-2 my-3 h3 text-danger"
              type="button"
              icon={faYoutube}
            />
              </a>
            <FontAwesomeIcon
              className="mx-2 my-3 h3 text-success"
              type="button"
              icon={faEye}
              onClick={openModal}
            />
            <ViewModal
              title={name}
              img={img}
              text={description}
              showModal={showModal}
              closeModal={closeModal}
            />

            
            <div className="d-flex justify-content-between">
              <button
                className="btn text-white border-0 w-auto gradient-custom-2 my-4 p-2"
                onClick={AddToCart}
              >
                Add to Cart
              </button>
              <button
                className="btn text-white border-0 w-auto gradient-custom-2 my-4 p-2"
                onClick={openfeedbackModal}
              >
                FeedBack
              </button>

              <ProudctFeedbackModal
              title={name}
              pid={item.id}
              showfeedModal={showfeedback}
              closefeedModal={closefeedbackModal}
            />

            
              <Login
                showModal={showLoginModal}
                closeModal={setShowLoginModal}
                openRegistrationModal={openRegistration}
                OpenSendOtpModal={OpenSendOtp}
              />
              <Registration
                showModal={showRegistrationModal}
                closeModal={closeRegistrationModal}
              />
              <SendOtp showModal={showOtp} closeModal={CloseSendOtp} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
