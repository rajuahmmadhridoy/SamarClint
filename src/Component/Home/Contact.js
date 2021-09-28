import React from "react";
import style from "../Styles/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faAngleRight } from "@fortawesome/free-solid-svg-icons";
import contactImg from "../../images/contactImg.png";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className={` marginTop100 `}>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="titleBtn">
              <p>Contact Us</p>
              <h3>
                We Love To Help Great Companies To Enlarge Their Revenues.
              </h3>
            </div>
            {/* form */}
            <form action="">
              <div className="row marginTop50">
                <div className="col-md-6">
                  <div className={style.inputGroup}>
                    <div className={style.inputGroupIcon}>
                      <span>
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                    </div>
                    <input placeholder="Your name" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={style.inputGroup}>
                    <div className={style.inputGroupIcon}>
                      <span>
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                    </div>
                    <input placeholder="Your name" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={style.inputGroup}>
                    <div className={style.inputGroupIcon}>
                      <span>
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                    </div>
                    <input placeholder="Your name" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={style.inputGroup}>
                    <div className={style.inputGroupIcon}>
                      <span>
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                    </div>
                    <select name="" placeholder="choice" id="">
                      <option value="">raju</option>
                      <option value="">ahmmad</option>
                    </select>
                  </div>
                </div>
                <div className={style.inputGroup}>
                  <div className={style.inputGroupIcon}>
                    <span className="ps-2">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                  </div>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
              </div>
              <button className="Btn">
                  <Link> <span><FontAwesomeIcon icon={faAngleRight} /></span>Submit Now</Link>
              </button>
            </form>
            {/* form end */}
          </div>
          <div className="col-md-5">
            <img className={style.contactImg} src={contactImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
