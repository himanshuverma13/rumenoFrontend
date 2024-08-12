
import React, { useState, useEffect, useContext } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { UserContext } from "./logusecont";
import Cookies from "js-cookie";
// import { useCartContext } from "../../Context/cartContext";
// Images
import logo from "../../../../src/assets/img/Logo/lv-bgr.png";
import axios from "axios";
import SetNewPassword from "./newpassword";
import { toast } from "react-toastify";
const SendOtp = ({ showModal, closeModal }) => {
  const { t } = useTranslation();
  const apiUrl = process.env.REACT_APP_API;
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(30);
  const [isCounting, setIsCounting] = useState(false);
  const [saveNum, setsaveNum] = useState([]);
  const [showNewPasswordModal, setShowNewPasswordModal] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [loading, setLoading] = useState(false);
  //   const { setLoggedInUser } = useCartContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { UidData, setUidData } = useContext(UserContext);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const payload = {
        countryCode: "91",
        phoneNumber: data?.num,
      };

      const response = await axios.post(`${apiUrl}/send_otp`, payload);
      console.log(response.data);

      if (response?.data?.status == 200) {
        setActive(true);
        startCounting();
        toast.info("Please Enter the OTP", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        reset();
        setsaveNum(payload);
        Cookies.set("loginUserData", JSON.stringify({
          uID: response?.data?.uID,
        }));
        localStorage.setItem("setMobileNum", payload?.phoneNumber)
        setUidData(response?.data?.uID);
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Failed to send OTP", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setLoading(false);
    }
  };
  const ondata = async (data) => {
    const payload = {
      otp: data.otp,
      countryCode: saveNum?.countryCode,
      phoneNumber: saveNum?.phoneNumber,
    };
    console.log('payload: ', payload);
    try {
      const response = await axios.post(
        `${apiUrl}/verify_otp`, payload
      );
      console.log(response?.data, UidData)
      const msg = response?.data?.msg;
      const Status = response?.data?.status;
      if (response?.data?.status == 200) {
        const datasets = response?.data?.uid;
        console.log(datasets)
        toast.success(response?.data?.message, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        reset();
        closeModal();
        setShowNewPasswordModal(true);
        setActive(false); // Reset active state
      }
      else {
        setOtpError("Invalid OTP. Please try again.");
      }
    }
    catch (error) {
      toast.error("Wrong OTP", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // setActive(false); // Reset active state
      reset();
    }
  };

  const startCounting = () => {
    setIsCounting(true);
    setCount(60);
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    setTimeout(() => {
      clearInterval(interval);
      setIsCounting(false);
      setActive(false)
    }, 60000); // 30 seconds
  };

  useEffect(() => {
    const getuidfromcookies = JSON.parse(localStorage.getItem("loginDetails") ?? "{}");
    setUidData(getuidfromcookies.uID)
  }, [])


  return (
    <>
      <Modal
        show={showModal} // Show modal based on state
        onHide={closeModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="lg"
      >
        <Modal.Header className="border-0 fs-5 fw-bolder" closeButton>
          Forgot Password
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="text-center">
                  <img src={logo} className="w-25" alt="logo" />
                  <h4 className="mt-1 mb-3 pb-1">RUMENO</h4>
                </div>
                {active === false && (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <p className="mb-3">Enter Register Mobile Number For OTP</p>
                    <div className="form-outline  mb-3">
                      <div className="d-flex justify-content-between">
                        <label
                          className="form-label mx-2"
                          htmlFor="form2Example11"
                        >
                          Phone Number
                        </label>
                      </div>
                      <input
                        type="text"
                        className="form-control border"
                        placeholder="Enter Phone Number"
                        {...register("num", { required: true, minLength: 10, maxLength: 10 }
                        )}
                      />
                      {errors.num && (
                        <div className="text-danger">Please enter a valid 10-digit phone number</div>
                      )}
                      <small>(OTP send to your register mobile number and email)</small>
                    </div>
                    <div className="text-center py-1">
                      <button
                        className="btn btn-primary text-white border-0 gradient-custom-2 mb-3 w-75 "
                        type="submit" disabled={loading}
                      >
                        Submit{" "}
                        {loading ? (
                          <>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          </>
                        ) : (
                          <></>
                        )}
                      </button>
                    </div>
                  </form>
                )}
                {active === true && (
                  <form onSubmit={handleSubmit(ondata)}>
                    <div className="form-outline mb-3">
                      <div>
                        <label
                          className="form-label mx-2"
                          htmlFor="form2Example11"
                        >
                          Otp Number
                        </label>
                      </div>
                      <div className="text-color-red pe-3">
                        {isCounting && <span>{count} sec</span>}
                      </div>
                      <input
                        type="otp"
                        className="form-control border"
                        placeholder="Enter Otp Number"
                        {...register("otp", {
                          required: "OTP is required",
                        })}
                      />
                      {errors.password && (
                        <div className="text-danger">
                          Please enter Valid OTP
                        </div>
                      )}
                      {otpError && ( // Display OTP error message if exists
                        <div className="text-danger">{otpError}</div>
                      )}
                      <small>(enter OTP send to your register mobile number and email)</small>
                    </div>
                    <div className="text-center pt-1 pb-1">

                      <button
                        className="btn btn-primary text-white border-0 gradient-custom-2 mb-3 w-75 text-color-black"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                )}
                {/* <LoginForm/> */}
              </div>
              <div className="col-lg-6 d-flex align-items-center justify-content-center  gradient-custom-2 ">
                <div className="text-white text-center p-2">
                  <h4 className="mb-4 ">{t("v133")}</h4>
                  <p className="small mb-0 ">{t("v134")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <SetNewPassword showModal={showNewPasswordModal} closeModal={setShowNewPasswordModal} />

    </>
  );
};
export default SendOtp;