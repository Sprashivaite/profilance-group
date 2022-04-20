import React from "react";
import { TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import "./styles.sass";

import { NewsItem } from "../../components/NewsItem";
import { NewsModal } from "../../components/NewsModal";
import { approveNews, rejectNews } from "../../store/newsReducer";

export const NewsPage = () => {
  const userState = useSelector((state) => state.userReducer);
  const newsState = useSelector((state) => state.newsReducer);
  const dispatch = useDispatch();

  const filterNews = (value) => {
    const regExp = new RegExp(value, "gi");
    const filteredNews = newsState.filter(
      (news) => news.body.match(regExp) || news.title.match(regExp)
    );
    // setNews(filteredNews);
  };

  return (
    <div className="news-page">
      <div className="news-page__toolbar-container">
        <TextField
          placeholder="Поиск"
          onChange={(event) => filterNews(event.target.value)}
          className="news-page__search"
        />
        {userState.isAuthorized && (
          <NewsModal className="news-page__add-button" />
        )}
      </div>
      <div className="news-page__news-container">
        {newsState.map((news) => (
          <NewsItem
            key={news.id}
            title={news.title}
            body={news.body}
            date={Date.now()}
            approved={news.approved}
            onApprove={() => dispatch(approveNews(news.id))}
            onReject={() => dispatch(rejectNews(news.id))}
            isAdmin={userState.isAdmin}
            isAuthorized={userState.isAuthorized}
          />
        ))}
      </div>
    </div>
  );
};
