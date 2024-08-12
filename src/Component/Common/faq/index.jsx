import React from 'react'
import { Accordion } from "react-bootstrap";
import { Link } from 'react-router-dom';
const HomeFaq = () => {
    return (
        <>
            <section className="py-4 ">
                <div className="container-fluid">
                    <div className="row px-5">
                        <h4>Rumeno Farmotech is trusted by Indian farmers for a number of reasons:</h4>
                        <ul className='mx-4'>
                            <li className=''>
                                <strong>Scientific Excellence:</strong> Their group of professionals is always looking for new ways to solve problems.
                            </li>
                            <li className=''>
                                <strong>Franchise Network:</strong> Accessibility is never a problem because to the more than 150 franchise locations.
                            </li>
                            <li className=''>
                                <strong>Customer satisfaction:</strong> Farmers receive individualised help thanks to their customer-centric approach.
                            </li>
                        </ul>
                        <h4>Veterinary Feed Supplements: Nurturing Animal Health with Precision Nutrition</h4>
                        <p>In the vast field of animal husbandry, ensuring cattle production and well-being is everyone's responsibility. Proper diet plays a pivotal role in achieving these goals, making veterinary feed additives essential allies. Rumeno Farmotech, a leading Indian manufacturer, is dedicated to enhancing animal health through high-quality feed solutions and comprehensive <Link to="/veterinary-services" className="d-inline text-dark text-decoration-none">veterinary services</Link> , ensuring cattle receive the best possible care.</p>
                        <h5>The Role of Animal Feed Supplements</h5>
                        <ul className='px-4 mx-2'>
                            <li>
                                <strong>Nutritional Gaps:</strong> Animals may still have nutritional gaps even with the best feeding procedures. By supplying vital vitamins, minerals, amino acids, and other elements that may be absent from their regular diet, feed supplements fill up these nutritional gaps.
                            </li>

                            <li>
                                <strong>Growth and Development:</strong> Animal growth and development depend heavily on appropriate nutrition. Particular nutrients are needed by young animals in particular to develop healthy bones, muscles, and immune systems. Supplements guarantee that kids get the essential building blocks for development that is healthy.
                            </li>
                            <li>
                                <strong>Increasing output:</strong> The health of livestock has a direct impact on their output. Animals that are fed well yield more milk, lay more eggs, produce more meat, and produce wool of higher quality. The use of supplements is essential to reaching peak productivity.
                            </li>
                            Health <li>
                                <strong>and Immunity:</strong> Being resistant to disease requires a strong immune system. Probiotics and immune boosters are two examples of feed supplements that improve immunity and lower infection risk.
                            </li>
                            <li>
                                <strong>Stress management:</strong> A variety of factors, including as shifting environmental conditions, travel, and reproduction, can cause stress in animals. Their general health may be impacted by stress. Antioxidants and adaptogens found in supplements support wellbeing and stress management.
                            </li>

                        </ul>
                        <h4>Choosing the Right Manufacturer: Rumeno Farmotech
                        </h4>
                        <p>There are a few things to consider when choosing a producer of animal feed supplements:
                            Rumeno Farmotech places a high priority on quality assurance. They put their products through a comprehensive testing process to make sure they are safe, effective, and meet industry requirements.
                        </p>
                        <ul>
                            <strong>Research and Innovation:</strong> The business produces novel formulations as a result of its research-driven methodology. Rumeno Farmotech always stays on the cutting edge, whether it's boosting fertility, preventing deficiencies, or improving digestion.

                            <strong>Customer Service:</strong> Owners of livestock require dependable assistance. Excellent customer service is provided by Rumeno Farmotech, which responds to questions quickly and helps farmers make wise decisions.

                            <strong>Sustainable Practices:</strong> It's important to adopt environmentally friendly practices. Sustainability is emphasized in Rumeno Farmotech's manufacturing procedures.
                        </ul>
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item className="my-4" eventKey="0">
                                <Accordion.Header>
                                    1. What are animal feed supplements?

                                </Accordion.Header>
                                <Accordion.Body>
                                    The purpose of animal feed supplements is to improve the nutritional value of animal diets by the use of specialty items. They supply vital elements such as vitamins, minerals, and amino acids, which may be deficient in ordinary food.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className="my-4" eventKey="1">
                                <Accordion.Header>

                                    2. Why are animal feed supplements important?
                                </Accordion.Header>
                                <Accordion.Body>
                                    The health, growth, and production of animals depend heavily on proper nutrition. Feed supplements support growth, repair nutritional gaps, and enhance general health.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className="my-4" eventKey="2">
                                <Accordion.Header>
                                    3. What types of animals benefit from feed supplements?

                                </Accordion.Header>
                                <Accordion.Body>
                                    Feed supplements are beneficial for a variety of species, such as:
                                    <ul>
                                        <li>
                                            Cattle and buffaloes: For general health, growth, and milk production.
                                        </li>
                                        <li>
                                            Poultry (Ducks, Chickens): To boost immunity and egg production.
                                        </li>
                                        <li>
                                            Fish and other aquatic animals: specialized diet for aquaculture.
                                        </li>
                                        <li>
                                            Pigeons: Pets and racing pigeons need different nutrition.
                                        </li>

                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className="my-4" eventKey="3">
                                <Accordion.Header>

                                    4. Why choose Rumeno Farmotech for feed supplements?
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>
                                            Quality Assurance: Rumeno Farmotech ensures high-quality products.
                                        </li>
                                        <li>
                                            Research-Driven Approach: Backed by scientific research.
                                        </li>
                                        <li>
                                            Nationwide Reach: Over 150 franchise outlets across India.
                                        </li>
                                        <li>
                                            Customer-Centric: 24/7 customer support.
                                        </li>
                                        <li>
                                            Franchise Opportunities: Passionate about animal health? Explore franchise options.
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className="my-4" eventKey="4">
                                <Accordion.Header>
                                    5. How do I contact Rumeno Farmotech?

                                </Accordion.Header>
                                <Accordion.Body>
                                    Visit Rumeno Farmotech’s website or call +91 7355043892
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </div>

                </div>
            </section>
        </>
    )
}

export default HomeFaq