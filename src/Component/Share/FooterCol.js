import React from 'react';
import { Link } from 'react-router-dom';
import style from'../Styles/FooterCol.module.css'
const FooterCol = (props) => {
    return (
       <div className="col-md-3">
            <h6 className={style.FooterColTitle}>{props.menuTitle ? props.menuTitle : " "}</h6>
                {props.children && props.children}
            <ul className={style.FooterColItems}>
                 {
                     props.menuItems && props.menuItems.map((item, index) => <li key={index}><Link >{item.title}</Link></li>)
                 }
            </ul>
       </div>
    );
};

export default FooterCol;