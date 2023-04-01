import React, { useState } from "react";

const NewsList = ({ title, link, content }) => {
  const [readMore, setReadMore] = useState(false);
  console.log(content.substring(0, 10));
  return (
    <div>
      <h2>{title}</h2>
      <p>
        {readMore ? content : `${content.substring(0, 200)}...`}{" "}
        <button type="button" onClick={() => setReadMore(!readMore)}>
          {readMore ? "show less" : "show more"}
        </button>{" "}
      </p>
      <a href={link}>{link}</a>
    </div>
  );
};

export default NewsList;
