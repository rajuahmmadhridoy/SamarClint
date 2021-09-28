import React from "react";
import { blog } from "../Data/Blog";
import { Link } from "react-router-dom";
import style from "../Styles/Blog.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Blog = () => {
  return (
    <section className={`marginTop100 `}>
      <div className="container">
        <div className="titleBtn text-center marginBottom50">
          <p>Blog</p>
          <h3>Latest Blog & News</h3>
        </div>
        <div className="row">
          {blog.map((data) => (
            <div className="col-md-4 col-sm-12">
              <div className={style.blogInner}>
                <img src={data.img} alt="" />
                <div className={style.blogContent}>
                  <h4>{data.title}</h4>
                  <p>{data.description}</p>
                  <div className={`d-flex justify-content-around ${style.blogFooter}`}>
                    <div className={style.blogFooterLeft}><p><FontAwesomeIcon icon={data.clock} /><span>7 March 2020</span></p></div>
                    <div className={style.blogFooterRight}><p><span><FontAwesomeIcon icon={data.commment} /></span><span>7</span><span><FontAwesomeIcon icon={data.share} /></span></p>
                    <div className={style.shareHover}>
                     <div className="d-flex justify-content-around align-items-center">
                        <Link>
                          <FontAwesomeIcon icon={data.iconfacebook} />
                        </Link>
                        <Link>
                          <FontAwesomeIcon icon={data.icontwitter} />
                        </Link>
                        <Link>
                          <FontAwesomeIcon icon={data.iconinstagram} />
                        </Link>
                    </div>
                     </div>
                    </div>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
