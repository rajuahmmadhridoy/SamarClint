import React from "react";
import { Link } from "react-router-dom";
import { team } from "../../Data/Team";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../../Styles/Team.module.css";
const Team = () => {
  return (
    <section>
      <div className="container marginTop100">
        <div className="titleBtn text-center">
          <p>TEAM</p>
          <h3>Our Best Expertise</h3>
        </div>
        <div className="row">
          {team.map((data) => (
            <>
              <div className="col-md-4">
                <div className={style.teamItems}>
                  <img style={{width:"90%",borderRadius:'5px'}} src={data.img} alt="" />
                  <div className={`${style.teamItemsCart} d-flex align-items-center`}>
                      <div className="text">
                          <h4>{data.name}</h4>
                          <p>{data.post}</p>
                      </div>
                      <div className={style.socialIcons}>
                          <ul>
                              <li><Link><FontAwesomeIcon icon={data.iconFb} /></Link></li>
                              <li><Link><FontAwesomeIcon icon={data.iconTwiter} /></Link></li>
                              <li><Link><FontAwesomeIcon icon={data.iconInstragram} /></Link></li>
                          </ul>
                          
                      </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
