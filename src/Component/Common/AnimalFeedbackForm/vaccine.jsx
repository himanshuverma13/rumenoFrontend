import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { UserContext } from "../Modal/logusecont";
import { Modal } from "react-bootstrap";
import Cookies from "js-cookie";

const VaccineRecord = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { setUcvaccine } = useContext(UserContext);
  const [vaccine, setVacine] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const apiUrl = `${process.env.REACT_APP_API}/farm_data/vaccine`;
  const getMidCookies = JSON.parse(localStorage.getItem("loginDetails") ?? "[]");

  const handleOpenDialog = (item = {}) => {
    setOpenDialog(true);
    setValue("vaccine", "");
    setValue("vaccine_date", "");
    setSelectedItem(null);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setValue("vaccine", "");
    setValue("vaccine_date", "");
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
      setVacine(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };


  const onsubmit = async (data) => {
    if (selectedItem !== null) {
      // Edit existing item
      try {
        const response = await axios.put(`${apiUrl}/${vaccine[selectedItem]._id}`, data,
          {
            headers: {
              'Authorization': `${getMidCookies.token}`
            }
          });
        const updatedVaccine = [...vaccine];
        updatedVaccine[selectedItem] = response.data;
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
    setValue("vaccine", vaccine[index].vaccine);
    setValue("vaccine_date", vaccine[index].vaccine_date);
    setSelectedItem(index);
    setOpenDialog(true);
  };

  const handleDelete = async(index) => {
    const deletedItem = vaccine[index]; 
    const updatedData = [...vaccine];
    updatedData.splice(index, 1);
    setVacine(updatedData);
    console.log(deletedItem); 
    try {
      const response = await axios.delete(`${apiUrl}/${vaccine[index]._id}`,
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
                      Add Vaccine
                    </button>
                    {vaccine.map((item, index) => (
                      <div
                        className="row bg-light p-3 shadow row justify-content-evenly my-4"
                        key={item.id}
                      >
                        <span className="text-center px-4 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Vaccine Name :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.vaccine}
                          </span>
                        </span>
                        <span className="text-center px-4 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Vaccine Date :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                          {new Date(item.vaccine_date).toLocaleDateString('en-IN')}
                          </span>
                        </span>

                        <span className="text-center mx-2">
                          <button
                            className="w-auto mx-2 btn btn-warning "
                            onClick={() => handleEdit(index)}
                          >
                            Edit
                          </button>
                          <button
                            className="w-auto mx-2 btn btn-danger "
                            onClick={() => handleDelete(index)}
                          >
                            Delete
                          </button>
                        </span>
                      </div>
                    ))}
                  </div>

                  <Modal show={openDialog} onHide={handleCloseDialog}>
                    <Modal.Header>
                      {selectedItem !== null ? "Edit Item" : "Add New Item"}
                    </Modal.Header>
                    <Modal.Body>
                      <form onSubmit={handleSubmit(onsubmit)}>
                        <div className="row justify-content-around">
                          
                          <div className="col-lg-5 my-2">
                            <label className="form-label" for="vaccine">
                            Vaccine Name
                            </label>
                            <input
                              type="text"
                              placeholder="Select Vaccine"
                              id="vaccine"
                              className="form-control"
                              list="vaccineOptions"
                              value={vaccine.vaccine}
                              {...register("vaccine")}
                            />
                            <datalist id="vaccineOptions">
                              <option value="PPP">PPP</option>
                              <option value="FMD">FMD</option>
                              <option value="Booster">Booster</option>
                              <option value="Haemorrhagic Septicaemia">
                                Haemorrhagic Septicaemia
                              </option>
                              <option value="Black Quater">Black Quater</option>
                              <option value="Anthrax">Anthrax</option>
                            </datalist>
                          </div>

                          <div className="col-lg-5 my-2">
                            <div>
                              <label
                                className="form-label px-2"
                                htmlFor="vaccinedate"
                              >
                                Vaccine Date
                              </label>
                            </div>
                            <input
                              placeholder="vaccine Date"
                              type="date"
                              id="vaccinedate"
                              className="form-control"
                              value={vaccine.vaccinedate}
                              {...register("vaccine_date")}
                            />
                          </div>

                          <button
                            type="submit"
                            className="btn btn-primary w-auto mt-3"
                          >
                            Submit
                          </button>
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

export default VaccineRecord;
