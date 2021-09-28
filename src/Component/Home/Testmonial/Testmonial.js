import React from "react";
import style from "../../Styles/Testmonial.module.css";
import { testmonial } from "../../Data/Testmonial";

const Testmonial = () => {
  return (
    <section className={`${style.bG} marginTop100 `}>
      <div className={`container`}>
        <div className="row align-items-center">
          <div className="col-md-9">
            <div className="row">
              {testmonial.map((data) => (
                <div className="col-md-4">
                  <div className={`${style.testmonialSliderInner}`}>
                    <p>{data.description}</p>
                    <div className={`d-flex`}>
                      <img
                        className={style.testmonialPersonImg}
                        src={data.img}
                        alt=""
                      />
                      <div className="testimonialPersonData">
                        <h5>{data.name}</h5>
                        <p>{data.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-3">
              <div className={`${style.testmonialSideContent} titleBtn`}>
                <p>Testmonial</p>
                <h3>See What Are They Say About Us</h3>
                <p>
                  Fusce vitae sapien eu mauris semper faucibus eget tristique
                  lorem.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testmonial;
