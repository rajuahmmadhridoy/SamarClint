import React from "react";
import style from "../../Styles/CounterDis.module.css";
import {Link} from  'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from 'react-countup';
const CounterDis = ({ data }) => {
  const { title, number, bgColor, icon ,marginTop,shadow} = data;
  return (
    <div className="col-md-3">
      <div className={`${style.CounterDisInner} text-center`} style={{marginTop:marginTop}}>
        <div className={style.icon} style={{background:bgColor,boxShadow:shadow}}>
          <Link><FontAwesomeIcon icon={icon} /></Link>
        </div>
        <p>{title}</p>
        <h3>
          <CountUp
          
          end={number}
          duration={5}

          
          />
        </h3>
      </div>
    </div>
  );
};

export default CounterDis;
