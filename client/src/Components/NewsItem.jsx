import React from "react";
import image from "../assets/news.jpg";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3  d-inline-block  mx-3 my-3 px-2 py-2 align-items-center"
      style={{ width: "345px" }}
    >
      <img
        src={src ? src : image}
        style={{ height: "200px", width: "100%" }}
        className="card-img-top  "
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title ">{title.slice(0, 60)} </h5>
        <p className="card-text fs-10">
          {description
            ? description.slice(0, 100)
            : " Overview located in Malaysia, with over 452 outlets across the country. The company was formed i"}
        </p>
        <a href={url} className="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
