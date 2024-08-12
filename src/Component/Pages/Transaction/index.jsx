import React, { useState, useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../Component/Common/Modal/logusecont";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import ReactWhatsapp from "react-whatsapp";
import Cookies from "js-cookie";

// Third party Fortawesome
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Common Component
import Footer from "../../Common/Footer";
import ResponsiveNavbar from "../../Common/Navbar/navMob";
import scanner from "../../../assets/img/scanner.png";
import { Form, Modal } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import KeysWords from "../../Common/apiData/keyWords";
import { Link, useNavigate } from "react-router-dom";
// {/* Rumeno farm  */}
// {/* Rumeno */}
// {/* Veterinary */}
const Transaction = () => {
  const { amountData, UidData, setCart ,cart} = useContext(UserContext);
  const {
    register: register,
    handleSubmit: handleSubmit,
    formState: { errors: errors }
  } = useForm();
  const {
    register: registerPayIssue,
    handleSubmit: handlePayIssueSubmit,
    reset: reset,
    formState: { errors: errorspayissue }
  } = useForm();

  const apiUrl = `${process.env.REACT_APP_API}/transaction`;
  const getUserCookies = JSON.parse(localStorage.getItem("loginDetails") ?? "[]");
  
  // Upload Start
  const [loadingTextVisible, setLoadingTextVisible] = useState(false);
  const [previewImageVisible, setPreviewImageVisible] = useState(false);
  const [uploadAreaOpen, setUploadAreaOpen] = useState(false);
  const [fileDetailsOpen, setFileDetailsOpen] = useState(false);
  const [uploadedFileOpen, setUploadedFileOpen] = useState(false);
  const [uploadedFileInfoActive, setUploadedFileInfoActive] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [uploadedFileType, setUploadedFileType] = useState("");
  const [uploadedFileCounter, setUploadedFileCounter] = useState(0);
  const [image, setImage] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [Finalamt, setFinalamt] = useState(0);
  const [AdvancePaymnt, setAdvancePaymnt] = useState(0);
  const [shipingCharge, setshipingCharge] = useState(0);
  const [PayIssue, setPayIssue] = useState(false);
  const [error, setError] = useState('');


  const handlePayIssueClose = () => setPayIssue(false);
  const handlePayIssueShow = () => setPayIssue(true);

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
    if (event.target.value === "COD" && amountData <= 1000) {
      console.warn("COD payment")
      setshipingCharge(amountData * 0.02)
      setFinalamt(amountData + amountData * 0.02 - 100)
      console.warn(Finalamt)
    }
    else if (event.target.value === "COD" && amountData >= 1000) {
      setAdvancePaymnt(amountData * 0.1)
      setshipingCharge(amountData * 0.02)
      setFinalamt(amountData + amountData * 0.02 - amountData * 0.1)
      console.warn(Finalamt, AdvancePaymnt)
    }
  };

  const navigate = useNavigate();
  const dropZoneRef = useRef(null);
  const fileInputRef = useRef(null);
  const previewImageRef = useRef(null);

  const imagesTypes = ["jpeg", "png", "svg", "gif"];

  const handleDragOver = (event) => {
    event.preventDefault();
    // setIsDropZoneOver(true);
  };

  const handleDragLeave = () => {
    // setIsDropZoneOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    // setIsDropZoneOver(false);

    const file = event.dataTransfer.files[0];
    // uploadFile(file);
    // console.log(uploadFile);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (event) => {
    setError("")
    const file = event.target.files[0];
    uploadFile(file);
    setImage(file);
  };


  const uploadFile = (file) => {
    const fileType = file.type;
    const fileSize = file.size;

    if (fileValidate(fileType, fileSize)) {
      dropZoneRef.current.classList.add("drop-zoon--Uploaded");
      setLoadingTextVisible(true);
      setPreviewImageVisible(false);
      setUploadedFileOpen(false);
      setUploadedFileInfoActive(false);

      const fileReader = new FileReader();

      fileReader.onload = function () {
        setTimeout(() => {
          setUploadAreaOpen(true);
          setLoadingTextVisible(false);
          setPreviewImageVisible(true);
          setFileDetailsOpen(true);
          setUploadedFileOpen(true);
          setUploadedFileInfoActive(true);
        }, 500);

        // const UploadedImage = fileReader.result;
        // console.log(UploadedImage);

        previewImageRef.current.setAttribute("src", fileReader.result);
        setUploadedFileName(file.name);

        const fileTypeForState = imagesTypes.includes(fileType)
          ? fileType
          : "image";
        setUploadedFileType(fileTypeForState);
        progressMove();
      };

      fileReader.readAsDataURL(file);
    }
  };

  const progressMove = () => {
    let counter = 0;

    setTimeout(() => {
      const counterIncrease = setInterval(() => {
        if (counter === 100) {
          clearInterval(counterIncrease);
        } else {
          counter += 10;
          setUploadedFileCounter(counter);
        }
      }, 100);
    }, 600);
  };

  const fileValidate = (fileType, fileSize) => {
    const isImage = imagesTypes.filter(
      (type) => fileType.indexOf(`image/${type}`) !== -1
    );

    if (isImage.length !== 0) {
      if (fileSize <= 2000000) {
        return true;
      } else {
        toast.warn("Please Your File Should be 2 Megabytes or Less", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return false;
      }
    } else {
      toast.warn("Please make sure to upload An Image File Type", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return false;
    }
  };

  // ------------
  const [loading, setLoading] = useState(false);
  // -------------

  // upload End
  const onSubmit = async (data) => {
    // fetchItems(UidData)
    console.log(cart)
    if (!image) return setError('Please upload Transaction Screenshot');
    setLoading(true);
    const formData = new FormData();
    formData.append("image", image);
    try {
      const uploadImgResponse = await axios.post("https://api.imgbb.com/1/upload?key=273ab24b40be59dc593d96c50976ae42", formData);
      console.log('response: ', uploadImgResponse.data.status);
      if (uploadImgResponse.data.status == 200) {
        if (data.paymode == "COD") {
          let payload = {
            name: data.name,
            mobileNumber: data.mobileNumber,
            address: data.address,
            amount: amountData,
            transactionID: data.transactionID,
            cod_payment: Finalamt,
            paymode: data.paymode,
            uid: UidData,
            image: uploadImgResponse.data.data.url,
            cart: cart
          };


          try {
            const response = await axios.post(`${apiUrl}`, payload,
              {
                headers: {
                  'Authorization': `${getUserCookies.token}`
                }
              });
            console.log('response: ', response);
            Cookies.remove("cart");
            setLoading(false);
          } catch (error) {
            console.error('transaction working', error);
            setLoading(false);
          }
        }
        else {
          let payload = {
            name: data.name,
            mobileNumber: data.mobileNumber,
            address: data.address,
            amount: amountData,
            transactionID: data.transactionID,
            paymode: data.paymode,
            cod_payment: "NA",
            uid: UidData,
            image: uploadImgResponse.data.data.url,
            cart: cart
          };

          try {
            const response = await axios.post(`${apiUrl}`, payload,
              {
                headers: {
                  'Authorization': `${getUserCookies.token}`
                }
              });
            console.log('response: ', response);
            Cookies.remove("cart");
            setCart([])
            setLoading(false);
          } catch (error) {
            console.error('transaction  not working', error);
            setLoading(false);
          }

        }
        navigate("/thankyoupage");
        localStorage.removeItem("cart");
      }
      else {
        alert("error please try again")
      }

    } catch (error) {
      console.error(' Transaction error', error);
      setLoading(false);
    }
    setLoading(false);

  };

  const onPayIssueSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/transaction_issue`,
        data,
        {
          headers: {
            'Authorization': `${getUserCookies.token}`
          }
        }
      );
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
      toast.error("something wrong please try again", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }
    handlePayIssueClose()
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Transaction-Rumeno</title>
        <link rel="canonical" href="https://www.rumeno.in/transaction" />
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
      <div className="desk-nav">{/* <Navbar /> */}</div>
      <div className="mob-nav">
        <ResponsiveNavbar />
      </div>
      <section className="contact-sect container-fluid">
        <div className="row justify-content-center py-5">
          <div className="col-sm-10">
            <div className="contact_inner">
              <div className="row justify-content-between">
                <div className="col-sm-8">
                  <div className="contact_form_inner row  justify-content-center">
                    <Form className="contact_field col-sm-7 pt-1 pb-5">
                      <h3 className="my-2 text-center">Payment Process</h3>
                      <p className="my-3 text-center">Transaction Details</p>
                      <input
                        type="text"
                        className="form-control form-group py-3"
                        placeholder="Name"
                        {...register("name", { required: true })}
                      />
                      {errors.name && (
                        <span className="text-danger">Name is required</span>
                      )}
                      <input
                        type="text"
                        className="form-control form-group py-3"
                        placeholder="Mobile Number"
                        {...register("mobileNumber", {
                          required: true,
                          pattern: /^[0-9]{10}$/, // Regex pattern for only numbers
                        })}
                      />
                      {errors.mobileNumber && (
                        <span className="text-danger">
                          {
                            errors.mobileNumber.type === "required"
                              ? "Please enter your mobile number"
                              : "Please enter a valid mobile number" // Custom error message for pattern validation
                          }
                        </span>
                      )}
                      <input
                        type="text"
                        className="form-control form-group py-3"
                        placeholder="Address"
                        {...register("address", { required: true })}
                      />
                      {errors.address && (
                        <span className="text-danger">Address is required</span>
                      )}
                      <div className=" p-3 border-bottom fw-bold">₹ {amountData} /-</div>
                      <div className="row mt-3">
                        <div className="col-lg-6 text-center  border-end">
                          <input
                            type="radio"
                            className="form-check-input"
                            id="cod"
                            name="paymentMethod"
                            onClick={handlePaymentMethodChange}
                            value="COD"
                            {...register('paymode', { required: true })}
                          />
                          <label htmlFor="cod" className="fw-bold text-danger mx-1">COD</label>
                          <p className="pt-1">(2% extra on Cash On Delivery)</p>
                        </div>
                        <div className="col-lg-6 text-center">
                          <input
                            type="radio"
                            className="form-check-input"
                            id="upi"
                            name="paymentMethod"
                            onClick={handlePaymentMethodChange}
                            value="UPI"
                            {...register("paymode", { required: true })}

                          />
                          <label htmlFor="upi" className="fw-bold text-danger mx-1">UPI</label>
                          <p className="pt-1">(Pay Using Scanner or UPI Number)</p>
                        </div>
                      </div>
                      <hr className="mt-1" />

                      {/* <TransImgUpload/> */}
                      {selectedPaymentMethod === "UPI" && (
                        <>
                          <ul className="d-flex list-unstyled justify-content-center" >
                            <li className="mx-2">UPI NO:-<span className="fw-bold"> 7355043892</span></li>
                            <li className="mx-2">UPI ID:-<span className="fw-bold"> 7355043892m@pnb</span>
                            </li>
                          </ul>
                          <input
                            type="text"
                            className="form-control form-group py-3"
                            placeholder="Transaction ID"
                            {...register("transactionID", { required: true })}
                          />
                          {errors.transactionID && (
                            <span className="text-danger">
                              Transaction ID is required
                            </span>
                          )}
                          <div
                            id="uploadArea"
                            className={`upload-area ${uploadAreaOpen ? "upload-area--open" : ""
                              }`}
                          >
                            <h6 className="my-3 text-secondary">
                              Upload Transaction Screenshot
                            </h6>
                            <div
                              className="upload-area__drop-zoon drop-zoon"
                              ref={dropZoneRef}
                              onDragOver={handleDragOver}
                              onDragLeave={handleDragLeave}
                              onDrop={handleDrop}
                              onClick={handleClick}
                            >
                              <span className="drop-zoon__icon">
                                <FontAwesomeIcon icon={faImage} />
                              </span>
                              <p className="drop-zoon__paragraph">
                                Drop your Payment screenshot here
                              </p>
                              <span
                                id="loadingText"
                                className="drop-zoon__loading-text"
                                style={{
                                  display: loadingTextVisible ? "block" : "none",
                                }}
                              >
                                Please Wait
                              </span>
                              <img
                                src=""
                                alt="loading"
                                id="previewImage"
                                className="drop-zoon__preview-image"
                                ref={previewImageRef}
                                style={{
                                  display: previewImageVisible ? "block" : "none",
                                }}
                                draggable="false"
                              />
                              <input
                                type="file"
                                id="fileInput"
                                className="drop-zoon__file-input"
                                accept="image/*"
                                onChange={handleFileChange}
                                ref={fileInputRef}
                                />
                            </div>
                                {error && <span className="text-danger">{error}</span>}
                            <div
                              id="fileDetails"
                              className={`upload-area__file-details file-details ${fileDetailsOpen ? "file-details--open" : ""
                                }`}
                            >
                              <h5 className="my-3">Uploaded File</h5>

                              <div
                                id="uploadedFile"
                                className={`uploaded-file ${uploadedFileOpen ? "uploaded-file--open" : ""
                                  }`}
                              >
                                <div className="uploaded-file__icon-container">
                                  <i className="bx bxs-file-blank uploaded-file__icon"></i>
                                  <span className="uploaded-file__icon-text">
                                    {uploadedFileType}
                                  </span>
                                </div>

                                <div
                                  id="uploadedFileInfo"
                                  className={`uploaded-file__info ${uploadedFileInfoActive
                                    ? "uploaded-file__info--active"
                                    : ""
                                    }`}
                                >
                                  <span className="uploaded-file__name">
                                    {uploadedFileName}
                                  </span>
                                  <span className="uploaded-file__counter">{`${uploadedFileCounter}%`}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      {(selectedPaymentMethod === "COD" && amountData <= 1000) && (
                        <>
                          <p className="fw-bold fs-6 text-danger text-center px-1">(You have to pay ₹ 100 in advance. which will be deducted from your total amount.)</p>
                          <h4 className="fw-bold text-center">PAY =<span className="text-danger"> ₹ 100 /-</span></h4>
                          <hr />
                          <ul className="d-flex list-unstyled justify-content-center" >
                            <li className="mx-2">UPI NO:-<span className="fw-bold"> 7355043892</span></li>
                            <li className="mx-2">UPI ID:-<span className="fw-bold"> 7355043892m@pnb</span>
                            </li>
                          </ul>
                          <input
                            type="text"
                            className="form-control form-group py-3"
                            placeholder="Transaction ID"
                            {...register("transactionID", { required: true })}
                          />
                          {errors.transactionID && (
                            <span className="text-danger">
                              Transaction ID is required
                            </span>
                          )}
                          <div
                            id="uploadArea"
                            className={`upload-area ${uploadAreaOpen ? "upload-area--open" : ""
                              }`}
                          >
                            <h6 className="my-3 text-secondary">
                              Upload Transaction Screenshot
                            </h6>
                            <div
                              className="upload-area__drop-zoon drop-zoon"
                              ref={dropZoneRef}
                              onDragOver={handleDragOver}
                              onDragLeave={handleDragLeave}
                              onDrop={handleDrop}
                              onClick={handleClick}
                            >
                              <span className="drop-zoon__icon">
                                <FontAwesomeIcon icon={faImage} />
                              </span>
                              <p className="drop-zoon__paragraph">
                                Drop your Payment screenshot here
                              </p>
                              <span
                                id="loadingText"
                                className="drop-zoon__loading-text"
                                style={{
                                  display: loadingTextVisible ? "block" : "none",
                                }}
                              >
                                Please Wait
                              </span>
                              <img
                                src=""
                                alt="loading"
                                id="previewImage"
                                className="drop-zoon__preview-image"
                                ref={previewImageRef}
                                style={{
                                  display: previewImageVisible ? "block" : "none",
                                }}
                                draggable="false"
                              />
                              <input
                                type="file"
                                id="fileInput"
                                className="drop-zoon__file-input"
                                accept="image/*"
                                onChange={handleFileChange}
                                ref={fileInputRef}

                              />
                            </div>
                              {error && <span className="text-danger">{error}</span>}

                            <div
                              id="fileDetails"
                              className={`upload-area__file-details file-details ${fileDetailsOpen ? "file-details--open" : ""
                                }`}
                            >
                              <h5 className="my-3">Uploaded File</h5>

                              <div
                                id="uploadedFile"
                                className={`uploaded-file ${uploadedFileOpen ? "uploaded-file--open" : ""
                                  }`}
                              >
                                <div className="uploaded-file__icon-container">
                                  <i className="bx bxs-file-blank uploaded-file__icon"></i>
                                  <span className="uploaded-file__icon-text">
                                    {uploadedFileType}
                                  </span>
                                </div>

                                <div
                                  id="uploadedFileInfo"
                                  className={`uploaded-file__info ${uploadedFileInfoActive
                                    ? "uploaded-file__info--active"
                                    : ""
                                    }`}
                                >
                                  <span className="uploaded-file__name">
                                    {uploadedFileName}
                                  </span>
                                  <span className="uploaded-file__counter">{`${uploadedFileCounter}%`}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <ul>
                            <li className="justify-content-between d-flex my-1"><span>Amount</span> <span className="fw-bold mx-2" >₹ {amountData} /-</span></li>
                            <li className="justify-content-between d-flex my-1"><span>2% extra on COD</span> <span className="fw-bold mx-2 text-success">+ {shipingCharge.toFixed(1)} /-</span></li>
                            <li className="justify-content-between d-flex my-1"><span>Advance Payment</span> <span className="fw-bold mx-2 text-danger">- ₹ 100 /-</span></li>
                            <hr />
                            <li className="justify-content-between d-flex"><span>Total Amount </span> <span className="fw-bold text-danger h5">₹ {Finalamt.toFixed(1)} /-</span></li>
                          </ul>
                        </>
                      )}
                      {(selectedPaymentMethod === "COD" && amountData > 1000) && (
                        <>
                          <p className="fw-bold fs-6 text-danger text-center px-1">(You have to pay 10% of you Amount in advance. which will be deducted from your total amount.)</p>
                          <hr />
                          <h4 className="fw-bold text-center">Pay = <span className="text-danger"> ₹ {AdvancePaymnt} /- </span></h4>
                          <hr />
                          <ul className="d-flex list-unstyled justify-content-center" >
                            <li className="mx-2">UPI NO:-<span className="fw-bold"> 7355043892</span></li>
                            <li className="mx-2">UPI ID:-<span className="fw-bold"> 7355043892m@pnb</span>
                            </li>
                          </ul>
                          <input
                            type="text"
                            className="form-control form-group py-3"
                            placeholder="Transaction ID"
                            {...register("transactionID", { required: true })}
                          />
                          {errors.transactionID && (
                            <span className="text-danger">
                              Transaction ID is required
                            </span>
                          )}
                          <div
                            id="uploadArea"
                            className={`upload-area ${uploadAreaOpen ? "upload-area--open" : ""
                              }`}
                          >
                            <h6 className="my-3 text-secondary">
                              Upload Transaction Screenshot
                            </h6>
                            <div
                              className="upload-area__drop-zoon drop-zoon"
                              ref={dropZoneRef}
                              onDragOver={handleDragOver}
                              onDragLeave={handleDragLeave}
                              onDrop={handleDrop}
                              onClick={handleClick}
                            >
                              <span className="drop-zoon__icon">
                                <FontAwesomeIcon icon={faImage} />
                              </span>
                              <p className="drop-zoon__paragraph">
                                Drop your Payment screenshot here
                              </p>
                              <span
                                id="loadingText"
                                className="drop-zoon__loading-text"
                                style={{
                                  display: loadingTextVisible ? "block" : "none",
                                }}
                              >
                                Please Wait
                              </span>
                              <img
                                src=""
                                alt="loading"
                                id="previewImage"
                                className="drop-zoon__preview-image"
                                ref={previewImageRef}
                                style={{
                                  display: previewImageVisible ? "block" : "none",
                                }}
                                draggable="false"
                              />
                              <input
                                type="file"
                                id="fileInput"
                                className="drop-zoon__file-input"
                                accept="image/*"
                                onChange={handleFileChange}
                                ref={fileInputRef}

                              />
                            </div>
                            {error && <span className="text-danger">{error}</span>}

                            <div
                              id="fileDetails"
                              className={`upload-area__file-details file-details ${fileDetailsOpen ? "file-details--open" : ""
                                }`}
                            >
                              <h5 className="my-3">Uploaded File</h5>

                              <div
                                id="uploadedFile"
                                className={`uploaded-file ${uploadedFileOpen ? "uploaded-file--open" : ""
                                  }`}
                              >
                                <div className="uploaded-file__icon-container">
                                  <i className="bx bxs-file-blank uploaded-file__icon"></i>
                                  <span className="uploaded-file__icon-text">
                                    {uploadedFileType}
                                  </span>
                                </div>

                                <div
                                  id="uploadedFileInfo"
                                  className={`uploaded-file__info ${uploadedFileInfoActive
                                    ? "uploaded-file__info--active"
                                    : ""
                                    }`}
                                >
                                  <span className="uploaded-file__name">
                                    {uploadedFileName}
                                  </span>
                                  <span className="uploaded-file__counter">{`${uploadedFileCounter}%`}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <ul>
                            <li className="justify-content-between d-flex my-1"><span>Amount</span> <span className="fw-bold mx-2" >₹ {amountData} /-</span></li>
                            <li className="justify-content-between d-flex my-1"><span>2% extra on COD</span> <span className="fw-bold mx-2 text-success">+ {shipingCharge.toFixed(1)} /-</span></li>
                            <li className="justify-content-between d-flex my-1"><span>Advance Payment</span> <span className="fw-bold mx-2 text-danger">- ₹ {AdvancePaymnt.toFixed(1)} /-</span></li>
                            <hr />
                            <li className="justify-content-between d-flex"><span>Total Amount </span> <span className="fw-bold text-danger h5">₹ {Finalamt.toFixed(1)} /-</span></li>
                          </ul>
                        </>
                      )}

                      <button
                        className="contact_form_submit mt-5"
                        type="submit" disabled={loading}
                        onClick={handleSubmit(onSubmit)}
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
                      <div className="mt-4 text-center">
                        <Link className="text-danger" onClick={handlePayIssueShow}>Transaction Issue ? Click her</Link>
                      </div>
                    </Form>
                    <Modal show={PayIssue} onHide={handlePayIssueClose} >
                      <Modal.Header closeButton>
                        <Modal.Title>Transaction Issue</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form className="w-100 row justify-content-center" onSubmit={handlePayIssueSubmit(onPayIssueSubmit)}>
                          <div className="col-lg-11 my-2">
                            <label className="form-label">
                              Name
                            </label>
                            <input
                              placeholder="Enter Name"
                              type="text"
                              className="form-control"
                              {...registerPayIssue("name", { required: "Name is required" })}
                            />
                            {errors.name && <span className="text-danger">{errors.name.message}</span>}
                          </div>
                          <div className="col-lg-11 my-2">
                            <label className="form-label">
                              Mobile Number
                            </label>
                            <input
                              type="text"
                              className="form-control form-group"
                              placeholder="Mobile Number"
                              {...registerPayIssue("number", {
                                required: true,
                                pattern: /^[0-9]{10}$/, // Regex pattern for only numbers
                              })}
                            />
                            {errors.number && (
                              <span className="text-danger">
                                {
                                  errors.number.type === "required"
                                    ? "Please enter your mobile number"
                                    : "Please enter a valid mobile number" // Custom error message for pattern validation
                                }
                              </span>
                            )}
                          </div>
                          <div className="col-lg-11 my-2">
                            <label className="form-label">
                              Transaction ID
                            </label>
                            <input
                              placeholder="Enter Transaction ID"
                              type="text"
                              className="form-control"
                              {...registerPayIssue("transaction_id", { required: "Transaction ID is required" })}
                            />
                            {errors.transaction_id && <span className="text-danger">{errors.transaction_id.message}</span>}
                          </div>
                          <div className="col-lg-11 my-3">
                            <label className="form-label">
                              Write Transaction Issue
                            </label>
                            <textarea
                              className="form-control"
                              placeholder="Enter Transaction Issue..."
                              {...registerPayIssue("transaction_issue", { required: "Transaction Issue is required" })}
                              rows="3"
                            ></textarea>
                            {errors.transaction_issue && <span className="text-danger">{errors.transaction_issue.message}</span>}
                          </div>
                          <button type="submit" className="btn btn-primary w-auto">Submit</button>
                        </form>
                      </Modal.Body>
                    </Modal>
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
              <div className="contact_info_sec py-4">
                <h4 className="text-white text-center">SCANNER</h4>
                <div>
                  <img className="w-100 mb-3" src={scanner} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Transaction;
