import React from "react";
import style from "../Styles/Footer.module.css";
import footerLogo from "../../images/footerLogo.png";
import { Link } from "react-router-dom";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { othersLinks, ourLinks, ourServices } from "../Data/Footer";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import FooterCol from "./FooterCol";
const Footer = () => {
  return (
    <footer className={`${style.bG}`}>
      <div className="container">
        <div className={`row ${style.footerBorder}`}>
          <div className="col-md-6 col-sm-12 marginTop50">
            <img src={footerLogo} alt="" />
          </div>
          <div className="col-md-6 col-sm-12 marginTop50">
            <div
              className={`d-flex align-items-center justify-content-between`}
            >
              <div
                className={`d-flex align-items-center ${style.footerContact}`}
              >
                <span>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </span>
                <div>
                  <p>+91 987-654-3210 </p>
                  <p>info@example.com</p>
                </div>
              </div>
              <div
                className={`d-flex align-items-center ${style.footerContact}`}
              >
                <span>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </span>
                <div>
                  <p>+91 987-654-3210 </p>
                  <p>info@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
          {/* parent component code end here */}
        <div className="row">
        <FooterCol key={1} menuTitle="About Us" >
        <div className={style.aboutContent}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam voluptatibus laudantium animi dolore ducimus sapiente,
                rerum est velit, quo praesentium nostrum officia tempora, odio
                suscipit aliquid consequuntur tempore in expedita!
              </p>
              <div className= {`${style.foterSocialLinks} d-flex align-items-center`}>
                <Link>
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link>
              <FontAwesomeIcon icon={faTwitter} /> 

            </Link>
            <Link>
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
              </div>
            </div>
        </FooterCol>
        <FooterCol key={2} menuTitle="Our Links" menuItems={ourLinks} />
        <FooterCol key={2} menuTitle="Our Services" menuItems={ourServices} />
        <FooterCol key={2} menuTitle="Others Links" menuItems={othersLinks} />
        </div>
      </div>
        <div className={`${style.copyRight} text-center`}>
            <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
        </div>
    </footer>
  );
};

export default Footer;
