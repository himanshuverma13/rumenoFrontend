import React, { useContext, useEffect } from "react";
import { UserContext } from "../../Common/Modal/logusecont";
import { Accordion } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Navbar from "../../Common/Navbar";
import ResponsiveNavbar from "../../Common/Navbar/navMob";
import Footer from "../../Common/Footer";

// Import images
import service5 from '../../../assets/img/service-img/service5.jpg'
import service6 from '../../../assets/img/service-img/service6.jpg'
import service7 from '../../../assets/img/service-img/service77.jpg'
import service8 from '../../../assets/img/service-img/service8.jpg'
import KeysWords from "../../Common/apiData/keyWords";
import { Link } from "react-router-dom";


const ServicesThird = () => {
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
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" name="description" content="Turn your Indian goat dairy into a success story with Rumeno's expert dairy consultant. Our consultants, available across India, offer personalized advice on maximizing milk production, herd health, and overall dairy management.
" />
        <title>Lucknow Goat Dairy Consultant: Expert Guidance from Rumeno
        </title>
        <link rel="canonical" href="https://www.rumeno.in/dairy-consultant" />
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
            <span className="label-title">Dairy Consultant</span>
            <div className="mx-2">
              <div className="services-line-largeright"></div>
              <div className="services-line-smallright"></div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <h1 className="py-2 px-4 service-head shadow">
            Dairy Consultant Services by Rumeno Farmotech

          </h1>
          <div className="row">
            <div className="col-lg-6">
              <p className="mx-2 my-4">
                As your trusted dairy consultant partner, Rumeno Farmotech goes beyond just selling products. Our expert consultants offer in-depth analysis of your farm's specific needs and goals. We develop customized plans to optimize milk production, ensure herd health and well-being, and maximize your farm's profitability. By leveraging state-of-the-art technologies and our team's experience, Rumeno Farmotech empowers you to make informed decisions and achieve long-term success in the dairy industry.
              </p>
              <p className="mx-2 my-4">
                Dairy farming is a key component of contemporary agriculture,
                feeding millions of people and propelling global economies. But the
                intricacies of effectively running a dairy farm demand knowledge
                above the rudimentary levels. In order to fulfill the changing needs
                of the business, Rumeno Farmotech provides full dairy farm
                management services as well as livestock consultancy solutions.
              </p>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <img  src={service7}  alt="loading" />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <h2 className="py-2 px-4 service-head shadow">
            Understanding Dairy Farm Management Services
          </h2>
          <p className="mx-2 my-4">
            The wide range of duties included in dairy farm management services
            are essential to the efficient running and highest level of output
            of a dairy farm. With a comprehensive approach focused on optimizing
            efficiency and profitability, Rumeno Farmotech offers everything
            from <Link to="/veterinary-products/cattle-feed-supplements" className="d-inline text-dark text-decoration-none">feed optimization</Link> to herd health management.
          </p>
          <p className="mx-2 my-4">
            Rumeno Farmotech's experience allows dairy producers to have access
            to industry best practices and state-of-the-art technologies. Our
            consultants work closely with farmers to improve productivity and
            streamline processes, whether it's installing automated milking
            equipment or creating individualized feeding plans for cattle.
          </p>
        </div>
        <div className="col-lg-12">
          <h2 className="py-2 px-4 service-head shadow">
            Navigating Livestock Challenges with Expert Consulting
          </h2>
          <p className="mx-2 my-4">
            Services for livestock consulting are essential for tackling the
            various problems dairy farmers have. The team of seasoned advisors
            at Rumeno Farmotech provides unmatched perspectives and creative
            solutions, enabling farmers to overcome challenges and prosper in a
            cutthroat environment.
          </p>
          <p className="mx-2 my-4">
            To maximize cattle health and performance, our advisors use
            data-driven approaches in everything from disease control to
            breeding plans. Rumeno Farmotech keeps dairy farmers ahead of the
            curve by carrying out in-depth assessments and putting customized
            solutions in place, protecting the welfare of their herds while
            optimizing profitability.
          </p>
        </div>
        <div className="col-lg-12">
          <h2 className="py-2 px-4 service-head shadow">
            Empowering Dairy Farmers with Rumeno Farmotech
          </h2>
          <p className="mx-2 my-4">
            The primary goal of Rumeno Farmotech is to provide dairy producers
            with the skills and tools they need to be successful. We aspire to
            be more than just consultants with our full range of dairy farm
            management and livestock consulting services; we want to be
            dependable partners on the path to agricultural greatness.
          </p>
          <p className="mx-2 my-4">
            Rumeno Farmotech supports sustainable methods and the most recent
            technological developments to help dairy producers maximize their
            operations for long-term success. Whether it's increasing the
            productivity of milk production or encouraging environmental
            stewardship, our solutions are meant to produce measurable effects
            and lead to favorable outcomes for farmers and their communities.
          </p>
          <p className="mx-2 my-4">
            The demand for professional advice and assistance in the constantly
            changing field of dairy farming has never been higher. Leading this
            change is Rumeno Farmotech, which provides solutions for livestock
            consultancy and dairy farm management that are unmatched in the
            industry.
          </p>
          <p className="mx-2 my-4">
            Rumeno Farmotech and dairy farmers alike can handle obstacles,
            capture opportunities, and pave the path towards a brighter future
            for the dairy business by working together, being innovative, and
            having a strong dedication to excellence.
          </p>
          <p className="mx-2 my-4">
            Get in touch with Rumeno Farmotech right now to find out more about
            our offerings and to start your path to successful and revolutionary
            dairy farming growth. One farm at a time, we can reshape
            agriculture's future by working together.
          </p>
        </div>

        <div className="row justify-content-evenly service-images">
            <img
            className="w-25 m-1 p-0"
            src={service6}
            alt="loading"
          />
            <img
            className="w-25 m-1 p-0"
            src={service5}
            alt="loading"
          />
            <img
            className="w-25 m-1 p-0"
            src={service8}
            alt="loading"
          />
        </div>

        <div className="container-fluid ">
          <Accordion defaultActiveKey="0" flush>

            <Accordion.Item className="my-4" eventKey="0">
              <Accordion.Header>
                Q1: What are dairy farm management services?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  A range of expert solutions are included in dairy farm
                  management services with the goal of maximizing the
                  sustainability, efficiency, and productivity of dairy
                  operations. Herd health management, nutrition planning,
                  facility design, milk production optimization, and financial
                  management are a few examples of these services.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="my-4" eventKey="1">
              <Accordion.Header>
                Q2: Why are dairy farm management services important?
              </Accordion.Header>
              <Accordion.Body>
                Sustaining sustainable farming practices, guaranteeing animal
                welfare, and optimizing profitability all depend on efficient
                dairy farm management. Expert consulting services assist farmers
                in overcoming difficult obstacles, putting best practices into
                action, and adjusting to shifting market conditions—all of which
                contribute to long-term success.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="my-4" eventKey="2">
              <Accordion.Header>
                Q3: How can dairy farm management services benefit my farm?
              </Accordion.Header>
              <Accordion.Body>
                There are many advantages to using dairy farm management
                services, such as better herd health, more milk produced,
                optimum feed efficiency, lower operating expenses, increased
                regulatory compliance, and higher farm profitability overall.
                These services can also offer insightful information and
                assistance with long-term strategic planning and expansion.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="my-4" eventKey="3">
              <Accordion.Header>
                Q4: What types of dairy farm management services do you offer?
              </Accordion.Header>
              <Accordion.Body>
                We provide comprehensive dairy farm management services that are
                customized to each farm's unique requirements. Our areas of
                competence include staff training, financial analysis, facility
                design and maintenance, nutrition analysis, reproductive
                management, and herd health monitoring.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="my-4" eventKey="4">
              <Accordion.Header>
                Q5: How do I know if my dairy farm needs professional management
                services?
              </Accordion.Header>
              <Accordion.Body>
                Hiring a professional consultant may be helpful if you're
                dealing with concerns like decreasing milk production, excessive
                feed expenses, animal health problems, inefficient operations,
                or problems with regulatory compliance. Additionally, seeking
                the advice and assistance of professionals can be quite
                beneficial if you're hoping to grow your business, increase
                profitability, or improve efficiency.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="my-4" eventKey="5">
              <Accordion.Header>
                Q6: Can dairy farm management services help with sustainability
                and environmental stewardship?
              </Accordion.Header>
              <Accordion.Body>
                Definitely, yes. Our consulting services have a strong emphasis
                on sustainable dairy production methods. We can assist you in
                putting plans into action that will lessen your impact on the
                environment, increase resource efficiency, and improve animal
                welfare while keeping or boosting profitability.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="my-4" eventKey="6">
              <Accordion.Header>
                Q7: How do I get started with dairy farm management services?
              </Accordion.Header>
              <Accordion.Body>
                It's simple to get going. To arrange a consultation, just get in
                contact with our staff. Together, we will evaluate the
                particular requirements, objectives, and difficulties of your
                farm and create a personalized action plan. We are here to help
                you every step of the way, whether you run a huge commercial
                enterprise or a small family farm.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default ServicesThird