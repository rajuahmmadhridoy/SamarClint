import React, { useState } from "react";
import style from "../../Styles/Pricing.module.css"
import { pricing } from "../../Data/Pricing";

const Pricing = () => {
    const [active, setActive] = useState(1)
    // console.log(active)
  return (
    <section>
      <div className="container marginTop100">
        <div className="text-center marginBottom50">
          <p>PRICING</p>
          <h3>CHOOSE PLAN</h3>
        </div>
        <div className="row">
            {
                pricing.map((data,index) => 
                    <div className="col-md-4">
                     <div onMouseEnter={()=> setActive(index)} className={`${style.pricingInner} ${active == index ? style.active : ''}`}>
                         <h4>{data.title}</h4>
                         <h4>{data.price}<span>/Month</span></h4>
                         <p>{data.description}</p>
                         <h5>{data.service1}</h5>
                         <h5>{data.service2}</h5>
                         <h5>{data.service3}</h5>
                         <h5>{data.service4}</h5>
                         <h5>{data.service5}</h5>
                         <h5>{data.analysis}</h5>
                         <button>start now</button>
                     </div>
                 </div>                   
                )
            }
        </div>
      </div>
    </section>
  );
};

export default Pricing;
