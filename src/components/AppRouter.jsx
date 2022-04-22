import { Route, Routes, Link } from "react-router-dom";

import { NEWS_URL } from "../consts";
import { MainPage } from "../pages/MainPage";
import ErrorBoundary from "./ErrorBoundary";
import { NewsPage } from "../pages/NewsPage";
import { Header } from "./Header";

export const AppRouter = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<MainPage />} />
          <Route path={NEWS_URL} element={<NewsPage />} />
          <Route
            path="*"
            element={<Link to="/">Вернуться на главную страницу</Link>}
          />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
};
