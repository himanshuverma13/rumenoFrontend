import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import axios from "axios";
// import { Country, State, City } from "country-state-city";
// import Select from "react-select";

import logo from "../../../../src/assets/img/Logo/lv-bgr.png";
import Login from "./Login";
import { GoogleLogin } from "@react-oauth/google";
import { UserContext } from "./logusecont";

const Registration = ({ showModal, closeModal }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const { setLoggedInUser, setCart, setUidData, setfarmDtl, setFarmDataUMKid } = useContext(UserContext);

  const apiUrl = process.env.REACT_APP_API;
  const countrydata = selectedCountry?.name
  const countrystate = selectedState?.name
  const countrycity = selectedCity?.name

    // -----fetch cart data from api
    const fetchItems = async (id) => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API}/cart/${id}`);
        setCart(response.data)
        console.log('response.data: ', response.data);
  
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };
  

  const password = watch("password");

  const onSubmit = async (data) => {
    setLoading(true);
    const Registrationdata = 
      {
        country : countrydata,
        state: countrystate,
        city: countrycity,
        firstName : data?.firstName,
        lastName : data?.lastName,
        mobile : data?.mobile,
        email : data?.email,
        password : data?.password,
        address: data?.address
        
      }
    console.log(Registrationdata)
    try {
      const response = await axios.post(`${apiUrl}/register`, Registrationdata);
      // console.log('Registration successful:', response.data);

      if (response.data.status === 201) {
        toast.success('Registration successful', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        reset()
        setShowLoginModal(true);
        setLoading(false);
        closeModal();
      } else {
        toast.error('Registration failed', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setLoading(false);
      }

    } catch (error) {
      toast.error(error?.response?.data?.message  || "Something went wrong please try again", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // closeModal()
      setLoading(false);
    }
  };

  const responseMessage = async (response) => {
    try {
      const getGoogleData = JSON.parse?.(atob(response?.credential.split('.')?.[1]))
      const payload = {
        email: getGoogleData?.email,
        firstName: getGoogleData?.name,
      }
      const apiResponse = await axios.post(`${apiUrl}/google_login`, payload);
      {
        const { userName, FarmName, date, uID, rId, sessionId, token } = apiResponse?.data;
        const FarmerDtl = response?.data?.FarmName;
        const getUidata = response?.data?.uID;

        setUidData(getUidata);
        setFarmDataUMKid({ uID: getUidata })
        setLoggedInUser(userName?.split(' ')[0]);
        setfarmDtl(FarmerDtl)

        localStorage.setItem("loginDetails", JSON.stringify({
          name: userName?.split(' ')[0],
          date: date,
          FarmName: FarmName,
          uID: uID,
          rId: rId,
          sessionId: sessionId,
          token: token,
        }));
        localStorage.setItem("cart", JSON.stringify(response?.data?.pID));
        fetchItems(uID)

        toast.success("Login Successful", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        closeModal();
        reset();
      }
    } catch (error) {
      console.log('error: ', error);
    }
  };
  const errorMessage = (error) => {
    toast.error(error, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
  };

  

  return (
    <>
      <Modal
        show={showModal}
        onHide={closeModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="lg"
      >
        <Modal.Header className="border-0 fs-5 fw-bolder" closeButton>
          Registration :-
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="text-center">
                  <img src={logo} className="w-25" alt="logo" />
                  <h4 className="mt-1 mb-3 pb-1">RUMENO</h4>
                </div>
                <form className="container" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-row row d-flex">
                    <div className="form-group col-lg-12 my-2">
                      <label className="my-2">First Name</label>
                      <input
                        {...register("firstName", {
                          required: "Name is required",
                        })}
                        type="text"
                        className={`form-control ${
                          errors.firstName ? "is-invalid" : ""
                        }`}
                        name="firstName"
                     
                        placeholder="Enter First Name"
                      />
                      {errors.firstName && (
                        <>
                        <span className="text-danger">
                          {errors.firstName.message}
                        </span>
                          <span className="d-none">
                            </span>
                            </>
                      )}
                    </div>
                    <div className="form-group col-lg-12 my-2">
                      <label className="my-2">Last Name</label>
                      <input
                        {...register("lastName")}
                        type="text"
                        className={`form-control ${
                          errors.LastName ? "is-invalid" : ""
                        }`}
                        name="LastName"
                     
                        placeholder="Enter Last Name"
                      />
                    </div>
                    <div className="form-group col-lg-12 my-2">
                      <label className="my-2">{t("v312")}</label>
                      <input
                        {...register("mobile", {
                          required: "Mobile Number is required", minLength: 10, maxLength: 10
                        })}
                        type="text"
                        className={`form-control ${
                          errors.mobile ? "is-invalid" : ""
                        }`}
                        name="mobile"
                      
                        placeholder="Mobile Number"
                      />
                      {errors.mobile && (
                        <div className="text-danger">Please enter a valid 10-digit phone number</div>
                      )}
                    </div>
                    <div className="form-group col-lg-12 my-2">
                      <label className="my-2">{t("v313")}</label>
                      <input
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        type="text"
                        className={`form-control ${
                          errors.email ? "is-invalid" : ""
                        }`}
                        name="email"
                 
                        placeholder="Email  (optional)"
                      />
                      <small>(optional but recommended to recover lost password)</small>
                      {errors.email && (
                        <span className="text-danger">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                    <div className="form-group col-lg-12 my-2">
                      <label className="my-2">{t("v314")}</label>
                      <input
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 6,
                            message:
                              "Password must be at least 8 characters long",
                          }
                          ,pattern:{
                            value: /^(?=.*[A-Z])(?=.*[@#$%^&*(),.?":{}|<>]).+$/, 
                            message: "Password must contain at least one uppercase letter and one special character."
                          }
                        })}
                        type="password"
                        className={`form-control ${
                          errors.password ? "is-invalid" : ""
                        }`}
                        name="password"
                 
                        placeholder="password"
                      />
                      {errors.password && (
                        <span className="text-danger">
                          {errors.password.message}
                        </span>
                      )}
                    </div>
                    <div className="form-outline mb-3">
                    <label className="form-label mx-2" htmlFor="form2Example22">
                      Confirm Password
                    </label>
                    <input
                      {...register("confirmpassword", {
                        required: "Password confirmation is required",
                        validate: value => value === password || "Passwords do not match",
                      })}
                      type="password"
                      name="confirmpassword"
                      className={`form-control ${errors.confirmpassword ? 'is-invalid' : ''}`}
                      placeholder="Confirm Password"
                    />
                    {errors.confirmpassword && (
                      <span className="text-danger">
                        {errors.confirmpassword.message}
                      </span>
                    )}
                  </div>
                    <div className="form-group col-lg-12 my-2">
                      <label className="my-1">Country</label>
                      {/* <Select
                        options={Country.getAllCountries()}
                        getOptionLabel={(options) => {
                          return options["name"];
                        }}
                        getOptionValue={(options) => {
                          return options["name"];
                        }}
                        onChange={(item) => {
                          setSelectedCountry(item);
                        }}
                        name="country"
                      /> */}
                    </div>
                    <div className="form-group col-lg-12 my-2">
                      <label className="my-1">State</label>
                      {/* <Select
                        options={State?.getStatesOfCountry(
                          selectedCountry?.isoCode
                        )}
                        getOptionLabel={(options) => {
                          return options["name"];
                        }}
                        getOptionValue={(options) => {
                          return options["name"];
                        }}
                        name="state"
                        onChange={(item) => {
                          setSelectedState(item);
                        }}
                      /> */}
                    </div>
                    <div className="form-group col-lg-12 my-2">
                      <label className="my-1">City</label>

                      {/* <Select
                        options={City.getCitiesOfState(
                          selectedState?.countryCode,
                          selectedState?.isoCode
                        )}
                        getOptionLabel={(options) => {
                          return options["name"];
                        }}
                        getOptionValue={(options) => {
                          return options["name"];
                        }}
                        onChange={(item) => {
                          setSelectedCity(item);
                        }}
                        name="city"
                      /> */}
                    </div>
                    <div className="form-group col-lg-12 my-2">
                      <label className="my-2">{t("v317")}</label>
                      <input
                        {...register("address", {
                          required: "Address is required",
                        })}
                        type="text"
                        className={`form-control ${
                          errors.address ? "is-invalid" : ""
                        }`}
                        name="address"
                  
                        placeholder="Address"
                      />
                      {errors.address && (
                        <span className="text-danger">
                          {errors.address.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      type="submit" disabled={loading}
                      className="btn text-white border-0 gradient-custom-2 my-3 w-75"
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
                <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
              </div>
              <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div className="text-white text-center p-2">
                  <h4 className="mb-4">{t("v133")}</h4>
                  <p className="small mb-0">{t("v134")}</p>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Login showModal={showLoginModal} closeModal={setShowLoginModal}/>
    </>
  );
};

export default Registration;
