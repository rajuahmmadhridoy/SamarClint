import React from "react";
import style from "../Styles/More.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
const More = () => {
  return (
    <section className={`${style.bG} marginTop100 `}>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-8 col-sm-12">
            <div className={style.moreInner}>
              <div className="titleBtn">
                <p>More With Us</p>
                <h3>You Want To Showcase Your Website In Top Join With Us</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
          <div className={style.moreBtn}>
          <button className={`Btn ${style.moreBtn}`}>
                <Link> <span><FontAwesomeIcon icon={faAngleRight} /></span>Learn More</Link>
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default More;
