

import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const FarmerDetails = ({ showFarmModal, closeFarmModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const apiUrl = `${process.env.REACT_APP_API}/farmer_detail`;
  const getMidCookies = JSON.parse(localStorage.getItem("loginDetails") ?? "[]");

  const onSubmit = async (data) => {
    const payload = { ...data, ...{ uid: getMidCookies.uID } };
    try {
      const response = await axios.post(`${apiUrl}`, payload, {
        headers: {
          Authorization: `${getMidCookies.token}`,
        },
      });
      toast.success("Farmer Details Submitted Successfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again", {
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
    reset();
  };

  return (
    <>
      <Modal
        show={showFarmModal}
        onHide={closeFarmModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="lg"
      >
        <Modal.Header className="border-0 fs-5 fw-bolder" closeButton>
          Farmer Details
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)} className="container">
            <div className="row justify-content-around">
              <div className="col-lg-5 my-2">
                <label className="form-label" htmlFor="name">
                  Farmer Name
                </label>
                <input
                  name="name"
                  placeholder="Farmer Name"
                  type="text"
                  id="name"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  {...register("name", { required: "Farmer Name is required" })}
                />
                {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
              </div>
              <div className="col-lg-5 my-2">
                <label className="form-label" htmlFor="number">
                  Mobile Number
                </label>
                <input
                  name="number"
                  placeholder="Mobile Number"
                  type="text"
                  id="number"
                  className={`form-control ${errors.number ? "is-invalid" : ""}`}
                  {...register("number", {
                    required: "Mobile Number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid Mobile Number",
                    },
                  })}
                />
                {errors.number && <div className="invalid-feedback">{errors.number.message}</div>}
              </div>
              <div className="col-lg-5 my-2">
                <label className="form-label" htmlFor="farmname">
                  Farm House Name
                </label>
                <input
                  name="farmname"
                  placeholder="Farm House Name"
                  type="text"
                  id="farmname"
                  className={`form-control ${errors.farmname ? "is-invalid" : ""}`}
                  {...register("farmname", { required: "Farm House Name is required" })}
                />
                {errors.farmname && <div className="invalid-feedback">{errors.farmname.message}</div>}
              </div>
              <div className="col-lg-5 my-2">
                <label className="form-label" htmlFor="farmtype">
                  Farm House Type
                </label>
                <input
                  name="farmtype"
                  placeholder="Farm House Type"
                  type="text"
                  id="farmtype"
                  className={`form-control ${errors.farmtype ? "is-invalid" : ""}`}
                  {...register("farmtype", { required: "Farm House Type is required" })}
                />
                {errors.farmtype && <div className="invalid-feedback">{errors.farmtype.message}</div>}
              </div>
              <div className="col-lg-5 my-2">
                <label className="form-label" htmlFor="address">
                  Address
                </label>
                <input
                  name="address"
                  placeholder="Address"
                  type="text"
                  id="address"
                  className={`form-control ${errors.address ? "is-invalid" : ""}`}
                  {...register("address", { required: "Address is required" })}
                />
                {errors.address && <div className="invalid-feedback">{errors.address.message}</div>}
              </div>
              <div className="col-lg-5 my-2">
                <label className="form-label" htmlFor="noofanimal">
                  Number of Animals
                </label>
                <input
                  placeholder="Number of Animals"
                  type="number"
                  id="noofanimal"
                  className={`form-control ${errors.noofanimal ? "is-invalid" : ""}`}
                  {...register("noofanimal", { required: "Number of Animals is required" })}
                />
                {errors.noofanimal && <div className="invalid-feedback">{errors.noofanimal.message}</div>}
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary w-auto mt-3">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FarmerDetails;
