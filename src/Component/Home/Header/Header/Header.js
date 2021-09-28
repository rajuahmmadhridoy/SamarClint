import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavBar from '../NavBar/NavBar.js'
import style from '../../../Styles/Header.module.css'
import headerMain1 from '../../../../images/headerMain2.png'
import headermain2 from '../../../../images/headermain1.png'
const Header = () => {
    return (
        <div className={style.bg}>
            <img src={headerMain1} alt="" className={style.img1} />
            <img src={headermain2} alt="" className={style.img2} />
            <NavBar />
            <HeaderMain />
        </div>
    );
};

export default Header;