import React from 'react';
import {Link} from  'react-router-dom'
import style from '../../../Styles/NavBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import logo from '../../../../images/logo.png'
const NavBar = () => {
    return (
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-md-2">
                    <div className={style.logo}>
                        <Link><img src={logo} alt="" /></Link>
                    </div>
                </div>
                <div className="col-md-7">
                    <nav>
                        <ul className={style.main}>
                            <li><Link>Home</Link></li>
                            <li><Link>Pages</Link></li>
                            <li><Link>Services</Link></li>
                           <li> <Link>Blog</Link></li>
                           <li><Link>Contact Us</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-md-3">
                    <button className={`${style.navBtn} Btn`}>
                        <Link> <span><FontAwesomeIcon icon={faAngleRight} /></span> Get A Quote</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;