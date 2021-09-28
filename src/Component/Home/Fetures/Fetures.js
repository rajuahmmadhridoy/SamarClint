import React from "react";
import { fetures } from "../../Data/Fetures.js";
import style from "../../Styles/Fetures.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import featuresImg from "../../../images/featuresImg.png";
const Fetures = () => {
  return (
    <div className="container marginTop100">
      <div className="row">
        <div className="col-md-6">
          <div className="titleBtn">
            <p>Fetures</p>
            <h3>Our Working Process To Help Your Boost Your Business</h3>
          </div>
          <div className={style.featureItemsContainer}>
            {fetures.map((data) => (
              <div className={style.featureItems}>
                <div className={`d-flex align-items-center`}>
                  <div className={style.feturesIcon}>
                    <img src={data.bg} alt="" />
                    <Link>
                      <FontAwesomeIcon icon={data.icon} />
                    </Link>
                  </div>
                  <div>
                    <h4>{data.title}</h4>
                    <p>{data.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-6">
          <img style={{ width:"100%",marginTop:"180px" }} src={featuresImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Fetures;
