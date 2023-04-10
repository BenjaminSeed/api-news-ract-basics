import img2 from "../assets/BBC_News_logo.svg";
import React, { useState } from "react";
import "./News.css";
import "./NewsList.css";

const BbcNews = ({ title, link, description, image_url }) => {
  const [readMore, setReadMore] = useState(false);
  console.log(description.substring(0, 10));
  return (
    <div>
      <main className="news-container">
        <h2>{title}</h2>
        <img
          src={image_url ? image_url : img2}
          alt={title}
          className="bbc-img"
        />
        <p>
          {readMore ? description : `${description.substring(0, 200)}...`}{" "}
          <button
            className="btn"
            type="button"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "show more"}
          </button>{" "}
        </p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Visit Site
        </a>
      </main>
    </div>
  );
};

export default BbcNews;
