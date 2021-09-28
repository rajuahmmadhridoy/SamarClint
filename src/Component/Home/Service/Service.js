import React, { useState } from "react";
import hoverBg1 from "../../../images/hoverBg1.png";
import hoverBg2 from "../../../images/hoverBg2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from '../../Styles/Service.module.css'
import { Link } from "react-router-dom";
const Service = ({ data,index }) => {
  const { title, description, dotimg1, icon, bgColor } = data;
  const [active, setActive] = useState(1)
  console.log(active)
  return (
    <div className="col-md-4">
      <div onMouseEnter={()=> setActive(index)} className={`${style.serviceItems} ${active == index ? style.active : ''}`}>
        <div className={`${style.icon}`} style={{background:bgColor}}>
          <Link><FontAwesomeIcon icon={icon} /></Link>
          <img className={style.iconImg} src={dotimg1} alt="" />
        </div>
        <div className={style.serviceContent}>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <div className={style.serviceItemsHoverImg1}>
          <img src={hoverBg1} alt="" />
        </div>
        <div className={style.serviceItemsHoverImg2}>
          <img src={hoverBg2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Service;
