import React from "react";

// Third party i18next
import { useTranslation } from "react-i18next";

const Training = () => {
  const { t } = useTranslation();

  return (
    <>
      <section id="training" className="py-4 sect-training header border-0">
        
        <div className="container-fluid">
          <div
            className="d-flex px-5"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <span className="label-title">Training</span>
           
            <div>
              <div className="about-line-large"></div>
              <div className="about-line-small"></div>
            </div>
          </div>
          <div className="row px-5 py-4">
            <div className="col-md-3">
              
              <div
                className="nav flex-column nav-pills nav-pills-custom"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  className="nav-link mb-3 p-3 shadow active"
                  id="v-pills-home-tab"
                  data-toggle="pill"
                  href="#v-pills-home"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <i className="fa fa-user-circle-o mr-2"></i>
                  <span className="font-weight-bold small text-uppercase">
                    {t("v7")}
                  </span>

                  
                </a>
                
                <a
                  className="nav-link mb-3 p-3 shadow"
                  id="v-pills-profile-tab"
                  data-toggle="pill"
                  href="#v-pills-profile"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <i className="fa fa-calendar-minus-o mr-2"></i>
                  <span className="font-weight-bold small text-uppercase">
                    {t("v48")}
                  </span>
                </a>
                
                <a
                  className="nav-link mb-3 p-3 shadow"
                  id="v-pills-messages-tab"
                  data-toggle="pill"
                  href="#v-pills-messages"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <i className="fa fa-star mr-2"></i>
                  <span className="font-weight-bold small text-uppercase">
                    {t("v51")}
                  </span>
                </a>
                <a
                  className="nav-link mb-3 p-3 shadow"
                  id="v-pills-settings-tab"
                  data-toggle="pill"
                  href="#v-pills-settings"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <i className="fa fa-check mr-2"></i>
                  <span className="font-weight-bold small text-uppercase">
                    {t("v69")}
                  </span>
                  
                </a>
              </div>
              
            </div>
           
            <div
              className="col-md-9"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade shadow rounded bg-white show active p-5"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <h4 className="font-italic mb-4">{t("v8")}</h4>
                  <h4>{t("v9")}</h4>
                  <h5>{t("v10")}</h5>
                  <p>{t("v11")}</p>
                  <p>{t("v12")}</p>
                  <p>{t("v13")}</p>
                  <div className="row justify-content-center">
                    <ul className="col-lg-5">
                      <li>{t("v14")}</li>
                      <li>{t("v15")}</li>
                      <li>{t("v16")}</li>
                      <li>{t("v17")}</li>
                      <li>{t("v18")}</li>
                      <li>{t("v19")}</li>
                      <li>{t("v20")}</li>
                      <li>{t("v21")}</li>
                      <li>{t("v22")}</li>
                      <li>{t("v23")}</li>
                      <li>{t("v24")}</li>
                      <li>{t("v25")}</li>
                      <li>{t("v26")}</li>
                      <li>{t("v27")}</li>
                      <li>{t("v28")}</li>
                      <li>{t("v29")}</li>
                      <li>{t("v30")}</li>
                    </ul>
                   
                    <ul className="col-lg-5">
                      <li>{t("v31")}</li>
                      <li>{t("v32")}</li>
                      <li>{t("v33")}</li>
                      <li>{t("v34")}</li>
                      <li>{t("v35")}</li>
                      <li>{t("v36")}</li>
                      <li>{t("v37")}</li>
                      <li>{t("v38")}</li>
                      <li>{t("v39")}</li>
                      <li>{t("v40")}</li>
                      <li>{t("v41")}</li>
                      <li>{t("v42")}</li>
                      <li>{t("v43")}</li>
                      <li>{t("v44")}</li>
                      <li>{t("v45")}</li>
                      <li>{t("v46")}</li>
                    </ul>
                  </div>
                  
                  
                  <p>{t("v47")}</p>
                </div>
                <div
                  className="tab-pane fade shadow rounded bg-white p-5"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <h4 className="font-italic mb-4">{t("v48")}</h4>
                  <p>{t("v49")}</p>
                  <p>{t("v50")}</p>
                </div>
                
                <div
                  className="tab-pane fade shadow rounded bg-white p-5"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  <h4 className="font-italic mb-4">{t("v51")}</h4>
                  
                  
                  <p>{t("v52")}</p>
                  <p>{t("v53")}</p>
                  <p>{t("v54")}</p>
                  <p>{t("v55")}</p>

                  <div className="row justify-content-center">
                    <ul className="col-lg-5">
                      <li> {t("v56")}</li>
                      <li> {t("v57")}</li>
                      <li>{t("v58")}</li>
                      <li> {t("v59")}</li>
                      <li>{t("v60")}</li>
                      <li>{t("v61")}</li>
                      <li> {t("v62")}</li>
                    </ul>
                   
                    <ul className="col-lg-5">
                      <li> {t("v63")}</li>
                      <li> {t("v64")}</li>
                      <li> {t("v65")}</li>
                      <li> {t("v66")}</li>
                      <li> {t("v67")} </li>
                      <li> {t("v68")}</li>
                    </ul>
                  </div>
                </div>
                
                <div
                  className="tab-pane fade shadow rounded bg-white p-5"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  <h4 className="font-italic mb-4"> {t("v70")}</h4>
                  {/* <p>{t("v70")}</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Training;
