import React, { useContext } from "react";
import Navbar from "../../Common/Navbar";
import ResponsiveNavbar from "../../Common/Navbar/navMob";
import { UserContext } from "../../Common/Modal/logusecont";
import Footer from "../../Common/Footer";
import { Helmet } from "react-helmet";
import KeysWords from "../../Common/apiData/keyWords";

const PrivacyPolicy = () => {
  const { cart } = useContext(UserContext);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Privacy-Policy-Rumeno</title>
        <link rel="canonical" href="https://www.rumeno.in/privacypolicy" />
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
            <span className="label-title">Privacy Policy</span>
            <div className="mx-2">
              <div className="services-line-largeright"></div>
              <div className="services-line-smallright"></div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <h2 className="py-2 my-5 px-4 service-head shadow">
            Privacy Policy for Rumeno Farmotech
          </h2>
          <p className="m-3">
            At Rumeno Farmotech, accessible from https://www.rumeno.in/, one of
            our main priorities is the privacy of our visitors. This Privacy
            Policy document contains types of information that is collected and
            recorded by Rumeno Farmotech and how we use it.
          </p>
          <p className="m-3">
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us.
          </p>
          <h2 className="py-2 my-5 px-4 service-head shadow">Log Files</h2>
          <p className="m-3">
            Rumeno Farmotech follows a standard procedure of using log files.
            These files log visitors when they visit websites. All hosting
            companies do this and a part of hosting services' analytics. The
            information collected by log files include internet protocol (IP)
            addresses, browser type, Internet Service Provider (ISP), date and
            time stamp, referring/exit pages, and possibly the number of clicks.
            These are not linked to any information that is personally
            identifiable. The purpose of the information is for analyzing
            trends, administering the site, tracking users' movement on the
            website, and gathering demographic information. Our Privacy Policy
            was created with the help of the Privacy Policy Generator.
          </p>
          <h2 className="py-2 my-5 px-4 service-head shadow">
            Cookies and Web Beacons
          </h2>
          <p className="m-3">
            Like any other website, Rumeno Farmotech uses "cookies". These
            cookies are used to store information including visitors'
            preferences, and the pages on the website that the visitor accessed
            or visited. The information is used to optimize the users'
            experience by customizing our web page content based on visitors'
            browser type and/or other information.
          </p>
          <h2 className="py-2 my-5 px-4 service-head shadow">Privacy Policies</h2>
          <p className="m-3">
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of Rumeno Farmotech.
          </p>
          <p className="m-3">
            Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on Rumeno Farmotech,
            which are sent directly to users' browser. They automatically
            receive your IP address when this occurs. These technologies are
            used to measure the effectiveness of their advertising campaigns
            and/or to personalize the advertising content that you see on
            websites that you visit.
          </p>
          <p className="m-3">
            Note that Rumeno Farmotech has no access to or control over these
            cookies that are used by third-party advertisers.
          </p>
          <h2 className="py-2 my-5 px-4 service-head shadow">
            Third Party Privacy Policies
          </h2>
          <p className="m-3">
            Rumeno Farmotech's Privacy Policy does not apply to other
            advertisers or websites. Thus, we are advising you to consult the
            respective Privacy Policies of these third-party ad servers for more
            detailed information. It may include their practices and
            instructions about how to opt-out of certain options.
          </p>
          <p className="m-3">
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers'
            respective websites.
          </p>
          <h2 className="py-2 my-5 px-4 service-head shadow">
            Children's Information
          </h2>
          <p className="m-3">
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
          </p>
          <p className="m-3">
            Rumeno Farmotech does not knowingly collect any Personal
            Identifiable Information from children under the age of 13. If you
            think that your child provided this kind of information on our
            website, we strongly encourage you to contact us immediately and we
            will do our best efforts to promptly remove such information from
            our records.
          </p>
          <h2 className="py-2 my-5 px-4 service-head shadow">
            Online Privacy Policy Only
          </h2>
          <p className="m-3">
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in Rumeno Farmotech. This policy is
            not applicable to any information collected offline or via channels
            other than this website.
          </p>
          <h2 className="py-2 my-5 px-4 service-head shadow">Consent</h2>
          <p className="my-5 mx-3 ">
            By using our website, you hereby consent to our Privacy Policy and
            agree to its Terms and Conditions.
          </p>
          <h2 className="py-2 my-5 px-4 text-center service-head shadow">
            Return Policy for Animal Feed Supplements
          </h2>
          <h3 className="py-2 my-5 px-4 service-head shadow">1. Eligibility for Returns
          </h3>
          <p className="mx-3">We want you to be satisfied with your purchase. If you are not completely happy with your animal feed supplement, here are the eligibility criteria for returns:</p>
          <ul>
            <li><strong>Unopened Products : </strong> You may return unopened animal feed supplements within 15 days of the purchase date.</li>
            <li><strong>Defective or Damaged Products : </strong> If you receive a product that is defective or damaged, please contact us within 7 days of delivery.</li>
          </ul>

          <h3 className="py-2 my-5 px-4 service-head shadow">
            2. How to Initiate a Return
          </h3>
          <p className="mx-3">To initiate a return, follow these steps:</p>
          <ul className=" ">
            <li>Contact Us: Reach out to our customer support team via email support@rumenofarmotech.com or Whats app message on phone # 7355043892. Provide your order number and a brief description of the issue.
            </li>
            <li>Return Authorization: We will provide you with a return authorization (RA) number.</li>
            <li>Packaging: Repackage the product securely, including all original packaging materials.</li>
            <li>Shipping: Ship the product back to us using a trackable shipping method. You are responsible for return shipping costs.</li>
          </ul>
          <h3 className="py-2 my-5 px-4 service-head shadow">
            3. Refund Process
          </h3>
          <ul>
            <li>Once we receive the returned product, we will inspect it.
            </li>
            <li>If the product meets the eligibility criteria, we will process your refund within 5 business days.</li>
            <li>Refunds will be issued to the original payment method used during the purchase.
            </li>
          </ul>
          <h3 className="py-2 my-5 px-4 service-head shadow">
            4. Exceptions
          </h3>
          <ul>
            <li>Opened Products: Unfortunately, we cannot accept returns for opened or partially used products due to safety and hygiene reasons.</li>
            <li>Custom Orders: Customized or personalized animal feed supplements are non-returnable unless they are defective.</li>
          </ul>
          <h3 className="py-2 my-5 px-4 service-head shadow">
            5. Contact Us
          </h3>
          <p className="mx-3">If you have any questions or need assistance with your return, please contact our customer support team at  support@rumenofarmotech.com or whats app us on 7355043892</p>
          <hr />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
