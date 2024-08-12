import React from "react";
import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

import logo from "../../../../src/assets/img/Logo/lv-bgr.png";
import { NavLink } from "react-router-dom";

const FrmAftLog = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <section className="home-backgroundColor">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div>
              <NavLink className="link_404" to="/home">
                Go to Home
              </NavLink>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 my-5 py-3 bg-light">
            <div className="text-center">
              <img src={logo} className="w-25" alt="logo" />
              <h4 className="mt-1 mb-3 pb-1">RUMENO</h4>
            </div>
            <form className="container" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-row row d-flex">
                <div className="form-group col-lg-12 my-2">
                  <label className="my-2">{t("v311")}</label>
                  <input
                    {...register("fullName", {
                      required: "Full Name is required",
                    })}
                    type="text"
                    className={`form-control ${
                      errors.fullName ? "is-invalid" : ""
                    }`}
                    name="fullName"
                    placeholder="Enter Name"
                  />
                  {errors.fullName && (
                    <span className="text-danger">
                      {errors.fullName.message}
                    </span>
                  )}
                </div>
                <div className="form-group col-lg-12 my-2">
                  <label className="my-2">{t("v312")}</label>
                  <input
                    {...register("mobile", {
                      required: "Mobile No is required",
                    })}
                    type="text"
                    className={`form-control ${
                      errors.mobile ? "is-invalid" : ""
                    }`}
                    name="mobile"
                    placeholder="Mobile No"
                  />
                  {errors.mobile && (
                    <span className="text-danger">{errors.mobile.message}</span>
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
                    placeholder="Email"
                  />
                  {errors.email && (
                    <span className="text-danger">{errors.email.message}</span>
                  )}
                </div>
                <div className="form-group col-lg-12 my-2">
                  <label className="my-2">{t("v314")}</label>
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long",
                      },
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
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn text-white border-0 gradient-custom-2 my-3 w-75"
                >
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrmAftLog;
