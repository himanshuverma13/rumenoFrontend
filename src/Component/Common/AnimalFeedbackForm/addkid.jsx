import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { UserContext } from "../Modal/logusecont";
import Modal from "react-bootstrap/Modal";
import MilkRecord from "./milkrecord";
import { prettyFormat } from "@testing-library/react";
import Cookies from "js-cookie";

const KidAddForm = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { FarmDataUMKid } = useContext(UserContext);
  const [addkiddata, setaddkiddata] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const apiUrl = `${process.env.REACT_APP_API}/farm_data/child`;
  const getparentidCookies = JSON.parse(localStorage.getItem("loginDetails") ?? "[]");
  const getSelectdAnimal = JSON.parse(localStorage.getItem("SelectedAnimal") ?? "[]");

  const handleOpenDialog = () => {
    fetchItems();
    setModalIsOpen(true);
    setValue("age", "");
    setValue("uniquename", "");
    setValue("date", "");
    setValue("gender", "");
    setValue("breed", "");
    setValue("kid_code", "");
    setValue("kid_score", "");
    setValue("birth_type", "");
    setValue("weight", "");
    setValue("wean_date", "");
    setValue("wean_weight", "");
    setValue("mother_wean_weight", "");
    setValue("mother_wean_date", "");
    setValue("castration", "");
    setValue("kid_comment", "");
    
  };

  const handleCloseDialog = () => {
    setModalIsOpen(false);
    setValue("age", "");
    setValue("uniquename", "");
    setValue("date", "");
    setValue("gender", "");
    setValue("breed", "");
    setValue("kid_code", "");
    setValue("kid_score", "");
    setValue("birth_type", "");
    setValue("weight", "");
    setValue("wean_date", "");
    setValue("wean_weight", "");
    setValue("mother_wean_weight", "");
    setValue("mother_wean_date", "");
    setValue("castration", "");
    setValue("kid_comment", "");
    
    setSelectedItem(null);
  };



  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async (id) => {
    try {
      const response = await axios.get(`${apiUrl}/${getparentidCookies.mid}`,
        {
          headers: {
            'Authorization': `${getparentidCookies.token}`
          }
        });
      setaddkiddata(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const onsubmit = async (data) => {
    console.log('data: ', data,FarmDataUMKid);
    fetchItems();
    if (selectedItem !== null) {
      // Edit existing data
      try {
        const response = await axios.put(`${apiUrl}/${addkiddata[selectedItem]._id}`, data,
          {
            headers: {
              'Authorization': `${getparentidCookies.token}`
            }
          })
        console.log(response.data)
        fetchItems();
      } catch (error) {
        console.log(error)
      }
      setSelectedItem(null);
    } else {
      // Add new data
    const payload = {...data,...{parentid:getparentidCookies.mid,uid:getparentidCookies.uID,animal:getSelectdAnimal}}
    console.log('payload: ', payload);
      try {
        const response = await axios.post( `${apiUrl}`, payload,
          {
            headers: {
              'Authorization': `${getparentidCookies.token}`
            }
          })
        console.log(response.data)
        fetchItems();
      } catch (error) {
        console.log(error)
      }
    }
    setModalIsOpen(false);
  };


  const handleEdit = (index) => {
    setValue("age", addkiddata[index].age);
    setValue("uniquename", addkiddata[index].uniquename);
    setValue("date", addkiddata[index].date);
    setValue("gender", addkiddata[index].gender);
    setValue("breed", addkiddata[index].breed);
    setValue("kid_code", addkiddata[index].kid_code);
    setValue("kid_score", addkiddata[index].kid_score);
    setValue("birth_type", addkiddata[index].birth_type);
    setValue("weight", addkiddata[index].weight);
    setValue("wean_date", addkiddata[index].wean_date);
    setValue("wean_weight", addkiddata[index].wean_weight);
    setValue("mother_wean_weight", addkiddata[index].mother_wean_weight);
    setValue("mother_wean_date", addkiddata[index].mother_wean_date);
    setValue("castration", addkiddata[index].castration);
    setValue("kid_comment", addkiddata[index].kid_comment);
    setSelectedItem(index);
    setModalIsOpen(true);
  };

  const handleDelete = async(index) => {
    const deletedItem = addkiddata[index]; 
    const updatedData = [...addkiddata];
    updatedData.splice(index, 1);
    setaddkiddata(updatedData);
    console.log(deletedItem); 
    try {
      const response = await axios.delete(`${apiUrl}/${addkiddata[index]._id}`,
        {
          headers: {
            'Authorization': `${getparentidCookies.token}`
          }
        })
      console.log(response.data)
  } catch (error) {
      console.log(error)
  }
  }

  return (
    <>
      <section className="bg-menu-theme">
        <div className="layout-wrapper layout-content-navbar">
          <div className="layout-container">
            <div className="layout-page">
              <div className="container-lg mt-4">
                <div>
                  <button
                    className="mt-3 btn btn-primary w-auto"
                    onClick={() => handleOpenDialog()}
                  >
                    Add Kid
                  </button>
                  <div className="">
                    {addkiddata.map((item, index) => (
                      <>
                        <div
                          className="row bg-light p-3 shadow row justify-content-evenly my-4"
                          key={item.id}
                        >
                          <span className="text-center px-0 py-2 fs-2 col-lg-3 ">
                            <strong className="d-block text-uppercase">
                              {item.uniquename}
                            </strong>
                          </span>
                          <span className="text-center px-5 py-4 col-lg-3 ">
                            <strong className="d-block animal-bg2">
                              Age :
                            </strong>{" "}
                            <span className="animal-bg1 d-block px-2">
                              {item.age}
                            </span>
                          </span>
                          <span className="text-center px-5 py-4 col-lg-3 ">
                            <strong className="d-block animal-bg2">
                              Birth Date :
                            </strong>{" "}
                            <span className="animal-bg1 d-block px-2">
                          {new Date(item.date).toLocaleDateString('en-IN')}
                            </span>
                          </span>
                          <span className="text-center px-5 py-4 col-lg-3 ">
                            <strong className="d-block animal-bg2">
                              Gender :
                            </strong>{" "}
                            <span className="animal-bg1 d-block px-2">
                              {item.gender}
                            </span>
                          </span>
                          <span className="text-center px-5 py-4 col-lg-3 ">
                            <strong className="d-block animal-bg2">
                              Kid Code :
                            </strong>{" "}
                            <span className="animal-bg1 d-block px-2">
                              {item.kid_code}
                            </span>
                          </span>
                          <span className="text-center px-5 py-4 col-lg-3 ">
                            <strong className="d-block animal-bg2">
                              Kid Score :
                            </strong>{" "}
                            <span className="animal-bg1 d-block px-2">
                              {item.kid_score}
                            </span>
                          </span>
                          <span className="text-center px-5 py-4 col-lg-3 ">
                            <strong className="d-block animal-bg2">
                              Birth Type :
                            </strong>{" "}
                            <span className="animal-bg1 d-block px-2">
                              {item.birth_type}
                            </span>
                          </span>
                          <span className="text-center px-5 py-4 col-lg-3 ">
                            <strong className="d-block animal-bg2">
                              Kid Weight :
                            </strong>{" "}
                            <span className="animal-bg1 d-block px-2">
                              {item.weight}
                            </span>
                          </span>
                          <span className="text-center px-5 py-4 col-lg-3 ">
                            <strong className="d-block animal-bg2">
                              Wean Date :
                            </strong>{" "}
                            <span className="animal-bg1 d-block px-2">
                              {new Date(item.wean_date).toLocaleDateString('en-IN')}
                            </span>
                          </span>
                          <span className="text-center px-5 py-4 col-lg-3 ">
                            <strong className="d-block animal-bg2">
                              Wean Weight :
                            </strong>{" "}
                            <span className="animal-bg1 d-block px-2">
                              {item.wean_weight}
                            </span>
                          </span>
                          <span className="text-center px-5 py-4 col-lg-3 ">
                            <strong className="d-block animal-bg2">
                              Mother Wean Weight :
                            </strong>{" "}
                            <span className="animal-bg1 d-block px-2">
                              {item.mother_wean_weight}
                            </span>
                          </span>
                          <span className="text-center px-5 py-4 col-lg-3 ">
                            <strong className="d-block animal-bg2">
                              Mother Wean Date :
                            </strong>{" "}
                            <span className="animal-bg1 d-block px-2">
                              {new Date(item.mother_wean_date).toLocaleDateString('en-IN')}
                            </span>
                          </span>
                          <span className="text-center px-5 py-4 col-lg-3 ">
                            <strong className="d-block animal-bg2">
                              Castration :
                            </strong>{" "}
                            <span className="animal-bg1 d-block px-2">
                              {item.castration}
                            </span>
                          </span>
                          <span className="text-center px-5 py-4 col-lg-3">
                            <strong className="d-block animal-bg2">
                              Birth Weight :
                            </strong>{" "}
                            <span className="animal-bg1 d-block px-2">
                              {item.birth_weight}
                            </span>
                          </span>
                          <span className="text-center px-5 py-4 col-lg-3 ">
                            <strong className="d-block animal-bg2">
                              Breed :
                            </strong>{" "}
                            <span className="animal-bg1 d-block px-2">
                              {item.breed}
                            </span>
                          </span>

                          <span className="text-center px-5 py-4 col-lg-3">
                            <strong className="d-block animal-bg2">
                              Mother Age :
                            </strong>{" "}
                            <span className="animal-bg1 d-block px-2">
                              {item.mother_age}
                            </span>
                          </span>

                          <span className="text-center px-5 py-4 col-lg-3 ">
                            <strong className="d-block animal-bg2">
                              Comment :
                            </strong>{" "}
                            <span className="animal-bg1 d-block px-2">
                              {item.kid_comment}
                            </span>
                          </span>
                          <span className="text-center mx-2 py-3  ">
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
                      </>
                    ))}
                  </div>

                  <Modal
                    show={modalIsOpen}
                    onHide={handleCloseDialog}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    size="xl"
                  >
                    <Modal.Header>
                      <h4>Kid Details</h4>
                    </Modal.Header>
                    <Modal.Body>
                      <form onSubmit={handleSubmit(onsubmit)}>
                        <div className="row justify-content-around">
                          {/* <h2 className="text-center">KID DATA</h2> */}
                          <div className="col-lg-5 my-2">
                            <label className="form-label" for="uniquename">
                              Unique Name
                            </label>
                            <input
                              name="uniquename"
                              placeholder="Unique Name"
                              type="textt"
                              id="uniquename"
                              className="form-control"
                              value={addkiddata.uniquename}
                              {...register("uniquename")}
                            />
                          </div>
                          <div className="col-lg-5 my-2">
                            <label className="form-label" for="kidage">
                              Age
                            </label>
                            <input
                              name="kidage"
                              placeholder="Kid Age"
                              type="textt"
                              id="kidage"
                              className="form-control"
                              value={addkiddata.age}
                              {...register("age")}
                            />
                          </div>
                          <div className="col-lg-5 my-2">
                            <label className="form-label" for="kidweight">
                              Kid Weight
                            </label>
                            <input
                              name="kidweight"
                              placeholder="Kid Weight"
                              type="textt"
                              id="kidweight"
                              className="form-control"
                              value={addkiddata.kidw_eight}
                              {...register("weight")}
                            />
                          </div>
                          <div className="col-lg-5 my-2">
                            <label className="form-label" for="motherage">
                              Age of Mother
                            </label>
                            <input
                              name="motherage"
                              placeholder="Mother Age"
                              type="number"
                              id="motherage"
                              className="form-control"
                              value={addkiddata.mother_age}
                              {...register("mother_age")}
                            />
                          </div>

                          <div className="col-lg-5 my-2">
                            <label className="form-label" for="selectbreed">
                              Select Breed
                            </label>
                            <input
                              type="text"
                              placeholder="Select Breed"
                              id="selectbreed"
                              className="form-control"
                              list="breedOptions"
                              value={addkiddata.breed}
                              {...register("breed")}
                            />
                            <datalist id="breedOptions">
                              <option value="Barbari">Barbari</option>
                              <option value="Jakhrana">Jakhrana</option>
                              <option value="jamunapari">jamunapari</option>
                              <option value="Beetal">Beetal</option>
                              <option value="Unidentified">Unidentified</option>
                            </datalist>
                          </div>
                          <div className="col-lg-5 my-2">
                            <label className="form-label" for="birthdate">
                              Birth Date
                            </label>
                            <input
                              name="birthdate"
                              placeholder="Birth Date"
                              type="date"
                              id="birthdate"
                              className="form-control"
                              value={addkiddata.date}
                              {...register("date")}
                            />
                          </div>

                          <div className="col-lg-5 my-2">
                            <label
                              className="form-label d-block"
                              htmlFor="kgender"
                            >
                              Gender
                            </label>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="kgender"
                                id="inlineRadio1"
                                value="doe"
                                {...register("gender")}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio1"
                              >
                                Doe
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="kgender"
                                id="inlineRadio2"
                                value="buck"
                                {...register("gender")}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio2"
                              >
                                Buck
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="kgender"
                                id="inlineRadio3"
                                value="wether"
                                {...register("gender")}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio3"
                              >
                                Wether
                              </label>
                            </div>
                          </div>

                          <div className="col-lg-5 my-2">
                            <label className="form-label" htmlFor="kidcode">
                              Kidding Code
                            </label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              {...register("kid_code")}
                            >
                              <option  disabled>
                                Open this and select kidding code
                              </option>
                              <option value="NO ASSISTANCE">
                                NO ASSISTANCE
                              </option>
                              <option value="SLIGHT ASSISTANCE">
                                SLIGHT ASSISTANCE
                              </option>
                              <option value="jamunapari">jamunapari</option>
                              <option value="HARD PULL">HARD PULL</option>
                              <option value="ABNORMAL PRESENTATION">
                                ABNORMAL PRESENTATION
                              </option>
                            </select>
                          </div>
                          <div className="col-lg-5 my-2">
                            <label className="form-label" htmlFor="kidscore">
                              Kidding Score
                            </label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              {...register("kid_score")}
                            >
                              <option defaultValue>
                                Open this and select kidding score
                              </option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </div>

                          <div className="col-lg-5 my-2">
                            <label className="form-label" htmlFor="birthtype">
                              Birth Type
                            </label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              {...register("birth_type")}
                            >
                              <option value="Single">Single</option>
                              <option value="Twin">Twin</option>
                              <option value="Triple">Triple</option>
                              <option value="Quad">Quad</option>
                            </select>
                          </div>
                          <div className="col-lg-5 my-2">
                            <label className="form-label" htmlFor="birthweight">
                              Birth Weight
                            </label>
                            <input
                              name="birthweight"
                              placeholder="Birth Weight"
                              type="number"
                              id="birthweight"
                              className="form-control"
                              value={addkiddata.birth_weight}
                              {...register("birth_weight")}
                            />
                          </div>
                          <div className="col-lg-5 my-2">
                            <div>
                              <label
                                className="form-label px-2"
                                htmlFor="weandate"
                              >
                                Wean Date
                              </label>
                              <span className="h-6">
                                ( when animal start eating food)
                              </span>
                            </div>
                            <input
                              {...register("wean_date")}
                              placeholder="Wean Date"
                              type="date"
                              id="weandate"
                              value={addkiddata.wean_date}
                              className="form-control"
                            />
                          </div>

                          <div className="col-lg-5 my-2">
                            <label
                              className="form-label px-2"
                              htmlFor="weanweight"
                            >
                              Wean Weight
                            </label>
                            <input
                              {...register("wean_weight")}
                              placeholder="Wean Weight"
                              type="number"
                              id="weanweight"
                              value={addkiddata.wean_weight}
                              className="form-control"
                            />
                          </div>

                          <div className="col-lg-5 my-2">
                            <div className="">
                              <label
                                className="form-label px-2 m-0 d-block"
                                htmlFor="motherweanweight"
                              >
                                Mother Weight At Wean
                              </label>
                              <span className="">
                                ( weight of mother goat when child starts eating
                                food)
                              </span>
                            </div>
                            <input
                              {...register("mother_wean_weight")}
                              placeholder="Mother Weight at Wean"
                              type="number"
                              id="motherweanweight"
                              value={addkiddata.mother_wean_weight}
                              className="form-control"
                            />
                          </div>
                          <div className="col-lg-5 my-2">
                            <div>
                              <label
                                className="form-label px-2 m-0 d-block"
                                htmlFor="motherweandate"
                              >
                                Mother Wean Date
                              </label>
                              <span className="h-6">
                                ( mother wean date when child start eating food)
                              </span>
                            </div>
                            <input
                              name="motherweandate"
                              placeholder="Wean Date"
                              type="date"
                              id="motherweandate"
                              className="form-control"
                              value={addkiddata.mother_wean_date}
                              {...register("mother_wean_date")}
                            />
                          </div>
                          <div className="col-lg-5 my-2">
                            <div>
                              <label
                                className="form-label px-2"
                                htmlFor="castration"
                              >
                                Castration Date
                              </label>
                              <span className="h-6">
                                (not able to reproduce)
                              </span>
                            </div>
                            <input
                              name="castration"
                              placeholder="Castration Date"
                              type="date"
                              id="forcastration"
                              className="form-control"
                              value={addkiddata.castration}
                              {...register("castration")}
                            />
                          </div>
                          <div className="col-lg-5 my-2">
                            <label
                              htmlFor="exampleFormControlTextarea1"
                              className="form-label"
                            >
                              Any Comment
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              value={addkiddata.kid_comment}
                              {...register("kid_comment")}
                              rows="3"
                            ></textarea>
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

export default KidAddForm;
