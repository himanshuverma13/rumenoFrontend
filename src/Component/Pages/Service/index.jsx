import React, { useEffect } from "react";

// Third party i18next
import { useTranslation } from "react-i18next";

// Common Component
import Footer from "../../Common/Footer";
import Navbar from "../../Common/Navbar/index";
import ResponsiveNavbar from "../../Common/Navbar/navMob";
import ServiceJson from '../../../assets/js/serviceScript.json'

import FeedBackForm from "../../Common/Gooogleform/googleform";

// Image
import srvcimg1 from "../../../assets/img/service-img/srvc-img1.jpg";
import srvcimg3 from "../../../assets/img/service-img/srvc-img3.jpg";
import { useContext } from "react";
import { UserContext } from "../../Common/Modal/logusecont";
import { Helmet } from "react-helmet";
import KeysWords from "../../Common/apiData/keyWords";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

const Services = () => {
  const { t } = useTranslation();
  //const getLocalPrevCarts = JSON.parse(localStorage.getItem("cart") ?? "[]");
  const { setCart,cart,setSizevalue } = useContext(UserContext);
  var Value ;
  useEffect(() => {
    //setCart(getLocalPrevCarts);
    Value = cart?.length;
    if (Value !== 0) {
      setSizevalue(Value)
    }
  }, []);

  const FAQ = [
    {
 
    
      question: "Are Vet Services Taxable?",
        answer: "Veterinary Services for Pet Animals: These services, which include medical treatment for pets, are not taxable under the Goods and Services Tax (GST). They fall under the nil rate Category1.Veterinary Services for Livestock: Similar to pet animals, services related to livestock health care are also not taxable and fall under the nil rate Category2. Other Veterinary Services (Not Elsewhere Classified): Services beyond pet animals and livestock, such as specialized treatments or laboratory testing, are subject to an 18% GST rate"}
    ,{
   
      question: "What Does Veterinary Services Mean?",
        answer: "Veterinary services refer to professional medical care provided to animals by licensed veterinarians. These services encompass a wide range of activities, including diagnosing and treating illnesses, performing surgeries, administering vaccinations, conducting health check-ups, and offering preventive care. Veterinarians play a crucial role in maintaining the health and well-being of pets, livestock, and other animals."
      }
    ,{
      
      question: "What Are Veterinary Services?",
        answer: "Veterinary services encompass various aspects related to animal health and care. Some common veterinary services include: Medical Consultations: Veterinarians diagnose and treat illnesses, injuries, and health conditions in animals. Surgical Procedures: Veterinarians perform surgeries, such as spaying/neutering, tumor removal, and orthopedic procedures. Vaccinations: Administering vaccines to prevent diseases in animals. Dental Care: Cleaning teeth, treating dental issues, and promoting oral health. Parasite Control: Preventing and treating parasites like fleas, ticks, and worms. Nutritional Guidance: Advising on proper diets and nutrition for different species. Emergency Care: Providing urgent medical attention in critical situations. Wellness Exams: Regular check-ups to monitor overall health. Laboratory Testing: Conducting diagnostic tests (bloodwork, X-rays, etc.). Animal Behavior Consultations: Addressing behavioral issues in pets. Farm Animal Services: Caring for livestock, poultry, and other farm animals."
      }
  ]

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" name="description" content="Looking for trusted veterinary services in india? Explore a network of clinics offering comprehensive pet care. Rumeno connects you with experienced veterinarians for all your animal's needs.
" />
        <title>Top-Rated Veterinary Services in india: Experienced Pet Care Clinics
</title>
        <link rel="canonical" href="https://www.rumeno.in/veterinary-services" />
        <script type="application/ld+json">
    {JSON.stringify({
      "@context": ServiceJson["@context"],
      "@type": ServiceJson["@type"],
      "mainEntity": ServiceJson.mainEntity.map((item, index) => ({
        "@type": item["@type"],
        "name": item.name,
        "acceptedAnswer": {
          "@type": item.acceptedAnswer["@type"],
          "text": item.acceptedAnswer.text
        }
      }))
    })}
  </script>
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
      <div className="desk-nav">
        <Navbar size={cart?.length} />
      </div>
      <div className="mob-nav">
        <ResponsiveNavbar size={cart?.length} />
      </div>
      <section className="container-fluid service-bg overflow-hidden">
        <div
          className="section-header text-center mx-auto mb-3 pt-5"
          data-wow-delay="0.1s"
        >
          <div
            className="d-flex justify-content-center pt-5 mt-lg-5"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="mx-2">
              <div className="services-line-largeleft"></div>
              <div className="services-line-smallleft"></div>
            </div>
            <span className="label-title">Veterinary  Services</span>
            <div className="mx-2">
              <div className="services-line-largeright"></div>
              <div className="services-line-smallright"></div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <h2 className="py-2 px-4 service-head shadow">{t("v267")}</h2>
        </div>
        <div className="container">
          <div className="row my-3">
            <div
              className="col-lg-7"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h1 className="display-5 mb-4 mt-4">{t("v72")}</h1>
              <p className="mb-4 fs-5 text-danger">{t("v73")}</p>
              <p>
                <i className="fa fa-check text-primary me-3"></i>
                {t("v74")}
              </p>
              <p>
                <i className="fa fa-check text-primary me-3"></i>
                {t("v75")}
              </p>
              <p>
                <i className="fa fa-check text-primary me-3"></i>
                {t("v76")}
              </p>
            </div>
            <div
              className="col-lg-5 text-center"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <img className="w-75" src={srvcimg1} alt="Loading" />
            </div>
          </div>
        </div>
        <div className="col-lg-12 mb-2 mt-5">
          <h1 className=" py-2 px-4 service-head shadow">Veterinary Services by Rumeno Farmotech: Enhancing Animal Health through Expert Care</h1>
        </div>
        <div className="p-3">
      <p>In the dynamic world of animal husbandry, ensuring the well-being and productivity of our beloved creatures is of utmost importance. Proper nutrition and specialized care play pivotal roles in achieving these goals. Enter Rumeno Farmotech, a name synonymous with excellence in <Link to="/home" className="d-inline text-dark text-decoration-none">animal feed supplements</Link> and veterinary services.
      </p>
      <hr />
      <h3 className="my-3 fw-bold">Why Choose Rumeno Farmotech?</h3>
        <h4 className="fw-bold">1. Comprehensive Product Range:</h4>
        <ul>
  <li className="m-2"> <strong>Cow Feed Supplements: </strong> These products are tailored to support the growth and development of cattle. With meticulously crafted mineral combinations and calcium supplements, Rumeno Farmotech ensures that your cows and buffaloes receive optimal nourishment.</li>
  <li className="m-2"> <strong>Poultry Feed Supplements: </strong> Chickens, ducks, and other fowl benefit from high-quality supplements that enhance overall health.</li>
  <li className="m-2"> <strong>Aqua Feed Supplements: </strong> Specialized nutrition is essential for aquaculture. Fish and other aquatic creatures thrive with Rumeno Farmotech’s supplements.</li>
  <li className="m-2"> <strong>Pigeon Feed Supplements: </strong> Avian enthusiasts can rely on Rumeno Farmotech to provide proper nourishment for their feathered companions.</li>
</ul>
      <h4 className="fw-bold">2. Nationwide Reach:</h4>
      <ul>
        <li className="m-2">With operations across India, Rumeno Farmotech ensures that its products and veterinary services are accessible to farmers and livestock owners in every corner of the country.</li>
      </ul>
      <h4 className="fw-bold">3. country.Research-Driven Approach:</h4>
      <ul>
      <li className="m-2"> The Rumeno Farmotech team is committed to continuous research and development. They create new formulations to address evolving challenges faced by farmers.</li>
<li className="m-2"> Their solutions, including growth promoters and disease preventatives, are backed by scientific research.</li>
      </ul>
      <p className=""> Rumeno Farmotech’s commitment to excellence extends beyond feed supplements. Their veterinary services, backed by research and expertise, contribute to healthier and happier animals. As you optimize your veterinary practice online, remember that every click could lead to a wagging tail or a grateful purr</p>
      <hr />
      <h4 className="my-3 fw-bold"> Why Opt for Our Veterinary Products?</h4>
      <ul>
        <li className="my-2"><strong> Quality Control : </strong>
          All of our animal products come from reliable suppliers and have undergone safety and effectiveness testing.</li>
        <li className="my-2"><strong> Expert Suggestions : </strong>
          Our group of skilled vets makes sure that every animal product satisfies the highest requirements.</li>
        <li className="my-2"><strong> Client Testimonials : </strong>
          View the reviews left by other pet owners regarding our animal goods. Their contentment says it all.</li>
      </ul>
      </div>
        <div className="col-lg-12 my-5">
          <h2 className=" py-2 px-4 service-head shadow">{t("v268")}</h2>
        </div>
        <div className="container">
          <div className="row srvc-consl justify-content-evenly my-3">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <img className="img-fluid w-100" src={srvcimg1} alt="Loading" />
              <div className="bg-light p-4 text-center">
                <h3 className="text-danger">{t("v78")}</h3>
                <p className="d-block h5 lh-base mb-4">{t("v79")}</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <img className="img-fluid w-100" src={srvcimg3} alt="Loading" />
              <div className="bg-light p-4 text-center">
                <h3 className="text-danger">{t("v80")}</h3>
                <p className="d-block h5 lh-base mb-4">{t("v81")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid p-0  overflow-hidden">
          <div className="row justify-content-center py-4">
            <div
              className="col-lg-11"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h3 className="px-2">{t("v82")}</h3>
              <p className="px-2">{t("v83")}</p>
              <h3 className="px-2">{t("v84")}</h3>
              <p className="px-2">{t("v85")}</p>
              <div className="justify-content-center service-ul">
                {/* Rumeno farm  */}
                {/* Rumeno */}
                {/* Veterinary */}
                <div>
                  <ul>
                    <li>{t("v86")}</li>
                    <li>{t("v87")}</li>
                    <li>{t("v88")}</li>
                    <li>{t("v89")}</li>
                    <li>{t("v90")}</li>
                    <li>{t("v91")}</li>
                    <li>{t("v92")}</li>
                    <li>{t("v93")}</li>
                    <li>{t("v94")}</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>{t("v95")}</li>
                    <li>{t("v96")}</li>
                    <li>{t("v97")}</li>
                    <li>{t("v98")}</li>
                    <li>{t("v99")}</li>
                    <li>{t("v100")}</li>
                    <li>{t("v101")}</li>
                    <li>{t("v102")}</li>
                    <li>{t("v103")}</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>{t("v104")}</li>
                    <li>{t("v105")}</li>
                    <li>{t("v106")}</li>
                    <li>{t("v107")}</li>
                    <li>{t("v108")}</li>
                    <li>{t("v109")}</li>
                    <li>{t("v110")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 mb-3">
            <h2 className="py-2 px-4 service-head shadow">{t("v111")}</h2>
          </div>
          <div
            className="row justify-content-center"
            data-aos="fade-down"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="col-lg-11">
              <p className="px-2">{t("v112")}</p>
              <p className="px-2">{t("v113")}</p>
              <p className="px-2">{t("v114")}</p>
              <p className="px-2">{t("v115")}</p>
              <h5 className="px-2">{t("v116")}</h5>
              <ul>
                <li>{t("v117")}</li>
                <li>{t("v118")}</li>
                <li>{t("v119")}</li>
              </ul>
            </div>
          </div>
          <Accordion defaultActiveKey="0" flush>
          {FAQ.map((item, index) => (
            <Accordion.Item className="m-3" key={index} eventKey={index.toString()}>
              <Accordion.Header><strong className="mx-2">Q.{index + 1} </strong> {item.question}</Accordion.Header>
              <Accordion.Body>{item.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
        </div>

        <FeedBackForm />
      </section>

      <Footer />
    </>
  );
};

export default Services;
