import React, { useState } from "react";
import img1 from "../assets/depositphotos_2605601-stock-photo-latest-news.jpg";
import "./NewsList.css";

const NewsList = ({ title, link, content, image_url }) => {
  const [readMore, setReadMore] = useState(false);
  console.log(content.substring(0, 10));
  return (
    <div>
      <main className="news-card">
        <h2>{title}</h2>
        <img
          src={image_url ? image_url : img1}
          alt={title}
          className="news-image"
        />
        <p>
          {readMore ? content : `${content.substring(0, 200)}...`}{" "}
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

export default NewsList;
