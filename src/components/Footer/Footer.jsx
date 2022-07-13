import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import WhatsApp from "@iconscout/react-unicons/icons/uil-whatsapp";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Email from "@iconscout/react-unicons/icons/uil-envelope";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Rizki191220@gmail.com</span>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <WhatsApp color="white" size={"3rem"} />
          <LinkedIn color="white" size={"3rem"} />
          <Email color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
