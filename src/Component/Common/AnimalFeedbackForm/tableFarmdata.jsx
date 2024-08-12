import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import Cookies from "js-cookie";
import axios from 'axios';

const TableFarmData = ({ showFarmTableModal, handleCloseFarmTableModal }) => {
    const apiUrl = `${process.env.REACT_APP_API}`;
    const getUserIdCookies = JSON.parse(localStorage.getItem("loginDetails") ?? "[]");
    const getSelectdAnimal = JSON.parse(localStorage.getItem("SelectedAnimal") ?? "[]");
    const [milkrec, setMilkrec] = useState([]);
    const [addkiddata, setaddkiddata] = useState([]);
    const [breeddata, setBreeddata] = useState([]);
    const [deworm, setDeworm] = useState([]);
    const [farmHygine, setFarmhygine] = useState([]);
    const [postWean, setPostWean] = useState([]);
    const [vaccine, setVacine] = useState([]);


    useEffect(() => {
        fetchItems();
        console.log(milkrec)

    }, []);

    const fetchItems = async (mid) => {
        try {
            const response = await axios.get(`${apiUrl}/farm_data/parent/${getUserIdCookies.uID}?name=${getSelectdAnimal}`,
                {
                    headers: {
                        'Authorization': `${getUserIdCookies.token}`
                    }
                }
            );
            // console.log('response: ', response);
            setapiData(response.data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
        try {
            const response = await axios.get(`${apiUrl}/farm_data/milk/${mid}`,
                {
                    headers: {
                        'Authorization': `${getUserIdCookies.token}`
                    }
                });
            setMilkrec(response.data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
        try {
            const response = await axios.get(`${apiUrl}/farm_data/child/${mid}`,
                {
                    headers: {
                        'Authorization': `${getUserIdCookies.token}`
                    }
                });
            setaddkiddata(response.data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
        try {
            const response = await axios.get(`${apiUrl}/farm_data/heat/${mid}`,
                {
                    headers: {
                        'Authorization': `${getUserIdCookies.token}`
                    }
                });
            setBreeddata(response.data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
        try {
            const response = await axios.get(`${apiUrl}/farm_data/deworm/${mid}`,
                {
                    headers: {
                        'Authorization': `${getUserIdCookies.token}`
                    }
                });
            setDeworm(response.data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
        try {
            const response = await axios.get(`${apiUrl}/farm_data/sanitation/${mid}`,
                {
                    headers: {
                        'Authorization': `${getUserIdCookies.token}`
                    }
                });
            setFarmhygine(response.data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
        try {
            const response = await axios.get(`${apiUrl}/farm_data/wean/${mid}`,
                {
                    headers: {
                        'Authorization': `${getUserIdCookies.token}`
                    }
                });
            setPostWean(response.data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
        try {
            const response = await axios.get(`${apiUrl}/farm_data/vaccine/${mid}`,
                {
                    headers: {
                        'Authorization': `${getUserIdCookies.token}`
                    }
                });
            setVacine(response.data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    const [showModal, setShowModal] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [apiData, setapiData] = useState();

    // Function to handle row click
    const handleRowClick = (item) => {
        setSelectedRow(item);
        setShowModal(true);
        fetchItems(item._id);

    };

    // Function to handle modal close
    const handleClose = () => setShowModal(false);

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };


    return (
        <>
            <section className=''>
                <Modal className='p-0' size='xl' show={showFarmTableModal} onHide={handleCloseFarmTableModal}>
                    <Modal.Header className='' closeButton>
                        <Modal.Title>
                            FARM DATA TABLE
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='table-responsive-sm'>
                        <table className="table table-striped">
                            <thead>
                                <tr className=''>
                                    <th className='text-danger text-center' scope="col">NAME</th>
                                    <th className='text-danger text-center' scope="col">AGE</th>
                                    <th className='text-danger text-center' scope="col">GENDER</th>
                                    <th className='text-danger text-center' scope="col">HEIGHT</th>
                                    <th className='text-danger text-center' scope="col">WEIGHT</th>
                                </tr>
                            </thead>
                            <tbody>
                                {apiData?.map((item, index) => (
                                    <tr key={index} className='pe-auto' onClick={() => handleRowClick(item)}>
                                        <th className="text-center user-select-none">{item.uniquename}</th>
                                        <td className="text-center user-select-none">{item.age}</td>
                                        <td className="text-center user-select-none">{item.gender}</td>
                                        <td className="text-center user-select-none">{item.height} Feet</td>
                                        <td className="text-center user-select-none">{item.weight} KG</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {selectedRow && (
                            <Modal fullscreen className='p-0' show={showModal} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title className='fw-bold text-danger'>Animal Detail</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className='py-0 mt-2'>
                                    <section className=" ">
                                        <div className="">
                                            <div className="row">
                                                <div className="">
                                                    <ul className="nav nav-tabs" id="myTabs">
                                                        <li className="nav-item">
                                                            <a
                                                                className={`nav-link fw-bold ${activeTab === 1 ? "active bg-secondary text-white" : ""}`}
                                                                onClick={() => handleTabClick(1)}
                                                                data-toggle="tab"
                                                                href="#tab1"
                                                            >
                                                                Kid
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a
                                                                className={`nav-link fw-bold ${activeTab === 6 ? "active bg-secondary text-white" : ""}`}
                                                                onClick={() => handleTabClick(6)}
                                                                data-toggle="tab"
                                                                href="#tab6"
                                                            >
                                                                Post Wean
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a
                                                                className={`nav-link fw-bold ${activeTab === 3 ? "active bg-secondary text-white" : ""}`}
                                                                onClick={() => handleTabClick(3)}
                                                                data-toggle="tab"
                                                                href="#tab3"
                                                            >
                                                                Milk
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a
                                                                className={`nav-link fw-bold ${activeTab === 2 ? "active bg-secondary text-white" : ""}`}
                                                                onClick={() => handleTabClick(2)}
                                                                data-toggle="tab"
                                                                href="#tab2"
                                                            >
                                                                Vaccine
                                                            </a>
                                                        </li>

                                                        <li className="nav-item">
                                                            <a
                                                                className={`nav-link fw-bold ${activeTab === 4 ? "active bg-secondary text-white" : ""}`}
                                                                onClick={() => handleTabClick(4)}
                                                                data-toggle="tab"
                                                                href="#tab4"
                                                            >
                                                                Deworm
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a
                                                                className={`nav-link fw-bold ${activeTab === 8 ? "active bg-secondary text-white" : ""}`}
                                                                onClick={() => handleTabClick(8)}
                                                                data-toggle="tab"
                                                                href="#tab8"
                                                            >
                                                                Estrus Heat
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a
                                                                className={`nav-link fw-bold ${activeTab === 7 ? "active bg-secondary text-white" : ""}`}
                                                                onClick={() => handleTabClick(7)}
                                                                data-toggle="tab"
                                                                href="#tab7"
                                                            >
                                                                Farm Sanitation
                                                            </a>
                                                        </li>
                                                    </ul>

                                                    {/* Tab panes */}
                                                    <div className="tab-content">
                                                        <div
                                                            id="tab1"
                                                            className={`tab-pane fade ${activeTab === 1 ? "show active" : ""
                                                                }`}
                                                            role="tabpanel"
                                                        >
                                                            <table className="table table-striped table-bordered mt-2 border-top">
                                                                <thead className=''>
                                                                    <tr>
                                                                        <th className='text-center align-middle' scope="col">#</th>
                                                                        <th className='text-center align-middle' scope="col">Age</th>
                                                                        <th className='text-center align-middle' scope="col">Uniquename</th>
                                                                        <th className='text-center align-middle' scope="col">Date</th>
                                                                        <th className='text-center align-middle' scope="col">Gender</th>
                                                                        <th className='text-center align-middle' scope="col">Breed</th>
                                                                        <th className='text-center align-middle' scope="col">Kid Code</th>
                                                                        <th className='text-center align-middle' scope="col">Kid Score</th>
                                                                        <th className='text-center align-middle' scope="col">Birth Type</th>
                                                                        <th className='text-center align-middle' scope="col">Weight</th>
                                                                        <th className='text-center align-middle' scope="col">Wean Date</th>
                                                                        <th className='text-center align-middle' scope="col">Wean Weight</th>
                                                                        <th className='text-center align-middle' scope="col">Mother Wean Weight</th>
                                                                        <th className='text-center align-middle' scope="col">Mother Wean Date</th>
                                                                        <th className='text-center align-middle' scope="col">Castration</th>
                                                                        <th className='text-center align-middle' scope="col">Comment</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {addkiddata?.map((item, index) => (
                                                                        <tr>
                                                                            <th scope="row">{index}</th>
                                                                            <td>{item.age}</td>
                                                                            <td>{item.uniquename}</td>
                                                                            <td>{item.date}</td>
                                                                            <td>{item.gender}</td>
                                                                            <td>{item.breed}</td>
                                                                            <td>{item.kid_code}</td>
                                                                            <td>{item.kid_score}</td>
                                                                            <td>{item.birth_type}</td>
                                                                            <td>{item.weight}</td>
                                                                            <td>{item.wean_date}</td>
                                                                            <td>{item.wean_weight}</td>
                                                                            <td>{item.mother_wean_weight}</td>
                                                                            <td>{item.mother_wean_date}</td>
                                                                            <td>{item.castration}</td>
                                                                            <td>{item.kid_comment}</td>
                                                                        </tr>

                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div
                                                            id="tab2"
                                                            className={`tab-pane fade ${activeTab === 2 ? "show active" : ""
                                                                }`}
                                                            role="tabpanel"
                                                        >
                                                            <table className="table table-striped table-bordered mt-2 border-top">
                                                                <thead className=''>
                                                                    <tr>
                                                                        <th scope="col">#</th>
                                                                        <th scope="col">Vaccine</th>
                                                                        <th scope="col">Vaccine Date</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {vaccine?.map((item, index) => (
                                                                        <tr>
                                                                            <th scope="row">{index}</th>
                                                                            <td>vaccine</td>
                                                                            <td>vaccine_date</td>
                                                                        </tr>

                                                                    ))}
                                                                </tbody>
                                                            </table>

                                                        </div>
                                                        <div
                                                            id="tab3"
                                                            className={`tab-pane fade ${activeTab === 3 ? "show active" : ""
                                                                }`}
                                                            role="tabpanel"
                                                        >
                                                            <table className="table table-striped table-bordered mt-2 border-top">
                                                                <thead className=''>
                                                                    <tr>
                                                                        <th scope="col">#</th>
                                                                        <th scope="col">No of Kids</th>
                                                                        <th scope="col">Milk Volume</th>
                                                                        <th scope="col">Date</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {milkrec?.map((item, index) => (
                                                                        <tr>
                                                                            <th scope="row">{index}</th>
                                                                            <td>{item.milk_for_kid}</td>
                                                                            <td>{item.milk_volume}</td>
                                                                            <td>{item.milk_date}</td>
                                                                        </tr>

                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div
                                                            id="tab4"
                                                            className={`tab-pane fade ${activeTab === 4 ? "show active" : ""
                                                                }`}
                                                            role="tabpanel"
                                                        >
                                                            <table className="table table-striped table-bordered mt-2 border-top">
                                                                <thead className=''>
                                                                    <tr>
                                                                        <th scope="col">#</th>
                                                                        <th scope="col">Worm Date</th>
                                                                        <th scope="col">Worm Report</th>
                                                                        <th scope="col">Endo Date</th>
                                                                        <th scope="col">Endo Name</th>
                                                                        <th scope="col">Endo Type</th>
                                                                        <th scope="col">Ecto Date</th>
                                                                        <th scope="col">Ecto Name</th>
                                                                        <th scope="col">Ecto Type</th>
                                                                        <th scope="col">bath Date</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {deworm?.map((item, index) => (
                                                                        <tr>
                                                                            <th scope="row">{++index}</th>
                                                                            <td>{item.worm_date}</td>
                                                                            <td>{item.worm_report}</td>
                                                                            <td>{item.endo_date}</td>
                                                                            <td>{item.endo_name}</td>
                                                                            <td>{item.endo_type}</td>
                                                                            <td>{item.ecto_date}</td>
                                                                            <td>{item.ecto_name}</td>
                                                                            <td>{item.ecto_type}</td>
                                                                            <td>{item.bath_date}</td>
                                                                        </tr>

                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>

                                                        <div
                                                            id="tab5"
                                                            className={`tab-pane fade ${activeTab === 6 ? "show active" : ""
                                                                }`}
                                                            role="tabpanel"
                                                        >
                                                            <table className="table table-striped table-bordered mt-2 border-top">
                                                                <thead className=''>
                                                                    <tr>
                                                                        <th scope="col">#</th>
                                                                        <th scope="col">Post Wean Date</th>
                                                                        <th scope="col">Post Wean Weight</th>
                                                                        <th scope="col">Post Body Score</th>
                                                                        <th scope="col">Post Wean Comment</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {postWean?.map((item, index) => (
                                                                        <tr>
                                                                            <th scope="row">{index}</th>
                                                                            <td>{item.post_wean_date}</td>
                                                                            <td>{item.post_wean_weight}</td>
                                                                            <td>{item.post_body_score}</td>
                                                                            <td>{item.post_wean_comment}</td>
                                                                        </tr>

                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>

                                                        <div
                                                            id="tab5"
                                                            className={`tab-pane fade ${activeTab === 8 ? "show active" : ""
                                                                }`}
                                                            role="tabpanel"
                                                        >
                                                            <table className="table table-striped table-bordered mt-2 border-top">
                                                                <thead className=''>
                                                                    <tr>
                                                                        <th scope="col">#</th>
                                                                        <th scope="col">Heat</th>
                                                                        <th scope="col">Heat Date</th>
                                                                        <th scope="col">Heat Result</th>
                                                                        <th scope="col">Breeder Name</th>
                                                                        <th scope="col">Breed Date</th>
                                                                        <th scope="col">Due Date</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {breeddata?.map((item, index) => (
                                                                        <tr>
                                                                            <th scope="row">{index}</th>
                                                                            <td>{item.heat}</td>
                                                                            <td>{item.heat_date}</td>
                                                                            <td>{item.heat_result}</td>
                                                                            <td>{item.breeder_name}</td>
                                                                            <td>{item.breed_date}</td>
                                                                            <td>{item.due_date}</td>
                                                                        </tr>

                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div
                                                            id="tab7"
                                                            className={`tab-pane fade ${activeTab === 7 ? "show active" : ""
                                                                }`}
                                                            role="tabpanel"
                                                        >
                                                            <table className="table table-striped table-bordered mt-2 border-top">
                                                                <thead className=''>
                                                                    <tr>
                                                                        <th scope="col">#</th>
                                                                        <th scope="col">Soil Date</th>
                                                                        <th scope="col">Limesprinkle Date</th>
                                                                        <th scope="col">Insecticide Date</th>
                                                                        <th scope="col">Insecticide</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {farmHygine?.map((item, index) => (
                                                                        <tr>
                                                                            <th scope="row">{index}</th>
                                                                            <td>{item.soil_date}</td>
                                                                            <td>{item.limesprinkle_date}</td>
                                                                            <td>{item.insecticide_date}</td>
                                                                            <td>{item.insecticide}</td>
                                                                        </tr>

                                                                    ))}
                                                                </tbody>
                                                            </table>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </Modal.Body>
                            </Modal>
                        )}
                    </Modal.Body>
                </Modal>
            </section>
        </>
    )
}

export default TableFarmData

