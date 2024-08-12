import React, { useContext, useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie";

import logo from "../../../../src/assets/img/Logo/lv-bgr.png";
import Login from "./Login";
import { UserContext } from "./logusecont";
import { toast } from "react-toastify";

const SetNewPassword = ({ showModal, closeModal }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const { t } = useTranslation();
  const apiUrl = process.env.REACT_APP_API;


  const password = watch("newpassword");

  const onSubmit = async (data) => {

    console.log(data);
    try {
      if (data?.newpassword !== data?.confirmpassword) {
        alert("Passwords do not match");
        return;
      } 
        // Send data to API using Axios
        const payload = {mobile:localStorage.getItem("setMobileNum"),newpassword:data?.newpassword}
        const response = await axios.post(`${apiUrl}/forgot_password`, payload);
        console.log(response.data); // Handle the response as needed
        toast.success(response?.message, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        // Show the Login modal and close the current modal
        // setShowLoginModal(true);
        closeModal();
      

    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error, show a message to the user, etc.
      // setShowLoginModal(true);// remove after adding api
      closeModal();// remove after adding api
    }

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
          Create New Password:
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="text-center">
                  <img src={logo} className="w-25" alt="logo" />
                  <h4 className="mt-1 mb-3 pb-1">RUMENO</h4>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <p className="mb-3">Create your new password</p>
                  <div className="form-outline  mb-3">
                    <label className="form-label mx-2" htmlFor="form2Example11">
                      Create Password
                    </label>
                    <input
                      {...register("newpassword", {
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
                      name="newpassword"
                      className={`form-control ${errors.newpassword ? 'is-invalid' : ''}`}
                      placeholder="Enter Password"
                    />
                    {errors.newpassword && (
                      <span className="text-danger">
                        {errors.newpassword.message}
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

                  <div className="text-center pt-1 pb-1">
                    <button
                      className="btn btn-primary border-0 gradient-custom-2 mb-3 w-75"
                      type="submit"
                    >
                      {t("v307")}
                    </button>
                  </div>
                </form>
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
      <Login showModal={showLoginModal} closeModal={setShowLoginModal} />
    </>
  );
};

export default SetNewPassword;
