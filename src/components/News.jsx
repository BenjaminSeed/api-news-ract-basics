import React from "react";
import axios from "axios";
import NewsList from "./NewsList";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import "./News.css";

const url = import.meta.env.VITE_NEWS_API_KEY;
// create the same as above but use the politics API and change variable name

const News = () => {
  const [news, setNews] = useState([]);
  // create a new state [politics, setPolitics] = useState([])

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setNews(res.data.results);
        console.log(res.data);
      })
      .catch((err) => console.log("error", err));

    //   axios
    //   .get(POLITICS URL)
    //   .then((res) => {
    //     setNews(res.data.results);
    //     console.log(res.data);
    //   })
    //   .catch((err) => console.log("error", err));
  }, []);

  const id = nanoid();
  // BELOW NEED TO ADD REACT ROUTER DOM INCLUDE A HOME AND POLITICS PAGE
  // CREATE IT AS A <UL> THEN <LI> USE THE <NAV> EXPRESSION
  // INCLUDE ROUTE AND SWITCH?
  return (
    <div className="news-container">
      <h1>news</h1>
      {news.map((story) => {
        const { title, content, link, image_url } = story;
        return (
          <NewsList
            title={title}
            link={link}
            content={content}
            image_url={image_url}
            key={nanoid()}
          />
        );
      })}
    </div>
  );
};

export default News;
