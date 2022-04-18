import React, { useState } from "react";
import { TextField } from "@mui/material";

import { NewsItem } from "../../components/NewsItem";
import data from "../../data";

export const NewsPage = () => {
  const newsData = data.news;
  const [news, setNews] = useState(newsData);
  const filterNews = (value) => {
    const regExp = new RegExp(value, "gi");
    const filteredNews = newsData.filter(
      (news) => news.body.match(regExp) || news.title.match(regExp)
    );
    setNews(filteredNews);
  };
  return (
    <>
      <TextField onChange={(event) => filterNews(event.target.value)} />
      {news.map((news) => (
        <NewsItem
          key={news.id}
          title={news.title}
          body={news.body}
          date={Date.now()}
        />
      ))}
    </>
  );
};
