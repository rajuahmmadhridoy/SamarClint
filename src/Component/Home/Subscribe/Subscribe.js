import React from "react";
import style from "../../Styles/Subscribe.module.css";
import subscribeImg from "../../../images/subscribeImg.png";
const Subscribe = () => {
  return (
    <section className={`${style.bG} marginTop100`}>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 col-sm-12 marginTop50">
            <img className={style.subscribeImg} src={subscribeImg} alt="" />
          </div>
          <div className="col-md-6 col-sm-12 marginTop50">
            <div className={style.subscribeContent}>
                <p>Newsletter</p>
              <h3>
                Subscribe To Our Newsletter For Latest Update Of Finanical
                Services
              </h3>
              <p>Curabitur eleifend nibh sit amet ex posuere, vel malesuada turpis pretium. Quisque et tincidunt risus, a tempor massa. Cras tempor egestas libero, eu laoreet enim pharetra non.z</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
