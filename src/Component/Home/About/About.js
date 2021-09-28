import React from 'react';
import images from '../../../images/img4.png'
import style from '../../Styles/About.module.css'
import {Link} from  'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
const About = () => {
    return (
        <div className={`container marginTop100`}>
            <div className="row">
                <div className="col-md-6">
                    <img className={style.aboutImg} src={images} alt="" />
                </div>
                <div className="col-md-6">
                <div className={`titleBtn ${style.title}`}>
                    <p>About Us</p>
                    <h3>How We Can Help You Achieve Your Business Goal</h3>
                </div>
                    <div className={style.innerContent}>
                    <p>Integer pretium molestie nisl, non blandit lectus suscipit in. Vivamus tellus diam, iaculis eget nulla sit amet, tincidunt consectetur sem. Suspendisse laoreet, quam sed faucibus feugiat, tortor velit suscipit orci, sed consectetur ante eros id urna. Mauris luctus nulla ut pharetra tempor.</p>
                    <p>Mauris egestas eleifend sapien eu malesuada. Phasellus at metus eget sapien tristique accumsan non sit amet augue.</p>
                    <h4>CEO Jhone Doe</h4>
                    <button className="Btn">
                        <Link> <span><FontAwesomeIcon icon={faAngleRight} /></span>Learn More</Link>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;