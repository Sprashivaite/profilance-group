import React, { useEffect } from "react";
import { TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import "./styles.sass";

import { NewsItem } from "../../components/NewsItem";
import { NewsModal } from "../../components/NewsModal";
import { approveNews, rejectNews } from "../../store/newsReducer";
import { getFilteredNews } from "../../store/filteredNewsReducer";

export const NewsPage = () => {
  const { isAuthorized, isAdmin } = useSelector((state) => state.userReducer);
  const news = useSelector((state) => state.newsReducer);
  const filteredNews = useSelector((state) => state.filteredNewsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilteredNews({ value: null, news }));
  }, [news]);

  return (
    <div className="news-page">
      <div className="news-page__toolbar-container">
        <TextField
          placeholder="Поиск"
          onChange={(event) =>
            dispatch(getFilteredNews({ value: event.target.value, news }))
          }
          className="news-page__search"
        />
        {isAuthorized && <NewsModal className="news-page__add-button" />}
      </div>
      <div className="news-page__news-container">
        {filteredNews.map((news) => (
          <NewsItem
            key={news.id}
            title={news.title}
            body={news.body}
            date={news.date}
            approved={news.approved}
            onApprove={() => dispatch(approveNews(news.id))}
            onReject={() => dispatch(rejectNews(news.id))}
            isAdmin={isAdmin}
            isAuthorized={isAuthorized}
          />
        ))}
      </div>
    </div>
  );
};
