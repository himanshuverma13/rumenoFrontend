import React from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import axios from "axios";

const ProudctFeedbackModal = ({ showfeedModal, closefeedModal, title, pid }) => {
  const { register, handleSubmit, reset } = useForm();
  const apiUrl = process.env.REACT_APP_API;
  const getUserId = JSON.parse(localStorage.getItem("loginDetails") ?? "[]");

  const onSubmit = async (data) => {
    let feedbackdata = {
      product_id: pid,
      feedback: data.feedback,
      uid:getUserId.uID,
    }
    try {
      const response = await axios.post(`${apiUrl}/feedback`, feedbackdata,
        {
          headers: {
            'Authorization': `${getUserId.token}`
          }
        }
      )
      console.log('response: ', response);
    }
    catch (error) {
    }
    console.log(feedbackdata);
    reset();
    closefeedModal();
  };

  return (
    <>
      <Modal
        show={showfeedModal}
        onHide={closefeedModal}
        aria-labelledby="example-custom-modal-styling-title"
        className="viewmodal modal model-size-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">

            {title}

          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="container bd-example-modal-lg"
          >
            <div className="row">
              <div className="col-lg-12 my-2">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Any Feedback
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  {...register("feedback")}
                  rows="3"
                ></textarea>
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

export default ProudctFeedbackModal;
