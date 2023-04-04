import React from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import BbcNewsList from "./BbcNewsList";
import "./News.css";

const url2 = import.meta.env.VITE_BBC_API_KEY;

const BbcNews = () => {
  const [bbcNews, setBbcNews] = useState([]);

  useEffect(() => {
    axios
      .get(url2)
      .then((res) => {
        setBbcNews(res.data.results);
      })
      .catch((err) => console.log("error", err));
  }, []);

  const id = nanoid();

  return (
    <div className="news-container">
      <div>
        <h1>bbc</h1>
        {bbcNews.map((bbc) => {
          const { title, description, link, image_url } = bbc;
          return (
            <BbcNewsList
              title={title}
              link={link}
              description={description}
              image_url={image_url}
              key={nanoid()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BbcNews;
