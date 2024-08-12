import React from "react";

// Third party i18next
import { useTranslation } from "react-i18next";

// Common Component
import CarouselFadeExample from "../Carousel/carousel";
// {/* Rumeno farm  */}
// {/* Rumeno */}
// {/* Veterinary */}
const FooterTop = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="section-footer-head">
        <div className="container bg-primary footer-header rounded">
          <div className="row py-4 justify-content-evenly">
            <div className="col-sm-9 d-flex align-items-center">
              <h2 className=" ms-2">{t("v71")}</h2>
            </div>
            <div className="col-sm-2 ">
              <CarouselFadeExample />
            </div>
          </div>
        </div>
        {/* Rumeno farm  */}
        {/* Rumeno */}
        {/* Veterinary */}
      </section>
    </>
  );
};

export default FooterTop;
