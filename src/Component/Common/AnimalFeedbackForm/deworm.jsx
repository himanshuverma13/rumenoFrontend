import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { UserContext } from "../Modal/logusecont";
import { Modal } from "react-bootstrap";
import Cookies from "js-cookie";

const Deworm = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [deworm, setDeworm] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({
    worm_date: "",
    worm_report: "",
    endo_date: "",
    endo_name: "",
    endo_type: "",
    ecto_date: "",
    ecto_name: "",
    ecto_type: "",
    bath_date: "",
  });
  const apiUrl = `${process.env.REACT_APP_API}/farm_data/deworm`;
  const getMidCookies = JSON.parse(localStorage.getItem("loginDetails") ?? "[]");

  const handleOpenDialog = () => {
    setOpenDialog(true);
    setValue("worm_date", "");
    setValue("worm_report", "");
    setValue("endo_date", "");
    setValue("endo_name", "");
    setValue("endo_type", "");
    setValue("ecto_date", "");
    setValue("ecto_name", "");
    setValue("ecto_type", "");
    setValue("bath_date", "");
    setSelectedItem(null);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setValue("worm_date", "");
    setValue("worm_report", "");
    setValue("endo_date", "");
    setValue("endo_name", "");
    setValue("endo_type", "");
    setValue("ecto_date", "");
    setValue("ecto_name", "");
    setValue("ecto_type", "");
    setValue("bath_date", "");
    setSelectedItem(null);
  };

  
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async (id) => {
    try {
      const response = await axios.get(`${apiUrl}/${getMidCookies.mid}`,
        {
          headers: {
            'Authorization': `${getMidCookies.token}`
          }
        });
      setDeworm(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const onsubmit = async (data) => {
    if (selectedItem !== null) {
      // Edit existing item
      try {
        const response = await axios.put(`${apiUrl}/${deworm[selectedItem]._id}`, data,
          {
            headers: {
              'Authorization': `${getMidCookies.token}`
            }
          });
        const updatedMilkrec = [...deworm];
        updatedMilkrec[selectedItem] = response.data;
        fetchItems();
      } catch (error) {
        console.error("Error updating item:", error);
      }
    } else {
      // Add new item
      try {
    const payload = {...data,...{parentid:getMidCookies.mid}}
    console.log('payload: ', payload);
        const response = await axios.post(apiUrl, payload,
          {
            headers: {
              'Authorization': `${getMidCookies.token}`
            }
          });
        fetchItems();
      } catch (error) {
        console.error("Error adding item:", error);
      }
    }
    handleCloseDialog();
  };
  const handleEdit = (index) => {
    setValue("worm_date", deworm[index].wormdate);
    setValue("worm_report", deworm[index].wormreport);
    setValue("endo_date", deworm[index].endodate);
    setValue("endo_name", deworm[index].endoname);
    setValue("endo_type", deworm[index].endotype);
    setValue("ecto_date", deworm[index].ectodate);
    setValue("ecto_name", deworm[index].ectoname);
    setValue("ecto_type", deworm[index].ectotype);
    setValue("bath_date", deworm[index].bathdate);
    setSelectedItem(index);
    setOpenDialog(true);
  };

  const handleDelete = async(index) => {
    const deletedItem = deworm[index]; 
    const updatedData = [...deworm];
    updatedData.splice(index, 1);
    setDeworm(updatedData);
    console.log(deletedItem)
      try {
        const response = await axios.delete(`${apiUrl}/${deworm[index]._id}`,
          {
            headers: {
              'Authorization': `${getMidCookies.token}`
            }
          });
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <>
      <section className="bg-menu-theme">
        <div className="layout-wrapper layout-content-navbar">
          <div className="layout-container">
            <div className="layout-page">
              <div className="container-lg mt-4">
                <div>
                  <div>
                    <button
                      className="mt-3 btn btn-primary w-auto"
                      onClick={() => handleOpenDialog()}
                    >
                      Add Deworm
                    </button>
                    {deworm.map((item, index) => (
                      <div
                        className="row bg-light p-3 shadow row justify-content-evenly my-4"
                        key={index}
                      >
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Worm Report :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.worm_report}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Worm Date :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                          {new Date(item.worm_date).toLocaleDateString('en-IN')}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Endo Date :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                          {new Date(item.endo_date).toLocaleDateString('en-IN')}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Endo Name :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.endo_name}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Endo Type :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.endo_type}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Ecto Date :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                          {new Date(item.ecto_date).toLocaleDateString('en-IN')}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Ecto Name :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.ecto_name}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Ecto Type :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.ecto_type}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Animal Bath Date :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {new Date(item.bath_date).toLocaleDateString('en-IN')}
                          </span>
                        </span>
                        <span className="text-center mx-2">
                          <button
                            className="btn btn-warning w-auto mx-2"
                            onClick={() => handleEdit(index)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger w-auto mx-2"
                            onClick={() => handleDelete(index)}
                          >
                            Delete
                          </button>
                        </span>
                      </div>
                    ))}
                  </div>

                  <Modal show={openDialog} onHide={handleCloseDialog} size="xl">
                    <Modal.Header>
                      {selectedItem ? "Edit Item" : "Add New Item"}
                    </Modal.Header>
                    <Modal.Body>
                      <form onSubmit={handleSubmit(onsubmit)}>
                        <div className="row justify-content-around">
                          {/* <h2 className="text-center">KID DATA</h2> */}

                          <div className="col-lg-5 my-2">
                            <label className="form-label" for="wormreport">
                              Deworm Report
                            </label>
                            <input
                              name="wormreport"
                              placeholder="Deworm Report"
                              type="text"
                              id="wormreport"
                              className="form-control"
                              {...register("worm_report")}
                              value={formData.worm_report}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  worm_report: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="col-lg-5 my-2">
                            <label className="form-label" for="wormdate">
                              Deworm Date
                            </label>
                            <input
                              name="wormdate"
                              placeholder=" Deworm Date"
                              type="date"
                              id="wormdate"
                              className="form-control"
                              {...register("worm_date")}
                              value={formData.worm_date}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  worm_date: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="col-lg-5 my-2">
                            <label className="form-label" for="endoname">
                              Deworm Name (Endo Parasite)
                            </label>
                            <input
                              name="endoname"
                              placeholder="Endo Name"
                              type="text"
                              id="endoname"
                              className="form-control"
                              {...register("endo_name")}
                              value={formData.endo_name}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  endo_name: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="col-lg-5 my-2">
                            <label className="form-label" for="ectoname">
                              Deworm Name (Ecto Parasite)
                            </label>
                            <input
                              name="ectoname"
                              placeholder="Ecto Name"
                              type="text"
                              id="ectoname"
                              className="form-control"
                              {...register("ecto_name")}
                              value={formData.ecto_name}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  ecto_name: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="col-lg-5 my-2">
                            <label className="form-label" for="endodate">
                              Endo Date
                            </label>
                            <input
                              name="endodate"
                              placeholder="Endo Date"
                              type="date"
                              id="endodate"
                              className="form-control"
                              {...register("endo_date")}
                              value={formData.endo_date}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  endo_date: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="col-lg-5 my-2">
                            <label className="form-label" for="ectodate">
                              Ecto Date
                            </label>
                            <input
                              name="ectodate"
                              placeholder="Ecto Date"
                              type="date"
                              id="ectodate"
                              className="form-control"
                              {...register("ecto_date")}
                              value={formData.ecto_date}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  ecto_date: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="col-lg-5 my-2">
                            <label className="form-label" htmlFor="endotype">
                              Endo Type
                            </label>
                            <select
                              className="form-select"
                              placeholder="Open this and select endo type"
                              aria-label="Default select example"
                              {...register("endo_type")}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  endo_type: e.target.value,
                                })
                              }
                            >
                              <option disabled>
                                Open this and select endo type
                              </option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </div>
                          
                          
                          <div className="col-lg-5 my-2">
                            <label className="form-label" htmlFor="ectotype">
                              Ecto Type
                            </label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              {...register("ecto_type")}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  ecto_type: e.target.value,
                                })
                              }
                            >
                              <option disabled>
                                Open this and select ecto type
                              </option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </div>

                          <div className="col-lg-5 my-2">
                            <div>
                              <label
                                className="form-label px-2"
                                htmlFor="bathdate"
                              >
                                Animal Bath Ectoparasite Date
                              </label>
                            </div>
                            <input
                              {...register("bath_date")}
                              placeholder="Animal Bath Ectoparasite Date"
                              type="date"
                              id="bathdate"
                              className="form-control"
                              value={formData.bath_date}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  bath_date: e.target.value,
                                })
                              }
                            />
                          </div>

                          <div className="text-center">
                            <button
                              type="submit"
                              className="btn btn-primary w-auto mt-3"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Deworm;
