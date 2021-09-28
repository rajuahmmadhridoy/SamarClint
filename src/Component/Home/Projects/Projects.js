import React, { useEffect, useState } from "react";
import style from "../../Styles/Projects.module.css";
import { Project } from "../../Data/Projects.js";
const Projects = () => {
  const [category, setCategory] = useState("all");
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const matchProduct = Project.filter((data) => data.category === category);
    setProduct(matchProduct);
  }, [category]);
  return (
    <div className="container">
      <div className="text-center titleBtn marginTop100">
        <p>Projects</p>
        <h3>Take A Look At Our Latest Portfolio</h3>
      </div>
     <div className="d-flex justify-content-center marginTop50">
     <nav>
        <ul className={style.project}>
          <li><button className={category == 'all' ? style.active : ''} onClick={() => setCategory("all")}>All</button></li>
          <li><button className={category == 'webDesign' ? style.active : ''} onClick={() => setCategory("webDesign")}>Web Design</button></li>
          <li><button className={category == 'webDevelopment' ? style.active : ''} onClick={() => setCategory("webDevelopment")}> Web Development</button></li>
          <li><button className={category == 'branding' ? style.active : ''} onClick={() => setCategory("branding")}>Branding</button></li>
          <li><button className={category == 'mobileApp' ? style.active : ''} onClick={() => setCategory("mobileApp")}>Mobile App</button></li>
          <li><button className={category == 'seo' ? style.active : ''} onClick={() => setCategory("seo")}>Seo</button></li>
        </ul>
      </nav>
          </div>
      <div className="row">
      {product.map((pd) => (
           <div className="col-md-4 marginTop50">
              <img style={{height:"90%",width:"100%"}} src={pd.img} alt="" />
            </div>
           ))}
      </div>
    </div>
  );
};

export default Projects;
