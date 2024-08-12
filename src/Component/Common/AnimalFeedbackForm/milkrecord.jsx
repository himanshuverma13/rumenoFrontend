import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { UserContext } from "../Modal/logusecont";
import { Modal } from "react-bootstrap";
import Cookies from "js-cookie";

const MilkRecord = () => {
  const { register, handleSubmit, setValue, reset } = useForm();
  const { setUcmilkrec, setUcaddkid ,FarmDataUMKid} = useContext(UserContext);
  const [milkrec, setMilkrec] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const apiUrl = `${process.env.REACT_APP_API}/farm_data/milk`;
  const getMidCookies = JSON.parse(localStorage.getItem("loginDetails") ?? "[]");

  const handleOpenDialog = () => {
    setOpenModal(true);
    reset();
    setSelectedItem(null);
  };

  const handleCloseDialog = () => {
    setOpenModal(false);
    reset();
    setSelectedItem(null);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get(`${apiUrl}/${getMidCookies.mid}`,
        {
          headers: {
            'Authorization': `${getMidCookies.token}`
          }
        });
      setMilkrec(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const onSubmit = async (data) => {
    if (selectedItem !== null) {
      // Edit existing item
      try {
        const response = await axios.put(`${apiUrl}/${milkrec[selectedItem]._id}`, data,
          {
            headers: {
              'Authorization': `${getMidCookies.token}`
            }
          });
        const updatedMilkrec = [...milkrec];
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
    const { milk_for_kid, milk_volume, milk_date } = milkrec[index];
    setValue('milk_for_kid', milk_for_kid);
    setValue('milk_volume', milk_volume);
    setValue('milk_date', milk_date);
    setSelectedItem(index);
    setOpenModal(true);
  };

  const handleDelete = async (index) => {

    try {
      const response = await axios.delete(`${apiUrl}/${milkrec[index].parentid}`,
        {
          headers: {
            'Authorization': `${getMidCookies.token}`
          }
        });
      console.log(response.data);
      setMilkrec(milkrec.filter((_, i) => i !== index));
    } catch (error) {
      console.error('Error deleting item:', error);
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
                      Add Milk Record
                    </button>
                    {milkrec.map((item, index) => (
                      <div className="row bg-light p-3 shadow row justify-content-evenly my-4" key={item._id}>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Number of kids  :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.milk_for_kid}
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Milk Volume  :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {item.milk_volume} Liter
                          </span>
                        </span>
                        <span className="text-center px-5 py-4 col-lg-3 ">
                          <strong className="d-block animal-bg2">
                            Milk Date :
                          </strong>{" "}
                          <span className="animal-bg1 d-block px-2">
                            {new Date(item.milk_date).toLocaleDateString('en-IN')}
                          </span>
                        </span>

                        <span className="text-center mx-2">
                          <button className="btn btn-warning w-auto mx-2" onClick={() => handleEdit(index)}>
                            Edit
                          </button>
                          <button className="btn btn-danger w-auto mx-2" onClick={() => handleDelete(index)}>
                            Delete
                          </button>
                        </span>
                      </div>
                    ))}
                  </div>



                  <Modal show={openModal} onHide={handleCloseDialog} size="lg">
                    <Modal.Header>
                      {selectedItem !== null ? "Edit Item" : "Add New Item"}
                    </Modal.Header>
                    <Modal.Body>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row justify-content-around">
                          {/* <h2 className="text-center">KID DATA</h2> */}

                          <div className="col-lg-5 my-2">
                            <label className="form-label" htmlFor="milkvolume">
                              Milk Volume
                            </label>
                            <input
                              name="milkvolume"
                              placeholder="Milk Volume in liter"
                              type="number"
                              id="milkvolume"
                              className="form-control"
                              value={milkrec.milkvolume}
                              {...register("milk_volume")}

                            />
                          </div>

                          <div className="col-lg-5 my-2">
                            <label className="form-label" htmlFor="milkforkid">
                              Number of Kids
                            </label>
                            <input
                              name="milkforkid"
                              placeholder="Number of Kids"
                              type="number"
                              id="milkforkid"
                              className="form-control"
                              value={milkrec.milkforkid}
                              {...register("milk_for_kid")}

                            />
                          </div>



                          <div className="col-lg-5 my-2">
                            <div>
                              <label
                                className="form-label px-2"
                                htmlhtmlfor="milkdate"
                              >
                                Date
                              </label>

                            </div>
                            <input
                              placeholder="Date"
                              type="date"
                              id="milkdate"
                              className="form-control"
                              value={milkrec.milkdate}
                              {...register("milk_date")}
                            />
                          </div>


                          <div className="text-center"><button
                            type="submit"
                            className="btn btn-primary w-auto mt-3"
                          >
                            Submit
                          </button></div>
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

export default MilkRecord;


