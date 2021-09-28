import React from 'react';
import style from '../../Styles/Services.module.css'
import {serviceData} from '../../Data/Service.js'
import Service from '../Service/Service';
const Services = () => {
    return (
           <div className="container marginTop100">
               <div className={`titleBtn text-center`}>
                   <p>Services</p>
                   <h3 className="marginBottom100">Provide Awesome Service To You</h3>
                   <div className="row">
                       {
                           serviceData.map((data,index )=> <Service index={index} data={data} />)
                       }
                   </div>
               </div>
           </div>
    );
};

export default Services;