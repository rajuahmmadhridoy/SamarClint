import React from 'react';
import style from '../../../Styles/HeaderMain.module.css'
import media1  from '../../../../images/media1.png'
import media2  from '../../../../images/media2.png'
import {Link} from  'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
const HeaderMain = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className={style.content}>
                        <p>WE CREATE IDEAS</p>
                        <h2>Build Stunning <span> Website</span> With Slack Agency</h2>
                        <h4>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus.</h4>
                        <button className="Btn">
                        <Link> <span><FontAwesomeIcon icon={faAngleRight} /></span>Learn More</Link>
                        </button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={style.mediaBox}>
                        <img className={style.move1} src={media1} alt="" />
                        <img className={style.move2} src={media2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;