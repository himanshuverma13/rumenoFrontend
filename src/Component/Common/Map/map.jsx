import React from "react";
// import GoogleMapReact from "google-map-react";

const GoogleMap = () => {
  return (
    <div className="h-100">
      <iframe title="unique" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9386.246714403482!2d80.94632178408278!3d26.82813556144555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfcf919137107%3A0xaafc9fdde5fc4bdc!2sRumeno%20Farmotech%20%7C%20Animal%20Feed%20Manufacturer%20in%20Lucknow!5e0!3m2!1sen!2sin!4v1713937138780!5m2!1sen!2sin"
      className="w-100 h-100"
        allowFullScreen=""
         loading="lazy"
         referrerPolicy="no-referrer-when-downgrade">

         </iframe>
    </div>
  );
};

export default GoogleMap;