import React from "react";
import axios from "axios";
import NewsList from "./NewsList";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";

// const apiKey = import.meta.env.REACT_APP_NEWS_API_KEY;

const url =
  "https://newsdata.io/api/1/news?apikey=pub_1988571b251a34e1fbf266ae27a02805fb6e9&country=gb,us";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setNews(res.data.results);
        console.log(res.data);
      })
      .catch((err) => console.log("error", err));
  }, []);

  const id = nanoid();

  return (
    <div>
      {news.map((story) => {
        const { title, content, link } = story;
        return (
          <NewsList
            title={title}
            link={link}
            content={content}
            key={nanoid()}
          />
        );
      })}
    </div>
  );
};

export default News;
