import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Third party i18next
import i18next from "i18next";

// Common Component
import Select from "../Common/Select";
import TranslateButton from "../Common/translate/translate";

// Image
import lgimg from "../../assets/img/Logo/logo.jpg";
import { Helmet } from "react-helmet";
const Language = () => {
  const [prompt, setPrompt] = useState(null);


  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const addToHome = () => {
    if (prompt) {
      prompt.prompt();
      prompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
        } else {
        }
        setPrompt(null);
      });
    }
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Language-Rumeno</title>
        <link rel="canonical" href="https://www.rumeno.in/" />
      </Helmet>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <section className="container-fluid context">
        <div className="row justify-content-center ">
          <div className=" lang-box col-lg-5 d-flex justify-content-around py-3">
            <div className="row">
              <div className="col-lg-6">
                <div className="lang-img lang-box1">
                  <img className="" src={lgimg} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="lang-box2 my-2">
                  {/* <Select onChange={(e) => handleChangen(e)} /> */}
                  <TranslateButton />
                  <div className="lang-link">
                    <Link to="/home" className="d-flex justify-content-center" >
                      <button onClick={addToHome} className="btn-grad-bt gradient-custom-2">Submit</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Language;