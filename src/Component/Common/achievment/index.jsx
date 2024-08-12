import React, { useState, useEffect, useRef } from 'react'
import { Carousel } from 'react-bootstrap'
import '../../../assets/css/slider.css'

// import images
import caroimg1 from "../../../assets/img/achievement-img/achmt1.png";
import caroimg2 from "../../../assets/img/achievement-img/achmt2.png";
import caroimg3 from "../../../assets/img/achmtvideo.mp4";
import caroimg4 from "../../../assets/img/achievement-img/achmt44.jpg";
import caroimg5 from "../../../assets/img/achievement-img/achmt5.png";
import { NavLink } from 'react-router-dom';


const Achievment = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    const items = [
        <img

            className="d-block achievment-img"
            alt="Rumeno-Veterinary-Product"
            src={caroimg1}

        />,
        <img

            className="d-block achievment-img"
            alt="Rumeno-Veterinary-Product"
            src={caroimg2}

        />,
        <div className="video-container">
            {/* <video
                muted
                controls={isPlaying}
                ref={videoRef}
                className="video"
                src={caroimg3}
            ></video> */}
            <iframe width="560" height="315" className='vide achievment-img ' src="https://www.youtube.com/embed/MgA56V6PdBI?si=uWExyXzXTHePBggP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            {/* {!isPlaying && (
                <div className="play-icon btn--shockwave is-active">&#9658;</div>
            )} */}
        </div>,
        <img

            className="d-block achievment-img"
            alt="Rumeno-Veterinary-Product"
            src={caroimg4}

        />,
        <img

            className="d-block achievment-img"
            alt="Rumeno-Veterinary-Product"
            src={caroimg5}

        />,

    ];

    const chunk = (arr, size) =>
        Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
        );

    const [chunkSize, setChunkSize] = useState(2);

    const updateChunkSize = () => {
        const isMobile = window.innerWidth < 768;
        setChunkSize(isMobile ? 1 : 2);
    };

    useEffect(() => {
        updateChunkSize();
        window.addEventListener('resize', updateChunkSize);
        return () => {
            window.removeEventListener('resize', updateChunkSize);
        };
    }, []);

    const slides = chunk(items, chunkSize);



    return (
        <>
            <section className='container-fluid bg-light  py-5'>
                <div className="row px-2">
                    <div
                        className="col-lg-6 mb-6 mb-lg-0 px-5"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                    >
                        <div className="d-flex mb-3">
                            <span className="label-title">Achievements</span>
                            <div>
                                <div className="about-line-large"></div>
                                <div className="about-line-small"></div>
                            </div>
                        </div>

                    </div>
                    <div className=" achievement-section justify-content-center px-0">

                        <Carousel interval={null} >
                            {slides.map((slide, idx) => (
                                <Carousel.Item key={idx}>
                                    <div className="d-flex justify-content-around">
                                        {slide.map((image, index) => (
                                            <div key={index}>
                                                {image}
                                            </div>
                                        ))}
                                    </div>
                                </Carousel.Item>
                            ))}

                        </Carousel>

                    </div>

                    <div className="col-lg-12 px-5 ">
                        <div>

                            <hr />
                            <h1>Animal Feed Supplements: Improving Livestock Health through High-Quality Diet</h1>
                            <p>In the field of animal husbandry, it is critical to guarantee the health and output of animals. In order to accomplish these objectives, proper diet is essential. Animal feed supplements are necessary to satisfy the dietary requirements of animals, promote healthy growth, and fend against illness. A number of manufacturers in India are committed to creating feed supplements of the highest caliber; Rumeno Farmotech is one such producer that is both dependable and creative.
                            </p>
                            <h4>Rumeno Farmotech: A Trusted Name in Animal Feed Supplements</h4>
                            <p>One of India's top producers of animal feed supplements is Rumeno Farmotech. The company, which was founded in 2016, has advanced veterinary research significantly. Let's examine the reasons behind farmers' and livestock owners' preference for Rumeno Farmotech:</p>
                            <p><strong>Broad Selection of Products:</strong> A wide variety of feed supplements are available from Rumeno Farmotech to suit different types of animals.</p>
                            <p><NavLink to="/veterinary-products/goat-feed-supplements" className="text-decoration-none text-dark"><strong>Goat feed supplement:</strong></NavLink> Rumeno Farmotech provides a premium goat feed supplement that is intended to improve your goats' well-being and output. Our supplement is full of vital vitamins, minerals, and nutrients that support healthy growth, milk production, and general wellbeing. Our feed supplement guarantees that your goats, whether dairy or meat, get the nutrition they need to thrive as a herd.</p>
                            <p><NavLink to="/veterinary-products/cattle-feed-supplements" className="text-decoration-none text-dark"><strong>Cattle feed Supplement:</strong></NavLink> These goods help cattle grow and develop. Your cows and buffaloes will be well-nourished thanks to Rumeno Farmotech's mineral combinations and calcium supplements.
                            </p>
                            <p><NavLink to="/veterinary-products/dog-feed-supplements" className="text-decoration-none text-dark"><strong>Dog feed supplement:</strong></NavLink> Rumeno, an Indian veterinary company, offers dog feed supplements designed to improve digestion, immunity, and overall health. These supplements come in powder form and can be easily mixed with your dog's regular food.</p>
                        </div>
                    </div>
                    <div className="col-lg-12 px-5">
                        <div>
                            <p><NavLink to="/veterinary-products/poultry-feed-supplements" className="text-decoration-none text-dark"><strong>Poultry feed Supplement:</strong></NavLink> Rumeno Farmotech is a reliable source of high-quality supplements that improve the general health and well-being of chickens, ducks, and other fowl.
                            </p>
                            <p><strong>Aqua Feed Supplements:</strong> Specialized nutrition is required for aquaculture. Fish and other aquatic creatures can benefit from high-quality supplements from Rumeno Farmotech.</p>
                            <p><strong>Pigeon Feed Supplements:</strong> Avian enthusiasts can rely on Rumeno Farmotech to provide their feathered companions with the proper nourishment.
                                Rumeno Farmotech takes great satisfaction in the effectiveness and high quality of its feed supplements. Every product is painstakingly designed to meet particular dietary needs. The goal of all products, including liver tonics, digestive powders, and toxin binders, is to improve animal health.
                            </p>
                            <p><strong>Reach Across the Nation:</strong> Rumeno Farmotech makes sure that its products reach farmers and livestock owners in every corner of India with more than 150 franchise locations nationwide. The company stands out for its dedication to availability and accessibility.</p>
                            <p><strong>Research-Driven Approach:</strong> The Rumeno Farmotech team is always conducting research and creating new recipes to address the growing problems that farmers encounter. Their answers, which include growth promotion and sickness prevention, are supported by research. </p>
                            <p>Rumeno Farmotech is a well-known veterinary feed supplement manufacturer in India that is committed to improving the well-being and output of animals. They provide a large selection of feed additives for different animals, with an emphasis on quality and innovation. Results-driven products are offered by Rumeno Farmotech for pigeons, poultry, fish, and cattle. Their carefully designed supplements meet particular dietary requirements, guaranteeing healthy growth and warding off illness. Rumeno Farmotech is a reputable supplier of veterinary products with more than 150 franchise locations nationwide, earning the trust of livestock owners. Select Rumeno Farmotech for happier animals and productive farming! </p>
                            <p>Rumeno Farmotech is aware that robust animal health is essential to agriculture. Their methodical methodology, based on research, guarantees that every feed supplement is precisely designed to fulfil certain dietary needs. Rumeno Farmotech produces outcomes whether it's preventing deficits, promoting growth, or boosting immunity.</p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Achievment